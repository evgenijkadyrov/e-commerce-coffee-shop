const colors= require('tailwindcss/colors')
const constants = {
  purple: "#6160DC",
  green: "#008D64",
  'dark-green': "#2e4941",
  'light-green': "#b9e7d9",
  orange: "#FFB74A",
  black: "#22242C",
  white: "#ffffff",
  red: "#FF4A55",
  gray: "#8E8EA1",
  "light-gray": "#d5d1d1",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
