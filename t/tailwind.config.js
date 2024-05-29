/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
          times: ['Times New Roman', 'serif'],
          roboto: ['Roboto', 'sans'],
          helvetica: ['Helvetica', 'sans']
        },
    },
  },
  plugins: [],
}