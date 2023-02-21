/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: [
          `'Red Hat DisplayVariable'`,
          `'Red Hat Display'`,
          "sans-serif",
        ],
        secondary: [`ArchivoVariable`, `Archivo`, "sans-serif"],
      },
      zIndex: {
        navbar: "997",
        drawer: "998",
        ornament: "999",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "du-",
  },
};
