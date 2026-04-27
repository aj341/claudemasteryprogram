import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3BB9F5",
          dark: "#1A9EDE",
          pale: "#EBF7FF"
        },
        dark: {
          DEFAULT: "#0F1623",
          2: "#1A2235"
        },
        ink: {
          DEFAULT: "#111827",
          body: "#374151",
          muted: "#6B7280",
          dim: "#9CA3AF"
        },
        line: {
          DEFAULT: "#E5E7EB",
          strong: "#D1D5DB"
        },
        success: { DEFAULT: "#4ADE80" },
        warn: { DEFAULT: "#F4B261" },
        danger: { DEFAULT: "#F87171" },
        info: { DEFAULT: "#3BB9F5" }
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        sm: "7px",
        md: "8px",
        lg: "12px",
        xl: "14px",
        "2xl": "16px",
        "3xl": "18px",
        "4xl": "20px",
        full: "100px"
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.06)",
        default: "0 4px 24px rgba(0, 0, 0, 0.06)",
        heavy: "0 20px 40px rgba(0, 0, 0, 0.12)",
        nav: "0 2px 20px rgba(0, 0, 0, 0.08)",
        focus: "0 0 0 3px rgba(59, 185, 245, 0.15)",
        glow: "0 2px 8px rgba(59, 185, 245, 0.4)"
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)"
      }
    }
  },
  plugins: []
};

export default config;
