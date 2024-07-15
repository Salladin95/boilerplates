import path from "path"
import { defineConfig } from "vite"
import viteSvgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import eslintPlugin from "@nabla/vite-plugin-eslint"

export default defineConfig({
	plugins: [react(), eslintPlugin(), viteSvgr(), tsconfigPaths()],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src"),
		},
	},
})
