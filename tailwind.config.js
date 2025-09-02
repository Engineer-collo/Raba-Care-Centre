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
      },
    },
  },
  plugins: [],
};
