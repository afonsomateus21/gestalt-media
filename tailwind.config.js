/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        textShadow: {
          'strong-stroke': `
            4px 4px 2px #4C1D95,
            -4px 4px 2px #4C1D95,
            -4px -4px 0 #4C1D95,
            4px -4px 0 #4C1D95,
            0px 4px 2px #4C1D95,
            0px -4px 2px #4C1D95,
            4px 0px 2px #4C1D95,
            -4px 0px 2px #4C1D95
          `,
        },
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-strong-stroke': {
          textShadow: `
            4px 4px 2px #4C1D95,
            -4px 4px 2px #4C1D95,
            -4px -4px 0 #4C1D95,
            4px -4px 0 #4C1D95,
            0px 4px 2px #4C1D95,
            0px -4px 2px #4C1D95,
            4px 0px 2px #4C1D95,
            -4px 0px 2px #4C1D95
          `,
        },
      });
    },
  ],
}

