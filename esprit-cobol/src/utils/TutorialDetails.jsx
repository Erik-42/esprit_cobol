import React from "react";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import tutorialsData from "../../assets/data/tutorials.json";
import "./TutorialDetails.scss"; // Ajouter un fichier de styles si nécessaire

export default function TutorialDetails() {
	const { id } = useParams(); // Récupère l'id depuis l'URL
	const tutorial = tutorialsData.find((item) => item.id === parseInt(id)); // Trouve le tutoriel correspondant

	if (!tutorial) {
		return <div>Erreur 404 : Tutoriel introuvable</div>; // Affiche une erreur si le tutoriel n'existe pas
	}

	return (
		<div className='tutorial-details-container'>
			<header>
				<h1>{tutorial.title}</h1>
				<p>{tutorial.description}</p>
			</header>
			<section className='tutorial-content'>
				<div className='code-example'>
					<h3>Exemple de code :</h3>
					<SyntaxHighlighter language='cobol' style={darcula}>
						{tutorial.codeExample}
					</SyntaxHighlighter>
				</div>
				<img
					src={tutorial.image}
					alt={`Exemple du tutoriel ${tutorial.title}`}
					className='tutorial-image'
				/>
			</section>
		</div>
	);
}
