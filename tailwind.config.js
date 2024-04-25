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
        pry: '#2F2A8D',
        pry2: '#655FDB',
        secColor: '#0F0F0F',
        secColor2: '#444444',
        secColor3: '#D2D2D2',
      },
      backgroundImage: {
        circularWeb: 'url("/src/assets/SVG.png")',
        // circularWeb: 'repeating-radial-gradient(rgba(0,0,0,0.4) 4px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) 85px);',
      }
    },
  },
  plugins: [],
}