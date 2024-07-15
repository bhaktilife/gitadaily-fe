/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				taupe: "#aa906e",
			},
			fontFamily: {
				cursive: ['"Great Vibes"', "cursive"],
			},
		},
	},
	plugins: [],
};
