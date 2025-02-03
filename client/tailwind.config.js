/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1dabf",
        primaryDark: '#86f00',
        lightOrange: "#f1dabf",
        darkOrange: "#d97706", 
        darkGray:"#1a1f25",
        lightGray:"#272c35",
        lightBrown: "#c4a484", 
        darkBrown: "#3d2b1f",
        lightPurple: "#c3a2ff",
        darkPurple: "#4b0082",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}

