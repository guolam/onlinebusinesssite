/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./privacy.html",
    './js/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      fontFamily: {
        serif: "Times New Roman",
      },
      backgroundImage: theme => ({
        'hero-img': "url('../img/cover.png')"
      })
    },
  },
  plugins: [],
}
