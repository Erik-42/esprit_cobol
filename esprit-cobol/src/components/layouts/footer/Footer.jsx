import React from "react";
import "./footer.scss";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer'>
			<p>© {currentYear} Esprit-COBOL. Tous droits réservés.</p>
		</footer>
	);
};

export default Footer;
