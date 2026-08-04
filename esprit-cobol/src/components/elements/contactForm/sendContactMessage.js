const CONTACT_EMAIL = "contact@basillecorp.dev";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

/**
 * Envoie un message de contact vers contact@basillecorp.dev via FormSubmit.
 * @param {{ name: string, email: string, subject: string, message: string }} payload
 */
export async function sendContactMessage(payload) {
	const response = await fetch(FORMSUBMIT_ENDPOINT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			name: payload.name.trim(),
			email: payload.email.trim(),
			_replyto: payload.email.trim(),
			_subject: `[Esprit-COBOL] ${payload.subject.trim()}`,
			message: payload.message.trim(),
		}),
	});

	const data = await response.json().catch(() => ({}));

	if (!response.ok || data.success === "false" || data.success === false) {
		throw new Error(
			data.message || "L'envoi du message a échoué. Veuillez réessayer."
		);
	}

	return data;
}

export { CONTACT_EMAIL };
