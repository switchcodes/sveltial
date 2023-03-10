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
					DEFAULT: "#9CA3AF",
					dark: "#D1D5DB",
				},
			},
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
			animation: {
				fade: "fadeIn 2s",
			},
			keyframes: (theme) => ({
				fadeOut: {
					"0%": { backgroundColor: theme("colors.red.300") },
					"100%": { backgroundColor: theme("colors.blue.300") },
				},
			}),
		},
	},

	plugins: [],
};

module.exports = config;
