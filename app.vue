<script setup>
	const { logInfo } = useDebug();
	logInfo.value ? console.log("INFO", `✅ app.vue initialized`) : "";
	onMounted(() => (logInfo.value ? console.log("INFO", `✅ app.vue mounted`) : ""));
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

