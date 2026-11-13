/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif']
      },
      colors: {
        ink: '#080b18',
        mint: '#8bf3df',
        lavender: '#a6a9ff'
      }
    }
  },
  plugins: []
};