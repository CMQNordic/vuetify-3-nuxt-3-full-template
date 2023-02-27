import { supportedLocales, defaultLocales } from "@/app/languages.js";

const { logInfo } = useDebug();

/* Internal
	An array contain a list of locales for witch the translations are already present in client. 
	Only the default language(s), as defined in settings, are provided with page load. */
const downloadedTranslations = [];
Object.keys(defaultLocales).forEach((locale) => {
	downloadedTranslations.push(locale);
});

/* Exported
	An array containing records of languages that are supported. 
	Each language record MUST contain:
	locale: <String>, lKey: <String>  and icon: <Alias>
	Note! ust because a language is supported does not mean that its translations are
	dowladed. Usually only the default language is provided to client with page load. 
*/
const supportedLanguages = [];
supportedLocales.forEach((locale) => {
	supportedLanguages.push({
		locale: locale, // unique identifier
		lKey: `lang.${locale}`, // label translation id
		icon: `$flag-${locale}`, // flag icon alias
	});
});

/* Exported
	Returns reference to currently active language record.
*/
const activeLanguage = computed(
	() => supportedLanguages.find((e) => e.locale == i18n.activeLocale.value) || {},
);

/* Exported
	Returns reference to currently active locale string.
*/
const activeLocale = computed(() => i18n.activeLocale.value);

/* Internal
	Fetches translation messages for a given locale from server
	
	Returns a promise that resolves when the download is completed
*/
async function downloadTranslation(locale) {
	const uri = `/translations/${locale}.json`;

	logInfo.value
		? console.log("INFO", `⬅️🖥️ Downloading translations from '${uri}'.`)
		: "";

	const { data: translations } = await useFetch(uri);

	if (typeof translations.value != "object")
		throw Error(`Failed to download translations from '${uri}'`);

	// update global messages
	if (!i18n.messages.value[locale]) i18n.messages.value[locale] = {};
	Object.assign(i18n.messages.value[locale], translations.value);
	downloadedTranslations.push(locale);

	logInfo.value
		? console.log(
				"INFO",
				`⬅️🖥️ Downloaded translations for '${locale}':`,
				"Downloaded translations:",
				downloadedTranslations,
				"Current messages:",
				i18n.messages.value,
		  )
		: "";
}

/* Exported
	Changes active language to provided locale. Download the translations first if needed.
	Returns a promise that resolves with active locale when the change is completed (or an error thrown)
*/
async function changeLanguage(locale) {
	if (locale) {
		if (locale != i18n.activeLocale.value) {
			const previousLocale = i18n.activeLocale.value;
			const newLocale = locale.trim().toLowerCase();

			if (!downloadedTranslations.includes(locale)) {
				await downloadTranslation(newLocale);
			}

			// change the language
			i18n.activeLocale.value = newLocale;

			logInfo.value
				? console.log(
						"INFO",
						`🚩 Active language changed from '${previousLocale}' to '${i18n.activeLocale.value}'`,
				  )
				: "";

			// the change is completed - resolve.
			return i18n.activeLocale.value;
		} else {
			// no need to change anything - resolve.
			return i18n.activeLocale.value;
		}
	} else {
		throw Error("Failed to change the language. Provided locale is undefined.");
	}
}

/* Internal
	Function that adds currently active locale string (or forced one) to the path.
	Note! If "forcedLocale" is provided, then it is used independently of what locale is current.
	
	This function is used when no external function was provided in in18 initialization.
*/
const getLocalePath = (path, forcedLocale) => {
	let retVal = "";

	if (path) {
		const namespaces = path.trim().toLowerCase().split("/");
		// check that provided path do start with '/'
		if (namespaces && namespaces[0]?.trim() === "") {
			// check if path already contains a locale that we support
			if (supportedLocales.find((e) => e == namespaces[1])) {
				// remove the locale namespace, we will add new one.
				namespaces.splice(1, 1);
			}
			retVal = `/${
				forcedLocale ? forcedLocale : i18n.activeLocale.value
			}${namespaces.join("/")}`;
		} else {
			console.log(null[`DEV_ASSERT_unsupported_path_${path}`]);
		}
	} else {
		console.log(null.DEV_ASSERT_provided_path_is_undefined);
	}

	return retVal;
};

/* Internal
	Default i18n configuration usually overwritten when i18n is initialized by external i18n provider */
const i18n = {
	messages: ref({}), // reference to currently store language messages
	activeLocale: ref("en"), // reference to localestring that is currently active
	fallbackLocale: ref("en"), // reference to locale string used for fallback/default
	localePath: getLocalePath, // function applying locale to path
	t: (lKey) => lKey, // function transforming lKey to translated text
	n: (lKey) => lKey, // function transforming lKey to number
	i18nByVuetify: false,
};

