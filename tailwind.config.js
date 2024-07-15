/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "425px",
				md: "768px",
				lg: "984px",
				xl: "1240px",
				"2xl": "1360px",
			},
		},
		colors: {
			black: "#000000",
			white: "#FFFFFF",
		},
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
		},
		fontWeight: {
			bold: 700,
			"semi-bold": 600,
			medium: 500,
			regular: 400,
			light: 300,
		},
		fontSize: {
			xs: ["14px", "20px"],
			sm: ["16px", "24px"],
			base: ["16px", "26px"],
			md: ["18px", "26px"],
			lg: ["20px", "30px"],
			xl: ["22px", "33px"],
			"2xl": ["36px", "54px"],
			"3xl": ["42px", "55px"],
		},
		screens: {
			xs: "320px",
			sm: "375px",
			620: "620px",
			md: "768px",
			820: "820px",
			lg: "1024px",
			xl: "1440px",
		},
	},
	extend: {
		backgroundImage: {
			"secondary-green-three": "linear-gradient(0deg, #1F373C, rgba(246, 246, 246, 0.2))",
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".hide-scrollbar": {
					/* Скрытие прокрутки для всех браузеров */
					"::-webkit-scrollbar": {
						display: "none",
					},
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
				},
			})
		},
	],
}
