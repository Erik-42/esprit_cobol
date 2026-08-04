import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import "./exerciseCorrection.scss";

const ExerciseCorrection = ({ code, explanation, renderCodeBlock }) => {
	if (!code && !explanation) {
		return null;
	}

	return (
		<div className='exercise-correction'>
			<h3 className='exercise-correction__title'>Correction</h3>

			{code && (
				<div className='exercise-correction__code'>
					<h4 className='exercise-correction__subtitle'>Solution</h4>
					<SyntaxHighlighter language='cobol' style={darcula}>
						{code}
					</SyntaxHighlighter>
				</div>
			)}

			{explanation && (
				<div className='exercise-correction__explanation'>
					<h4 className='exercise-correction__subtitle'>
						Explications détaillées
					</h4>
					<div className='exercise-correction__markdown'>
						<ReactMarkdown components={renderCodeBlock}>
							{explanation}
						</ReactMarkdown>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExerciseCorrection;
