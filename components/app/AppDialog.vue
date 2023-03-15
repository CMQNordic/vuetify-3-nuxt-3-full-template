<script setup>
	const dialog = ref(false);
</script>

<template>
	<v-dialog v-model="dialog">
		<slot />
		<v-btn @click="dialog = false">Close Dialog</v-btn>
	</v-dialog>
</template>
