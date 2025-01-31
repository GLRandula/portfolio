/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#000d2f",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #003a64, #23272b)",
        designColor: "#00f1ff",
      },
      boxShadow: {
        shadowOne: "5px 5px 5px #0037586b, -5px -5px 5px #00375838",
      },
    },
  },
  plugins: [],
};
