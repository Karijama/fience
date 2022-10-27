/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/header.js', './src/pages/Home.js','.src/pages/Enter.js'],
  theme: {
    extend: {
      fontFamily: {
        body: ['SFPro'],
        head: ['SFPro-b'],
        foot: ['SFPro-t']
      },
      backgroundColor: {
        main: ['#F5F5F5']
      }
      
    },
  },
  plugins: [],
}
