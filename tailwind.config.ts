import type { Config } from 'tailwindcss';
import { colors, spacing, fontSize, borderRadius, fontFamily } from './src/config/theme';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      spacing,
      fontSize,
      borderRadius,
      fontFamily,
    },
  },
  plugins: [],
};

export default config;
