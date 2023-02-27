<template>
	<app-box centered visualize>
		<app-card type="flat" color="background">
			<app-text tag="h1" heading-large centered mb-2 visualize>
				Surf camps, work &amp; yoga - In <b>no</b> way ordinary
			</app-text>
			<app-text
				tag="p"
				body-large
				centered
				visualize
				class="text-justify pa-2 ">
				Some of the best feelings we have ever had have been connected to Surf
				or Yoga. Add to that new friends, amazing scenery and local culture and
				you will know what we are all about. Feel good, have fun, meet
				interesting people in amazing places and evolve and progress in every
				way possible.
			</app-text>
		</app-card>
	</app-box>
	<br />
	Texts:
	<app-text centered heading-large visualize> heading-large yyy </app-text>
	<app-text centered heading visualize>heading yyy</app-text>
	<app-text centered body-large visualize>body-large text yyy</app-text>
	<app-text centered body visualize>body text yyy</app-text>
	<app-text centered visualize>div text</app-text>
	<app-text tag="p" centered visualize>p text</app-text>
	<app-text centered>
		<app-text tag="span" capital text="hello">
			<app-text tag="span" bold text="world" />
		</app-text>
	</app-text>
	<app-text tag="h1" centered visualize>h1 text</app-text>
	<app-text tag="h2" centered visualize>h2 text</app-text>
	<app-text tag="h2" centered visualize>h3 text</app-text>
	<br />
	Boxes:
	<app-box centered visualize class="DEBUG-A">
		<app-text centered heading-large mt-1 mb-1 px-2 class="DEBUG-B">
			heading-large in box yyy
		</app-text>
	</app-box>
	<div class="d-flex">
		<app-box centered width="150" class="flex-grow-1" visualize>
			width 100
		</app-box>

		<app-box centered width="150" class="flex-grow-1" visualize>
			width 100
		</app-box>
	</div>
</template>
