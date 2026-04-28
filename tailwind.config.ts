import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
        bodoni: ["var(--font-bodoni)", "serif"],
      },
      colors: {
        gold: {
          "300": "#FDE68A",
          "400": "#F59E0B",
          "500": "#CA8A04",
          "600": "#D97706",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
