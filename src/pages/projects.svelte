<script>
  import * as data from "../data/data.json";
  import Card from "../component/Card.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<section id="all_project" class="text-center">
  <h1 class="svelte_title mt-5 mb-14 text-purple-600 font-bold text-5xl">
    All Project
  </h1>
  <div class="card_section mx-auto md:mx-10 lg:mx-28">
    <div
      class="flex flex-col md:flex-row md:flex-wrap justify-center items-center md:justify-between sm:gap-5"
    >
      {#each data.projects as item}
        <Card {item} />
      {/each}
    </div>
  </div>
</section>

<style>
  .svelte_title {
    position: relative;
    display: inline-block;
  }
  .svelte_title::before {
    content: "";
    position: absolute;
    background-color: #8b5cf6;
    bottom: -0.8rem;
    height: 0.25rem;
    left: 2rem;
    right: 2rem;
    border-radius: 25rem;
  }
</style>
