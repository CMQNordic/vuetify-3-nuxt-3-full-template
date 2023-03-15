<script setup>
	const { log } = useLogs();
	const { visualizeLayouts } = useDebug();

	log.INFO((i) => console.log(i, `Initialized TheMain`));
</script>

<template>
	<!-- Main -->
	<v-main class="the-main" :class="{ visualizeLayouts }">
		<v-container style="min-height: 100%" class="pa-0" :class="{ visualizeLayouts }">
			<slot />
		</v-container>
	</v-main>
</template>

<style scoped>
	.the-main {
		/* Only margin and paddings are added on to the v-layout-top to get the offset */
		padding-top: calc(
			var(--app-header-top-margin, 0px) + var(--app-header-top-padding, 0px) +
				var(--v-layout-top, 0px) + 5px
		);
		padding-bottom: calc(
			var(--app-footer-bottom-offset, 0px) + var(--v-layout-bottom, 0px)
		);
		margin-left: var(--app-main-x-padding, 0px);
		margin-right: var(--app-main-x-padding, 0px);
	}
</style>
