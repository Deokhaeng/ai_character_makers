/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        title: "1.8rem",
        base: "1rem",
      },
      colors: {
        primary: "#4267B3",
        "gray-midium": "#7A7E86",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
