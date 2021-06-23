// tailwind.config.js
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  // darkMode: false, // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        default: {

        },
        dark: {
            css: {
                color: theme('colors.gray.300'),
                h1: {
                  color: theme('colors.gray.300'),
                },
                h2: {
                  color: theme('colors.gray.300'),
                },
                blockquote: {
                  color: theme('colors.gray.300'),
                },
            }
        }
    })
    },
  },
  variants: {
    extend: {
      typography: ['dark']
  }
  },
  plugins: [require('@tailwindcss/typography')],
};
