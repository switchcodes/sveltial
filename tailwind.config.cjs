const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				background: {
					DEFAULT: "#feeae6",
					dark: "",
				},
				primary: {
					DEFAULT: "#ff3e00",
					dark: "#ff3e00",
				},
				secondary: {
					DEFAULT: "#02083e",
					dark: "#feeae6",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},

	plugins: [],
};

module.exports = config;
