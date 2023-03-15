<script setup>
	const props = defineProps({
		type: {
			type: String,
			default: undefined,
		},
	});
</script>

<template>
	<v-card
		:class="{
			'max-width elevation-7 pa-4 pa-md-6': type == 'user',
			'max-width elevation-0 pa-4 pa-md-6': type == 'flat',
		}">
		<slot />
	</v-card>
</template>

<style scoped>
	.max-width {
		max-width: var(--app-card-max-width);
	}
</style>
