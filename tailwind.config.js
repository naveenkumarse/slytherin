/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    screens: {
      'xs': '380px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      }
    }
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce']
  },
  plugins: [],
}
