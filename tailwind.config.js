/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        goldCustom: '#E1B382',
        blackCustom: '#1A1A1A',
        greyCustom: '#333333',
      },
    },
  },
  plugins: [],
};
