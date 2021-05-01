<script>
	import Navbar from "./layout/Navbar.svelte";
	import Footer from "./layout/Footer.svelte";
	/* import Home from "./pages/Home.svelte"; */
	import Header from "./layout/Header.svelte";
	import routes from "./routes";
	import Route from "svelte-spa-router";
</script>

<Header />
<Navbar />
<main class="py-10 z-0 mx-auto container">
	<Route {routes} />
</main>
<Footer />

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
	@media screen and (max-width: 600px) {
		main {
			height: auto;
		}
	}
</style>
