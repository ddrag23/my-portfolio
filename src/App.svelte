<script>
	import Navbar from "./layout/Navbar.svelte";
	import Footer from "./layout/Footer.svelte";
	import Home from "./pages/Home.svelte";
	import Header from "./layout/Header.svelte";
	import * as data from "./data/data.json";
	console.log(data);
</script>

<Header />
<Navbar />
<main>
	<Home name={data.name} job={data.job} />
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
	}
	main {
		height: 100vh;
		width: 100%;
		margin-top: 5rem;
	}
</style>
