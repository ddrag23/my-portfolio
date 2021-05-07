<script>
	import Icon from "svelte-awesome";
	import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
	import Modal from "../component/Modal.svelte";
	export let item;
	let dataLink = "";
	let showModal = false;
	function toggleModal(e) {
		showModal = !showModal;
		dataLink = e.target.dataset.link;
	}
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
				<button
					on:click={toggleModal}
					data-link={item.link_demo}
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-bold text-gray-700 mr-2 mb-2"
					style="curson: pointer;"
				>
					<Icon data={faEye} /> Demo</button
				>
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-bold text-gray-700 mr-2 mb-2"
					>#{item.tools.language}</span
				>
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-bold text-gray-700 mr-2 mb-2"
					>#{item.tools.framework}</span
				>
			</div>
		</div>
	</div>
</div>
{#if showModal}
	<Modal>
		<div slot="modal-body">
			<div class="ifreme-scope">
				<iframe
					class="iframe-responsive"
					title="my-video"
					allowfullscreen=""
					frameborder="0"
					src={dataLink}
				/>
			</div>
		</div>
		<div slot="modal-footer">
			<button
				class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				on:click={toggleModal}
			>
				Close
			</button>
		</div>
	</Modal>
{/if}

<style type="text/css" media="screen">
	img {
		height: 50px;
	}

	.ifreme-scope {
		position: relative;
		padding-bottom: 56.25%;
		padding-top: 35px;
		width: 560px;
		overflow: hidden;
	}

	.iframe-responsive {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
	@media screen and (max-width: 660px) {
		.ifreme-scope {
			width: 300px;
		}
	}
</style>
