import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./exercice3.scss";
import Button from "../../../components/elements/button/button";
import tutorialsData from "../../../assets/data/tutorials.json"; // Si vous utilisez un fichier JSON pour les tutoriels

export default function Exercice3() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Fonction pour naviguer vers le tutoriel suivant
	const handleNext = () => {
		if (currentIndex < tutorialsData.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	// Fonction pour naviguer vers le tutoriel précédent
	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	// Extraction des données du tutoriel actuel
	const { title, article, codeExample, description } =
		tutorialsData[currentIndex];

	// Fonction pour gérer les blocs de code COBOL dans ReactMarkdown
	const renderCodeBlock = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || "");
			return !inline && match ? (
				<SyntaxHighlighter
					style={darcula}
					language='cobol'
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
		<div className='exercice-container'>
			<header>
				<h1>Exercice 3{title}</h1>
				<p>{description}</p>
			</header>

			<section className='exercice-content'>
				<div className='code-section'>
					<h3>Exemple de code COBOL 3 :</h3>
					<SyntaxHighlighter language='cobol' style={darcula}>
						{codeExample}
					</SyntaxHighlighter>
				</div>

				<div className='tutorial-article'>
					<ReactMarkdown children={article} renderers={renderCodeBlock} />
				</div>
			</section>

			{/* Navigation entre les tutoriels */}
			<section className='NavTutorialsBtn'>
				<Button
					label='Précédent'
					className='prevBtn'
					onClick={handlePrev}
					disabled={currentIndex === 0}
				/>
				<Button
					label='Suivant'
					className='nextBtn'
					onClick={handleNext}
					disabled={currentIndex === tutorialsData.length - 1}
				/>
			</section>
		</div>
	);
}
