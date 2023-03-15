import navigationItems from "@/app/navigation-items.js";

const { log: ERROR } = useLogs();

/**
 * Returns navigation item identified by unique id
 * @param {string} uid - Unique identification (lKey or text)
 */
function getNavigationItem(uid) {
	const retVal = navigationItems.find((item) => item[1].lKey == uid)[1];
	if (!retVal) retVal = navigationItems.find((item) => item[1].text == uid)[1];

	console.log(`👀TEMP getNavigationItem(${uid}) =>`, retVal);
	retVal ?? ERROR(`getNavigationItem(${uid}). Item not found!`);

	return retVal || {};
}

/**
 * Returns array with items belonging to certain group id
 * @param {string} group - Group that contains several items
 * @param {string} [excludeLKey] - lKey id that shall be excluded from the group of items
 */
function getNavigationGroup(group, excludeLKey = "") {
	const retVal = navigationItems
		.filter((item) =>
			item[0] == group ? (item[1].lKey != excludeLKey ? true : false) : false,
		)
		.map((item) => item[1]);

	console.log(`👀TEMP getNavigationGroup(${group}) =>`, retVal);
	retVal ?? ERROR(`getNavigationGroup(${group}). Group not found!`);

	return retVal || [];
}

/**
 * This composable provides functionality for navigation items
 * @module useNavigationItems
 * @returns getNavigationItem - fff
 * */
export function useNavigationItems() {
	return {
		/**
		 * Function description
		 *
		 */
		getNavigationItem,
		getNavigationGroup,
	};
}
