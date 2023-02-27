<script setup>
	import { mdiEmailOutline, mdiLockOutline, mdiEye, mdiEyeOff } from '@mdi/js ';
	const showPassword = ref(false);
</script>

<template>
	<app-box centered middle height='100%' width="664px">
		<app-card type="user" class="app-progress-wrapper">
			<AppProgress activator="#user-login-button" />

			<app-text centered heading lKey="nav.signin" />
			<app-alert type="info" lKey="user.info_traveler_login" />
			<v-form class="mt-8 mt-md-12 pa-4">
				<!-- Email -->
				<app-input
					:prepend-inner-icon="mdiEmailOutline"
					lKey="user.enter_email"
					autocomplete="username" />

				<!-- Password -->
				<app-input
					:type="showPassword ? 'text' : 'password'"
					:append-inner-icon="showPassword ? mdiEyeOff : mdiEye"
					:prepend-inner-icon="mdiLockOutline"
					@click:append-inner="showPassword = !showPassword"
					lKey="user.enter_password"
					autocomplete="current-password" />

				<!-- Remember me -->
				<v-checkbox-btn
					:label="$t('user.qst_remember_me')"
					density="compact"
					class="text-subtitle-1" />

				<!-- Forgot password? Reset -->
				<app-text right lKey="user.qst_forgot_psw">
					<app-link lKey="user.link_reset" to="/reset" />
				</app-text>

				<!-- log in button -->
				<v-btn
					id="user-login-button"
					size="large"
					block
					class="elevation-2 font-weight-bold bg-btn mt-3 mb-12">
					{{ $t('btn.login') }}
				</v-btn>

				<!-- New user? Register -->
				<app-text centered lKey="user.qst_new_user">
					<app-link to="/register" lKey="user.link_register" />
				</app-text>
			</v-form>
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
