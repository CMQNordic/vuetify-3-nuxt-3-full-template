<template>
	<div>
		<h2>&lt;h2&gt;How does plain html tags behave? &lt;/h2&gt;</h2>
		<p>&lt;p&gt; This is some unstyled paragrapg text &lt;/p&gt;</p>
		<span>
			&lt;span&gt; Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Accusantium perferendis at aliquam sapiente nostrum, impedit assumenda
			reprehenderit beatae, quae sunt ipsum? Accusamus veniam temporibus
			exercitationem cupiditate inventore, ad corrupti reprehenderit.
			&lt;/span&gt;
		</span>
	</div>

	<div class="align-self-start w-25">
		{{ $t('nav.about') }}
		<v-select label="select" :items="[]"></v-select>
	</div>
</template>
