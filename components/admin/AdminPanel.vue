<script setup>
	const { refs: logRefs, setLogAll } = useLogs();
	const { refs: debugRefs, setDebugAll } = useDebug();

	const switchDefaultProps = {
		color: "accent",
		density: "compact",
		"hide-details": true,
	};
</script>

<template>
	<div class="wrapper">
		<!-- LOGS -->
		<div>
			<app-text small bold upper>Logging</app-text>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="logRefs.bAll.value"
				@update:modelValue="setLogAll($event)"
				label="All"
			/>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="logRefs.bInfo.value"
				:label="`Info: ${logRefs.bInfo ? 'On' : 'Off'}`"
			/>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="logRefs.bWarn.value"
				:label="`Warning: ${logRefs.bWarn ? 'On' : 'Off'}`"
			/>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="logRefs.bError.value"
				:label="`Error: ${logRefs.bError ? 'On' : 'Off'}`"
			/>
		</div>

		<!-- DEBUG -->
		<div>
			<app-text small bold upper>Visualize</app-text>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="debugRefs.bAll.value"
				@update:modelValue="setDebugAll($event)"
				label="All"
			/>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="debugRefs.bBoxes.value"
				:label="`Boxes: ${debugRefs.bBoxes ? 'On' : 'Off'}`"
			/>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="debugRefs.bButtons.value"
				:label="`Buttons: ${debugRefs.bButtons ? 'On' : 'Off'}`"
			/>
			<v-switch
				v-bind="switchDefaultProps"
				v-model="debugRefs.bLayouts.value"
				:label="`Layuts: ${debugRefs.bLayouts ? 'On' : 'Off'}`"
			/>
		</div>
	</div>
</template>

<style scoped>
	.wrapper {
		border: 1px solid rgba(211, 211, 211, 0.9);
		border-radius: 4px;
		padding: 5px;
	}
</style>
