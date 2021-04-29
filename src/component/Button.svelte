<script charset="utf-8">

	export let bg;
	export let shadow;
	export let padding;
	export let rounded;
	export let width
	export let color
</script>

<button class="bg-{bg} shadow-{shadow} {padding} {rounded} {width} {color} text-base items-center">
	<slot></slot>
</button>
