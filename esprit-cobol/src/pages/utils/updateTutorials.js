const fs = require("fs");
const path = require("path");

// Chemins vers le dossier des exercices et le fichier JSON
const tutorialsDir = path.join(__dirname, "src/pages/tutorials");
const tutorialsFile = path.join(__dirname, "src/assets/data/tutorials.json");

// Fonction principale
function updateTutorialsJSON() {
	if (!fs.existsSync(tutorialsDir)) {
		console.error(`Le dossier ${tutorialsDir} n'existe pas.`);
		return;
	}

	const tutorialEntries = [];

	// Lire tous les dossiers dans le répertoire des exercices
	const exerciseFolders = fs
		.readdirSync(tutorialsDir)
		.filter((folder) => folder.startsWith("exercice"));

	// Créer une entrée pour chaque dossier
	exerciseFolders.forEach((folder) => {
		const exerciseId = parseInt(folder.replace("exercice", ""), 10);
		const imagePath = `../img/exercices/${folder}/perform_add.gif`;
		const linkPath = `/tutorial/${folder}`;

		tutorialEntries.push({
			id: exerciseId,
			image: imagePath,
			title: `Introduction au COBOL - Exercice ${exerciseId}`,
			description: `Apprenez les concepts de COBOL dans cet exercice ${exerciseId}.`,
			codeExample:
				"IDENTIFICATION DIVISION.\nPROGRAM-ID. HelloWorld.\nPROCEDURE DIVISION.\n    DISPLAY 'Hello, COBOL World!'.\n    STOP RUN.",
			link: linkPath,
		});
	});

	// Trier par ID
	tutorialEntries.sort((a, b) => a.id - b.id);

	// Écrire dans le fichier JSON
	fs.writeFileSync(
		tutorialsFile,
		JSON.stringify(tutorialEntries, null, 2),
		"utf-8"
	);
	console.log("Fichier tutorials.json mis à jour avec succès.");
}

// Exécuter la fonction
updateTutorialsJSON();
