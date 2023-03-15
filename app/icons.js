/**********************************************/
/* Customization of globally accessible icons */
/**********************************************/
/* 
	Definitions of global icons that can be reached i every component.
	Note! Right now we only support only svg icons 

	First import the icon from its dependency such as '@mdi/js' or a component 
	file (in case of svg @/components/icons/user.vue). Then add alias name to 
	globalAliases and it will be available globally too use with:
	
	<app-icon icon="$test-icon" /> // for imported icon: "test-icon": testIcon	 
	
	Material Design SVG Icons
	We ca also import used MDI SVG icons directly in components that use them. Dependency: @mdi/js.
	It's described in https://next.vuetifyjs.com/en/features/icon-fonts/#material-design-icons-js-svg 
	<script> import { mdiAccount } from '@mdi/js'
	<template> <v-icon :icon="mdiAccount" /> */

/* ADD IMPORTS HERE  */
/*
	For SVG Vue icons:
	Import whole vue component that embeds the SVG.
	
	For Material Design Icons:
	Dependency: @mdi/js
	
	For Font Awesome:
	Dependency:  @fortawesome/free-solid-svg-icons
	Dependency:  @fortawesome/free-regular-svg-icons
	Dependency:  @fortawesome/free-brands-svg-icons */
import { mdiAccount } from "@mdi/js";
import { mdiCheck } from "@mdi/js";

/* Add "fa icons" here */
const faIcons = [];
/*  
	Font Awesome icons must be added into this array to be accessed globally */

/* ADD ALIASES HERE */
const globalAliases = {
	user: mdiAccount,
	"mdi-check": mdiCheck,
};
/* 
	This aliases can be easily reached globally
*/

/**********************************************/
/************* DO NOT CHANGE ******************/
/**********************************************/
import { fa as faSet } from "vuetify/iconsets/fa-svg";
import { flags as flagAliases } from "@/app/languages.js";
import { mdi as mdiSet, aliases as vuetifyAliases } from "vuetify/iconsets/mdi-svg";

export { faIcons };
export const fa = faSet;
export const mdi = mdiSet;
export const aliases = {
	...vuetifyAliases,
	...globalAliases,
	...flagAliases,
};
