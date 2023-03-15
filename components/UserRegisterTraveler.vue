<template>
	<app-text centered capital heading-2 lKey="welcome">!</app-text>
	<app-text centered title mb-2 lKey="user.welcome_traveler" />
	<app-alert lKey="user.info_traveler_register" />
	<!-- Back to signin -->
	<app-text centered lKey="user.qst_have_account" class="mt-8 mt-md-12 mb-4">
		<app-link to="/login" lKey="user.link_signin" />
	</app-text>
</template>

<style lang="postcss" scoped>
	@import '@/assets/css/mixins/unshift.css';

	@mixin hoover a {
		font-weight: 600;
		text-decoration: underline;
	}
</style>
