<script setup>
	defineEmits(["selection"]);
	const props = defineProps({
		item: {
			type: Object,
			default: {}, // Item: "lKey"|"text" (required)  "icon" (optional)
		},
		itemBg: {
			type: String, // Background of a list item
			default: "undefined",
		},
		itemHeight: {
			type: [String, Number], // Height of the item as number of pixels.
			default: "undefined",
		},
		isSubitem: {
			type: Boolean, // If set then those items are part of sublist
			default: false,
		},
		isActivator: {
			type: Boolean, // If set then this item is a sublist parent
			default: false,
		},
	});

	/* 
		Use 
	*/
	const { log } = useLogs();
	const { visualizeButtons } = useDebug();

	// Left padding. Add as style to verwrites internal Vuetify
	// selectors that are buggy
	const defaultStyles = {
		"-webkit-padding-start": "10px !important",
		"padding-inline-start": "10px !important",
	};

	/* VARIANTS */
	/*  'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'  */
	// with elevated we d ot get backgrud on active item
	const ripple = true;
	const border = true;
	const variant = "elevated";
	// add trasparet t remve black clr. elevati  remves the elevati
	const classActiveActivator = "bg-transparent activator-item--active";
	// add accet t get the clr whe active.  elevati  remves the elevati
	const classActiveRegular = "text-accent regular-item--active";
	const activeClass = props.isActivator ? classActiveActivator : classActiveRegular;
	//  elevati  remves the elevati
	const defaultClasses = `elevation-0 bg-${props.itemBg}`;

	log.INFO(() =>
		console.log(
			`➖ <app-list-item>`,
			`${
				props.isSubitem ? "subitem  " : props.isActivator ? "activator" : "item     "
			}|h:${props.itemHeight || "   "}|w:${props.item.width || "   "}|bg:${
				props.itemBg
			}|${props.item.preIcon ? "(preIcon)" : ""} ${props.item.lKey || props.item.text} ${
				props.item.icon ? "(icon)" : ""
			}`,
		),
	);
</script>

<template>
	<v-list-item
		:rounded="true"
		:ripple="ripple"
		:border="border"
		:variant="variant"
		:style="defaultStyles"
		:min-height="itemHeight"
		:min-width="item.width || 'auto'"
		:active-class="activeClass"
		:class="[defaultClasses, '', { visualizeButtons }]"
		:active="item?.path && $route.path == $tPath(item.path)"
		@click.stop="$emit('selection', item)"
	>
		<!-- PREPENDED ICON-->
		<template v-if="item.preIcon" #prepend>
			<app-icon
				:icon="item.preIcon"
				:size="25"
				class="app-list-icon"
				:class="{ visualizeButtons }"
			/>
		</template>

		<!-- LABEL -->
		<span v-if="item"> {{ $t(item.lKey) }} {{ item.text }} </span>

		<!--  APPENDED ICON -->
		<template v-if="item.icon" #append>
			<app-icon
				:icon="item.icon"
				:size="25"
				class="app-list-icon"
				:class="{ visualizeButtons }"
			/>
		</template>
	</v-list-item>
</template>

<style scoped>
	.regular-item--active {
		/* Styling of regular items that are active */
		outline: 1px solid rgb(var(--v-theme-accent)) !important;
		/* outline: 1px solid rgb(128, 128, 128, 0.4) !important; */
		/* background-color: red !important; */
		/* text-decoration: underline; */
	}

	.activator-item--active {
		/* Styling of items of type activator that are active */
		/* background-color: red !important;*/
		/* text-transform: uppercase; */
		text-decoration: underline;
		font-weight: 600;
	}

	.app-list-icon {
		margin-left: 0 !important;
		margin-right: 7px !important;
		margin-bottom: 2px !important;
	}
</style>
