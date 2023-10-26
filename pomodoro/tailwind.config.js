/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    backgroundImage: {
      doodle_1: "url('assets/doodle_1.jpg')",
      doodle_2: "url('assets/doodle_2.jpg')",
      doodle_3: "url('assets/doodle_3.jpg')",
      doodle_4: "url('assets/doodle_4.jpg')",
      doodle_5: "url('assets/doodle_5.jpg')",
      doodle_6: "url('assets/doodle_6.jpg')",
      doodle_7: "url('assets/doodle_7.jpg')",
    },
    backgroundColor: {
      theme_1: "#b3b7dc",
      theme_2: "#aad7d2",
      theme_3: "#ff7c9c",
      theme_4: "#b7d6eb",
      theme_5: "#facfe3",
      theme_6: "#ffafb0",
      theme_7: "#fba779",
      opaque: "#ffffff45",
    },
    textColor: {
      text_1: "#b3b7dc",
      text_2: "#aad7d2",
      text_3: "#ff7c9c",
      text_4: "#b7d6eb",
      text_5: "#facfe3",
      white: "#ffffff",
    },
  },
  plugins: [],
};
