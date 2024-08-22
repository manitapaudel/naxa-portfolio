/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffdc1c",
        secondary: "#124af4",
      },
      fontSize: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
