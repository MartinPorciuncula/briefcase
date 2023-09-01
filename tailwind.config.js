/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Kanit': ['Kanit', "sans-serif"]
    },
      colors: {
        "primary1":"#1F3A5F",
        "primary2":"#4d648d",
        "primary3":"#acc2ef",
        "navbar":"#3D5A80",
        "accent":"#cee8ff",
        "text-white":"#FFFFFF",
        "text-200":"#e0e0e0",
        "bg-100":"#0F1C2E",
        "bg-200":"#1f2b3e",
        "bg-300":"#374357",
        "try": "#f7d2f2",
      }
  },
  plugins: [],
}

