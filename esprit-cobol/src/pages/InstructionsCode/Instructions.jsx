import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./instructions.scss";
import instructionsData from "../../assets/data/instructions.json";
import Button from "../../components/elements/button/button";

export default function Instructions() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		if (currentIndex < instructionsData.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const { title, subTitle, intro, article, conclusions, fin } =
		instructionsData[currentIndex];

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
		<div className='instructions-container'>
			<header>
				<h1>{title}</h1>
			</header>
			<section className='instructions'>
				{subTitle && <h2>{subTitle}</h2>}

				{/* Rend l'introduction en Markdown */}
				{intro && (
					<ReactMarkdown components={renderCodeBlock}>{intro}</ReactMarkdown>
				)}

				{/* Rend l'article en Markdown */}
				{article && (
					<ReactMarkdown components={renderCodeBlock}>{article}</ReactMarkdown>
				)}

				{/* Rend les conclusions en Markdown */}
				{conclusions && (
					<ReactMarkdown components={renderCodeBlock}>
						{conclusions}
					</ReactMarkdown>
				)}
				{/* Rend la fin en Markdown */}
				{fin && (
					<ReactMarkdown components={renderCodeBlock}>{fin}</ReactMarkdown>
				)}
			</section>
			<section className='NavInstructionssBtn'>
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
					disabled={currentIndex === instructionsData.length - 1}
				/>
			</section>
		</div>
	);
}
