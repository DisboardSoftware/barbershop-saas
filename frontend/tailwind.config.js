/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f6f4ef',
        foreground: '#111111',
        primary: '#1f6f5f',
        muted: '#e7e3d7',
        card: '#ffffff'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
