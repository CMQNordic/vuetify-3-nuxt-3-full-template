/* Settings for Purgecss
	Default options: https://github.com/Developmint/nuxt-purgecss/blob/main/src/config.ts 
	 About configuration: https://purgecss.com/configuration.html 	*/

export default {
	// Keep selectors based on a statically generated site pointed out by 'content'
	content: ["static-generated-dist-content/**/*.{html, vue, jsx?, tsx?}"],
	variables: false, // default false
	keyframes: false, // default false
	safelist: {
		/* Add selectors that shall always be kept i.e. those if any generated at runtime. */
		standard: [/v-ripple/],
		deep: [],
		greedy: [],
		keyframes: [],
		variables: [],
	},
};
