import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
	const navigate = useNavigate();

	const handleLearnMoreClick = () => {
		navigate("/history");
	};

	return (
		<main>
			<h1>Bienvenue sur Esprit-COBOL</h1>
			<p>Un hommage moderne au légendaire langage COBOL</p>
			<p>Explorez l'univers du COBOL, un langage intemporel.</p>
			<p>
				Découvrez l'histoire du COBOL, son utilité, <br />
				et comment il continue de façonner le monde de la programmation.
			</p>

			<section id='introduction'>
				<h2>Pourquoi COBOL ?</h2>
				<p>COBOL a résisté à l'épreuve du temps.</p>
				<p>
					Découvrez ses secrets et son rôle dans l'histoire de l'informatique.
				</p>
				<ul>
					<li>Confiance et stabilité</li>
					<li>Orienté gestion et finance</li>
					<li>Adaptable même après 60 ans</li>
				</ul>
			</section>

			<button
				id='learnMore'
				className='btnLearnMore'
				onClick={handleLearnMoreClick}>
				En savoir plus
			</button>
		</main>
	);
};

export default Home;
