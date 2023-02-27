/***********************************
 * Returns width of the scrollbar  *
 **********************************/
export function scrollbarWidth() {
	return (window?.innerWidth || 0) - (document?.body?.clientWidth || 0);
}

/*************************************************
 * Returns display offsets for an html element    *
 * ***********************************************
 * Usage:
 * const thisBox = ref({});  // <div ref="thisBox">...</div>
 * const thisBoxoffsets = elementOffsets(thisBox.value);
 * const offsetLeft = `${thisBoxoffsets.left}px`
 * const offsetTop = `${thisBoxoffsets.top}px`
 */
export function displayOffsets(elem) {
	let retVal = null;

	const scrollbarWidth = (window?.innerWidth || 0) - (document?.body?.clientWidth || 0);

	const windowHeight = Math.max(
		document.documentElement.scrollHeight,
		document.body.scrollHeight,
		document.documentElement.offsetHeight,
	);

	try {
		if (elem) {
			retVal = elem.getBoundingClientRect();
			if (retVal) {
				retVal.scrollbarWidth = scrollbarWidth >= 0 ? scrollbarWidth : 0;
				retVal.viewportHeight = windowHeight >= 0 ? windowHeight : 0;
				retVal.bottomOffset = retVal.viewportHeight - retVal.bottom;
			}
		}
	} catch (error) {
		log.error("displayOffsets@helpers.js: Failed to get offsets for ", elem, "", error);
	}

	/* 	console.log(`👀 elem:`, elem);
	console.log(`👀 displayOffsets:`, retVal); */

	return retVal || {};
}
