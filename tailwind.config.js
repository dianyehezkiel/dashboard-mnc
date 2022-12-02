/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1E67AF',
        blackText: '#323A46',
        accent: {
          '100':'#DCDCDC',
          '200':'#323A46',
        },
        error: '#EE0D0D',
      },
      spacing: {
        std: '1.4375rem',
      },
      boxShadow: {
        below: '2px 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        std: '0.3125rem'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
