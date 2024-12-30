import React, { useEffect, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import tutorialsData from "../../assets/data/tutorials.json";
import "./tutorialDetails.scss";

// Fonction pour charger dynamiquement les exercices
const loadExerciseComponent = (id) => {
	try {
		return React.lazy(() =>
			import(`../pages/tutorials/exercice${id}/exercice${id}.jsx`)
		);
	} catch (error) {
		console.error("Erreur lors du chargement de l'exercice :", error);
		return null;
	}
};

export default function TutorialDetails() {
	const { id } = useParams(); // Récupère l'id depuis l'URL
	const navigate = useNavigate(); // Hook pour rediriger vers une autre page
	const tutorial = tutorialsData.find((item) => item.id === parseInt(id)); // Trouve le tutoriel correspondant

	// Charge dynamiquement l'exercice
	const ExerciseComponent = loadExerciseComponent(id);

	// Redirection si le tutoriel n'existe pas
	useEffect(() => {
		if (!tutorial) {
			navigate("/not-found"); // Redirige vers une route inexistante
		}
	}, [tutorial, navigate]);

	// Évite tout rendu avant la redirection
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
					<h3>Exemple de code :</h3>
					<SyntaxHighlighter language='cobol' style={darcula}>
						{tutorial.codeExample}
					</SyntaxHighlighter>
				</div>
				<div className='exercise-section'>
					<h3>Exercice associé :</h3>
					<Suspense fallback={<div>Chargement de l'exercice...</div>}>
						{ExerciseComponent ? (
							<ExerciseComponent />
						) : (
							<div>Exercice introuvable pour ce tutoriel.</div>
						)}
					</Suspense>
				</div>
			</section>
		</div>
	);
}
