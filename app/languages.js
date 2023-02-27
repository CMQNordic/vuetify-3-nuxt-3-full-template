/************************************************/
/* Customization of languages and translations  */
/************************************************/

/* Supported languages (locales) */
/* 
	Locale definitions: https://www.npmjs.com/package/locale-codes	*/
export const supportedLocales = ["en", "pl", "es"];

/* Build in language(s) */
/* 
	Import translations file tha shall be part of the build package (first one = default)
	Additionally add the imported object to defaultLocales below!  Note! First definition
	in the array will become the active one.
	
	Important! 
	Naming of imported and added object shall be <locale>'
	 
	Note!
	Every supported language needs a translation .json file in @/public/translations.	 
 	Important! Naming of files added to "@/public/translations/" must be <locale>.json 
	Translations for other supported (non default) languages will be loaded in the       
 	background when needed. */
import en from "@/src/translations/en.json";
export const defaultLocales = { en };

/* Language flag icons */
/* 
	Every supported language need a flag icon used in language switcher widget			
	
	Import corresponding icons from "@/components/icons/flags/" and add its  	 
 	"key/value" pair to object below. 
	
	Important! 
	Key must be named 'flag-<locale>'  */
import flagEn from "@/components/icons/flags/flagEn.vue";
import flagPl from "@/components/icons/flags/flagPl.vue";
import flagEs from "@/components/icons/flags/flagEs.vue";
export const flags = {
	"flag-en": flagEn,
	"flag-pl": flagPl,
	"flag-es": flagEs,
};

/********************************************************************************/
/* Final Security check (only in dev) that configuration is ok. Do not change.  */
/********************************************************************************/
if (Object.keys(supportedLocales).length != Object.keys(flags).length)
	console.log(null.DEV_ASSERT_missmatch_in_customization_forgot_to_add_flags);

if (!Object.keys(defaultLocales)[0][0])
	console.log(null.DEV_ASSERT_error_in_customization_no_default_translations_found);
