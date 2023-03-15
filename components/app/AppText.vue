<!-- Description
	A wrapper for a text that applies different styles and transformations.
	Note. Takes curret themes and screen sizes into account. 
*/
-->
<script setup>
	const props = defineProps({
		tag: {
			type: String, // Type of html tag used for the string (default <div>)
			default: "div",
		},
		lKey: {
			type: String, // language key to be translated to text
			default: undefined,
		},
		text: {
			type: String, // just a text
			default: "",
		},
		heading: {
			type: Boolean, // default headdig
			default: false,
		},
		headingLarge: {
			type: Boolean, // bigger heading
			default: false,
		},
		bodyLarge: {
			type: Boolean, // bigger body
			default: false,
		},
		body: {
			type: Boolean, // default bdy
			default: false,
		},
		small: {
			type: Boolean, // default bdy
			default: false,
		},
		/*
			Alignments
		*/
		centered: {
			type: Boolean, // text is centered in parent
			default: false,
		},
		right: {
			type: Boolean, // text is centered in parent
			default: false,
		},
		mt1: {
			type: Boolean, // margin top
			default: false,
		},
		mt2: {
			type: Boolean, // margin top
			default: false,
		},
		mb1: {
			type: Boolean, // margin bottom
			default: false,
		},
		mb2: {
			type: Boolean, // margin bottom
			default: false,
		},
		mx1: {
			type: Boolean, // horizontal margin
			default: false,
		},
		px1: {
			type: Boolean, // horizontal padding
			default: false,
		},
		px2: {
			type: Boolean, // horizontal padding
			default: false,
		},
		/*
			Styles
		*/
		thin: {
			type: Boolean,
			default: false,
		},
		bold: {
			type: Boolean,
			default: false,
		},
		/*
			Decorations
		*/
		underline: {
			type: Boolean,
			default: false,
		},
		overstrike: {
			type: Boolean,
			default: false,
		},
		overline: {
			type: Boolean,
			default: false,
		},
		/*
			Transforms
		*/
		truncate: {
			type: Boolean, // truncates words that overflow the parent with "..." at end
			default: false,
		},
		capital: {
			type: Boolean, // "hello world" to "Hello world"
			default: false,
		},
		upper: {
			type: Boolean,
			default: false,
		},
		lower: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		italic: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<component
		:is="tag"
		:class="{
			/* Defaults */
			'text-wrap': !truncate,
			'text-break': !truncate,
			/* Templates */
			heading: heading,
			'heading--large': headingLarge,
			body: body,
			'body--large': bodyLarge,
			'text-caption': small,
			/* Alignments */
			'text-center': centered,
			'text-right': right,
			'mt-3': mt1,
			'mt-7': mt2,
			'mb-3': mb1,
			'mb-7': mb2,
			'mx-3': mx1,
			'px-2': px1,
			'px-8': px2,
			/* Styles */
			'font-weight-thin': thin,
			'font-weight-bold': bold,
			/* Decorations */
			'text-decoration-underline': underline,
			'text-decoration-line-through': overstrike,
			'text-decoration-overline': overline,
			/* Transforms */
			'text-truncate': truncate,
			'text-capitalize': capital,
			'text-uppercase': upper,
			'text-lowercase': lower,
			'text-disabled': disabled,
			'font-italic': italic,
			'debug-visualize-layouts': true,
		}"
	>
		<slot /> {{ lKey ? $t(lKey) : text }}
	</component>
</template>

<style scoped>
	.heading {
		font-size: var(--app-heading-font-size);
		font-family: var(--app-heading-font-family);
		line-height: var(--app-heading-line-height);
		font-weight: var(--app-heading-font-weight);
		color: #254642;
	}

	.heading--large {
		font-size: calc(var(--app-heading-font-size) + 0.5rem);
		font-family: var(--app-heading-font-family);
		line-height: var(--app-heading-line-height);
		font-weight: var(--app-heading-font-weight);
		color: #254642;
	}

	.body {
		font-size: var(app-root-font-size);
		font-family: var(--app-root-text-font);
		line-height: var(--app-root-line-height);
		font-weight: var(--app-root-font-weight);
		color: #66717d;
	}

	.body--large {
		font-size: calc(var(--app-root-font-size) + 0.175rem);
		font-family: var(--app-root-text-font);
		line-height: calc(var(--app-root-line-height) + 0.1);
		font-weight: 400;
		color: #66717d;
	}

	.debug-visualize {
		border: 2px dotted red !important;
	}
</style>
