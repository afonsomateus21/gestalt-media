/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wolverine-image': "url('/public/wolverine.png')",
        'batmans-image': "url('/public/batmans.png')",
        'psicose-image': "url('/public/psicose.jpg')",
        'soldier-image': "url('/public/soldado-ryan.webp')",
        'conjuring-image': "url('/public/invocacao-do-mal.jpg')",
        'inception-image': "url('/public/inception.jpg')",
        'lord-image': "url('/public/lord-of-rings.jpg')",
        'daftpunk-image': "url('/public/daftpunk.jpeg')",
        'beatles-image': "url('/public/beatles-sgt.jpg')",
        'rolling-image': "url('/public/rolling.jpeg')",
        'kraftwerk-image': "url('/public/kraftwerk.jpeg')",
        'joshua-image': "url('/public/joshua.jpeg')",
        'bowie-image': "url('/public/bowie.webp')",
        'tetris-image': "url('/public/tetris.jpeg')",
        'candy-image': "url('/public/candy-crush.webp')",
        'lemmings-image': "url('/public/lemmings.webp')",
        'portal-image': "url('/public/portal.jpg')",
        'limbo-image': "url('/public/limbo.jpg')",
      },
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
          'extrastrong-violet-stroke': `
            10px 10px 5px #4C1D95,
            -10px 10px 5px #4C1D95,
            -10px -10px 0 #4C1D95,
            10px -10px 0 #4C1D95,
            0px 10px 5px #4C1D95,
            0px -10px 5px #4C1D95,
            10px 0px 5px #4C1D95,
            -10px 0px 5px #4C1D95
          `,
          'extrastrong-blue-stroke': `
            10px 10px 5px #1e40af,
            -10px 10px 5px #1e40af,
            -10px -10px 0 #1e40af,
            10px -10px 0 #1e40af,
            0px 10px 5px #1e40af,
            0px -10px 5px #1e40af,
            10px 0px 5px #1e40af,
            -10px 0px 5px #1e40af
          `,
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'blink': 'blink-animation 2s infinite',
      },
      keyframes: {
        'blink-animation': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
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
        '.text-shadow-extrastrong-violet-stroke': {
          textShadow: `
            10px 10px 5px #4C1D95,
            -10px 10px 5px #4C1D95,
            -10px -10px 0 #4C1D95,
            10px -10px 0 #4C1D95,
            0px 10px 5px #4C1D95,
            0px -10px 5px #4C1D95,
            10px 0px 5px #4C1D95,
            -10px 0px 5px #4C1D95
          `,
        },
        '.text-shadow-extrastrong-blue-stroke': {
          textShadow: `
            10px 10px 5px #1e40af,
            -10px 10px 5px #1e40af,
            -10px -10px 0 #1e40af,
            10px -10px 0 #1e40af,
            0px 10px 5px #1e40af,
            0px -10px 5px #1e40af,
            10px 0px 5px #1e40af,
            -10px 0px 5px #1e40af
          `,
        },
      });
    },
  ],
}

