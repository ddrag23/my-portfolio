<script>
  import Button from "../component/Button.svelte";
  import Icon from "svelte-awesome";
  import { faDownload } from "@fortawesome/free-solid-svg-icons";
  import Card from "../component/Card.svelte";
  import { goto } from "@roxi/routify";
  import * as data from "../data/data.json";
  let img = "assets/img/portfolio.png";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<div>
  <section id="home">
    <div
      class="flex mt-10 sm:justify-center items-center flex-col lg:flex-row w-full"
    >
      <div class="">
        <img
          src={img}
          class="bg-purple-600 h-40 w-40 sm:h-72 sm:w-72 flex items-center justify-center z-1 rounded-full ring-4 shadow-xl"
          alt=""
        />
      </div>
      <div
        class="flex flex-col justify-center text-center lg:text-left sm:p-10 p-3
        box-border sm:w-3/5"
      >
        <h5 class="text-purple-800 text-m sm:text-xl font-bold sm:mt-5">
          HELLO EVERYBODY!
        </h5>
        <h1 class="text-purple-600 sm:text-5xl text-4xl font-extrabold mt-2">
          I'm {data.name}.
        </h1>
        <p class="text-purple-600 text-lg sm:text-3xl font-bold sm:mt-5 mb-3">
          A {data.job}
        </p>
        <p class="text-purple-600 text-lg">
          I'm a 23 y/o boi from Indonesia, trying to learn many things at the
          same time and I work in a software house company now. I also like
          GNU/Linux, and like watch anime now and then.
        </p>
        <div class="flex justify-center items-center lg:justify-start mt-5">
          <Button
            bg={"purple-600"}
            shadow={"lg"}
            padding={"p-4"}
            rounded={"rounded-lg"}
            color={"text-white"}
            width={"w-7/12 sm:w-2/4"}
          >
            <Icon data={faDownload} />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  </section>
  <section id="project" class="box-border h-auto my-28 text-center">
    <h1 class="svelte_title text-purple-600 font-bold text-4xl">
      Recent Project
    </h1>
    <div class="box-border my-10 mx-5 lg:mx-28">
      <div
        class="flex flex-wrap justify-center items-center md:justify-between sm:justify-between gap-5"
      >
        {#each data.projects as item}
          <Card {item} />
        {/each}
      </div>

      <button
        on:click={$goto("./projects")}
        class="bg-purple-600 p-5 shadow-md rounded-lg text-white font-bold hover:shadow-xl"
        >More Project</button
      >
    </div>
  </section>
</div>

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
  @media screen and (max-width: 600px) {
    #home img {
      width: 10em;
      background-size: cover;
    }
  }
</style>
