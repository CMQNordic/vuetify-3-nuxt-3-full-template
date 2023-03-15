<script setup>
	import logo from "@/assets/images/logo/logo.svg";
	import { APP_HEADER_HEIGHT } from "@/app/app-customization.js";

	/* 
		Use 
	*/
	const route = useRoute();
	const { log } = useLogs();
	const { visualizeLayouts } = useDebug();
	const { getNavigationGroup, getNavigationItem } = useNavigationItems();
	const { supportedLanguages, activeLanguage, activeLocale, tPath } = useLanguages();

	/* 
		Side navigation  
	*/
	const showSideNavigation = ref(false);
	const toggleSideNavigation = () =>
		(showSideNavigation.value = !showSideNavigation.value);

	/* 
		Loading progress 
	*/
	const showProgress = ref(false);
	const closeProgress = () => (showProgress.value = false);

	/* 
		Event handlers 
	*/
	function handleLanguageSelection(language) {
		!language?.locale ? console.log(null.DEV_ASSERT_locale_is_missing) : "";

		if (language?.locale && language.locale != activeLocale.value) {
			// Show progress as changing language might take some time
			showProgress.value = true;

			// Navigate to same current page, but with the new (forced) locale.
			// Middleware will (if needed) download translations and change the
			// curret language to the "forced one".
			navigateTo(tPath(route.path, language.locale))
				.catch((err) => {
					throw Error("Navigation attempt initiated by language selection failed.", err);
				})
				.finally(() => {
					closeProgress();
				});
		}
	}
	function handleNavigationItemClick(item) {
		log.info((i) => console.log(i, `handleNavigationItemClick()`, item));

		if (item?.path) {
			navigateTo(tPath(item.path)).catch((err) => {
				throw Error(
					"Navigation attempt initiated by click on navigation item failed.",
					err,
				);
			});
		}
	}

	log.INFO((i) => console.log(i, `Initialized TheHeader`));
</script>

<template>
	<!-- Progress overlay (hidden by default) -->
	<app-progress v-model="showProgress" @close="closeProgress" fullscreen />

	<!-- Side navigation (hidden by default) -->
	<TheSideNavigation v-model="showSideNavigation" @close="toggleSideNavigation" />

	<!-- The header  -->
	<v-app-bar
		:height="APP_HEADER_HEIGHT"
		class="the-header elevation-2"
		:class="{ visualizeLayouts }"
	>
		<!-- Logo -->
		<app-link to="/" :class="{ visualizeLayouts }">
			<v-img :src="logo" alt="the logo" class="logo-size" />
		</app-link>

		<!-- Branding -->
		<v-app-bar-title
			class="branding-size ma-0 pt-2 pt-sm-1 pt-md-0 ps-2 ps-md-4"
			:class="{ visualizeLayouts }"
		>
			<app-text tag="p" heading> Fancy starter template </app-text>
		</v-app-bar-title>

		<!-- Top navigation (visible on big screens) -->
		<nav
			aria-label="primary"
			class="d-none d-md-block align-self-start"
			:class="{ visualizeLayouts }"
		>
			<!-- 1st row of top navigation -->
			<div
				class="top-navigation-row top-navigation-space d-flex align-center"
				:class="{ visualizeLayouts }"
			>
				<v-spacer />

				<!-- Signin -->
				<app-navigation-item
					lKey="nav.signin"
					v-slot="{ text, icon }"
					@click="handleNavigationItemClick"
					small
				>
					{{ text }}
					<app-icon :icon="icon" class="ms-1" color="accent" />
				</app-navigation-item>

				<!-- Admin panel  -->
				<app-navigation-item lKey="nav.admin" @click="handleNavigationItemClick" small />

				<!-- Languages -->
				<app-navigation-item :lKey="'nav.lang'" v-slot="{ text, icon }" small>
					<span class="me-1">{{ text }}</span>
					<app-icon :icon="icon" />
					<app-icon :icon="activeLanguage.icon" size="23" />
					<!-- Menu trigged by parent click -->
					<app-menu :items="supportedLanguages" @selection="handleLanguageSelection" />
				</app-navigation-item>
			</div>

			<!-- 2nd row of top navigation -->
			<!-- :items="getNavigationGroup(item.sub)" -->
			<div class="top-navigation-row" :class="{ visualizeLayouts }">
				<template v-for="item in getNavigationGroup('top-nav')" :key="item.lKey">
					<app-navigation-item
						:lKey="item.lKey"
						@click="handleNavigationItemClick"
						v-slot="{ text, icon }"
					>
						{{ text }}
						<app-icon v-if="icon" :icon="icon" class="ms-1" />
						<app-menu
							v-if="item.sub"
							:items="getNavigationGroup(item.sub)"
							@selection="handleNavigationItemClick"
							nav
						>
							<!-- 			<template #append>
								<div>test</div>
								<app-box width="444px" height="111px" centered>444x111</app-box>
							</template> -->
						</app-menu>
					</app-navigation-item>
				</template>
			</div>
		</nav>

		<!-- Side navigation toggler (visible on small screens) -->
		<v-app-bar-nav-icon
			@click.stop="toggleSideNavigation"
			size="x-large"
			class="d-flex d-md-none ma-0"
			:class="{ visualizeLayouts }"
		/>
	</v-app-bar>
</template>

<style scoped>
	.the-header {
		margin-top: var(--app-header-top-margin, 0px) !important;
		padding-top: var(--app-header-top-padding, 0px) !important;
		padding-left: var(--app-header-x-padding, 0px) !important;
		padding-right: var(--app-header-x-padding, 0px) !important;
	}

	.top-navigation-row {
		height: var(--app-header-row-height, 0px);
	}

	.top-navigation-space {
		margin-bottom: var(--app-header-row-space, 0px);
	}

	.logo-size {
		width: var(--app-header-logo-width, 110px);
		height: var(--app-header-logo-height, 80px);
	}

	.branding-size {
		height: var(--app-header-logo-height, 80px);
	}
</style>
