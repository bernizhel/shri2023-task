import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [react()],
	base: "https://bernizhel.github.io/shri2023-task/",
	build: {
		outDir: "docs",
	},
});
