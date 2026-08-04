import React from "react";
import TutorialCard from "../tutorialCard/TutorialCard";
import "./tutorialLevelSection.scss";

const TutorialLevelSection = ({
	id,
	title,
	subtitle,
	tutorials,
	images,
	modifierClass = "",
}) => {
	if (!tutorials.length) {
		return null;
	}

	return (
		<section
			className={`tutorial-level ${modifierClass}`.trim()}
			id={id}
			aria-labelledby={`${id}-title`}>
			<header className='tutorial-level__header'>
				<h2 className='tutorial-level__title' id={`${id}-title`}>
					{title}
				</h2>
				{subtitle && (
					<p className='tutorial-level__subtitle'>{subtitle}</p>
				)}
			</header>

			<div className='tutorial-level__grid'>
				{tutorials.map((tutorial) => (
					<TutorialCard
						key={tutorial.id}
						id={tutorial.id}
						title={tutorial.title}
						description={tutorial.description}
						codeExample={tutorial.codeExample}
						imageSrc={images[`exercice${tutorial.id}`]}
					/>
				))}
			</div>
		</section>
	);
};

export default TutorialLevelSection;
