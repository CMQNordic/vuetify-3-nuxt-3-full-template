<script setup>
	import { displayOffsets } from "~~/utils/display.js";
	const { visualizeBoxes } = useDebug();

	const props = defineProps({
		tag: {
			type: String, // Type of html tag for content wrapper
			default: "div",
		},
		width: {
			type: String, // Width of the box: 'fit-content' | 'vw' | '%'  | 'px' | 'rem' |
			default: "100%",
		},
		height: {
			/* Note! Be carefull setting 100% on expanding container with may	children, 			*/
			/* as then elements after this box will push out of the end of the parent container */
			type: String, // Height of the box. 'fit-content' | 'vh' | '%'  | 'px' | 'rem' |
			default: "fit-content",
		},
		alignLeft: {
			type: Boolean, // Aligns the box to left (only if bx is smaller than parent)
			default: false, // The box is centered by default
		},
		alignRight: {
			type: Boolean, // Aligns the box to left (only if bx is smaller than parent)
			default: false, // The box is centered by default
		},
		alignV: {
			type: Boolean, // If set the the box stretches to top/bottom of the viewport
			default: false,
		},
		alignVTop: {
			type: Boolean, // If set the the box stretches to top of the viewport
			default: false,
		},
		alignVBottom: {
			type: Boolean, // If set the the box stretches to bottom of the viewport
			default: false,
		},
		center: {
			type: Boolean, // Horizontal alignment of content
			default: false,
		},
		right: {
			type: Boolean, // Horizontal alignment of content
			default: false,
		},
		middle: {
			type: Boolean, // Vertical alignment of content
			default: false,
		},
		bottom: {
			type: Boolean, // Vertical alignment of of content
			default: false,
		},
		centered: {
			type: Boolean, // Vertical & Horizontal centered
			default: false,
		},
	});

	/* BOX OFFSETS */
	/* In some cases we need offsets to bottom, top and scrollbar width */
	const thisBox = ref(null);
	const top = ref(0);
	const bottom = ref(0);
	const scrollbar = ref(0);
	onMounted(() => {
		if (props.alignV || props.alignVTop || props.alignVBottom) {
			const offsets = displayOffsets(thisBox.value);

			top.value = offsets?.top || 0;
			bottom.value = offsets?.bottomOffset || 0;
			scrollbar.value = offsets?.scrollbarWidth || 0;
		}
	});

	/* BOX ALIGNMENT */
	/* The box is aligned in the document depending on the provided props */
	/* - var(--v-layout-top, 0px) */
	const boxMarginTop = computed(() => {
		let retVal = "unset";
		if (top.value && (props.alignV || props.alignVTop)) {
			/* move upper edge to the top of the viewport */
			retVal = `calc(0px - ${top.value}px)`;
		}
		/* console.log('DEBUGGING', `➡️➡️ boxMarginTop:`, retVal); */
		return retVal;
	});
	const boxMarginBottom = computed(() => {
		let retVal = "unset";
		if (bottom.value && (props.alignV || props.alignVBottom)) {
			/* move upper edge to the bottom of the viewport */
			retVal = `calc(0px - ${bottom.value}px)`;
		}
		/* console.log('DEBUGGING', `➡️➡️ boxMarginBottom:`, retVal); */
		return retVal;
	});
	const boxMarginLeft = computed(() => {
		let retVal = props.alignLeft ? "unset" : "auto";
		if (props.width == "100vw") {
			/* stretch fullwidth, taking scrollbar width it consideration */
			retVal = `calc(50% - 50vw + ${scrollbar.value ? scrollbar.value / 2 : 0}px)`;
		}
		/* console.log('DEBUGGING', `➡️➡️ boxMarginLeft:`, retVal); */
		return retVal;
	});
	const boxMarginRight = computed(() => {
		let retVal = props.alignRight ? "unset" : "auto";
		if (props.width == "100vw")
			/* stretch fullwidth, taking scrollbar width it consideration */
			retVal = `calc(50% - 50vw + ${scrollbar.value ? scrollbar.value / 2 : 0}px)`;
		/* 	console.log('DEBUGGING', `➡️➡️ boxMarginRight:`, retVal); */
		return retVal;
	});

	/* BOX DIMENSIONS */
	/* By default width is auto, but set it for fullscreen */
	const boxWidthValue = computed(() => {
		if (props.width == "100vw") return `calc(100vw - ${scrollbar.value}px)`;
		return "auto";
	});

	/* CONTENT ALIGNMENT */
	/* Horizontal and vertical alignment of the box */
	const contentHorizontalAlignment = computed(() => {
		if (props.center || props.centered) {
			return "center";
		} else if (props.right) {
			return "flex-end";
		} else {
			return "flex-start";
		}
	});
	const contentVerticalAlignment = computed(() => {
		if (props.middle || props.centered) {
			return "center";
		} else if (props.bottom) {
			return "flex-end";
		} else {
			return "flex-start";
		}
	});

	/* BACKGROUNDS */
	const darkBackground = ref(null);
	const lightBackground = ref(null);
</script>

<template>
	<!-- BOX -->
	<div
		ref="thisBox"
		class="app-box"
		:class="{
			'bg-black': darkBackground,
			'bg-white': lightBackground,
			visualizeBoxes,
		}"
	>
		<!-- CONTENT -->
		<component
			:is="tag"
			v-if="$slots['default']"
			class="app-box__content"
			:class="{ 'visualizeBoxes--dotted': visualizeBoxes }"
		>
			<slot name="default">&nbsp;</slot>
		</component>

		<!-- BACKGROUNDS -->
		<div v-if="$slots['background']" class="app-box__background">
			<!-- text will be as defined by background theme-->
			<slot name="background" />
		</div>
		<div v-if="$slots['backgroundDark']" class="app-box__background" ref="darkBackground">
			<!-- text will be light on dark background -->
			<slot name="backgroundDark" />
		</div>
		<div
			v-if="$slots['backgroundLight']"
			class="app-box__background"
			ref="lightBackground"
		>
			<!-- text will be dark on light background -->
			<slot name="backgroundLight" />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
	.app-box {
		z-index: 0; /* both content and background shall render on top of this */
		overflow: hidden; /* if contnet grows over box dimesions - hide it */
		position: relative; /* everything inside the box relates to it */

		/* Dimensions of this box */
		/* width: v-bind(boxWidthValue); */
		height: v-bind(height);
		max-width: v-bind(width);
		width: v-bind(width);

		/* alignment of this box  */
		margin-top: v-bind(boxMarginTop);
		margin-left: v-bind(boxMarginLeft);
		margin-right: v-bind(boxMarginRight);
		margin-bottom: v-bind(boxMarginBottom);

		/* For vertical & horizontal alignment of the content */
		display: flex;
		align-items: v-bind(contentVerticalAlignment);
		justify-content: v-bind(contentHorizontalAlignment);

		&__content {
			z-index: 2;
			word-break: break-word;
			/* Dimensions of the content are flex-item default */
		}

		&__background {
			z-index: 1;
			position: absolute; /* background is take out of the flow */

			width: 100%; /* match the box  */
			height: 100%;

			margin-left: v-bind(boxMarginLeft);
			margin-right: v-bind(boxMarginRight);

			/* Stretch the background element to this wrapper  */
			&:deep(:nth-child(1)) {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
