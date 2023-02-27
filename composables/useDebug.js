import { useStorage } from "@vueuse/core";

/* LOGS */
const logAll = useStorage("vue-app-visualize-log-all", false);
const logInfo = useStorage("vue-app-visualize-log-info", false);
const logDebug = useStorage("vue-app-visualize-log-debug", false);
/* VISUALIZATIONS */
const visualizeAll = useStorage("vue-app-visualize-all", false);
const visualizeLayouts = useStorage("vue-app-visualize-layouts", false);
const visualizeButtons = useStorage("vue-app-visualize-buttons", false);
const visualizeBoxes = useStorage("vue-app-visualize-boxes", false);

const setLogAll = () => {
	logAll.value = !logAll.value;
	logInfo.value = logAll.value;
	logDebug.value = logAll.value;
};

const setVisualizeAll = () => {
	visualizeAll.value = !visualizeAll.value;
	visualizeLayouts.value = visualizeAll.value;
	visualizeButtons.value = visualizeAll.value;
	visualizeBoxes.value = visualizeAll.value;
};

export function useDebug() {
	return {
		logInfo,
		logDebug,
		logAll: readonly(logAll),
		setLogAll,
		visualizeLayouts,
		visualizeButtons,
		visualizeBoxes,
		visualizeAll: readonly(visualizeAll),
		setVisualizeAll,
	};
}
