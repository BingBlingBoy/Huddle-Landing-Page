/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./design/src/**/*.{html,js}",
    '*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'body-pattern': "url(./images/bg-desktop.svg)"    
      }
    },
  },
  plugins: [],
}

