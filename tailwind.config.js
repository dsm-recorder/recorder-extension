/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#3CB371',
        background: '#DDDDDD',
      },
    },
  },
  plugins: [],
};
