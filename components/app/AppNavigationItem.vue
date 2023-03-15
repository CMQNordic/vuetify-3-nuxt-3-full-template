<script setup>
	import { APP_NAV_ITEM_HEIGHT } from "@/app/app-customization.js";

	defineEmits(["click"]);
	const props = defineProps({
		lKey: {
			type: String, // language key for fetching translation
			default: undefined,
		},
		text: {
			type: String, // plain label text if lKey is not used
			default: "",
		},
		small: {
			type: Boolean, // if set the item is smaller than regular
			default: false,
		},
		minWidth: {
			type: Number, // if set min width as number of pixles
			default: undefined,
		},
	});

	const { getNavigationItem } = useNavigationItems();
	const { visualizeButtons } = useDebug();

	const item = getNavigationItem(props.lKey);
</script>

<template>
	<v-btn
		v-if="item"
		flat
		:min-width="minWidth"
		:size="small ? 'auto' : 'small'"
		:min-height="APP_NAV_ITEM_HEIGHT"
		:active="item?.path && $route.path == $tPath(item.path)"
		:class="{
			'navigation-item--regular': !small,
			'navigation-item--small': small,
			'justify-end': true,
			visualizeButtons,
		}"
		@click="$emit('click', item)"
	>
		<!-- this slot exports text & icon back to parent -->
		<span v-if="$slots['default']">
			<slot name="default" :text="lKey ? $t(lKey) : text" :icon="item?.icon" />
		</span>
		<span v-else>
			{{ lKey ? $t(lKey) : text }}
		</span>
	</v-btn>
</template>

<style>
	.navigation-item--regular {
		font-size: var(--app-nav-item-font-size) !important;
		font-weight: var(--app-nav-item-font-weight) !important;
		letter-spacing: var(--app-nav-item-letter-spacing) !important;
		text-transform: capitalize !important;
		line-height: 1.5rem !important;
	}
</style>

<style lang="postcss" scoped>
	@import "@/assets/css/mixins/display.css";

	.navigation-item--regular:not(:first-child) {
		margin-left: 8px;

		@mixin lg {
			margin-left: 20px;
		}
	}

	.navigation-item--small {
		font-size: calc(var(--app-nav-item-font-size) - 0.145rem);
		letter-spacing: var(--app-nav-item-letter-spacing);
		text-transform: capitalize;
		font-weight: 400;
		margin-left: 5px;
		padding: 3px 10px;
	}
</style>
