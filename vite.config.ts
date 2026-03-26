import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  base: "/daniela-website/",
  plugins: [vike(), react()],
  build: {
    outDir: "build",
  },
});
