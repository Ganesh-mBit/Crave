import type { Config } from "tailwindcss";

const config: Config = {
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
        "landing-section-left":
          "url(https://images.pexels.com/photos/6058444/pexels-photo-6058444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        "landing-section-right":
          "url(https://images.pexels.com/photos/5407059/pexels-photo-5407059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        "product-section":
          "url(https://images.pexels.com/photos/1381782/pexels-photo-1381782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        "collabe-section":
          "url(https://images.pexels.com/photos/997049/pexels-photo-997049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      },
      colors: {
        primary: {
          light: "#474747",
          main: "#333333",
        },
        secondary: {
          light: "#cfcfcf",
          main: "#878787",
        },
        neutral: "#b1ffb7",
      },
    },
  },
  plugins: [],
};
export default config;
