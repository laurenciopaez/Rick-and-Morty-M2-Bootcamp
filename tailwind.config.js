/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fonts: {
        poppinsLight: {
          family: "Poppins",
          weight: "300",
        },
        poppinsRegular: {
          family: "Poppins",
          weight: "400",
        },
        poppinsBold: {
          family: "Poppins",
          weight: "700",
        },
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
