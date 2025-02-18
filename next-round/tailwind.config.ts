import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
		background: "#FFFCF2", // Light Cream
		muted: "#CCC5B9", // Muted Light Gray
		dark: "#403D39", // Dark Accent
		darkest: "#252422", // Main Dark Color
		primary: "#EB5E28", // Orange Accent
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
		}
	},
  plugins: [tailwindcssAnimate],
} satisfies Config;
