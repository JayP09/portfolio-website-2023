/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: [ 'Poppins', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        "profilepic":"url('../public/profilepic.jpg')"
      },
      fontSize: {
        "big":["3.5rem","1"],
        "h1":["1.5rem","2rem"],
        "h2":["1.25rem","1.75rem"],
        "h3":["1rem","1.5rem"]
      },
      keyframes: {
        scroll: {
          "0%" : {transform: 'translateY(0)'},
          "30%": {transform: 'translateY(3.75rem)'}
        }
      },
      colors: {
        "titleColor": "#333333",
        "titleColorDark": "#000000",
        "textColor": "#757575",
        "bodyColor": "#fafafa",
        "containerColor" : "#fff"
      }
    },
  },
  plugins: [],
}
