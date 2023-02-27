<script setup>
	const step = ref(1);
</script>

<template>
	<v-window v-model="step">
		<!-- Step 1 -->
		<v-window-item :value="1">
			<!-- step 1 -->
			<app-text title centered mb-2 lKey="user.qst_become_parter" />
			<app-alert type="info" mb-3 lKey="user.info_partner_register" />
			<app-input
				type="email"
				lKey="user.provide_email"
				lKeyOuter="user.provide_email_info" />
		</v-window-item>

		<!-- step 2 -->
		<v-window-item :value="2">
			<v-textarea
				label="Please write shortly about your services"
				variant="outlined"
				clear-icon="$close"
				counter="250"
				auto-grow
				rows="3"
				row-height="25"
				shaped />
		</v-window-item>

		<!-- step 3 -->
		<v-window-item :value="3">
			<div class="pa-4 text-center">
				<v-img
					class="mb-4"
					contain
					height="128"
					src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img>
				<h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
				<span class="text-caption text-grey">Thanks for signing up!</span>
			</div>
		</v-window-item>
	</v-window>

	<v-card-actions>
		<app-btn lKey="back" v-if="step === 2" @click="step--" />
		<v-spacer />
		<app-btn lKey="next" v-if="step < 3" @click="step++" />
	</v-card-actions>
</template>
