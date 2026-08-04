import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	build: {
		target: "es2020",
		cssCodeSplit: true,
		modulePreload: {
			resolveDependencies: (_filename, deps) =>
				deps.filter(
					(dep) =>
						!dep.includes("highlighter") && !dep.includes("markdown")
				),
		},
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (
						id.includes("node_modules/react-dom") ||
						id.includes("node_modules/react-router") ||
						id.includes("node_modules/react/")
					) {
						return "react";
					}
					// Ne pas forcer markdown/highlighter en chunks globaux
					// (sinon Vite les précharge sur toutes les pages)
				},
			},
		},
	},
});
