import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./tutorials.scss";
import tutorialsData from "../../assets/data/tutorials.json"; // Chargement des données depuis le fichier JSON
import Button from "../../components/elements/button/button";
import images from "../../assets/imagesImport"; // Import des images

export default function Tutorials() {
	// Fonction pour gérer les blocs de code dans ReactMarkdown
	const renderCodeBlock = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || "");
			return !inline && match ? (
				<SyntaxHighlighter
					style={darcula}
					language={match[1]}
					PreTag='div'
					{...props}>
					{String(children).replace(/\n$/, "")}
				</SyntaxHighlighter>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			);
		},
	};

	return (
		<div className='tutorials-container'>
			<header>
				<h1>Liste des Tutoriels COBOL</h1>
				<p>Découvrez nos tutoriels pour apprendre le langage COBOL.</p>
			</header>

			{/* Affichage de la liste des tutoriels sous forme de cartes */}
			<section className='tutorials-cards'>
				{tutorialsData.map((tutorial, index) => (
					<div key={index} className='tutorial-card'>
						<img
							src={images[tutorial.image]} // Utilisation de l'import d'image dynamique
							alt={`Capture d'écran de ${tutorial.title}`}
							className='tutorial-image'
						/>
						<div className='tutorial-info'>
							<h3>{tutorial.title}</h3>
							<p>{tutorial.description}</p>
							<a href={tutorial.link} target='_blank' rel='noopener noreferrer'>
								<Button label='Voir le tutoriel' className='view-btn' />
							</a>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
