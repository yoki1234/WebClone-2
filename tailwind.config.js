/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-45': {
      transform: 'rotateX(45deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg)',
    },
    '.rotate-x-80': {
      transform: 'rotateX(80deg)',
    },
  })
})

const rotateY = plugin(function({addUtilities}){
  addUtilities({
    '.rotate-y-20':{
      transform: 'rotateY(20deg)',
    },
    '.rotate-y-45': {
      transform: 'rotateY(45deg)',
    },
    '.rotate-y-60': {
      transform: 'rotateY(60deg)',
    },
    '.rotate-y-80': {
      transform: 'rotateY(80deg)',
    },
    '.rotate-y-90':{
      transform: 'rotateY(90deg)',
    },
  })

})


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [rotateX,rotateY],
}

