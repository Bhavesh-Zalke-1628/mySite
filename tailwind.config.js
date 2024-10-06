/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calibri: ['Calibri', 'Arial', 'sans-serif'],
        customCursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}