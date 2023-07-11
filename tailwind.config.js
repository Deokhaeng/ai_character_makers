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
        title: "1.65rem",
        base: "0.9rem",
      },
      colors: {
        primary: "#0066CC",
        "primary-hover": "#4C93DB",
        "01": "#1C3237",
        "02": "#425B5E",
        "03": "#718487",
        "04-dimmed": "#A0ADAF",
        "05-web-bg": "#E8EAEB",
        "dimmed-hover": "#A0ADAF",
        "line-color": "#D1D6D7",
        "option-color-bg": "#E5EFF9",
        "option-color-line": "#CCE0F4",
        "gray-midium-1": "#7A7E86",
        "gray-midium-2": "#91959B",
        "gray-light-1": "#A1A4A9",
        "gray-light-2": "#D0D1D4",
        white: "#fff",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
