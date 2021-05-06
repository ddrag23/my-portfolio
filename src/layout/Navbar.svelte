<script>
  import { isActive, url } from "@roxi/routify";
  let checked = true;
  const elid = (elid) => document.getElementById(elid);
  const links = [
    ["./index", "Home"],
    ["./projects", "Projects"],
    ["./about", "About"],
  ];

  function navToggle() {
    checked = !checked;
    if (checked) {
      console.log("ok");
      elid("mobile-menu").classList.add("hidden");
    } else {
      elid("mobile-menu").classList.remove("hidden");
    }
  }
</script>

<nav class="bg-white shadow-md p-5 fixed z-10 w-full">
  <div class="flex justify-around items-center">
    <div class="logo">
      <a
        href="#home"
        class="text-lg sm:text-2xl tracking-wider hover:no-underline"
      >
        MY PORTFOLIO</a
      >
    </div>
    <div class="hidden md:block">
      <ul class="text-purple-600 flex item-baselines space-x-5 text-xl">
        {#each links as [path, name]}
          <li>
            <a class:active={$isActive(path)} href={$url(path)}>{name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="-mr-2 flex md:hidden">
      <button
        on:click={navToggle}
        type="button"
        class="bg-purple-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>

        <svg
          class="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          class="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</nav>
<div
  class="md:hidden hidden bg-white flex flex-col justify-center h-full w-full items-center fixed"
  style="z-index:9;"
  id="mobile-menu"
>
  {#each links as [path, name]}
    <a
      href={$url(path)}
      class="text-purple-600 hover:bg-purple-500 hover:text-white px-3 py-2 text-3xl rounded-md font-medium"
    >
      {name}
    </a>
  {/each}
</div>

<style type="text/css" media="screen">
  .logo a {
    font-family: "Pacifico", cursive;
    color: #4f46e5;
  }
  .logo a:visited {
    color: #4f46e5;
  }

  nav ul li a {
    position: relative;
    transition: color ease-out 0.1s;
  }
  .active:after {
    transform: scale(1);
  }
  nav ul li a:hover {
    text-decoration: none;
  }
  nav ul li a:hover::after {
    transform: scale(1);
  }

  nav ul li a::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    height: 0.125rem;
    background-color: #4f46e5;
    transform: scale(0);
    transition: transform ease-out 0.2s;
  }

  nav ul li a:visited {
    color: inherit;
  }

  #mobile-menu a {
    color: #4f46e5;
  }
  #mobile-menu a:hover {
    color: white;
  }

  #mobile-menu a:visited {
    color: inherit;
  }
  svg {
    color: white;
  }
</style>
