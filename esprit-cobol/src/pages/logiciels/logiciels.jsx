import React from "react";
import LogicielCard from "../../components/elements/logicielCard/LogicielCard";
import "./logiciels.scss";

const logiciels = [
	{
		name: "GnuCOBOL",
		description:
			"Un compilateur COBOL open source qui convertit le code COBOL en code C. Idéal pour les développeurs souhaitant une solution gratuite.",
		link: "https://gnucobol.sourceforge.io/",
		image: "/assets/img/logiciels/gnucobol.png",
	},
	{
		name: "OpenCobolIDE",
		description:
			"Un environnement de développement intégré (IDE) léger et facile à utiliser pour GnuCOBOL.",
		link: "https://launchpad.net/cobcide",
		image: "/assets/img/logiciels/opencobolide.png",
	},
	{
		name: "IBM Enterprise COBOL",
		description:
			"Compilateur COBOL d'entreprise utilisé pour les environnements mainframe, offrant des performances et une compatibilité exceptionnelles.",
		link: "https://www.ibm.com/products/cobol-compiler",
		image: "/assets/img/logiciels/ibm-cobol.png",
	},
	{
		name: "Micro Focus Visual COBOL",
		description:
			"Une solution professionnelle pour le développement COBOL moderne, intégrée à Visual Studio et Eclipse.",
		link: "https://www.microfocus.com/en-us/products/visual-cobol/overview",
		image: "/assets/img/logiciels/microfocus.png",
	},
	{
		name: "COBOL Extension for VS Code",
		description:
			"Une extension pour Visual Studio Code offrant des fonctionnalités comme la coloration syntaxique et la complétion de code pour le langage COBOL.",
		link: "https://marketplace.visualstudio.com/items?itemName=bitlang.cobol",
		image: "/assets/img/logiciels/vscode-cobol.png",
	},
];

export default function Logiciels() {
	return (
		<div className='logiciels'>
			<header className='logiciels__header'>
				<h1 className='logiciels__title'>IDE pour le COBOL</h1>
				<p className='logiciels__intro'>
					Les outils nécessaires pour le développement de programmes en COBOL.
				</p>
			</header>
			<section className='logiciels__list' aria-label='Liste des logiciels COBOL'>
				{logiciels.map((logiciel) => (
					<LogicielCard
						key={logiciel.name}
						name={logiciel.name}
						description={logiciel.description}
						link={logiciel.link}
						image={logiciel.image}
					/>
				))}
			</section>
		</div>
	);
}
