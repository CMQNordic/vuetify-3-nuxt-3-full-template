/*	Settings for i18n module that is integrated in Vuetify. */
/*	
	See: https://vue-i18n.intlify.dev/api/general.html#createi18n				
*/
import { supportedLocales, defaultLocales } from "@/app/languages.js";
import * as vuetify from "vuetify/locale";

/* Initialize supported locales in messages */
const messages = {};
supportedLocales.forEach((locale) => {
	// For every supported language, add basic translations provided by Vuetify.
	// See: https://next.vuetifyjs.com/en/features/internationalization/
	messages[locale] = vuetify[locale];
});

/* Add default translations
	Note, here we assume each provided translation (key/value) is named as 'locale'
*/
Object.entries(defaultLocales).forEach((keyValue) => {
	Object.assign(messages[keyValue[0]], keyValue[1]);
});

/* Set defalt language */
const defaultLocale = Object.entries(defaultLocales)[0][0];

export const i18nConfig = {
	locale: defaultLocale,
	fallback: defaultLocale,
	messages: messages,
};
