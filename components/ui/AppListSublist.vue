<script setup>
	import { useNavigationItems } from "@/composables/useNavigationItems";

	defineEmits(["selection"]);
	const props = defineProps({
		item: {
			type: Object,
			required: true, // Item: "lKey"|"text" (required)  "icon" (optional)
		},
		itemBg: {
			type: String, // Background of a list item
			default: "undefined",
		},
		itemGap: {
			type: Number, // Space between items, 1 => 4 px
			default: 2,
		},
		itemHeight: {
			type: [String, Number], // Height of the item as number of pixels.
			default: "undefined",
		},
		isSubitem: {
			type: Boolean, // If set then those items are part of sublist
			default: false,
		},
		sublistIndent: {
			type: Number, // Indent of the sublist, 1 => 4 px
			default: 0,
		},
	});

	/* Use */
	const { visualizeBoxes } = useDebug();

	/* Fetch items for sublist */
	const { getNavigationGroup } = useNavigationItems();
	const subitems = getNavigationGroup(props.item.sub);

	/* Styling classes*/
	// Sublist shall be indented relative to its activator
	const sublistIndentClass = `ms-${props.sublistIndent + 4}`;
</script>

<template>
	<v-list-group active-color="black">
		<template v-slot:activator="{ props }">
			<!-- Activator (=sublist parent) -->
			<app-list-item
				v-bind="props"
				:item="item"
				:item-bg="itemBg"
				:item-gap="itemGap"
				:item-height="itemHeight"
				:is-subitem="isSubitem"
				:is-activator="true"
			/>
		</template>

		<!-- Sublist -->
		<!-- Hidden by default, in styled wrapper -->
		<div
			:class="[
				sublistIndentClass,
				`mt-${Math.round(itemGap / 2)}`,
				'd-flex flex-column',
				{ visualizeBoxes },
			]"
			:style="`gap: ${itemGap * 4}px`"
		>
			<app-list-items
				v-if="subitems.length"
				:items="subitems"
				:item-bg="itemBg"
				:item-gap="itemGap"
				:item-height="itemHeight"
				:sublist-indent="sublistIndent + 2"
				:is-subitem="true"
				@selection="$emit('selection', $event)"
			/>
			<!-- TODO -->
			<app-box
				v-else
				width="222px"
				height="111px"
				centered
				style="border: 2px solid black"
			>
				222x111
			</app-box>
		</div>
	</v-list-group>
</template>
