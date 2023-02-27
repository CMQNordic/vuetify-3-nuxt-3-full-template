<template>
	<h3 class="text-decoration-overline ma-0 pa-0">This's the start of home</h3>

	<v-card>
		<v-card-title primary-title>
			Welcome to this starter template
		</v-card-title>

		<v-card-text>
			It is a solid base to your project if you decide to go with Vue3, Nuxt2
			and Vuetify3. All these frameworks together make it possible to easily and
			quickly create stunning apps as sites.

			<AppSpace />

			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam earum
			adipisci doloremque sapiente fuga quam mollitia qui vero, reprehenderit
			laboriosam voluptates aspernatur, neque reiciendis, aliquam perferendis
			voluptas consectetur commodi.

			<AppSpace />

			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est,
			numquam nobis commodi molestias nisi totam. Eligendi commodi sint dolor
			quia, aliquid nemo ea, modi veritatis architecto in officiis ipsa?
		</v-card-text>
	</v-card>

	<AppSpace x2 />

	<h3 class="text-decoration-underline long-page">This's the end of home</h3>
</template>

<style scoped>
	.long-page {
		height: 2000px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
</style>
