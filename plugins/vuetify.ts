/*********************************/
/* This plugin enables Vuetify 3 */
/*********************************/
/* 	
	Good reads about loading icons into Vuetify: 							  												
 	Add mdi-svg icons: https://next.vuetifyjs.com/en/features/icon-fonts/#material-design-icons-js-svg  	
	Add fa-svg icons: https://next.vuetifyjs.com/en/features/icon-fonts/#font-awesome-svg-icons 			
	Multiple sets: https://next.vuetifyjs.com/en/features/icon-fonts/#multiple-icon-sets 			  			
	Install fa-svg icons: https://fontawesome.com/docs/web/use-with/vue/ 												
*/
import { createVuetify } from "vuetify";
import { themes } from "@/app/app-customization.js"; // theme
import { i18nConfig } from "@/modules/i18n/vuetify-i18n-config.js"; // translations
import { initializeI18n } from "@/composables/useLanguages"; // translations
import { mdi, fa, aliases } from "@/app/icons.js"; // icons

const { logInfo } = useDebug();

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		icons: {
			defaultSet: "mdi",
			aliases,
			sets: { mdi, fa },
		},
		locale: {
			...i18nConfig,
		},
		//theme: false, // false disables themes
		theme: {
			defaultTheme: "light",
			themes: {
				light: {
					colors: themes["customized-light"],
				},
			},
			// Build variations of custom selectors in themes
			// variations: {
			// 	colors: ["accent"],
			// 	lighten: 2,
			// 	darken: 2,
			// },
			//},
		},
	});

	nuxtApp.vueApp.use(vuetify);

	if (!process.server && logInfo.value)
		console.log(
			"INFO",
			`✅ Initialized Vuetify:`,
			vuetify,
			"theme:",
			themes["customized-light"],
		);

	/* Apply i18n configuration in 'useLanguages' */
	initializeI18n(
		nuxtApp.vueApp,
		vuetify.locale?.fallback.value, // value
		vuetify.locale?.current, // ref
		vuetify.locale?.messages, // ref
		vuetify.locale?.t, // method
		vuetify.locale?.n, // method
	);
});
