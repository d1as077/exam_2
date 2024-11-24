/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				pop: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				blue: '#1D72D2',
				grey: '#8A90A5',
				default: '#323A56',
				button_bg: '#F8FAFC',
				git_bg: '#EFF2F7',
				yashil: '#f4fff4',
				txt_yashil: '#70c63b',
				hover: '#155a9e',
			},
		},
	},
	plugins: [],
}
