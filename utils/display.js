/* Returns width of the scrollbar */
const scrollbarWidth = () => {
	const retVal = (window?.innerWidth || 0) - (document?.body?.clientWidth || 0);
	console.log("TEMP 👀", `helpers/display/scrollbarWidth():`, retVal);
	return retVal;
};

/* Returns display offsets for an html element    
	
	Usage:
 	const thisBox = ref({});  // <div ref="thisBox">html element</div>
	const thisBoxOffsets = displayOffsets(thisBox.value);
	const left = `${thisBoxOffsets.left}px`
	const top = `${thisBoxOffsets.top}px`
*/
const displayOffsets = (elem) => {
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
		log.error(
			"displayOffsets@helpers/display.js: Failed to get offsets for ",
			elem,
			"",
			error,
		);
	}

	console.log("👀 TEMP ", `helpers/display/displayOffsets():`, retVal);

	return retVal || {};
};

export { scrollbarWidth, displayOffsets };
