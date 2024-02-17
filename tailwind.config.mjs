/** @type {import('tailwindcss').Config} */
// @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-purple': '#533C96',
				'secondary-purple': '#762CDF',
				'supplement-purple': '#726BD9',
				'background': '#08010E',
				'negation': '#EBDAF8',
				'underlight': '#B6ABD7',
				'hover': '#A27FFF',
				'block': '#1B1223',
				'inblock': '#30253C'
			},
			fontFamily: {
				'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
