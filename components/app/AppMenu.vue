<!-- This component renders a hoovering menu with list items   -->
<!-- or/and content provided through slots. 						   -->
<script setup>
	const emit = defineEmits(["selection"]); // emits selected item object
	defineProps({
		items: {
			type: Array, // item: "lKey"|"text" (required)  "icon" (optional)
			default: [],
		},
		location: {
			type: String, // Combinations of top|center|bottom and left|center|right
			default: "bottom center",
		},
		activator: {
			type: String, // Trigger that opens this menu?
			default: "parent",
		},
		nav: {
			type: Boolean, // If set styled similar as navigation items
			default: false,
		},
	});

	/* Handle selections and close */
	const showMenu = ref(false);
	function handleSelection(item) {
		if (item) emit("selection", item);
		showMenu.value = false;
	}
</script>

<template>
	<v-menu
		v-model="showMenu"
		:location="location"
		:activator="activator"
		:close-on-back="true"
		:close-on-content-click="false"
	>
		<app-list
			:items="items"
			:variant="nav ? 'nav' : 'plain'"
			@selection="handleSelection($event)"
		>
			<!-- before items -->
			<template #prepend>
				<!-- Close button -->
				<app-text right>
					<app-btn
						type="icon"
						icon="$close"
						@click.stop="handleSelection(null)"
						class="ma-1"
					/>
				</app-text>
			</template>

			<!-- after items -->
			<template #append>
				<slot name="append" />
			</template>
		</app-list>
	</v-menu>
</template>
