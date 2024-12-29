import React from "react";
import "./logiciels.scss";
import Button from "../../components/elements/button/button";

export default function Logiciels() {
	const logiciels = [
		{
			name: "GnuCOBOL",
			description:
				"Un compilateur COBOL open source qui convertit le code COBOL en code C. Idéal pour les développeurs souhaitant une solution gratuite.",
			link: "https://gnucobol.sourceforge.io/",
		},
		{
			name: "OpenCobolIDE",
			description:
				"Un environnement de développement intégré (IDE) léger et facile à utiliser pour GnuCOBOL.",
			link: "https://launchpad.net/cobcide",
		},
		{
			name: "IBM Enterprise COBOL",
			description:
				"Compilateur COBOL d'entreprise utilisé pour les environnements mainframe, offrant des performances et une compatibilité exceptionnelles.",
			link: "https://www.ibm.com/products/cobol-compiler",
		},
		{
			name: "Micro Focus Visual COBOL",
			description:
				"Une solution professionnelle pour le développement COBOL moderne, intégrée à Visual Studio et Eclipse.",
			link: "https://www.microfocus.com/en-us/products/visual-cobol/overview",
		},
	];

	return (
		<div className='logiciels-container'>
			<header>
				<h1>Logiciels COBOL</h1>
				<p>
					Trouvez ici les outils nécessaires pour le développement et la
					maintenance de programmes en COBOL.
				</p>
			</header>
			<section className='logiciels-list'>
				{logiciels.map((logiciel, index) => (
					<div key={index} className='logiciel-card'>
						<h2>{logiciel.name}</h2>
						<p>{logiciel.description}</p>
						<a href={logiciel.link} target='_blank' rel='noopener noreferrer'>
							<Button label='Télécharger' className='download-btn' />
						</a>
					</div>
				))}
			</section>
		</div>
	);
}
