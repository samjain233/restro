/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      head: "#f14a41",
      primary: "#f25c54",
      secondary: "#f27059",
      warm: "#f4845f",
      off: "#f7b267",
      light: "#f79d65",
      testimonial: "#fff0f3",
      white: "#ffffff",
      black: "#000000",
      gray: "#6c757d",
      yellow : "#ffc300",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
