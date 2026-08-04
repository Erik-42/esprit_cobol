import React from "react";
import "./soutien.scss";

const BMC_URL = "https://www.buymeacoffee.com/meseneriko";
const BMC_QR = "/assets/img/bmc/bmc_qr.png";

export default function Soutien() {
	return (
		<main className='soutien'>
			<header className='soutien__header'>
				<h1 className='soutien__title'>Soutenir Esprit-COBOL</h1>
				<p className='soutien__intro'>
					Si ce site vous aide à (re)découvrir le COBOL, vous pouvez soutenir
					le projet via Buy Me a Coffee — un café pour continuer à enrichir
					les tutoriels et la documentation.
				</p>
			</header>

			<section className='soutien__content' aria-label='Soutien Buy Me a Coffee'>
				<a
					className='soutien__qr-link'
					href={BMC_URL}
					target='_blank'
					rel='noopener noreferrer'
					title='Ouvrir Buy Me a Coffee'>
					<img
						className='soutien__qr'
						src={BMC_QR}
						alt='QR code Buy Me a Coffee pour soutenir Esprit-COBOL'
						width={280}
						height={280}
						loading='lazy'
						decoding='async'
					/>
				</a>

				<p className='soutien__hint'>
					Scannez le QR code avec votre téléphone, ou cliquez dessus pour
					ouvrir Buy Me a Coffee.
				</p>
			</section>
		</main>
	);
}
