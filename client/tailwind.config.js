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

        // xóa cái định nghĩa màu pink ở đây do nó định nghĩa lại màu pink
        // làm cho tailwind không nhận diện được các mã màu được cài đặt ăn theo màu pink là text-pink-500, bg-pink-500, border-pink-500
        // pink: "#FFB5BF",
        coral: "#FF6969",
        hover: "#AD4042",
        darkblue: "#24305E",
        darkgray: "#333333",
      },
      size: {
        13: "13px",
      },
    },
  },
  plugins: [],
};
