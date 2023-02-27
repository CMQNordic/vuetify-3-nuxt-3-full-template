import purgecssConfig from "./modules/purgecss/purgecss-config.js";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
	/* Build mode
		true + generate  => generates static files, SSG, each page full static  
		false + generate => generates static files, SPA, first page empty + big scripts 
		true + build =>  ... 
		false + build => ... 
		https://nuxt.com/docs/guide/concepts/rendering/ */
	ssr: false,

	/* Global styles
		https://nuxt.com/docs/api/configuration/nuxt-config/#css 
	*/
	css: [
		/* Vuetify */
		"vuetify/styles",
		/* Add default Vuetify styles before as this shall override those */
		"@/assets/css/vuetify/custom-styles.css",
		/* Add all styles that main shall override before */
		"@/assets/css/main.css",
	],

	/* Postcss plugins
		https://nuxt.com/docs/api/configuration/nuxt-config/#postcss 
	*/
	postcss: {
		plugins: {
			/* Build in */
			/* cssnano: false // to dissable */
			/* Installed */
			"postcss-mixins": {},
			"postcss-simple-vars": {},
			"postcss-nested": {},
		},
	},

	/* Extend nuxt core functionality
		https://nuxt.com/docs/api/configuration/nuxt-config/#modules 
	*/
	modules: [
		/* @nuxtjs/i18n
			https://i18n.nuxtjs.org/ 
		*/
		// [
		// 	'@nuxtjs/i18n',
		// 	{
		// 		locales: ['en', 'fr'], // used in URL path prefix
		// 		defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
		// 		vueI18n: {
		// 			legacy: false,
		// 			locale: 'en',
		// 			messages: {
		// 				en: {
		// 					welcome: 'Welcome',
		// 				},
		// 				fr: {
		// 					welcome: 'Bienvenue',
		// 				},
		// 			},
		// 		},
		// 	},
		// ],

		/* For vueUse inn nuxt
			DevDependency: @vueuse/core, @vueuse/nuxt
			https://vueuse.org/ */
		["@vueuse/nuxt", {}],

		/* Autoimport only used vuetify components
			Dependency: vuetify & vite-plugin-vuetify
			https://next.vuetifyjs.com/en/features/treeshaking/
		*/
		async (options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				config?.plugins?.push(
					vuetify({
						/* Autoimports */
						autoImport: true,
						/* https://next.vuetifyjs.com/en/features/sass-variables/#component-specific-variables */
						/* Sass variable customization. Dependency: sass. Slows down dev/build a lot. Avoid. 	*/
						//styles: { configFile: 'assets/css/vuetify/settings.scss' },
					}),
				);
			});
		},

		/* 
			Removes unused css 
			DevDependency: nuxt-purgecss
			https://github.com/developmint/nuxt-purgecss
		*/
		[
			"nuxt-purgecss",
			{
				enabled: false, // on|off
				...purgecssConfig,
			},
		],
	],

	/* Applied to every page  
		https://nuxt.com/docs/api/configuration/nuxt-config/#app */
	app: {
		baseURL: "/",
		head: {
			title: "Stater",
			meta: [],
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=KoHo:wght@200;300;400;500;600;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap",
				},
			],
			noscript: [],
			script: [],
			style: [],
		},
	},

	build: {
		/* 
			Vuetify specific. A bit unsure why we need this? 
		*/
		/* transpile: ["vuetify"], */

		/* 
			https://nuxt.com/docs/api/configuration/nuxt-config/#analyze 
		*/
		analyze: false, // enable bundle analysis
	},

	vite: {
		build: {
			/* 
				Dissable js minification with false (default true).
			*/
			minify: true,
		},
	},

	/* rules fr cmpets flder */
	components: [
		{
			/* 
				false, do not concat folder and filename for component name (default true)
			*/
			path: "~/components/",
			pathPrefix: false,
		},
	],
});

