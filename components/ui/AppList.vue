<!-- This component renders a list with list items or/and 					-->
<!-- content provided through slots (before or after items). 		   	-->
<!-- Items are defined in file: @/app/navigation-items.js -->
<script setup>
	import { APP_NAV_ITEM_HEIGHT } from "@/app/app-customization.js";

	defineEmits(["selection"]); // emits selected item object
	const props = defineProps({
		items: {
			type: Array, // [{lKey:'_' | text:'_' | sub:'_' | preIcon:'alias' | icon:'alias' | width:80 }]
			default: null,
		},
		variant: {
			type: String, // 'nav' | 'plain' | 'content'
			default: "plain",
		},
		/* Following are basically default values */
		listWidth: {
			type: Number, // Min width of the list as number of pixels
			default: 180,
		},
		listBg: {
			type: String, // List background
			default: "undefined",
		},
		itemBg: {
			type: String, // Item background
			default: "undefined",
		},
		itemsPx: {
			type: Number, // horizontal space around items container, 1 => 4 px
			default: 4,
		},
		itemsPt: {
			type: Number, // vertical space around items container, 1 => 4 px
			default: 0,
		},
		itemsPb: {
			type: Number, // vertical space around items container, 1 => 4 px
			default: 2,
		},
		itemGap: {
			type: Number, // Space between items, 1 => 4 px
			default: 1,
		},
	});

	/* Use */
	const { visualizeBoxes, logDebug } = useDebug();

	/* Style with same height as navigation items */
	const itemHeight = props.variant == "nav" ? APP_NAV_ITEM_HEIGHT : undefined;

	logDebug.value
		? console.log(
				"DEBUG",
				`👀 <app-list> variant:'${props.variant}'`,
				"\n➖ items:",
				props.items,
				`\n➖ list-bg:${props.listBg}`,
				`\n➖ list-width:${props.listWidth}`,
				`\n➖ items-pt-${props.itemsPt}`,
				`\n➖ items-px-${props.itemsPx}`,
				`\n➖ items-pb-${props.itemsPb}`,
				`\n➖ item-gap:${props.itemGap}`,
		  )
		: "";
</script>

<template>
	<v-list
		:bg-color="listBg"
		:class="['pa-0 mt-2', { visualizeBoxes }]"
		:min-width="listWidth"
	>
		<!-- SLOT: BEFORE ITEMS-->
		<!-- Placed in wrapper stretched to full width -->
		<div v-if="$slots['prepend']" :class="{ visualizeBoxes }">
			<slot name="prepend" />
		</div>

		<!-- ITEMS -->
		<!-- Items placed in wrapper with defined (props) spacing -->
		<div
			:class="[
				'd-flex flex-column',
				`pt-${itemsPt}`,
				`px-${itemsPx}`,
				`pb-${itemsPb}`,
				{ visualizeBoxes },
			]"
			:style="`gap: ${itemGap * 4}px`"
		>
			<app-list-items
				v-if="items"
				:items="items"
				:item-bg="itemBg"
				:item-gap="itemGap"
				:item-height="itemHeight"
				@selection="$emit('selection', $event)"
			/>
		</div>

		<!-- SLOT: AFTER ITEMS -->
		<!-- Placed in wrapper stretched to full width -->
		<div v-if="$slots['append']" :class="{ visualizeBoxes }">
			<slot name="append" />
		</div>
	</v-list>
</template>
