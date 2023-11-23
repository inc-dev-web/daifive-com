/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontSize: {
				custom32: ['32px', '40px'],
			},
			colors: {
				customAmberTint: 'rgba(255, 122, 0, 0.10)',
				customWhiteTint: 'rgba(255, 255, 255, 0.10)',
				customLightGrayTint: 'rgba(255, 255, 255, 0.40)',
				customLightGray: 'rgba(42, 51, 60, 0.03)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
