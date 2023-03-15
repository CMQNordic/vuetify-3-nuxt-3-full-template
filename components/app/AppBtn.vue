<script setup>
	const props = defineProps({
		type: {
			type: String, // 'default' | 'icon' | 'wide' |  |
			default: "default",
		},
		lKey: {
			type: String,
			default: undefined,
		},
		text: {
			type: String,
			default: "",
		},
		icon: {
			type: String,
			default: "",
		},
		wide: {
			type: Boolean,
			default: false,
		},
	});

	const { visualizeButtons } = useDebug();

	let appliedProperties = null;

	if (props.type == "icon") {
		appliedProperties = {
			size: 30,
			flat: true,
			ripple: false,
			icon: `${props.icon}`,
		};
	}

</script>

<template>
	<!-- 	<v-btn
		color="secondary"
		variant="elevated"
		elevation="2"
		:class="{
			'font-weight-black': true,
			'px-10': true,
			'px-16': wide,
		}"
	> -->
	<v-btn v-bind="appliedProperties" :class="{ visualizeButtons }"> </v-btn>
</template>
