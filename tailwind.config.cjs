const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				background: {
					DEFAULT: "#F8FAFC",
					dark: "#161923",
				},
				primary: {
					DEFAULT: "#0950F8",
					dark: "#0950F8",
				},
				secondary: {
					DEFAULT: "#FFFFFF",
					dark: "#282D3F",
				},
				tertiary: {
					DEFAULT: "#D1D5DB",
					dark: "#9CA3AF",
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
