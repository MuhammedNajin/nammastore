import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        wave: { "0%,100%": { transform: "scaleY(0.4)" }, "50%": { transform: "scaleY(1)" } },
        rise: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: { wave: "wave 1.1s ease-in-out infinite", rise: "rise .5s ease-out both" },
    },
  },
  plugins: [],
};
export default config;
