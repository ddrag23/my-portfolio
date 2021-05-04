<script>
	import { Router } from "@roxi/routify";
	import { routes } from "../.routify/routes";
</script>

<Router {routes} />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	html,
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		background-color: #f5f3ff;
	}
</style>
