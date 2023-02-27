<script setup>
	import { useLanguages } from '~~/composables/useLanguages.js';
	const { t } = useLanguages();

	const emit = defineEmits(['cleared']);
	const props = defineProps({
		lKey: {
			type: String, // label (inner field) text fetched by language key for translations
			default: null,
		},
		lKeyOuter: {
			type: String, // label (outer field) fetched by this language key
			default: null,
		},
		form: {
			type: Object, // parent form contaning validate(), reset() and resetValidation()functions
			default: {},
		},
	});

	/* 	console.log(`👀👀 intialized form=`, props.form); */

	const labelText = props.lKey ? t(props.lKey) : '';
	const labelTextOuter = props.lKeyOuter ? t(props.lKeyOuter) : '';
	let currentLabel = ref(labelText);

	/* Event handlers */
	const handleFocusChange = (isFocused, value) => {
		if (isFocused || value?.length) {
			currentLabel.value = labelTextOuter || labelText;
		} else {
			currentLabel.value = labelText;
		}
	};

	const handleValueChange = (value) => {
		/* 		console.log(`👀👀 form = `, props.form);
		console.log(`👀👀 form.validate = `, props.form.validate);
		console.log(`👀👀 form.reset = `, props.form.reset);
		console.log(`👀👀 form.resetValidation = `, props.form.resetValidation); */
		if (!value) {
			console.log(`➡️➡️➡️ Emits cleared`);
			emit('cleared');
		}
	};
</script>

<!-- variant="outlined" -->
<template>
	<v-text-field
		ref="thisElement"
		:label="currentLabel"
		clearable
		clear-icon="$close"
		@update:focused="handleFocusChange($event, $refs.thisElement?.value)"
		@update:modelValue="handleValueChange($event, $refs.thisElement?.value)">
	</v-text-field>
</template>
