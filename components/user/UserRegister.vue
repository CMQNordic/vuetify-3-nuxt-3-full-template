<template>
	<app-box centered middle width="664px">
		<app-card user>
			<app-text centered heading lKey="nav.register" />
			<app-tabs
				:tabs="['user.reg_traveler', 'user.reg_partner']"
				v-slot="{ tab }">
				<user-register-traveler v-if="tab == 'user.reg_traveler'" />
				<user-register-partner v-if="tab == 'user.reg_partner'" />
			</app-tabs>
		</app-card>
	</app-box>
</template>
