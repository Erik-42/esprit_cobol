import React from "react";
import ContactForm from "../../components/elements/contactForm/ContactForm";
import "./contact.scss";

export default function Contact() {
	return (
		<main className='contact'>
			<header className='contact__header'>
				<h1 className='contact__title'>Contact</h1>
				<p className='contact__intro'>
					Une question sur COBOL, une suggestion ou un retour sur le site ?
					Écrivez-nous via le formulaire ci-dessous.
				</p>
			</header>

			<section className='contact__form-section' aria-label='Formulaire de contact'>
				<ContactForm />
			</section>
		</main>
	);
}
