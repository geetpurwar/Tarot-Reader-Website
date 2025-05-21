/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#f5f0e8',
        brown: '#3d2314',
        terracotta: '#d96e48',
        'terracotta-dark': '#b85636',
        sage: '#8c9b7a',
        midnight: '#1a1a2e',
        'dark-bg': '#121212',
        'dark-card': '#1e1e1e',
        'dark-accent': '#2d2d2d'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
