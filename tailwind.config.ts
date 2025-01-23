import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oceanic: ["var(--font-oceanic-text-mono)"],
        brutal: ["var(--font-brutal-type)"],
      },
      screens: {
        mg: "1000px",
        lg: "1366px",
        xl: "1440px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
