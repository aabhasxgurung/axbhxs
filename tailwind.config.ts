import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e100f",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        // border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        accentv: "rgb(163 116 255)",
        accenty: "rgb(255 208 116)",
        accentc: "rgb(23 241 209)",
        text: {
          primary: "rgb(255 255 227)",
          accent: "rgb(24 160 251)",
        },
        border: {
          bline: "rgb(50 50 40)",
        },
        cardbg: "rgb(25 25 23/var(--tw-bg-opacity))",
        customBlue: "rgb(0, 186, 213)",
        customPurple: "rgb(157, 149, 255)",
        customPink: "rgb(254, 197, 251)",
        customOrange: "rgb(255, 135, 9)",
      },
    },
  },
  plugins: [],
};
export default config;
