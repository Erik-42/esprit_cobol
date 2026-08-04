import React, { useState } from "react";
import Button from "../button/button";
import { sendContactMessage } from "./sendContactMessage";
import "./contactForm.scss";

const INITIAL_FORM = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const INITIAL_ERRORS = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const ContactForm = ({ onSubmitSuccess }) => {
	const [formData, setFormData] = useState(INITIAL_FORM);
	const [errors, setErrors] = useState(INITIAL_ERRORS);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [submitError, setSubmitError] = useState("");

	const validateEmail = (email) =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

	const validateForm = () => {
		const nextErrors = { ...INITIAL_ERRORS };
		let isValid = true;

		if (!formData.name.trim()) {
			nextErrors.name = "Le nom est requis.";
			isValid = false;
		}

		if (!formData.email.trim()) {
			nextErrors.email = "L'email est requis.";
			isValid = false;
		} else if (!validateEmail(formData.email)) {
			nextErrors.email = "Veuillez saisir un email valide.";
			isValid = false;
		}

		if (!formData.subject.trim()) {
			nextErrors.subject = "Le sujet est requis.";
			isValid = false;
		}

		if (!formData.message.trim()) {
			nextErrors.message = "Le message est requis.";
			isValid = false;
		} else if (formData.message.trim().length < 10) {
			nextErrors.message = "Le message doit contenir au moins 10 caractères.";
			isValid = false;
		}

		setErrors(nextErrors);
		return isValid;
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}

		if (isSubmitted) {
			setIsSubmitted(false);
		}

		if (submitError) {
			setSubmitError("");
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!validateForm() || isSending) {
			return;
		}

		setIsSending(true);
		setSubmitError("");
		setIsSubmitted(false);

		try {
			await sendContactMessage(formData);
			setIsSubmitted(true);
			onSubmitSuccess?.(formData);
			setFormData(INITIAL_FORM);
		} catch (error) {
			setSubmitError(
				error.message ||
					"Impossible d'envoyer le message. Vérifiez votre connexion et réessayez."
			);
		} finally {
			setIsSending(false);
		}
	};

	const handleReset = () => {
		setFormData(INITIAL_FORM);
		setErrors(INITIAL_ERRORS);
		setIsSubmitted(false);
		setSubmitError("");
	};

	return (
		<form className='contact-form' onSubmit={handleSubmit} noValidate>
			{isSubmitted && (
				<p className='contact-form__success' role='status'>
					Votre message a bien été envoyé à contact@basillecorp.dev. Merci
					pour votre intérêt !
				</p>
			)}

			{submitError && (
				<p className='contact-form__submit-error' role='alert'>
					{submitError}
				</p>
			)}

			<div className='contact-form__field'>
				<label className='contact-form__label' htmlFor='contact-name'>
					Nom
				</label>
				<input
					id='contact-name'
					className={`contact-form__input${
						errors.name ? " contact-form__input--error" : ""
					}`}
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
					autoComplete='name'
					disabled={isSending}
					aria-invalid={Boolean(errors.name)}
					aria-describedby={errors.name ? "contact-name-error" : undefined}
				/>
				{errors.name && (
					<span id='contact-name-error' className='contact-form__error'>
						{errors.name}
					</span>
				)}
			</div>

			<div className='contact-form__field'>
				<label className='contact-form__label' htmlFor='contact-email'>
					Email
				</label>
				<input
					id='contact-email'
					className={`contact-form__input${
						errors.email ? " contact-form__input--error" : ""
					}`}
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					autoComplete='email'
					disabled={isSending}
					aria-invalid={Boolean(errors.email)}
					aria-describedby={errors.email ? "contact-email-error" : undefined}
				/>
				{errors.email && (
					<span id='contact-email-error' className='contact-form__error'>
						{errors.email}
					</span>
				)}
			</div>

			<div className='contact-form__field'>
				<label className='contact-form__label' htmlFor='contact-subject'>
					Sujet
				</label>
				<input
					id='contact-subject'
					className={`contact-form__input${
						errors.subject ? " contact-form__input--error" : ""
					}`}
					type='text'
					name='subject'
					value={formData.subject}
					onChange={handleChange}
					disabled={isSending}
					aria-invalid={Boolean(errors.subject)}
					aria-describedby={
						errors.subject ? "contact-subject-error" : undefined
					}
				/>
				{errors.subject && (
					<span id='contact-subject-error' className='contact-form__error'>
						{errors.subject}
					</span>
				)}
			</div>

			<div className='contact-form__field'>
				<label className='contact-form__label' htmlFor='contact-message'>
					Message
				</label>
				<textarea
					id='contact-message'
					className={`contact-form__textarea${
						errors.message ? " contact-form__textarea--error" : ""
					}`}
					name='message'
					rows='6'
					value={formData.message}
					onChange={handleChange}
					disabled={isSending}
					aria-invalid={Boolean(errors.message)}
					aria-describedby={
						errors.message ? "contact-message-error" : undefined
					}
				/>
				{errors.message && (
					<span id='contact-message-error' className='contact-form__error'>
						{errors.message}
					</span>
				)}
			</div>

			<div className='contact-form__actions'>
				<Button
					type='submit'
					label={isSending ? "Envoi en cours..." : "Envoyer"}
					className='contact-form__submit'
					disabled={isSending}
				/>
				<Button
					type='button'
					label='Réinitialiser'
					className='contact-form__reset'
					onClick={handleReset}
					disabled={isSending}
				/>
			</div>
		</form>
	);
};

export default ContactForm;
