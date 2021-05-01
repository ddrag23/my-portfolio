<script>
  import { link } from "svelte-spa-router";
  let checked = true;
  const elid = (elid) => document.getElementById(elid);
  const myLink = {
    home: "/",
    projects: "/projects",
    about_me: "/about-me",
  };
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

<nav class="bg-white shadow-md p-5">
  <div class="flex justify-around items-center">
    <div class="logo">
      <a
        href="#home"
        class="text-2xl text-purple-600 tracking-wider hover:no-underline"
      >
        MY PORTFOLIO</a
      >
    </div>
    <div class="hidden md:block">
      <ul class="text-purple-600 flex item-baselines space-x-5 text-xl">
        <li class="">
          <a
            href={myLink.home}
            use:link
            class="hover:font-extrabold hover:text-purple-600 hover:no-underline"
            >Home</a
          >
        </li>
        <li>
          <a href={myLink.projects} use:link>Project</a>
        </li>
        <li>
          <a href={myLink.about_me} use:link>Contact</a>
        </li>
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
<div class="md:hidden hidden z-10 bg-white" id="mobile-menu">
  <div class="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
    <a
      use:link={myLink.home}
      class="text-purple-600 hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      Home
    </a>

    <a
      use:link={myLink.projects}
      class="text-purple-600 hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      Projects
    </a>

    <a
      use:link={myLink.about_me}
      class="text-purple-600 hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      About Me
    </a>
  </div>
</div>

<style type="text/css" media="screen">
  .logo a {
    font-family: "Pacifico", cursive;
    color: #4f46e5;
  }
  #mobile-menu a {
    color: #4f46e5;
  }
  #mobile-menu a:hover {
    color: white;
  }
  svg {
    color: white;
  }
</style>
