import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Figtree", "ui-sans-serif", "system-ui"],
      figtree: ["Figtree"],
    },
    boxShadow: {
      "custom-light": " 0 0 3px #AEBBC3",
      "custom-dark": "1px 1px 3px #0a0c0e , -1px -1px 8px #0f1115",
    },
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#6A828D",
          100: "#253339",
          200: "#16181d",
          300: "#40535B",
          500: "#0f1115",
          700: "#253339",
        },
        dark: {
          DEFAULT: "#7f7f7f",
          100: "#253339",
          200: "#16181d",
          300: "#40535B",
          500: "#0f1115",
          700: "#1e1e1e",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

export default config;
