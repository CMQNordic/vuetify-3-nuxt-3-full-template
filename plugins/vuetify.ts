/** This plugin configures and enables Vuetify 3
 *
 *	Good info:
 * Add mdi-svg icons: https://next.vuetifyjs.com/en/features/icon-fonts/#material-design-icons-js-svg
 *	Add fa-svg icons: https://next.vuetifyjs.com/en/features/icon-fonts/#font-awesome-svg-icons
 *	Multiple sets: https://next.vuetifyjs.com/en/features/icon-fonts/#multiple-icon-sets
 *	Install fa-svg icons: https://fontawesome.com/docs/web/use-with/vue/
 */
import { createVuetify } from "vuetify";
import { mdi, fa, aliases } from "@/app/icons.js"; // icons
import { themes } from "@/app/app-customization.js"; // theme
import { initializeI18n } from "@/composables/useLanguages"; // translations
import { i18nConfig } from "@/modules/i18n/i18n.vuetify.config.js"; // translations

const { log } = useLogs();

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
		//theme: false, // disables themes
		theme: {
			defaultTheme: "light",
			themes: {
				light: {
					colors: themes["customized-light"],
				},
			},
			// Build variations of custom selectors
			// variations: {
			// 	colors: ["accent"],
			// 	lighten: 2,
			// 	darken: 2,
			// },
			//},
		},
	});

	nuxtApp.vueApp.use(vuetify);

	log.INFO((i) =>
		console.log(i, `Initialized Vuetify:`, vuetify, `theme:`, themes["customized-light"]),
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
