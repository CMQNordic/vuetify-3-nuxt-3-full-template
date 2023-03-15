<script setup>
	defineEmits(["close"]);

	const { log } = useLogs();
	const { visualizeLayouts } = useDebug();
	const { getNavigationGroup } = useNavigationItems();
	const { activeLanguage, supportedLanguages } = useLanguages();

	const items = [
		...getNavigationGroup("top-nav", "nav.more"),
		...getNavigationGroup("more"),
	];

	function handleNavigationItemClick(item) {
		// Not all items have path to avigate to, some open a submenu.
		if (item?.path) {
			// Navigate to the path defined by clicked navigation item
			navigateTo(tPath(item.path)).catch((e) => {
				throw Error(
					"Navigation attempt initiated by navigation item selection failed.",
					e,
				);
			});
		}
	}

	log.INFO((i) => console.log(i, `Initialized TheSiteNavigation`));
</script>

<template>
	<v-navigation-drawer temporary location="right">
		<div class="close-icon">
			<v-btn
				flat
				icon="$close"
				size="x-large"
				@click.stop="$emit('close')"
				:class="{ visualizeLayouts }"
			/>
		</div>

		<div type="flat" class="pa-0 ma-0" :class="{ visualizeLayouts }">
			<app-list
				:items="items"
				nav
				@selection="handleNavigationItemClick"
				class="pa-2"
				list-bg="transparent"
				item-bg="transparent"
			>
				<!-- Content added after items -->
				<template #append>
					<br />
					<v-divider></v-divider>
					<div class="mt-3 d-flex justify-space-between">
						<app-navigation-item
							lKey="nav.signin"
							v-slot="{ text, icon }"
							small
							@click="handleNavigationItemClick"
						>
							<app-icon :icon="icon" class="ms-2" />
							{{ text }}
						</app-navigation-item>
						<app-navigation-item :lKey="'nav.lang'" v-slot="{ text, icon }" small>
							{{ text }}
							<app-icon :icon="icon" class="ms-1" />
							<app-icon :icon="activeLanguage.icon" />
							<!-- Show menu with list of supported languages (if any) -->
							<app-menu
								:items="supportedLanguages"
								@selection="handleNavigationItemClick"
							>
							</app-menu>
						</app-navigation-item>
					</div>
					<br />
					<v-divider></v-divider>
					<br />
				</template>
			</app-list>
		</div>
	</v-navigation-drawer>
</template>

<style scoped>
	.close-icon {
		width: 100%;
		text-align: right;
		padding-right: var(--app-header-x-padding, 0px);
		padding-top: calc(
			var(--app-header-top-margin, 0px) + var(--app-header-top-padding, 0px)
		);
		padding-bottom: 10px;
	}
</style>
