import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        auric: "#FFD700",
        auricDark: "#B8860B",
        midnight: "#0B1021",
        slate: "#1F2A37"
      },
      backgroundImage: {
        "gold-noise":
          "radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.3), transparent 40%), radial-gradient(circle at 80% 0%, rgba(184, 134, 11, 0.25), transparent 55%), radial-gradient(circle at 0% 80%, rgba(255, 255, 255, 0.2), transparent 45%)"
      },
      boxShadow: {
        auric: "0 20px 45px rgba(255, 215, 0, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
