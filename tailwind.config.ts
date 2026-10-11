import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17231d",
        muted: "#718077",
        brand: "#16784a",
        "brand-dark": "#0f5936",
        "brand-light": "#e9f4ec",
        paper: "#f7f8f4",
        line: "#e8ece7",
      },
      fontFamily: {
        sans: ["Arial", "Noto Sans Bengali", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 32px rgba(20, 45, 30, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
