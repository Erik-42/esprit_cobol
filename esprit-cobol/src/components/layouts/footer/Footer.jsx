import React from "react";
import BmcButton from "../../elements/bmcButton/BmcButton";
import logoBasilleCorp from "../../../assets/img/bmc/logo-basille_corp.svg";
import "./footer.scss";

const BASILLE_URL = "https://basillecorp.dev/";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer' role='contentinfo'>
			<a
				className='footer__brand'
				href={BASILLE_URL}
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Basille Corp — ouvrir le site'>
				<img
					className='footer__logo'
					src={logoBasilleCorp}
					alt='Logo Basille Corp'
					width={48}
					height={52}
					loading='lazy'
					decoding='async'
				/>
			</a>

			<p className='footer__text'>
				© {currentYear} Basille_Corp / Esprit-COBOL. Tous droits réservés.
			</p>

			<div className='footer__bmc'>
				<BmcButton slug='meseneriko' />
			</div>
		</footer>
	);
};

export default Footer;
