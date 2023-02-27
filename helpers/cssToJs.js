import parse from "style-to-object";

function removeComments(cssAsString) {
	let retVal = cssAsString?.trim();
	let commentStart = retVal?.indexOf("/*");
	let commentEnd;

	while (commentStart >= 0) {
		commentEnd = retVal?.indexOf("*/");
		retVal = (retVal.substr(0, commentStart - 1) + retVal.substr(commentEnd + 2))?.trim();
		commentStart = retVal?.indexOf("/*");
	}

	return retVal;
}

function convert(cssAsString) {
	let retVal = {};
	let objName;
	let objEnd;
	let obj;

	let string = cssAsString;
	let objStart = string?.indexOf("{");

	while (objStart > 0) {
		objEnd = string.indexOf("}");
		obj = parse(string.substring(objStart + 1, objEnd - 1) || "");
		objName = string.substring(0, objStart)?.trim();

		if (obj) retVal[objName] = obj;

		string = string.slice(objEnd + 1);
		objStart = string.indexOf("{");
	}

	return retVal;
}

/* 
	This fucti is parsig a css file t a bect
*/
export function cssToJs(cssAsString) {
	return convert(removeComments(cssAsString));
}
