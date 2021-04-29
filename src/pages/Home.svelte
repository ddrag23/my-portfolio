<script>
	import Button from "../component/Button.svelte";
	export let name;
	export let job;
	let img = "img/portfolio.png";
</script>

<div class="flex sm:justify-center items-center flex-col sm:flex-row w-full">
	<div class="bg-purple-600 p-5 rounded-full clip-circle">
		<img src={img} alt="" />
	</div>
	<div
		class="flex flex-col justify-center text-center sm:text-left sm:p-10 p-3 box-border sm:w-3/5"
	>
		<h5 class="text-purple-800 text-lg sm:text-xl font-bold sm:mt-5">
			HELLO EVERYBODY!
		</h5>
		<h1 class="text-purple-600 sm:text-5xl text-xl font-extrabold mt-2">
			I'm {name}.
		</h1>
		<p class="text-purple-600 text-lg sm:text-3xl font-bold sm:mt-5 mb-3">
			A {job} and I Love Linux
		</p>
		<p class="text-purple-600 text-lg">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			Exercitationem corrupti enim assumenda rem numquam saepe quo
			eligendi, hic ipsa eius aperiam necessitatibus error eaque eveniet
			tempora, similique quia, ut eos?
		</p>
		<div class="flex justify-center items-center sm:justify-start mt-5">
			<Button
				bg={"purple-600"}
				shadow={"lg"}
				padding={"p-4"}
				rounded={"rounded-lg"}
				color={"text-white"}
				width={"w-7/12 sm:w-3/12"}
			>
				ok bos
			</Button>
		</div>
	</div>
</div>

<style>
	img {
		width: 20em;
		background-size: cover;
	}
	.clip-circle {
		clip-path: circle(11em at center);
	}
	@media screen and (max-width: 600px) {
		img {
			width: 10em;
			background-size: cover;
		}
		.clip-circle {
			clip-path: circle(6em at center);
		}
	}
</style>
