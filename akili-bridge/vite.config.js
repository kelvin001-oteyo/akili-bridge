import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use /static/ for the Django build output, but keep "/" during local dev
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  base: isProd ? "/static/" : "/",
  build: {
    outDir: "../frontend",
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
