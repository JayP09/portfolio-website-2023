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
        "profilepic":"url('../public/7066.png')"
      },
      fontSize: {
        "big":["3.5rem","1"],
        "h1":["1.5rem","2rem"],
        "h3":["1.25rem","1.75rem"]
      },
      keyframes: {
        scroll: {
          "0%" : {transform: 'translateY(0)'},
          "30%": {transform: 'translateY(3.75rem)'}
        }
      }
    },
  },
  plugins: [],
}
