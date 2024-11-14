import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			// scss: {
			// 	api: "modern-compiler",
			// },
			scss: {
				silenceDeprecations: ["legacy-js-api"],
			},
		},
	},
	plugins: [react()],
});
