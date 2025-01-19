/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#111827",
        },
        secondary: {
          DEFAULT: "#FACC15",
        },
        accent: {
          DEFAULT: "#DC2626",
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }, // Closing the extend object here
    },
  },
  plugins: [require("daisyui")],
};
