/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#151f32',
          925: '#0b1120',
          950: '#060a12',
        },
        gold: {
          50: '#fbf9f2',
          100: '#f5f0dc',
          200: '#ebdeae',
          300: '#dfca7c',
          400: '#d2b450',
          500: '#c59d33',
          600: '#b08226',
          700: '#8c6020',
          800: '#734d20',
          900: '#61401f',
        },
        bronze: {
          500: '#a3704c',
          600: '#8c5938',
          700: '#724328',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        'gold-shimmer': 'linear-gradient(135deg, #f5e4be 0%, #c59d33 50%, #8c6020 100%)',
      }
    },
  },
  plugins: [],
}
