/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bunga-karina": "url('/images/focus-on/bunga/Karina.png')",
        "bunga-abigail": "url('/images/focus-on/bunga/Abigail.png')",
        "bunga-ayu": "url('/images/focus-on/bunga/Ayu.png')",
        "bunga-evi": "url('/images/focus-on/bunga/Evi.png')",
        "bunga-irawati": "url('/images/focus-on/bunga/Irawati.png')",
        "bunga-nurul": "url('/images/focus-on/bunga/Nurul.png')",
        "bunga-pritta": "url('/images/focus-on/bunga/Pritta.png')",
        "bunga-sri": "url('/images/focus-on/bunga/Sri.png')",
        "bunga-wanda": "url('/images/focus-on/bunga/Wanda.png')",
        "bunga-wiwien": "url('/images/focus-on/bunga/Wiwien.png')",
      },
      colors: {
        black: "#000000",
        red: "#C72E2E",
        pink: "#F896B3",
        "white-ivory": "#F4EEE6",
        yellow: "#FFE500",
      },
      fontFamily: {
        zmg: ["Zen Maru Gothic", "sans-serif"],
        "ed-mentasta": ["Ed Mentasta", "sans-serif"],
        junicode: ["Junicode", "sans-serif"],
        "junicode-condensed": ["Junicode Condensed", "sans-serif"],
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
