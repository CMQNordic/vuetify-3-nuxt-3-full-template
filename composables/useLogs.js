import { useStorage } from "@vueuse/core";

const bLogAll = useStorage("vue-app-log-all", false);
const bLogInfo = useStorage("vue-app-log-info", false);
const bLogWarn = useStorage("vue-app-log-debug", false);
const bLogError = useStorage("vue-app-log-error", false);
const bLogTodo = useStorage("vue-app-log-todo", false);

const consoleErrorFnc = console.error;

const setLogAll = (val = false) => {
	console.log(`XXX`, val);
	bLogAll.value = val;
	bLogInfo.value = val;
	bLogWarn.value = val;
	bLogError.value = val;
	bLogTodo.value = val;
};

const logStatus = () => {
	return {
		info: bLogInfo.value ? "On" : "Off",
		warn: bLogWarn.value ? "On" : "Off",
		error: bLogInfo.value ? "On" : "Off",
		todo: bLogTodo.value ? "On" : "Off",
	};
};

watch([bLogInfo, bLogWarn, bLogError, bLogTodo], (newValues) => {
	bLogAll.value = !newValues.includes(false);
	if (bLogInfo.value) console.log(`✅ Log changed:`, logStatus());
});

const TODO = (fnc) => bLogTodo.value && fnc?.(`🚩[TODO]`);
const INFO = (fnc) => bLogInfo.value && fnc?.(`✅`);
const WARNING = (fnc) => bLogWarn.value && fnc?.(`👀`);
const ERROR = (...v) => {
	bErrorLog.value && consoleErrorFnc(`⛔[ERROR]`, ...v);
};
const ASSERT = (msg, ...vars) => {
	consoleErrorFnc(`⛔[CRITICAL ERROR]`, msg, ...vars); // always log this serious error
	console.log(null[`FORCED ASSERT:` + msg]); // this removed in production
};

if (bLogInfo.value) console.log(`✅ Initialized Logs:`, logStatus());

export function useLogs() {
	return {
		log: {
			INFO,
			WARNING,
			ERROR,
			TODO,
			ASSERT, // in prod will always console.error([[CRITICAL ERROR]...)
		},
		setLogAll,
		refs: {
			bAll: bLogAll,
			bInfo: bLogInfo,
			bWarn: bLogWarn,
			bError: bLogError,
			bTodo: bLogTodo,
		},
	};
}
