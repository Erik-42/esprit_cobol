import React from "react";
import "./footer.scss";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer' role='contentinfo'>
			<p className='footer__text'>
				© {currentYear} Esprit-COBOL. Tous droits réservés.
			</p>
		</footer>
	);
};

export default Footer;
