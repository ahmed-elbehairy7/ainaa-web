import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        Red: "#E0462D",
        Red2: "#A73826",
        dark: "#1C1C1C",
        Text: "#353535",
        grey: "#7B7B7B",
        "light-cyan": "#EBF7F6",
        light: "#FFFFFF",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStops: {
        "dark-gradient": {
          from: "#1C1C1C",
          to: "#353535",
        },
        "red-gradient": {
          from: "#E0462D",
          to: "#A73826",
        },
        "light-gradient": {
          from: "#FFFFFF",
          to: "#DADADA",
        },
      },
      fontSize: {
        H1: ["50px", { fontWeight: "800" }],

        H2: ["45px", { fontWeight: "bold" }],

        H3: ["40px", { fontWeight: "regular" }],

        H4: ["35px", { fontWeight: "bold" }],

        H5: ["30px", { fontWeight: "bold" }],

        H6: ["25px", { fontWeight: "bold" }],

        paragraph: ["25px", { fontWeight: "regular" }],

        link: ["25px", { fontWeight: "regular" }],

        nav_link: ["20px", { fontWeight: "bold" }],

        "very small": ["16px", { fontWeight: "regular" }],
      },
    },
  },
  plugins: [],
};
export default config;
