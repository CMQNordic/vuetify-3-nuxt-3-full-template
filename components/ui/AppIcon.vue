<script setup>
	/* 'color' */
	/* 'size' as width number or 'x-small' | 'small' | 'default' | 'large' | 'x-large' */
	const props = defineProps({
		icon: {
			type: String,
			default: undefined,
		},
	});
</script>

<template>
	<v-icon v-if="icon" :icon="icon" />
</template>
