<!-- Description 
	Shows information text with a icon. Streches over whole width.
	
 -->
<script setup>
	defineProps({
		lKey: {
			type: String,
			default: undefined,
		},
		text: {
			type: String,
			default: '',
		},
		type: {
			type: String, // error | info | success
			default: 'info',
		},
		mt: {
			type: Boolean,
			default: false,
		},
		mt2: {
			type: Boolean,
			default: false,
		},
		mb: {
			type: Boolean,
			default: false,
		},
		mb2: {
			type: Boolean,
			default: false,
		},
		mb3: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<v-alert
		type="info"
		:class="{
			'text-body-2 text-md-body-1 elevation-3 pa-2 ': type == 'info',
			'mt-2': mt,
			'mt-4': mt2,
			'mb-4': mb,
			'mb-8': mb2,
			'mb-12': mb3,
		}">
		{{ lKey ? $t(lKey) : text }} <slot />
	</v-alert>
</template>
