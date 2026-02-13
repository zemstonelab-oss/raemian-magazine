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
          DEFAULT: '#1a1a1a',
          gray: '#f5f5f5',
          lighter: '#fafafa',
        },
        teal: {
          DEFAULT: '#2a9d8f',
          light: '#3ab8a8',
          dark: '#1f7a6f',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Montserrat', 'sans-serif'],
        heading: ['var(--font-heading)', 'Cormorant Garamond', 'serif'],
        serif: ['var(--font-serif)', 'Noto Serif KR', 'serif'],
        sans: ['var(--font-sans)', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
