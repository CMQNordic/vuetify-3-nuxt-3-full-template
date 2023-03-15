<template>
	-START-
	<br />
	<br />
	<div style="border: 5px solid black; border-radius: 11px">
		<div style="border: 5px dotted black">
			<div class="box-container">
				<!-- Box. Fullscreen top -->
				<app-box
					width="100vw"
					height="100vh"
					align-v-top
					tag="h1"
					centered
				>
					<b>[w:100vw h:100vh]</b> align-v-top centered
					<template #backgroundDark>
						<div class="background--dark d-flex flex-column">
							<div>*fullscreen background dark</div>
							<div class="flex-grow-1 d-flex justify-end align-end">
								fullscreen background dark*
							</div>
						</div>
					</template>
				</app-box>

				<v-card class="card">
					<!-- Box -->
					<app-box
						width="fit-content"
						align-left
					>
						<b>[w:fit-content h:def]</b> align-left
					</app-box>
					<!-- Box -->
					<app-box width="fit-content">
						<b>[w:fit-content h:def]</b>
					</app-box>
					<!-- Box -->
					<app-box
						width="fit-content"
						align-right
					>
						<b>[w:fit-content h:def]</b> align-right
					</app-box>
				</v-card>

				<v-card class="card">
					<!-- Box -->
					<app-box
						height="100px"
						middle
						right
						class="pe-5"
					>
						<b>[w:def h:100px]</b> middle right pe-5
						<template #background>
							<div class="cool-background" />
						</template>
					</app-box>
				</v-card>

				<v-card class="card">
					<!-- Box -->
					<app-box
						height="100px"
						middle
						right
						class="pe-5"
					>
						<b>[w:def h:100px]</b> middle right pe-5
						<template #background>
							<div class="cool-background" />
						</template>
					</app-box>
				</v-card>

				<v-card class="card">
					<!-- Box -->
					<app-box
						width="450px"
						height="100px"
						align-right
						right
					>
						<b>[w:450px h:100px]</b> align-right right
						<template #backgroundLight>
							<img class="background--light" />
						</template>
					</app-box>
					<!-- Box -->
					<app-box
						center
						middle
						width="450px"
						height="100px"
					>
						<b>[w:450px h:100px]</b> center middle
					</app-box>
					<!-- Box -->
					<app-box
						align-left
						left
						bottom
						width="450px"
						height="100px"
					>
						<b>[w:450px h:100px]</b> align-left left bottom
						<template #background>
							<div class="background--light" />
						</template>
					</app-box>
				</v-card>

				<v-card
					class="card"
					style="height: 200px"
				>
					<!-- Box -->
					<app-box
						height="90px"
						centered
					>
						<b>[w:100% h:90px] </b>
						<span class="text-red">align-middle</span> centered
						<template #background>
							<div class="cool-background" />
						</template>
					</app-box>
				</v-card>

				<v-card class="card">
					<!-- Box -->
					<app-box
						width="100vw"
						center
					>
						<b>[<span class="text-red">w:100vw</span> h:auto]</b> center
					</app-box>
				</v-card>

				<v-card
					class="card"
					style="height: 200px"
				>
					<!-- Box -->
					<app-box
						height="80%"
						centered
					>
						<b>[w:default h:80%] </b>
						<span class="text-red">align-middle</span> centered
						<template #background>
							<div class="cool-background" />
						</template>
					</app-box>
				</v-card>

				<!-- Box -->
				<app-box
					width="70%"
					height="100%"
					align-left
					right
				>
					<b>[w:70% <span class="text-red">h:100%</span>]</b> align-left right
					<template #backgroundDark>
						<div class="background--dark">*background dark</div>
					</template>
				</app-box>

				<!-- Box -->
				<app-box
					left
					class="me-15"
					>left <b>w:100% h:auto me-15</b></app-box
				>

				<!-- Box -->
				<app-box width="150px">
					<b>[w:150 h:auto]</b> hi hello hello 12345678hellllllllllllllloo123456789
				</app-box>

				<!-- Box -->
				<app-box
					align-right
					right
					width="150px"
				>
					<b>[w:150 h:auto]</b> align-right right
					<template #background>
						<img class="cool-background" />
					</template>
				</app-box>

				<!-- box -->
				<app-box
					width="150px"
					height="85px"
					align-left
				>
					<b>[w:150 h:85px]</b> align-left hello 12345678hellllllllllllllloo123456789
				</app-box>

				<!-- box -->
				<v-card class="card h-50">
					<app-box>
						<div class="pa-6">
							<p>
								<b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ab eos
								rerum asperiores minus sunt, magni suscipit laborum ea quidem iure maiores
								consectetur possimus velit iste facer! Tenet in voluptatem sunt?
							</p>
							<p class="mt-2">
								<b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ab eos
								rerum asperiores minus sunt, magni suscipit laborum ea quidem iure maiores
								consectetur possimus velit iste facer! Tenet in voluptatem sunt?
							</p>
						</div>
					</app-box>
				</v-card>

				<!-- box -->
				<app-box
					center
					middle
					width="100%"
					height="100px"
				>
					<b>[w:100% h:100px]</b> center middle
				</app-box>

				<!-- box -->
				<app-box
					center
					middle
					class="me-16"
					width="100%"
					height="100px"
				>
					<b>[w:100% h:100px]</b> center middle me-16
				</app-box>

				<!-- box -->
				<app-box
					centered
					width="100vw"
					height="100px"
				>
					<b>[w:100vw h:100px]</b> centered
				</app-box>

				<!-- box -->
				<app-box
					width="100vw"
					height="100px"
					class="me-16"
					centered
				>
					<b>[w:100vw h:100px]</b> centered <b class="text-red">me-16</b>
				</app-box>

				<!-- box -->
				<app-box
					width="100%"
					height="100%"
					centered
				>
					<b>[w:100% h:100%]</b> centered
					<template #backgroundLight>
						<div class="background--light">*background light</div>
					</template>
				</app-box>

				<!-- box -->
				<app-box
					width="70%"
					align-right
					right
				>
					<b>[w:70% h:auto]</b> align-right right
				</app-box>

				<!-- box -->
				<app-box
					width="100vw"
					height="100vh"
					center
					middle
				>
					<b>[w:100vw h:100vh]</b> center middle
					<template #backgroundLight>
						<div class="background--light d-flex flex-column">
							<div>*fullscreen background light</div>
							<div class="flex-grow-1 d-flex justify-end align-end">
								fullscreen background light*
							</div>
						</div>
					</template>
				</app-box>

				<app-box
					width="100%"
					height="100vh"
					centered
				>
					<b>[w:100% h:100vh]</b> centered
					<template #backgroundDark>
						<div class="background--dark d-flex flex-column">
							<div>*fullwidth background dark</div>
							<div class="flex-grow-1 d-flex justify-end align-end">
								fullwidth background dark*
							</div>
						</div>
					</template>
				</app-box>
			</div>
		</div>
	</div>

	<br />

	<!-- Box. Fullscreen -->
	<app-box
		width="100vw"
		height="100vh"
		align-v-bottom
		tag="h1"
		centered
	>
		<b>[w:100vw h:100vh]</b> align-v-bottom centered
		<template #backgroundDark>
			<div class="background--dark d-flex flex-column">
				<div>*fullscreen background dark</div>
				<div class="flex-grow-1 d-flex justify-end align-end">
					fullscreen background dark*
				</div>
			</div>
		</template>
	</app-box>
	<br />
	-END-
</template>

<style scoped>
	.background--dark {
		background: linear-gradient(
			to right,
			rgb(131, 147, 51),
			rgb(40, 17, 17),
			rgb(86, 51, 51)
		);
	}

	.background--light {
		background: linear-gradient(
			to right,
			rgb(238, 250, 222),
			rgb(248, 255, 183),
			rgb(251, 196, 181)
		);
	}

	.box-container {
		min-height: 1000px;
	}

	.box-container > .app-box:not(:last-child) {
		margin-bottom: 25px;
	}

	.card {
		margin: 10px;
		padding: 10px;
		outline: 3px solid black;
	}
</style>
