/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        landing: "calc(100vh - 60px)",
      },
      backgroundColor: ({ theme }) => ({
        main: theme("colors.slate[700]"),
      }),
    },
  },
  plugins: [],
};
