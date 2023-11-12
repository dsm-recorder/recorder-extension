/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#005B45',
        gray: '#005B45',
      },
    },
  },
  plugins: [],
};
