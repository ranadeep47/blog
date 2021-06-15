// tailwind.config.js
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  // darkMode: false, // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
