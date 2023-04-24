/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0067a3',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      }
    },
  },
  plugins: [],
}
