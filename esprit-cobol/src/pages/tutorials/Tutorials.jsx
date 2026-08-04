import React from "react";
import { getAllTutorials } from "../../components/elements/tutorialContent/getTutorialById";
import TutorialLevelSection from "../../components/elements/tutorialLevelSection/TutorialLevelSection";
import images from "../utils/imagesImport";
import "./tutorials.scss";

const LEVELS = [
	{
		id: "niveau-debutant",
		level: "debutant",
		title: "Niveau débutant",
		subtitle: "Premiers pas : Hello World, variables et saisie clavier.",
		modifier: "tutorial-level--debutant",
	},
	{
		id: "niveau-intermediaire",
		level: "intermediaire",
		title: "Niveau intermédiaire",
		subtitle: "Calculs, structure PERFORM et premiers fichiers.",
		modifier: "tutorial-level--intermediaire",
	},
	{
		id: "niveau-avance",
		level: "avance",
		title: "Niveau avancé",
		subtitle: "Fichiers indexés, CRUD, CALL et traitements batch.",
		modifier: "tutorial-level--avance",
	},
	{
		id: "niveau-bonus",
		level: "bonus",
		title: "Bonus modernes",
		subtitle: "Compilation GnuCOBOL, débogage et introduction SQL.",
		modifier: "tutorial-level--bonus",
	},
];

export default function Tutorials() {
	const tutorials = getAllTutorials();

	return (
		<main className='tutorials'>
			<header className='tutorials__header'>
				<h1 className='tutorials__title'>Liste des Tutoriels COBOL</h1>
				<p className='tutorials__intro'>
					Parcours progressif pour apprendre le COBOL, du premier DISPLAY au
					batch métier.
				</p>
			</header>

			<div className='tutorials__levels'>
				{LEVELS.map((section) => {
					const sectionTutorials = tutorials.filter(
						(tutorial) => tutorial.level === section.level
					);

					return (
						<TutorialLevelSection
							key={section.id}
							id={section.id}
							title={section.title}
							subtitle={section.subtitle}
							tutorials={sectionTutorials}
							images={images}
							modifierClass={section.modifier}
						/>
					);
				})}
			</div>
		</main>
	);
}
