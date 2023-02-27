<script setup>
	import AppListSublist from "@/components/ui/AppListSublist.vue";
	import AppListItem from "@/components/ui/AppListItem.vue";

	defineEmits(["selection"]);
	const props = defineProps({
		items: {
			type: Array, // Item: "lKey"|"text" (required)  "icon" (optional)
			required: true,
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
		sublistIndent: {
			type: Number, // Indent of the sublist, 1 => 4 px
			default: 0,
		},
		isSubitem: {
			type: Boolean, // If set then those items are part of sublist
			default: false,
		},
	});
</script>

<template>
	<template v-for="(item, i) of items" :key="i">
		<!-- An item can be eather "normal" or  "subitem" (activator with sublist)  -->
		<component
			:is="!item.sub ? AppListItem : AppListSublist"
			:item="item"
			:item-bg="itemBg"
			:item-gap="itemGap"
			:item-height="itemHeight"
			:is-subitem="isSubitem"
			:sublist-indent="sublistIndent"
			@selection="$emit('selection', $event)"
		/>
	</template>
</template>
