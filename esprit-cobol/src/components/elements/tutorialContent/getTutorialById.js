import exercice1Md from "../../../pages/tutorials/exercice1/exercice1.md?raw";
import exercice2Md from "../../../pages/tutorials/exercice2/exercice2.md?raw";
import exercice3Md from "../../../pages/tutorials/exercice3/exercice3.md?raw";
import exercice4Md from "../../../pages/tutorials/exercice4/exercice4.md?raw";
import exercice5Md from "../../../pages/tutorials/exercice5/exercice5.md?raw";
import exercice6Md from "../../../pages/tutorials/exercice6/exercice6.md?raw";
import exercice7Md from "../../../pages/tutorials/exercice7/exercice7.md?raw";
import exercice8Md from "../../../pages/tutorials/exercice8/exercice8.md?raw";
import tutorialsDb from "../../../../db.json";

const markdownById = {
	1: exercice1Md,
	2: exercice2Md,
	3: exercice3Md,
	4: exercice4Md,
	5: exercice5Md,
	6: exercice6Md,
	7: exercice7Md,
	8: exercice8Md,
};

/**
 * Extrait le bloc de code COBOL et l'explication Markdown d'un fichier .md d'exercice.
 * @param {string} markdown
 * @returns {{ code: string, explanation: string }}
 */
export function parseExerciseMarkdown(markdown) {
	const codeMatch = markdown.match(/```cobol\s*([\s\S]*?)```/i);
	const explanationSplit = markdown.split(/<!--\s*L'expliquation\s*-->/i);

	return {
		code: codeMatch ? codeMatch[1].trim() : "",
		explanation: (explanationSplit[1] || "").trim(),
	};
}

/**
 * Retourne le tutoriel enrichi (données JSON + contenu Markdown local).
 * @param {string|number} id
 * @returns {object|null}
 */
export function getTutorialById(id) {
	const numericId = parseInt(id, 10);
	const tutorial = tutorialsDb.tutorials.find((item) => item.id === numericId);

	if (!tutorial) {
		return null;
	}

	const markdown = markdownById[numericId] || "";
	const { code, explanation } = parseExerciseMarkdown(markdown);

	return {
		...tutorial,
		detailedCode: code || tutorial.codeExample,
		explanation,
		exercise: tutorial.exercise || null,
	};
}

export function getAllTutorials() {
	return tutorialsDb.tutorials;
}
