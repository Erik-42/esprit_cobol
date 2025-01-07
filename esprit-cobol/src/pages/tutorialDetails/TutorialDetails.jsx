import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import tutorialsData from "../../../db.json"; // Nouveau chemin pour db.json
import "./tutorialDetails.scss";

export default function TutorialDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [tutorial, setTutorial] = useState(null); // État pour stocker le tutoriel
	const [exerciseData, setExerciseData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Charger le tutoriel correspondant à l'ID
	useEffect(() => {
		const foundTutorial = tutorialsData.tutorials.find(
			(item) => item.id === parseInt(id)
		);

		if (!foundTutorial) {
			navigate("/not-found");
		} else {
			setTutorial(foundTutorial);
		}
	}, [id, navigate]);

	// Charger les données de l'exercice
	useEffect(() => {
		if (!tutorial) return;

		const fetchExerciseData = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/tutorials?id=${id}`
				);
				if (!response.ok) {
					throw new Error("Erreur lors du chargement de l'exercice.");
				}
				const data = await response.json();
				setExerciseData(data[0]); // On suppose que l'ID correspond à un seul exercice
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchExerciseData();
	}, [id, tutorial]);

	if (!tutorial) {
		return null;
	}

	return (
		<div className='tutorial-details-container'>
			<header>
				<h1>{tutorial.title}</h1>
				<p>{tutorial.description}</p>
			</header>
			<section className='tutorial-content'>
				<div className='code-example'>
					<h3>Le code</h3>
					<SyntaxHighlighter language='cobol' style={darcula}>
						{tutorial.codeExample}
					</SyntaxHighlighter>
				</div>
				<div className='code-explicite'>
					<h3>L'explication</h3>
					<SyntaxHighlighter language='cobol' style={darcula}>
						{tutorial.codeExplicite}
					</SyntaxHighlighter>
				</div>
				<div className='exercise-section'>
					<h3>L'exercice</h3>
					{loading ? (
						<div>Chargement de l'exercice...</div>
					) : error ? (
						<div className='error-message'>{error}</div>
					) : exerciseData ? (
						<div className='exercise-content'>
							<h4>{exerciseData.title}</h4>
							<p>{exerciseData.instructions}</p>
							<SyntaxHighlighter language='cobol' style={darcula}>
								{exerciseData.codeExample}
							</SyntaxHighlighter>
						</div>
					) : (
						<div>Exercice introuvable pour ce tutoriel.</div>
					)}
				</div>
			</section>
		</div>
	);
}
