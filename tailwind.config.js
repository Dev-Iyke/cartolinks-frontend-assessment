/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add other paths as needed
  ],
  theme: {
    extend: {
      backgroundImage: {
        "group-cinema": "url('/webp/group-cinema.webp')",
      },
    },
  },
  plugins: [],
};
