/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'main': ["'Bai Jamjuree'", "sans-serif"],
      'secondary': ["'Inter'", "sans-serif"]
    },
    extend: {
      colors: {
        "grad1": "#B16CEA",
        "grad2": "#FF5E69",
        "grad3": "#FF8A56",
        "grad4": "#FFA84B",
      }
    },
  },
  plugins: [],
}
