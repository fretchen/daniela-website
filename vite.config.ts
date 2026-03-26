import react from "@vitejs/plugin-react";
import yaml from "@rollup/plugin-yaml";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  base: "/daniela-website/",
  plugins: [yaml(), vike(), react()],
  build: {
    outDir: "build",
  },
});
