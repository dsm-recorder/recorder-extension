/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#3CB371',
        background: '#DDDDDD',
        greenHover: '#2C945B',
      },
    },
  },
  plugins: [],
};
