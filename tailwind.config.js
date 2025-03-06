/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // inclut les fichiers dans le dossier 'pages'
    './components/**/*.{js,ts,jsx,tsx}',  // inclut les fichiers dans le dossier 'components'
    './app/**/*.{js,ts,jsx,tsx}',  // si tu utilises l'App Router de Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
