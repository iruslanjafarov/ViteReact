import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"


export default defineConfig({
    base: "./",
    build: {
        minify: true,
        sourcemap: true
    },
    server: {
        host: "0.0.0.0",
        port: "8888",
        open: true,
        hmr: true
    },
    plugins: [react()],
});