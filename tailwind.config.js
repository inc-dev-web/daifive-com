/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			screens: {
				tablet: '640px',
				// => @media (min-width: 640px) { ... }

				laptop: '1024px',
				// => @media (min-width: 1024px) { ... }

				desktop: '1440px',
				// => @media (min-width: 1280px) { ... }
			},
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
				childConsultant: "url('/image/bgConsultation.png')",
				childConsultantSmall: "url('/image/bgConsultationSmall.png')",
				customOrange: 'linear-gradient(to right, #E97000 0%, #FF7A00 25.48%, #FFA149 100%)',
				customOrangeLight: 'linear-gradient( rgba(233, 112, 0, 0.10) 0%, rgba(255, 122, 0, 0.10) 25.48%, rgba(255, 161, 73, 0.10) 100%)',
				customBlue: 'linear-gradient(to right, #0B82FC 0%, #007EFF 25.48%, #0BC2FC 100%)',
				customBlueLight: 'linear-gradient(to right, rgba(11, 130, 252, 0.10) 0%, rgba(0, 126, 255, 0.10) 25.48%, rgba(11, 194, 252, 0.10) 100%)',
			},
		},
	},
	plugins: [],
};
