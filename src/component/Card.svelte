<script>
	import Icon from "svelte-awesome";
	import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
	export let item;
</script>

<div class="my-5">
	<!--Card 1-->
	<div class="w-80 bg-white rounded overflow-hidden shadow-md">
		<img
			class="w-full"
			src={item.img}
			alt="Mountain"
			style="height: 14rem;"
		/>
		<div class="box-border px-3 h-42">
			<div class="py-2">
				<div class="font-bold text-xl mb-1">{item.name}</div>
				<p class="text-gray-700 text-sm">
					{item.description}
				</p>
			</div>

			<div class="pt-2 pb-2">
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
				>
					<a href={item.link_demo} target="_blank"
						><Icon data={faEye} /> Demo</a
					></span
				>
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
					>#{item.tools.language}</span
				>
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
					>#{item.tools.framework}</span
				>
			</div>
		</div>
	</div>
</div>

<style type="text/css" media="screen">
	img {
		height: 50px;
	}
</style>
