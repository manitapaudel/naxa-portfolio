/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffdc1c",
        buttonHover: "#ffab00",
        secondary: "#124af4",
      },
      fontSize: {
        13: "13px",
        15: "15px",
      },
      spacing: {
        3.75: "15px",
        8.25: "33px",
        100: "400px",
        155: "620px",
      },
    },
  },
  plugins: [],
};
