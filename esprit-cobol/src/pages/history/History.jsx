// import React from "react";
// import "./history.scss";
// import historyData from "../../assets/data/history.json";
// import Button from "../../components/elements/button/button";

// export default function Hystory() {
// 	document.addEventListener("DOMContentLoaded", () => {
// 		const learnMoreButton = document.getElementById("learnMore");

// 		learnMoreButton.addEventListener("click", () => {
// 			alert(
// 				"Bienvenue dans le monde COBOL : Un langage intemporel pour des solutions fiables !"
// 			);
// 		});

// 		// Animation dynamique au chargement
// 		const headerTitle = document.querySelector("header h1");
// 		headerTitle.style.opacity = "0";
// 		headerTitle.style.transform = "translateY(-50px)";

// 		setTimeout(() => {
// 			headerTitle.style.transition = "opacity 1s, transform 1s";
// 			headerTitle.style.opacity = "1";
// 			headerTitle.style.transform = "translateY(0)";
// 		}, 300);
// 	});
// 	return (
// 		<>
// 			<section id='histoire'>
// 				<h2>Histoire du COBOL</h2>
// 				<p>
// 					Le COBOL a vu le jour en 1959 pour répondre aux besoins des
// 					entreprises en gestion informatique.
// 				</p>
// 			</section>
// 			<section id='pourquoi-comment'>
// 				<h2>Pourquoi et comment ?</h2>
// 				<p>
// 					Découvrez pourquoi COBOL reste pertinent et comment il continue d’être
// 					utilisé dans des systèmes critiques.
// 				</p>
// 			</section>
// 			<section id='ressemble'>
// 				<h2>À quoi ça ressemble ?</h2>
// 				<p>
// 					Exemple : COBOL est un langage structuré et verbeux. Voici une syntaxe
// 					typique.
// 				</p>
// 			</section>
// 			<section className='sections'>
// 				{historyData.map((history) => (
// 					<div key={history.id} className='history'>
// 						<h2>{history.title}</h2>
// 						<p>{history.description}</p>
// 					</div>
// 				))}
// 			</section>
// 			<section className='NavBtn'>
// 				<Button
// 					label='Retour'
// 					className='prevBtn'
// 					onClick={() => console.log("Vers la page précédente")}
// 				/>
// 				<Button
// 					label='Suite'
// 					className='nextBtn'
// 					onClick={() => console.log("Vers la page suivante")}
// 				/>
// 			</section>
// 		</>
// 	);
// }

import React, { useState } from "react";
import "./history.scss";
import historyData from "../../assets/data/history.json";
import Button from "../../components/elements/button/button";

export default function History() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const goToNext = () => {
		if (currentIndex < historyData.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<>
			<section id='histoire'>
				<h2>{historyData[currentIndex].title}</h2>
				<h3>{historyData[currentIndex].subTitle}</h3>
				<p>{historyData[currentIndex].intro}</p>
				<p>{historyData[currentIndex].article}</p>
				<p>{historyData[currentIndex].conclusions}</p>
				<p>{historyData[currentIndex].fin}</p>
			</section>

			<section className='NavBtn'>
				{currentIndex > 0 && (
					<Button label='Retour' className='prevBtn' onClick={goToPrevious} />
				)}
				{currentIndex < historyData.length - 1 && (
					<Button label='Suite' className='nextBtn' onClick={goToNext} />
				)}
			</section>
		</>
	);
}
