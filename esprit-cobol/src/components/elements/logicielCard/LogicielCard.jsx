import React, { useState } from "react";
import Button from "../button/button";
import "./logicielCard.scss";

const LogicielCard = ({ name, description, link, image }) => {
	const [imageFailed, setImageFailed] = useState(false);

	return (
		<article className='logiciel-card'>
			<h2 className='logiciel-card__title'>{name}</h2>
			<p className='logiciel-card__description'>{description}</p>

			<a
				className='logiciel-card__preview'
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={`Aperçu du site ${name}`}>
				{imageFailed || !image ? (
					<div className='logiciel-card__preview-fallback'>
						Aperçu indisponible
					</div>
				) : (
					<img
						className='logiciel-card__preview-image'
						src={image}
						alt={`Aperçu du site ${name}`}
						loading='lazy'
						onError={() => setImageFailed(true)}
					/>
				)}
			</a>

			<div className='logiciel-card__actions'>
				<a
					className='logiciel-card__download-link'
					href={link}
					target='_blank'
					rel='noopener noreferrer'>
					<Button label='Télécharger' className='logiciel-card__download-btn' />
				</a>
			</div>
		</article>
	);
};

export default LogicielCard;
