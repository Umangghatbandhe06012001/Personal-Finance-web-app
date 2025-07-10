// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "drop-in": {
          "0%": { transform: "translateY(-200%)", opacity: "0" },
          "60%": { transform: "translateY(20%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "drop-in": "drop-in 0.6s ease-out",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
