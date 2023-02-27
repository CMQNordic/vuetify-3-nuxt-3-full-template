/* 
	This plugin enables Font Awesome icons that can be used globally

	Dependency: @fortawesome/fontawesome-svg-core
	Dependency: @fortawesome/vue-fontawesome 
	
	Add FA icons as described in https://fontawesome.com/docs/web/use-with/vue/add-icons  */

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIcons } from "@/app/icons.js";

const { logInfo } = useDebug();

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
	library.add(...faIcons);

	if (!process.server && logInfo.value)
		console.log("INFO", `✅ Initialized Font Awesome Icons:`, faIcons);
});
