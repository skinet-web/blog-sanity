/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primarycolor: "#edf2f8",
        secondarycolor: "#32a2a8",
        blackcolor: "#030303",
        lightGraycolor: "#e4e4e4",
        graycolor: "#6b7688",
        browncolor: "#46364a",
        whitecolor: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};
