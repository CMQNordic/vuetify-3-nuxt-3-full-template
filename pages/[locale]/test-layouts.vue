<template>
	<h3 class="text-decoration-overline ma-0 pa-0">
		This's the start of long page
	</h3>

	<v-card>
		<v-card-title> This is a v-card </v-card-title>

		<v-card-text>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam earum
			adipisci doloremque sapiente fuga quam mollitia qui vero, reprehenderit
			laboriosam voluptates aspernatur, neque reiciendis, aliquam perferendis
			voluptas consectetur commodi. Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Facilis vitae quis sed voluptate fuga perferendis nemo
			et ipsa at beatae sequi odio modi, atque numquam distinctio quidem a, cum
			ut!

			<app-space />

			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam earum
			adipisci doloremque sapiente fuga quam mollitia qui vero, reprehenderit
			laboriosam voluptates aspernatur, neque reiciendis, aliquam perferendis
			voluptas consectetur commodi. Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Delectus distinctio placeat dolore corporis velit sed
			voluptatem alias dolorum aliquid explicabo, debitis harum quos magnam
			excepturi deserunt nihil facilis doloribus quasi.

			<app-space x2 />

			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam earum
			adipisci doloremque sapiente fuga quam mollitia qui vero, reprehenderit
			laboriosam voluptates aspernatur, neque reiciendis, aliquam perferendis
			voluptas consectetur commodi. Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Ratione voluptate distinctio, asperiores amet rerum
			maiores deserunt corporis voluptatum fuga soluta molestiae nobis
			blanditiis sequi, placeat obcaecati qui quae iste quidem!
		</v-card-text>
	</v-card>

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
