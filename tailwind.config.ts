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
        // vONE brand manual v2.0: Black Void base, neon as accent.
        ink: {
          DEFAULT: "#0A0A0E",
          900: "#0A0A0E",
          800: "#101017",
          700: "#15151F",
          600: "#1C1C28",
          500: "#43434F",
        },
        chalk: {
          DEFAULT: "#F4F4F7",
          muted: "#B7B7C4",
          dim: "#6F6F80",
        },
        // Pulse Magenta (principal)
        signal: {
          DEFAULT: "#EA00FF",
          soft: "#F25CFF",
          glow: "#EA00FF",
        },
        cyan: { DEFAULT: "#00E2FF" }, // Laser Cyan (apoyo)
        lime: { DEFAULT: "#A4FF00" }, // Volt Lime (apoyo)
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "12xl": ["clamp(4rem, 14vw, 15rem)", { lineHeight: "0.88", letterSpacing: "-0.045em" }],
      },
      letterSpacing: {
        brand: "0.01em",
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
