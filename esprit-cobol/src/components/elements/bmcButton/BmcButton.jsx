import React from "react";
import "./bmcButton.scss";

const BMC_URL = "https://www.buymeacoffee.com/meseneriko";
const BMC_BUTTON_IMG =
	"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png";

/**
 * Bouton Buy Me a Coffee sans script (compatible React / SPA).
 * Les scripts BMC officiels utilisent document.write et échouent en chargement async.
 */
const BmcButton = ({
	slug = "meseneriko",
	text = "Buy me a coffee",
}) => {
	const href = `https://www.buymeacoffee.com/${slug}`;

	return (
		<a
			className='bmc-button'
			href={href || BMC_URL}
			target='_blank'
			rel='noopener noreferrer'
			aria-label={text}>
			<img
				className='bmc-button__image'
				src={BMC_BUTTON_IMG}
				alt={text}
				width={217}
				height={60}
				loading='lazy'
				decoding='async'
			/>
		</a>
	);
};

export default BmcButton;
