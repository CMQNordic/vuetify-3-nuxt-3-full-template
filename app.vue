<script setup>
	const { log } = useLogs();
	log.INFO((i) => console.log(i, `Initialized app.vue`));
	onMounted(() => log.INFO((i) => console.log(i, `Mounted app.vue`)));
</script>

<template>
	<v-app>
		<TheHeader />
		<TheMain>
			<NuxtPage />
		</TheMain>
		<TheFooter />
	</v-app>
</template>

