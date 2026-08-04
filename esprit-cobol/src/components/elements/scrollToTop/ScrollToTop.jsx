import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "./scrollToTop";

/**
 * Remonte le scroll en haut à chaque changement de route.
 */
export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	return null;
}
