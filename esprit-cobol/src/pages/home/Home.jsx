import React from "react";
// import sectionsData from "../../assets/data/section.json";
import "./home.scss";
import Bases from "../bases/Bases";

const Home = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const learnMoreButton = document.getElementById("learnMore");

		learnMoreButton.addEventListener("click", () => {
			alert(
				"Bienvenue dans le monde COBOL : Un langage intemporel pour des solutions fiables !"
			);
		});

		// Animation dynamique au chargement
		const headerTitle = document.querySelector("header h1");
		headerTitle.style.opacity = "0";
		headerTitle.style.transform = "translateY(-50px)";

		setTimeout(() => {
			headerTitle.style.transition = "opacity 1s, transform 1s";
			headerTitle.style.opacity = "1";
			headerTitle.style.transform = "translateY(0)";
		}, 300);
	});

	return (
		<main>
			<h1>Bienvenue sur le site Esprit-COBOL</h1>
			<p>Un hommage moderne au légendaire langage COBOL</p>
			<p>Explorez l'univers du COBOL, un langage intemporel.</p>
			<p className='home__description'>
				Découvrez l'histoire du Cobol, son utilité, et comment il continue de
				façonner le monde de la programmation.
			</p>
			{/* <div className='sections'>
				{sectionsData.map((section) => (
					<div key={section.id} className='section'>
						<h2>{section.title}</h2>
						<p>{section.description}</p>
					</div>
				))}
			</div> */}
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

			<a className='btnLearnMore' href={Bases}>
				<button id='learnMore'>En savoir plus</button>
			</a>
		</main>
	);
};

export default Home;
