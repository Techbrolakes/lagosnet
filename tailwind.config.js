module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#008ABD",
        primary2: "#00AFEF",
        tertiary: "#313131",
        secondary: "#173551",
        body: "#FAFAFA",
        body2: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
