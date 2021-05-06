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
				<span
					on:click={toggleModal}
					data-link={item.link_demo}
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-bold text-gray-700 mr-2 mb-2"
				>
					<Icon data={faEye} /> Demo</span
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
			<iframe width="620" height="315" src={dataLink} />
		</div>
		<div slot="modal-footer">
			<button
				class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				on:click={toggleModal}
			>
				Close
			</button>
			<button
				class="bg-purple-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				on:click={toggleModal}
			>
				Save Changes
			</button>
		</div>
	</Modal>
{/if}

<style type="text/css" media="screen">
	img {
		height: 50px;
	}
</style>
