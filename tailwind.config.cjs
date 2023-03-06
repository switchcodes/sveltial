const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				background: {
					DEFAULT: "#F9FAFC",
					dark: "#161923",
				},
				primary: {
					DEFAULT: "#0950F8",
					dark: "#0950F8",
				},
				secondary: {
					DEFAULT: "#FEFEFE",
					dark: "#282D3F",
				},
			},
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
		},
	},

	plugins: [],
};

module.exports = config;
