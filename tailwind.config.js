/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#ffdc1c",
        buttonHover: "#ffab00",
        secondary: "#124af4",
      },
      fontSize: {
        13: "13px",
        15: "15px",
        17: "17px",
        56: "56px",
      },
      spacing: {
        3.75: "15px",
        6.25: "25px",
        7.5: "30px",
        8.25: "33px",
        25: "100px",
        100: "400px",
        155: "620px",
      },
    },
  },
  plugins: [],
};
