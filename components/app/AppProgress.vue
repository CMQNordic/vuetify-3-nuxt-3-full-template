<!-- Description 
	Shows progress in the middle of an greyed out overlay with locked scrolling.
	There is a button to close this overlay/progress and then 'close' is emitted.
	
	By default this overlay is contined in closest parent with class 'app-progress-wrapper'
	
	We can activate the progress in 3 ways. 
	
	* By defining activator: 
		<app-progress  activator="parent" | activator="#id-of-activator-button" />
	In those cases we handle closing of the progress internally. No need to listen to 'close'
	
	* Or by binding with v-model to a boolean value:
		<app-progress  v-model='showProgress' @close='showProgress = false' />
	In this case we must listen to 'close' to hide the progress.
	
	
	fullscreen => If set default contined in parent with class 'app-progress-container'
 -->
<script setup>
	const emit = defineEmits(['close']);
	const props = defineProps({
		activator: {
			type: String,
			default: 'undefined',
		},
		/* fullscreen => By default contined in parent with class 'app-progress-container' */
		fullscreen: {
			type: Boolean,
			default: false,
		},
	});

	const handleClick = () => {
		// This closes the overlay when activated by an activator
		overlay.value = false;

		// This tell parent to close if avtivated by v-model
		emit('close');
	};

	const overlay = ref(false);
</script>

<template>
	<v-overlay
		:contained="!fullscreen"
		:activator="activator"
		v-model="overlay"
		persistent
		class="justify-center align-center">
		<v-progress-circular
			scroll-strategy="block"
			indeterminate
			color="grey-lighten-2"
			size="90">
			<v-btn icon variant="plain" @click.stop="handleClick">
				<app-icon icon="$close" size="40" class="bg-transparent text-white" />
			</v-btn>
		</v-progress-circular>
	</v-overlay>
</template>

<style>
	/* Use this global selector to mark element that shall */
	/* wrap this progress overlay. 								 */
	.app-progress-wrapper {
		position: relative;
	}
</style>
