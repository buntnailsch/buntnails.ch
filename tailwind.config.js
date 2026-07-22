export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: "#ab9c8a",
          accent1: "#dc9d60",
          accent2: "#747245",
          accent3: "#b58d63",
          ink: "#1a1918",
          text: "#2b2723",
          light: "#f8f6f2",
          paper: "#fcfbfa",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3.75rem, 10vw, 8.75rem)", { lineHeight: "0.88", letterSpacing: "-0.055em" }],
        editorial: ["clamp(2.4rem, 6vw, 5.25rem)", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
      },
      boxShadow: {
        "brand-soft": "0 24px 70px rgba(26, 25, 24, 0.12)",
        "brand-line": "0 14px 40px rgba(116, 114, 69, 0.10)",
      },
      backgroundImage: {
        "studio-grain":
          "radial-gradient(circle at 12% 18%, rgba(220, 157, 96, 0.18), transparent 28%), radial-gradient(circle at 88% 10%, rgba(116, 114, 69, 0.12), transparent 30%), linear-gradient(135deg, #f8f6f2 0%, #fcfbfa 46%, #ab9c8a 100%)",
      },
    },
  },
  plugins: [],
};
