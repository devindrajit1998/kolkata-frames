/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: { extend: { colors: { 'kf-dark': '#1a1a1a', 'kf-dark-2': '#222', 'kf-gold': '#c5a059', 'kf-gold-light': '#d4b478', 'kf-gold-dark': '#a8884a', 'kf-text': '#333', 'kf-muted': '#777' }, fontFamily: { 'serif': ['Playfair Display', 'serif'], 'sans': ['Montserrat', 'sans-serif'], 'script': ['Dancing Script', 'cursive'] } } },
  plugins: [],
};