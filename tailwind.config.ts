import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          900: "#050505",
          800: "#111111",
          700: "#1C1C1C",
          600: "#242424",
          500: "#3a3a3a",
        },
        chalk: {
          DEFAULT: "#FFFFFF",
          muted: "#D9D9D9",
          dim: "#8A8A8A",
        },
        // Discreet brand accent derived from the VONE / VOID magenta glow.
        signal: {
          DEFAULT: "#C21A5A",
          soft: "#E23A78",
          glow: "#FF2E88",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "SF Pro Display", "Neue Haas Grotesk", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "12xl": ["clamp(4rem, 14vw, 15rem)", { lineHeight: "0.88", letterSpacing: "-0.045em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
        editorial: "-0.03em",
      },
      spacing: {
        section: "clamp(6rem, 14vh, 12rem)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-line": {
          "0%, 100%": { transform: "scaleY(0.35)", opacity: "0.5" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        "scroll-x": "scroll-x 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
