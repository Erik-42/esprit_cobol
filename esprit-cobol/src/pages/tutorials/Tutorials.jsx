import React from "react";
import { Link } from "react-router-dom";
import "./tutorials.scss";
import { getAllTutorials } from "../../components/elements/tutorialContent/getTutorialById";
import Button from "../../components/elements/button/button";
import images from "../utils/imagesImport";

export default function Tutorials() {
	const tutorials = getAllTutorials();

	return (
		<div className='tutorials-container'>
			<header>
				<h1>Liste des Tutoriels COBOL</h1>
				<p>Découvrez nos tutoriels pour apprendre le langage COBOL.</p>
			</header>

			<section className='tutorials-cards'>
				{tutorials.map((tutorial) => (
					<div key={tutorial.id} className='tutorial-card'>
						<img
							src={images[`exercice${tutorial.id}`]}
							alt={`Capture d'écran de ${tutorial.title}`}
							className='tutorial-image'
						/>
						<div className='tutorial-info'>
							<h3>{tutorial.title}</h3>
							<p>{tutorial.description}</p>
							<pre className='tutorial-code-preview'>{tutorial.codeExample}</pre>
							<Link to={`/tutorial/${tutorial.id}`}>
								<Button label='Voir le tutoriel' className='view-btn' />
							</Link>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
