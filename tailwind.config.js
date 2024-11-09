// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Adjust the path to the image based on its location
        'custom-image': "url('Picsart_24-11-04_16-14-06-092.jpg')",
      },
    },
  },
  plugins: [],
};
