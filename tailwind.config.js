/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#faf5ea',
          200: '#f3e8cf',
          300: '#e8d4a6',
          400: '#d4b76e',
          500: '#b88f3a',
          600: '#9b7324',
          700: '#7c5717',
          800: '#5c3e0c',
          900: '#3d2705',
        },
        royal: {
          gold: '#966e1d',
          dark: '#1a1815',
          muted: '#615a4f',
          border: '#e8dcbe',
          surface: '#fcfbfa',
          card: '#ffffff',
        }
      },
      fontFamily: {
        brand: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'royal-glow': '0 0 25px -4px rgba(184, 143, 58, 0.25)',
        'royal-card': '0 8px 30px -4px rgba(150, 110, 29, 0.08), 0 2px 10px rgba(0, 0, 0, 0.03)',
        'royal-float': '0 14px 40px -6px rgba(150, 110, 29, 0.16), 0 4px 14px rgba(0, 0, 0, 0.04)',
      }
    }
  },
  plugins: []
};
