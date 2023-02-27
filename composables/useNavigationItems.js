import navigationItems from "@/app/navigation-items.js";

/* Returns an item object identified by unique id (uid) - "lKey" or "text" 
*/
function getNavigationItem(uid) {
	const retVal = navigationItems.find((item) => item[1].lKey == uid)[1];
	if (!retVal) retVal = navigationItems.find((item) => item[1].text == uid)[1];
	// console.log("👀", `getNavigationItem(${uid}) =>`, retVal);
	!retVal ? console.error(`getNavigationItem(${uid}). Item not found!`) : "";
	return retVal || {};
}

/* Returns array with items belonging to certain group 
*/
function getNavigationGroup(group, excludeLKey = "") {
	const retVal = navigationItems
		.filter((item) =>
			item[0] == group ? (item[1].lKey != excludeLKey ? true : false) : false,
		)
		.map((item) => item[1]);
	/* 	console.log(
		"👀",
		`getNavigationGroup(${group}) ${excludeLKey ? `(exclude: ${excludeLKey})` : ``} =>`,
		retVal,
	); */
	!retVal ? console.error(`getNavigationGroup(${group}). Group not found!`) : "";
	return retVal || [];
}

export function useNavigationItems() {
	return {
		getNavigationItem,
		getNavigationGroup,
	};
}
