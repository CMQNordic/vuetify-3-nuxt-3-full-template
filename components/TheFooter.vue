<script setup>
	/* 
		Use 
	*/
	const { log } = useLogs();
	const { visualizeLayouts } = useDebug();

	log.INFO((i) => console.log(i, `Initialized TheFooter`));
</script>

<template>
	<!-- Footer -->
	<v-footer app class="the-footer elevation-0" :class="{ visualizeLayouts }">
		<v-row
			no-gutters
			class="justify-center text-overline font-weight-black"
			:class="{ visualizeLayouts }"
		>
			<p class="my-auto">I'm the footer</p>
			<v-spacer />
			<p class="my-auto">See how I was built</p>
			<v-btn
				icon
				variant="plain"
				href="https://dev.to/czerma/how-to-build-optimized-vuetify-3-nuxt-3-project-4l5k"
				target="_blanc"
			>
				<app-icon icon="$info" color="accent" />
			</v-btn>
		</v-row>
	</v-footer>
</template>

<style scoped>
	.the-footer {
		margin-bottom: var(--app-footer-bottom-margin, 0px) !important;
		padding-bottom: var(--app-footer-bottom-padding, 0px) !important;
		padding-left: var(--app-footer-x-padding, 0px) !important;
		padding-right: var(--app-footer-x-padding, 0px) !important;
	}
</style>
