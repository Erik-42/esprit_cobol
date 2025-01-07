import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./tutorials.scss";
import tutorialsData from "../../../db.json"; // Nouveau chemin pour db.json
import Button from "../../components/elements/button/button";
import images from "../utils/imagesImport";

export default function Tutorials() {
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

			<section className='tutorials-cards'>
				{tutorialsData.exercices.map((tutorial, index) => (
					<div key={index} className='tutorial-card'>
						<img
							src={images[`exercice${tutorial.id}`]} // Utilisation de l'ID pour référencer l'image
							alt={`Capture d'écran de ${tutorial.title}`}
							className='tutorial-image'
						/>
						<div className='tutorial-info'>
							<h3>{tutorial.title}</h3>
							<p>{tutorial.description}</p>
							<p>{tutorial.codeExample}</p>
							<Link
								to={`/tutorial/${tutorial.id}`}
								target='_blank'
								rel='noopener noreferrer'>
								<Button label='Voir le tutoriel' className='view-btn' />
							</Link>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
