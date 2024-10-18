/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#01F1A7",
			secondary: "#102487",
			writing: "#ECEEFF",
			dark: "#1C1C1C",
			"gray-dark": {
				default: "#030712",
				50: "#111827",
				100: "#1F2937",
				200: "#374151",
				300: "#4B5563",
				400: "#6B7280",
				500: "#9CA3AF",
				600: "#D1D5DB",
				700: "#E5E7EB",
				800: "#F3F4F6",
				900: "#F9FAFB",
				950: "#FFFFFF",
			},
			"gray": {
				default: "#FFFFFF",
				50: "#F9FAFB",
				100: "#F3F4F6",
				200: "#E5E7EB",
				300: "#D1D5DB",
				400: "#9CA3AF",
				500: "#6B7280",
				600: "#4B5563",
				700: "#374151",
				800: "#1F2937",
				900: "#111827",
				950: "#030712",
			},
			emerald: "#10B981",
		},
		screens: {
			desktop: {
				min: "1024px"
			},
			tablet: {
				min: "768px",
				max: "1023px",
			},
			mobile: {
				max: "767px"
			}
		},
		boxShadow: {
			md: "0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 3px 0px rgba(0, 0, 0, 0.07)",
			lg: "0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)",
			"2xl": "0px 25px 25px 0px rgba(0, 0, 0, 0.15)",
		},
		extend: {
			flex: {
				header: "1 0 0"
			},
			keyframes: {
				hide: {
					"from": {"opacity" : 1},
					"to": {"opacity": 0}
				}
			},
			animation: {
				"hide": "hide 200ms ease-in"
			}
		},
	},
	plugins: [],
};
