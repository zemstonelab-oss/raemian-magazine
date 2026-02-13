import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a962',
          light: '#e8d5a3',
          dark: '#a88b3d',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          gray: '#1a1a1a',
          lighter: '#2a2a2a',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Noto Serif KR', 'serif'],
        sans: ['var(--font-sans)', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
