<script charset="utf-8">
  import Navbar from "../layout/Navbar.svelte";
  import Header from "../layout/Header.svelte";
  import Footer from "../layout/Footer.svelte";
</script>

<Header />
<Navbar />
<main class="py-20 mx-auto container">
  <slot/>
</main>
<Footer />

<style>
  @media screen and (max-width: 600px) {
    main {
      height: auto;
    }
  }
</style>
