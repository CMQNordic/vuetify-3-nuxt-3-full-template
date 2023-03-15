<script setup>
	const props = defineProps({
		to: {
			type: String,
			required: true,
		},
		lKey: {
			type: String,
			default: undefined,
		},
		text: {
			type: String,
			default: '',
		},
	});
</script>

<template>
	<nuxt-link :to="$tPath(to)">
		{{ lKey ? $t(lKey) : text }} <slot />
	</nuxt-link>
</template>
