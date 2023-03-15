import purgecssConfig from "./modules/purgecss/purgecss.config.js";
import vuetify from "vite-plugin-vuetify";

console.log(`👀➖➖`);
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
	css: ["@/assets/css/main.css"],

	/* Postcss plugins
		https://nuxt.com/docs/api/configuration/nuxt-config/#postcss 
	*/
	postcss: {
		plugins: {
			/* Build-in postcss plugins*/
			cssnano: true, // false to dissable (default true)
			/* installed devDependencies */
			"postcss-mixins": {},
			"postcss-simple-vars": {},
			"postcss-nested": {},
		},
	},

	/* External modules
		https://nuxt.com/docs/api/configuration/nuxt-config/#modules 
	*/
	modules: [
		/* VueUse composables for nuxt
			DevDependency: @vueuse/core, @vueuse/nuxt
		*/
		["@vueuse/nuxt", {}],

		/* 
			Remove unused CSS 
			DevDependency: nuxt-purgecss
			https://github.com/developmint/nuxt-purgecss
		*/
		[
			"nuxt-purgecss",
			{
				enabled: false, // true|false
				...purgecssConfig,
			},
		],

		/* Autoimport only used vuetify components
			Dependency: vuetify & vite-plugin-vuetify
			https://next.vuetifyjs.com/en/features/treeshaking/
		*/
		async (options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				config?.plugins?.push(
					vuetify({
						autoImport: true,
						/* https://next.vuetifyjs.com/en/features/sass-variables/#component-specific-variables */
						/* Sass variable customization. Dependency: sass. Slows down dev/build a lot. Avoid. 	*/
						//styles: { configFile: 'assets/css/vuetify/settings.scss' },
					}),
				);
			});
		},
	],

	/* Applied to every page head  
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
		/* Vuetify specific transpilation. 
			Run when building css. 
		*/
		transpile: ["vuetify"],

		/* Bundle analysis
			https://nuxt.com/docs/api/configuration/nuxt-config/#analyze 
		*/
		analyze: false,
	},

	vite: {
		build: {
			/* Dissable js minification */
			minify: true, // disable with false (default true)
		},
	},

	/* @/components folder */
	components: [
		{
			path: "~/components/",
			pathPrefix: false /* false -> don't concat folder & filename */,
		},
	],
});

