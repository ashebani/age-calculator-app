/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "hsl(259, 100%, 65%)",
        primaryLightRed: "hsl(0, 100%, 67%)",
        primaryOffWhite: "hsl(0, 0%, 94%)",
        primaryLightGray: "hsl(0, 0%, 86%)",
        primarySmokeyGray: "hsl(0, 1%, 44%)",
        primaryOffBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
