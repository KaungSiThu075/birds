/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flow: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        flow: "flow 45s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant("target-blank", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `target-blank${separator}${className}`
          )}[target="_blank"]`;
        });
      });
    },
  ],
};
