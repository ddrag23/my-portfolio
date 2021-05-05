<script>
	import { onMount, onDestroy } from "svelte";
	import { isChangingPage } from "@roxi/routify";
	let counter;
	let width = 0;
	let speed = 10;
	const resetProgress = () => {
		clearInterval(counter);
		width = 0;
		speed = 0;
	};
	const startProgress = () => {
		counter = setInterval(() => {
			if (width === 95) {
				clearInterval(counter);
				return;
			}
			width += 5;
			speed += 500;
		}, speed);
	};
	$: if (!$isChangingPage) resetProgress();
	$: if ($isChangingPage) startProgress();
	onMount(() => startProgress());
	onDestroy(() => resetProgress());
</script>

{#if $isChangingPage}
	<div class="loading" style="width: {width}%" />
{/if}

<style>
	.loading {
		position: fixed;
		top: 4.5rem;
		left: 0;
		height: 0.25rem;
		background-color: #7c3aed;
		z-index: 50;
		transition: width ease-out 0.5s;
		width: 0;
	}
</style>
