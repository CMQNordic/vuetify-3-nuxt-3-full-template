/********************************************************/
/* Customization of this app using javascript variables */
/********************************************************/
/* 
	Customization of some components in Vuetify must be done 
 	with props. At the curret moment there is efficient way  
 	to pass css variables to <script> section of .vue files. 
 	Therefore for those components we use javascript variables.
*/

/* Height of the header as number of pixels i.e 94 			*/
/* Used in: <v-app-bar height="number"> 							*/
export const APP_HEADER_HEIGHT = 94;

/* Height of navigation items as number of pixels i.e 38 	*/
/*Used in: top and side navigation  								*/
export const APP_NAV_ITEM_HEIGHT = 38;

/* Customized themes 													*/
import customThemes from "@/app/themes.css?inline";
import { cssToJs } from "@/helpers/cssToJs.js";
export const themes = cssToJs(customThemes); /* {} to disable */
