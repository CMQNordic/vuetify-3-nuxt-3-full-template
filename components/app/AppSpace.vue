<!-- Description
	Add an vertical space of font size x2 or x3
	
	Example:
	<app-space /> add 16px space
	<app-space x2 /> add 32 px space
	<app-space x3 /> ass 48 px space
	
 -->
<script setup>
	const props = defineProps({
		x2: {
			type: Boolean,
			default: false,
		},
		x3: {
			type: Boolean,
			default: false,
		},
		x4: {
			type: Boolean,
			default: false,
		},
		x5: {
			type: Boolean,
			default: false,
		},
	});

	let nbr = 1;
	if (props.x2) nbr = 2;
	if (props.x3) nbr = 3;
	if (props.x4) nbr = 4;
	if (props.x5) nbr = 5;
</script>

<template>
	<div class="app-space" />
</template>

<style scoped>
	.app-space {
		height: calc(var(--app-root-font-size, 0) * v-bind(nbr));
	}
</style>
