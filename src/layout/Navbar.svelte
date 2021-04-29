<script>
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
          <a href="#home" class="hover:text-red-500">Home</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div class="-mr-2 flex md:hidden">
      <button
        type="button"
        class="bg-purple-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
    <div class="md:hidden hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#"
          class="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Dashboard
        </a>

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Team
        </a>

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </a>

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Calendar
        </a>

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Reports
        </a>
      </div>
    </div>
  </div>
</nav>

<style type="text/css" media="screen">
  .logo a {
    font-family: "Pacifico", cursive;
  }
  svg {
    color: white;
  }
</style>
