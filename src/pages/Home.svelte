<script>
  import Button from "../component/Button.svelte";
  import Icon from "svelte-awesome";
  import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
  /* import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle"; */
  export let data;
  let img = "assets/img/portfolio.png";
</script>

<div>
  <section id="home">
    <div
      class="flex sm:justify-center items-center flex-col sm:flex-row w-full"
    >
      <div class="bg-purple-600 p-5 rounded-full clip-circle">
        <img src={img} alt="" />
      </div>
      <div
        class="flex flex-col justify-center text-center sm:text-left sm:p-10 p-3
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
        <div class="flex justify-center items-center sm:justify-start mt-5">
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
    <div class="box-border my-10 sm:mx-28">
      <div class="flex flex-wrap justify-center sm:justify-between gap-5">
        {#each data.projects as item}
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
                    ><Icon data={faEye} /> Demo</span
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
        {/each}
      </div>
      <button
        class="bg-purple-600 p-5 shadow-md rounded-lg text-white font-bold hover:shadow-xl"
        >More Project</button
      >
    </div>
  </section>
</div>

<style>
  #home img {
    width: 20em;
    background-size: cover;
  }
  #project img {
    height: 50px;
  }

  .clip-circle {
    clip-path: circle(11em at center);
  }
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
    .clip-circle {
      clip-path: circle(6em at center);
    }
  }
</style>
