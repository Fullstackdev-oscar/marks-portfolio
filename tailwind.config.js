/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "marko-one": ["Marko One", "serif"],
        inter: ["Inter", "sans-serif"],
        "sans-open": ["Open Sans", "serif"],
      },

      backdropFilter: {
        "blur-5": "blur(5px)",
      },
      backgroundColor: {
        glass: "rgba(255,255, 255, 0.8)",
      },
      borderColor: {
        glass: "rgba(255,255, 255, 0.3)",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0,0,0, 0.1)",
      },
      borderRadius: {
        glass: "16px",
      },
    },
  },
  plugins: [],
});
