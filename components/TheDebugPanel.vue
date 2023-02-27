<script setup>
	import { useDebug } from "@/composables/useDebug.js";

	const {
		logDebug,
		logInfo,
		logAll,
		setLogAll,
		visualizeLayouts,
		visualizeButtons,
		visualizeBoxes,
		visualizeAll,
		setVisualizeAll,
	} = useDebug();

	const logAllDummy = ref(logAll.value);
	const visualizeAllDummy = ref(visualizeAll.value);

	const switchDefaultProps = {
		color: "accent",
		density: "compact",
		"hide-details": true,
	};
</script>

<template>
	<div class="wrapper">
		<!-- Logging switches -->
		<app-text
			small
			bold
			upper
			>Logging</app-text
		>
		<v-switch
			v-bind="switchDefaultProps"
			v-model="logAllDummy"
			@update:modelValue="setLogAll()"
			label="All"
		/>
		<v-switch
			v-bind="switchDefaultProps"
			v-model="logInfo"
			:label="`Info: ${logInfo ? 'On' : 'Off'}`"
		/>
		<v-switch
			v-bind="switchDefaultProps"
			v-model="logDebug"
			:label="`Debug: ${logDebug ? 'On' : 'Off'}`"
		/>

		<!-- Visualization switches -->
		<app-text
			small
			bold
			upper
			>Visualize</app-text
		>
		<v-switch
			v-bind="switchDefaultProps"
			v-model="visualizeAllDummy"
			@update:modelValue="setVisualizeAll()"
			label="All"
		/>
		<v-switch
			v-bind="switchDefaultProps"
			v-model="visualizeBoxes"
			:label="`Boxes: ${visualizeBoxes ? 'On' : 'Off'}`"
		/>
		<v-switch
			v-bind="switchDefaultProps"
			v-model="visualizeButtons"
			:label="`Buttons: ${visualizeButtons ? 'On' : 'Off'}`"
		/>
		<v-switch
			v-bind="switchDefaultProps"
			v-model="visualizeLayouts"
			:label="`Layuts: ${visualizeLayouts ? 'On' : 'Off'}`"
		/>
	</div>
</template>

<style scoped>
	.wrapper {
		border: 1px solid rgba(211, 211, 211, 0.9);
		border-radius: 4px;
		padding: 5px;
	}
</style>

<!-- Global styles -->
<style>
	/* Visualization of layouts */
	.visualizeLayouts {
		background-color: hsla(195, 56%, 87%, 0.3) !important;
		outline: 1px solid rgb(166, 193, 201) !important;
	}

	/* Visualization of boxes */
	.visualizeBoxes {
		border: 2px solid lightcoral !important;
	}
	.visualizeBoxes--dotted {
		border: 2px dotted rgb(177, 77, 77) !important;
	}

	/* Visualization of buttons */
	.visualizeButtons {
		outline: 1px dotted lightcoral !important;
		background-color: hsla(0, 86%, 83%, 0.15) !important;
	}

	/* For temporary visualizations */
	.A {
		border: 2px dotted blue !important;
	}

	.B {
		outline: 2px solid red !important;
	}

	.C {
		background-color: rgba(254, 98, 98, 0.3) !important;
		border: 2px dotted red !important;
	}
	.X {
		border: 1px dotted black !important;
	}
	.XX {
		border: 4px dotted black !important;
	}
	.XXX {
		border: 7px dotted white !important;
		background-color: black !important;
	}
</style>
