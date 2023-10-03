/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#1F3251",
        body: "#D6E2F0",
        footer: "#7B879D",
      },
      fontSize: {
        headingText: "22px",
        bodyText: "15px",
        footerText: "11px",
      },
      fontWeight: {
        headingText: "700",
        bodyText: "400",
        footerText: "400",
      },
    },
  },
  plugins: [],
};
