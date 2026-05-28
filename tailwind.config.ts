import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        ink: "var(--ink)",
        "soft-cloud": "var(--soft-cloud)",
        charcoal: "var(--charcoal)",
        ash: "var(--ash)",
        mute: "var(--mute)",
        stone: "var(--stone)",
        hairline: "var(--hairline)",
        "hairline-soft": "var(--hairline-soft)",
        sale: "var(--sale)",
        success: "var(--success)",
        info: "var(--info)",
        "forest-dark": "var(--forest-dark)",
        "forest-green": "var(--forest-green)",
        "moss-green": "var(--moss-green)",
        "sand-beige": "var(--sand-beige)",
        "earth-brown": "var(--earth-brown)",
        "stone-gray": "var(--stone-gray)",
        "soft-white": "var(--soft-white)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"]
      },
      boxShadow: {
        "lifted": "0 20px 50px -20px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(45, 106, 79, 0.35), transparent 60%)",
        "grain": "linear-gradient(transparent 0%, rgba(8, 28, 21, 0.6) 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;
