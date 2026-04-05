/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1F2342',
        orange: '#F08221',
        red: '#ED2024',
        gold: {
          DEFAULT: '#F7D060',
          light: '#FCEAB1',
          dark: '#E5BC42'
        },
        cream: '#FEFDF7',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
