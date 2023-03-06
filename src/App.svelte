<script lang="ts">
	import Button from "./lib/sveltial/input/button/simple.svelte";
	import SquareBtn from "./lib/sveltial/input/button/square.svelte";
</script>

<main class="font-primary bg-background dark:bg-background-dark">
	<div class="grid place-content-center h-[100vh]">
		<!-- <p class="text-secondary text-center text-9xl font-poppins">App Component</p> -->
		<Button label="Label" icon="quiz" />
		<SquareBtn icon="quiz" />
	</div>
</main>

<style>
</style>
