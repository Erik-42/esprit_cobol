/**
 * Construit le contenu Markdown d'un tutoriel sans la correction.
 * @param {object} tutorial
 * @returns {string}
 */
export function buildTutorialMarkdown(tutorial) {
	const code = tutorial.detailedCode || tutorial.codeExample || "";
	const parts = [
		`# ${tutorial.title}`,
		"",
		tutorial.description || "",
		"",
		"## Le code",
		"",
		"```cobol",
		code,
		"```",
		"",
	];

	if (tutorial.explanation) {
		parts.push("## L'explication", "", tutorial.explanation, "");
	}

	if (tutorial.exercise) {
		parts.push(
			"## L'exercice",
			"",
			`### ${tutorial.exercise.title}`,
			"",
			tutorial.exercise.instructions || "",
			""
		);
	}

	parts.push("---", "", "*Export Esprit-COBOL — sans correction.*", "");
	return parts.join("\n");
}

/**
 * Télécharge un tutoriel en fichier Markdown (sans correction).
 * @param {object} tutorial
 */
export function downloadTutorialMarkdown(tutorial) {
	const content = buildTutorialMarkdown(tutorial);
	const slug = String(tutorial.title || `tutoriel-${tutorial.id}`)
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

	const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `esprit-cobol-${slug || tutorial.id}.md`;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(url);
}

/**
 * Lance l'impression du tutoriel (la correction est masquée via CSS print).
 */
export function printTutorial() {
	window.print();
}
