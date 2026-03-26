import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { value: "#0d9488" },
          border: { value: "#d1e7e4" },
          text: { value: "#134e4a" },
          background: { value: "#f0fdfa" },
          light: { value: "#ffffff" },
          accent: { value: "#14b8a6" },
          muted: { value: "#5f7a77" },
        },
        fonts: {
          body: { value: "system-ui, -apple-system, sans-serif" },
          heading: { value: "Georgia, 'Times New Roman', serif" },
        },
      },
      semanticTokens: {
        colors: {
          hero: {
            bg: { value: "{colors.background}" },
            text: { value: "{colors.text}" },
          },
          section: {
            bg: { value: "{colors.light}" },
            alt: { value: "{colors.background}" },
          },
          cta: {
            bg: { value: "{colors.brand}" },
            hover: { value: "{colors.accent}" },
            text: { value: "{colors.light}" },
          },
        },
        spacing: {
          xs: { value: "5px" },
          sm: { value: "10px" },
          md: { value: "20px" },
          lg: { value: "40px" },
          xl: { value: "60px" },
          "2xl": { value: "80px" },
        },
        sizes: {
          container: { value: "900px" },
        },
        radii: {
          sm: { value: "4px" },
          md: { value: "8px" },
        },
      },
    },
  },
  outdir: "styled-system",
});
