// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // ← required for manual dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customPurple: "#7B1B5E", // ← your custom color
        maroon: {
          50: "#fdf2f2",
          100: "#fce8e8",
          200: "#f9d3d3",
          300: "#f3a6a6",
          400: "#eb6d6d",
          500: "#d63c3c",
          600: "#b52828",
          700: "#931f1f",
          800: "#6f1818",
          900: "#4c1010", // Deep maroon
        },
      },
    },
  },
  plugins: [],
};
