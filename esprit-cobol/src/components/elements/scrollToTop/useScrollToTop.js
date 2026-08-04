import { useEffect } from "react";
import { scrollToTop } from "./scrollToTop";

/**
 * Remonte le scroll en haut lorsque la dépendance change
 * (ex. index d'article après clic Suivant / Précédent).
 */
export function useScrollToTop(dependency) {
	useEffect(() => {
		scrollToTop();
	}, [dependency]);
}
