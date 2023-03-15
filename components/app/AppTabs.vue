<!-- Description
	
	This components creates tabs based on unique texts, or language keys. Those are used as tab texts.
	Subsequently each tab executes appropriate component provided in default slot.
	
	This component exports slot parameter 'tab'. Import it in parent with: v-slot="{tab}"
	
	tabs: Array with texts or language keys to be used fr each tab title. Example  :tabs="['lKey_A', 'lKey_B']"
	slot: Default slot where components to be executed by tabs shall be provided.
	
	Example: providing 2 components (a & b) with tab titles tabA & tabB
	 
	<app-tabs v-slot="{tab}" :tabs="['tabA', 'tabB']">
		<component-a v-if="tab == 'tabA'" />
		<component-b v-if="tab == 'tabB'" />
	</app-tabs>
 -->

<script setup>
	defineProps({
		tabs: {
			type: Array,
			default: [],
		},
	});
	const tab = ref(null);
</script>

<!-- :active="tab == lKey" -->
<template>
	<v-tabs fixed-tabs v-model="tab">
		<v-tab
			v-for="lKey in tabs"
			:key="lKey"
			:value="lKey"
			slider-color="accent"
			class="app-tab"
			:class="{
				'app-tab--selected': tab == lKey,
			}">
			<!-- try t fetch the text based on the language key  -->
			{{ $t(lKey) }}
		</v-tab>
	</v-tabs>

	<v-window v-model="tab" class="pa-4">
		<v-window-item v-for="lKey in tabs" :key="lKey" :value="lKey" class="mt-5">
			<slot :tab="tab" />
		</v-window-item>
	</v-window>
</template>

<style scoped>
	.app-tab {
		border-top-left-radius: 10px !important;
		border-top-right-radius: 10px !important;
	}
	.app-tab--selected {
		font-weight: 700;
	}
</style>
