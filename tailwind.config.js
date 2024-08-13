const colors = {
	black: '#000000',
	white: '#FFFFFF',
	purple: {
		400: '#BA54AC',
		600: '#7D007F',
	},
	error: '#eb3434',
	primary: '#7d34eb',
	gray: {
		100: '#ced9eb',
		200: '#939393',
		300: '#99acc9',
		400: '#565555',
		800: '#3D3D3D',
	},
}
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				8.5: '30px',
			},
		},
		container: {
			center: true,
			screens: {
				sm: '425px',
				md: '768px',
				lg: '984px',
				xl: '1240px',
				'2xl': '1360px',
			},
		},
		colors: {
			...colors,
		},
		fontFamily: {
			'noto-sans': ['Noto Sans', 'sans-serif'],
			supermolot: ['"TT Supermolot Neue"', 'sans-serif']
		},
		fontWeight: {
			'extra-bold': 800,
			bold: 700,
			'semi-bold': 600,
			medium: 500,
			regular: 400,
			light: 300,
		},
		fontSize: {
			xs: ['14px', '18px'],
			sm: ['16px', '22px'],
			base: ['20px', '28px'],
			md: ['20px', '32px'],
			lg: ['22px', '32px'],
			xl: ['32px', '36px'],
			'2xl': ['36px', '42px'],
			'3xl': ['40px', '52px'],
		},
		screens: {
			xs: '320px',
			sm: '375px',
			620: '620px',
			md: '768px',
			820: '820px',
			lg: '1024px',
			xl: '1440px',
		},
	},
	extend: {
		backgroundImage: {
			'secondary-green-three': 'linear-gradient(0deg, #1F373C, rgba(246, 246, 246, 0.2))',
		},
		/**
		 * Ring
		 * */
		ringWidth: {
			// 1px
			primary: '0.0625rem',
			error: '0.0625rem',
		},
		ringOpacity: {},
		ringOffsetWidth: {
			// 1px
			primary: '0.0625rem',
			error: '0.0625rem',
		},
		ringColor: {
			primary: colors.primary,
			error: colors.error,
		},
		ringOffsetColor: {
			primary: colors.gray['200'],
			error: colors.gray['200'],
		},
		boxShadow: {
			toggle: '0 0 0.125rem 0 rgba(0, 0, 0, 0.20)',
			popover: '0px 8px 20px 0px rgba(0, 0, 0, 0.14)',
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.hide-scrollbar': {
					/* Скрытие прокрутки для всех браузеров */
					'::-webkit-scrollbar': {
						display: 'none',
					},
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			})
		},
	],
}
