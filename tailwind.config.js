/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E205',
          200: '#888883',
        }
      }

    },
  },
  plugins: [],
}
