<script setup>
	const email = ref('');
	const showProgress = ref(false);

	const emailRules = [
		(v) => !!v || '<span>E-mail is required</span>',
		(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
	];

	const handleResetRequest = () => {
		// TODO implement resetting backend
		setTimeout(() => {
			// fake answer received
			showProgress.value = false;
		}, 2000);
	};

	const handle = () => {};
</script>

<template>
	<app-box centered middle width="664px">
		<app-card type="user" class="app-progress-container">
			<app-progress
				activator="#user-reset-button"
				v-model="showProgress"
				@close="showProgress = false" />

			<app-text centered heading lKey="user.reset" />

			<v-form ref="thisForm">
				<app-input
					type="email"
					:form="$refs.thisForm"
					:rules="emailRules"
					validate-on="submit"
					lKey="user.reset_enter_email"
					v-model="email"
					required
					@click="handle" />

				<app-alert type="info" lKey="user.reset_info" mb-2 />

				<app-text right>
					<app-btn
						type="submit"
						lKey="btn.reset"
						id="user-reset-button"
						@click="handleResetRequest" />
				</app-text>
			</v-form>

			<!-- Back to sign in -->
			<app-text centered lKey="user.back_to">
				<app-link to="/login" lKey="user.link_signin" />
			</app-text>
		</app-card>
	</app-box>
</template>

<style lang="postcss" scoped>
	@import '@/assets/css/mixins/unshift.css';

	@mixin hoover a {
		font-weight: 600;
		text-decoration: underline;
	}
</style>
