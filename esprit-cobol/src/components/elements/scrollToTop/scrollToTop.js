/**
 * Remonte l'ascenseur de la page en haut.
 * @param {"auto" | "smooth"} [behavior="auto"]
 */
export function scrollToTop(behavior = "auto") {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior,
	});
}
