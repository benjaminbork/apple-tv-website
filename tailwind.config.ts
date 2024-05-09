import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1.0625", // 17px
      lg: "1.1875rem", // 19px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2.5rem", // 40px
      "5xl": "4.5rem", // 72px
    },

    extend: {},
  },
  plugins: [],
};
export default config;
