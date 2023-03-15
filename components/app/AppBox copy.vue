<script setup>
	const props = defineProps({
		tag: {
			type: String, // Type of html tag for content wrapper (default div)
			default: 'div',
		},

		height: {
			type: String, // Height of the box. '100vh' | '100%'  | '100px'
			default: 'unset',
		},
		width: {
			type: String, // Width of the box. '100vh' | '100%'  | '100px'
			default: '100%',
		},
		fullscreen: {
			type: Boolean, // ...
			default: false,
		},
		top0: {
			type: Boolean, // ...
			default: false,
		},
		alignLeft: {
			type: Boolean, // Aligns the box to left (if smaller than parent)
			default: false,
		},
		alignRight: {
			type: Boolean, // Aligns the box to right (if smaller than parent)
			default: false,
		},
		centered: {
			type: Boolean, // Horizontal alignment of content in the box
			default: false,
		},
		right: {
			type: Boolean, // Horizontal alignment of content in the box
			default: false,
		},
		middle: {
			type: Boolean, // Vertical alignment of content in the box
			default: false,
		},
		bottom: {
			type: Boolean, // Vertical alignment of of content in the box
			default: false,
		},
	});

	const width = props.fullscreen ? '100vw' : props.width;
	const height = props.fullscreen ? '100vh' : props.height;

	const fullScreenWidth = props.fullscreen || props.width == '100vw';
	const fullScreenHeight = props.fullscreen || props.height == '100vh';

	/* 
		Box 
	*/
	/* Width of the box shall never extend the parents  */
	/* width as then it might overflow						 */
	const boxWidth = computed(() =>
		props.fullscreen || props.width == '100vw' ? '100%' : props.width.trim(),
	);
	const boxHeight = computed(() => (props.fullscreen ? '100vh' : props.height));

	/* The box must be static when we have full screen width */
	/* because then left=0 stretch to far left. Otherwise relative. */
	/* 	const boxPositionType = computed(() =>
		props.fullscreen || props.width == '100vw' ? 'static' : 'relative',
	); */
	/* Horizontal alignment of the box when is's smaller than parent. */
	const boxMarginLeft = computed(() =>
		props.alignRight || (!props.alignLeft && !props.alignRight)
			? 'auto'
			: 'unset',
	);
	const boxMarginRight = computed(() =>
		props.alignLeft || (!props.alignLeft && !props.alignRight)
			? 'auto'
			: 'unset',
	);

	/*
		Background
	*/
	const backgroundLeft = computed(() =>
		props.fullscreen || props.width.trim() == '100vw' ? 0 : 'unset',
	);
	const backgroundTop = computed(() => (props.top0 ? 0 : 'unset'));

	/*
		Content
	*/
	const contentHorizontalAlignment = computed(() => {
		if (props.centered) {
			return 'center';
		} else if (props.right) {
			return 'flex-end';
		} else {
			return 'flex-start';
		}
	});
	const contentVerticalAlignment = computed(() => {
		if (props.middle) {
			return 'center';
		} else if (props.bottom) {
			return 'flex-end';
		} else {
			return 'flex-start';
		}
	});

	/* console.log(`AppBox()\n👀 width:`, props.width, ' height:', props.height);
	console.log('👀 contentHorizontalAlignment:', contentHorizontalAlignment.value);
	console.log(`👀 contentVerticalAlignment:`, contentVerticalAlignment.value); */
</script>

<template>
	<div
		class="app-box visualize"
		:class="{
			'app-box--fullheight': fullScreenHeight,
			'app-box--fullwidth': fullScreenWidth,
		}">
		<div class="app-box__background visualize" v-if="$slots['background']">
			<slot name="background" />
		</div>

		<component :is="tag" class="app-box__content visualize">
			<slot name="default">&nbsp;</slot>
			{{ fullScreenWidth }} {{ fullScreenHeight }}
		</component>
	</div>
</template>

<style lang="postcss" scoped>
	.app-box {
		position: relative;

		/* Provided provided sizing by default */
		width: v-bind(width);
		height: unset;

		/* Vertical alignment of the box */
		margin-left: v-bind(boxMarginLeft);
		margin-right: v-bind(boxMarginRight);

		/* Vertical & horizontal alignment of the content */
		display: flex;
		justify-content: v-bind(contentHorizontalAlignment);
		align-items: v-bind(contentVerticalAlignment);

		&--fullwidth {
			/* The box must be positioned static when we have full viewport width */
			/* because then left=0, top=0 will move to far left/top. */
			position: relative;
			width: 100%;
		}
		&--fullheight {
			/* The box must be positioned static when we have full viewport width */
			/* because then left=0, top=0 will move to far left/top. */
			position: relative;
			height: calc(
				100vh - var(--v-layout-top, 0px) - var(--app-header-top-padding, 0px) -
					var(--app-header-top-margin, 0px) - var(--v-layout-bottom, 0px)
			);

			//position: relative;
			//top: calc(0px - var(--v-layout-top, 0px));
		}

		&__background {
			z-index: 2;

			/* Make sure the provided background is stretched to its wrapper */
			&:deep(:nth-child(1)) {
				width: 100%;
				height: 100%;
				border: 3px dotted black !important;
			}

			position: absolute;
			top: 0;
			left: 0;

			width: 100%;
			height: 100%;
		}

		&__content {
			z-index: 3;
		}
	}

	/* 	.app-box-top-0-customization {
		height: calc(
			100% - var(--v-layout-top, 0px) - var(--app-header-top-padding, 0px) -
				var(--app-header-top-margin, 0px)
		) !important;
	} */

	.visualize {
		border: 3px dotted black !important;
	}
</style>
