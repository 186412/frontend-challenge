<script setup>
	//  Components
	import TopBar from "../top-bar/TopBar.vue";
	import Content from "../content/Content.vue";
	import AccessibilityOptions from "../accessibility-options/AccessibilityOptions.vue";
</script>

<template>
	<div class="layout-container">
		<TopBar />
		<Content>
			<slot />
		</Content>
		<AccessibilityOptions />
	</div>
</template>

<style scoped></style>
