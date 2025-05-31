/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
        jakarta: ["Plus Jakarta Sans", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "header-bottom": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        1480: "1480px",
      },
      colors: {
        gray: "#5A637A",
        lightgray: "#8a8a8a",

        pink: "#FFB5BF",
        coral: "#FF6969",
        hover: "#AD4042",
        skyblue: "#94CEFA",
        darkblue: "#24305E",
        darkgray: "#333333",
        darkred: "#9a2f36",
      },
      size: {
        13: "13px",
      },
      spacing: {
        "3px": "3px",
      },
      keyframes: {
        drawCheck: {
          "0%": { "stroke-dashoffset": "40" },
          "100%": { "stroke-dashoffset": "0" },
        },
        "fade-scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        drawCheck: "drawCheck 0.6s ease forwards",
        "ping-once": "ping 1s cubic-bezier(0, 0, 0.2, 1) forwards",
        "fade-scale-in": "fade-scale-in 0.3s ease-out forwards",
      },
      strokeDasharray: {
        DEFAULT: "40",
      },
      
    },
  },

  plugins: [],
};