/* Exported
	Overwrites internal i18n configuration with external ones.
	Note! I18n can be included in Vuetify plugin (default), or dependency 'nuxt/i18n'
*/
export function initializeI18n(
	vueApp, // Vue instace used to set global parameters as $t, $n, $tPath
	fallbackLocale_value, // Value as string. Default (=fallback) locale to use.
	activeLocale_reactive, // Reactive/Ref. Active (=current) locale. Changed when user changes language.
	messages_reactive, // Reactive/Ref. Active messages. Will be updated when translations are downloaded.
	tFunction, // Method. "Text transformer" function from i18n a module to use.
	nFunction, // Method. "Number transformer" function from i18n a module to use
	localePathFunction = null, // Method. "Router path transformer" function from external to use. I.e useLocalePath() from 'nuxt/i18n'
	i18nType = "vuetify", // Who is providing i18n? Vuetify or external plugin?
) {
	i18n.i18nByVuetify = i18nType == "vuetify" ? true : false;

	if (activeLocale_reactive?.value) i18n.activeLocale = activeLocale_reactive;

	if (fallbackLocale_value) i18n.fallbackLocale.value = fallbackLocale_value;

	if (messages_reactive.value) i18n.messages = messages_reactive;

	if (tFunction) i18n.t = tFunction;

	if (nFunction) i18n.n = nFunction;

	if (localePathFunction) i18n.localePath = localePathFunction;

	if (vueApp) {
		!vueApp.config.globalProperties?.$t
			? (vueApp.config.globalProperties.$t = tTransformer)
			: console.log(null.DEV_ASSERT_function_t_already_in_use);

		!vueApp.config.globalProperties?.$n
			? (vueApp.config.globalProperties.$n = nTransformer)
			: console.log(null.DEV_ASSERT_function_n_already_in_use);

		!vueApp.config.globalProperties?.$tPath
			? (vueApp.config.globalProperties.$tPath = pTransformer)
			: console.log(null.DEV_ASSERT_function_tPath_already_in_use);
	}

	logInfo.value
		? console.log(
				"INFO",
				`✅ Initialized I18n by '${i18nType}'.`,
				`Active:'${i18n.activeLocale.value}'`,
				tFunction ? "External: $t," : "Internal $t,",
				nFunction ? "$n" : "$n",
				localePathFunction ? "External $tPath." : "Internal $tPath.",
				"Downloaded translations:",
				downloadedTranslations,
				`Current messages:`,
				i18n.messages.value,
		  )
		: "";
}

/* Exported
	Calls a transformer function that adds currently active locale string (or forced one) to the path.
	Note! If "forcedLocale" is provided, then it is used independently of what locale is current.
	It is mapped globally in the app to be easily reached with $tPath() in <templates> or tPath() in <scripts> */
const pTransformer = (path, forcedLocale) => {
	const retVal = i18n.localePath(path, forcedLocale);

	/* console.log(
		'👀👀👀',
		`⪢ tPath.`,
		`Transforming '${path}' => '${retVal}'`,
		forcedLocale
			? `(forcing '${forcedLocale}' even if active is '${i18n.activeLocale.value}')`
			: '',
	); */

	return retVal;
};

/* Exported
	Calls a transformer function that maps provided lKey (language key) with a translated text. 
	It is mapped globally in vue app to be easily reached with $t() in <templates> or t() in <scripts>
*/
const tTransformer = (lKey) => {
	let retVal = "";
	if (lKey) {
		if (i18n.i18nByVuetify) {
			// vuetify have a prefix in their language keys
			retVal = i18n.t(`$vuetify.${lKey}`);
		} else {
			retVal = i18n.t(lKey);
		}
	}
	/* console.log("👀👀👀", `⪢ t: Transforming '${lKey}' => '${retVal}'`); */
	return retVal;
};

/* Exported
	Calls a transformer function that maps a provided "lKey" (language key) with a number from messages.
	It is mapped globally in vue app to be easily reached with $n() in <templates> or n() in <scripts>
*/
const nTransformer = (lKey) => {
	const retVal = i18n.n(lKey);
	/* console.log("👀👀👀", `⪢ n: Transforming '${lKey}' => '${retVal}'`); */
	return retVal;
};

/* Use this composable */
export function useLanguages() {
	return {
		supportedLanguages: readonly(supportedLanguages), // Array with language items. Object (lKey, icon, locale)
		supportedLocales: readonly(supportedLanguages.map((e) => e.locale)), // Array with locale strings
		activeLanguage: readonly(activeLanguage), //  Language item that is currently active. Object (lKey, icon, locale)
		activeLocale: readonly(activeLocale), // Reference
		fallbackLocale: i18n.fallbackLocale.value, // Value
		changeLanguage, // Function changing language.
		tPath: pTransformer, // Function that adds current locale to path
		t: tTransformer, // Function that transform lKey to text strings
		n: nTransformer, // Function that  TODO test
	};
}
