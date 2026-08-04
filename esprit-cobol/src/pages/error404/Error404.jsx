import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/elements/button/button";
import "./error404.scss";

const Error404 = () => {
	const navigate = useNavigate();

	return (
		<main className='error404'>
			<header className='error404__header'>
				<p className='error404__eyebrow'>ABEND CODE: S0C4</p>
				<h1 className='error404__title'>404</h1>
				<p className='error404__subtitle'>PAGE INTROUVABLE</p>
			</header>

			<section className='error404__program' aria-label='Programme COBOL d’erreur'>
				<pre className='error404__code'>
					<code>{`IDENTIFICATION DIVISION.
PROGRAM-ID. ERROR-404.
AUTHOR. ESPRIT-COBOL.

ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
SOURCE-COMPUTER. WEB-BROWSER.
OBJECT-COMPUTER. USER-SCREEN.

DATA DIVISION.
WORKING-STORAGE SECTION.
01  WS-STATUS           PIC X(20) VALUE "NOT FOUND".
01  WS-MESSAGE          PIC X(40) VALUE
    "CETTE PAGE N'EXISTE PAS.".

PROCEDURE DIVISION.
MAIN-LOGIC.
    DISPLAY "****************************************".
    DISPLAY "*  ERREUR : RESSOURCE INTROUVABLE      *".
    DISPLAY "*  LE FICHIER DEMANDE EST ABSENT       *".
    DISPLAY "*  DU CATALOGUE COBOL.                 *".
    DISPLAY "****************************************".
    DISPLAY WS-MESSAGE.
    PERFORM RETURN-HOME.
    STOP RUN.

RETURN-HOME.
    DISPLAY "RETOUR A L'ACCUEIL RECOMMANDE.".
    EXIT.`}</code>
				</pre>
			</section>

			<section className='error404__actions'>
				<p className='error404__hint'>
					La division PROCEDURE n’a pas trouvé cette adresse mémoire.
					<br />
					Revenez à l’accueil pour continuer l’exécution.
				</p>
				<Button
					label='GO BACK TO HOME'
					className='error404__button'
					onClick={() => navigate("/")}
				/>
			</section>
		</main>
	);
};

export default Error404;
