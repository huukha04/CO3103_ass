/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        "header-bottom": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
