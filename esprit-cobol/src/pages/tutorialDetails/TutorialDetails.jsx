import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getTutorialById } from "../../components/elements/tutorialContent/getTutorialById";
import Button from "../../components/elements/button/button";
import { useScrollToTop } from "../../components/elements/scrollToTop/useScrollToTop";
import "./tutorialDetails.scss";

export default function TutorialDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const tutorial = getTutorialById(id);

	useScrollToTop(id);

	useEffect(() => {
		if (!tutorial) {
			navigate("/not-found");
		}
	}, [tutorial, navigate]);

	if (!tutorial) {
		return null;
	}

	const renderCodeBlock = {
		code({ inline, className, children, ...props }) {
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
		<div className='tutorial-details'>
			<header className='tutorial-details__header'>
				<h1 className='tutorial-details__title'>{tutorial.title}</h1>
				<p className='tutorial-details__description'>{tutorial.description}</p>
			</header>

			<section className='tutorial-details__content'>
				<div className='tutorial-details__block'>
					<h2 className='tutorial-details__heading'>Le code</h2>
					<SyntaxHighlighter language='cobol' style={darcula}>
						{tutorial.detailedCode || tutorial.codeExample}
					</SyntaxHighlighter>
				</div>

				{tutorial.explanation && (
					<div className='tutorial-details__block'>
						<h2 className='tutorial-details__heading'>L'explication</h2>
						<div className='tutorial-details__markdown'>
							<ReactMarkdown components={renderCodeBlock}>
								{tutorial.explanation}
							</ReactMarkdown>
						</div>
					</div>
				)}

				{tutorial.exercise && (
					<div className='tutorial-details__block tutorial-details__block--exercise'>
						<h2 className='tutorial-details__heading'>L'exercice</h2>
						<div className='tutorial-details__exercise'>
							<h3 className='tutorial-details__exercise-title'>
								{tutorial.exercise.title}
							</h3>
							<p className='tutorial-details__exercise-instructions'>
								{tutorial.exercise.instructions}
							</p>
							<SyntaxHighlighter language='cobol' style={darcula}>
								{tutorial.exercise.codeExample}
							</SyntaxHighlighter>
						</div>
					</div>
				)}
			</section>

			<div className='tutorial-details__actions'>
				<Link to='/tutorials'>
					<Button label='Retour aux tutoriels' className='tutorial-details__back' />
				</Link>
			</div>
		</div>
	);
}
