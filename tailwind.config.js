/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#FFC0CB',
        lightBluish:"#17A2B8",
        darkWhite:"#f3fbf5",
        lightWhite:"#5f5f5f"
      },
      width: {
        53.5: '13.375rem',
      },
      height:{
        7.45:'1.8745rem'
      },
      borderWidth:{
        Default:'1px'
      },
      boxShadow:{
        cardShadow:'0 2px 15px -3px rgb(0 0 0 / 57%)'
      }
    },
  },
  plugins: [],
}