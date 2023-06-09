/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#282c3f",
        secondary: "#686b78",
        secondary2: "#535665"
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      sm: "680px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  plugins: []
}
