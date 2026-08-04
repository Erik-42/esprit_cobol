import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import "./tutorialCard.scss";

const TutorialCard = ({ id, title, description, codeExample, imageSrc }) => (
	<article className='tutorial-card'>
		<img
			className='tutorial-card__image'
			src={imageSrc}
			alt={`Illustration du tutoriel ${title}`}
			width={640}
			height={400}
			loading='lazy'
			decoding='async'
		/>
		<div className='tutorial-card__body'>
			<h3 className='tutorial-card__title'>{title}</h3>
			<p className='tutorial-card__description'>{description}</p>
			<pre className='tutorial-card__code'>{codeExample}</pre>
			<Link className='tutorial-card__link' to={`/tutorial/${id}`}>
				<Button label='Voir le tutoriel' className='tutorial-card__button' />
			</Link>
		</div>
	</article>
);

export default TutorialCard;
