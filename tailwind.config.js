// // tailwind.config.js

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         // Adjust the path to the image based on its location
//         'custom-image': "url('Picsart_24-11-04_16-14-06-092.jpg')",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typing 3s steps(30, end), blink 0.6s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
      },
    },
  },
  plugins: [],
};
