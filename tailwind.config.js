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
    },
  },
  plugins: [],
};
