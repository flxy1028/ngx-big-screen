/** @type {import('tailwindcss').Config} */
const spacing = {};
for (let i = 0; i < 1000; i++) {
  spacing[i] = i + "px";
}
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      skew: {
        45: "45deg",
      },
      gridTemplateColumns: {
        content: "2fr 3fr 5fr 3fr 2fr;",
      },
    },
    spacing,
  },
  plugins: [],
};
