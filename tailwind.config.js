/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#011c39fc',
        'custom-light-blue': '#0d4250',
        'custom-yellow': '#ffd550',
        'custom-gray': '#062547b3',
        'custom-bluish-gray': '#186265',
        'custom-light-gray': '#6f7174',
        'custom-light-white': '#eaece8',
      },
    },
  },
  plugins: [],
}

