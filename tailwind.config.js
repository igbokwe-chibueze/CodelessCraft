/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baseFont: ['Inter', 'sans-serif'],
      },
      colors: {
        'Pry': '#2F2A8D',
        'Pry 2': '#655FDB',
        'Sec color': '#0F0F0F',
        'Sec color 2': '#444444',
        'Sec color 3': '#D2D2D2',
      },
    },
  },
  plugins: [],
}