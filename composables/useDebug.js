import { useStorage } from "@vueuse/core";

const { log } = useLogs();

const bVisualizeAll = useStorage("vue-app-visualize-all", false);
const bVisualizeLayouts = useStorage("vue-app-visualize-layouts", false);
const bVisualizeButtons = useStorage("vue-app-visualize-buttons", false);
const bVisualizeBoxes = useStorage("vue-app-visualize-boxes", false);

const debugStatus = () => {
	let retVal = {
		layouts: bVisualizeLayouts.value ? "On" : "Off",
		buttons: bVisualizeButtons.value ? "On" : "Off",
		boxes: bVisualizeBoxes.value ? "On" : "Off",
	};
	return retVal;
};

const setVisualizeAll = (val = false) => {
	bVisualizeAll.value = val;
	bVisualizeLayouts.value = val;
	bVisualizeButtons.value = val;
	bVisualizeBoxes.value = val;
};

watch([bVisualizeLayouts, bVisualizeButtons, bVisualizeBoxes], (newValues) => {
	bVisualizeAll.value = !newValues.includes(false);
	log.INFO((i) => console.log(i, `Debug changed:`, debugStatus()));
});

log.INFO((i) => console.log(i, `Initialized Debug:`, debugStatus()));

export function useDebug() {
	return {
		setDebugAll: setVisualizeAll,
		refs: {
			bAll: bVisualizeAll,
			bLayouts: bVisualizeLayouts,
			bButtons: bVisualizeButtons,
			bBoxes: bVisualizeBoxes,
		},
		debug: {
			layouts: bVisualizeLayouts,
			buttons: bVisualizeButtons,
			boxes: bVisualizeBoxes,
		},
		visualizeAll: bVisualizeAll,
		visualizeLayouts: bVisualizeLayouts,
		visualizeButtons: bVisualizeButtons,
		visualizeBoxes: bVisualizeBoxes,
	};
}
