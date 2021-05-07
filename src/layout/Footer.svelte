<script charset="utf-8">
  import Icon from "svelte-awesome";
  import {
    faGithub,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<footer
  class="flex flex-col justify-center items-center w-full bg-purple-600 text-white p-5"
>
  <div class="contact flex justify-center items-center">
    <a href="mailto:kurodyami@gmail.com" target="" class="mx-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 -2 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </a>
    <a href="https://github.com/ddrag23" target="" class="mx-2">
      <Icon data={faGithub} />
    </a>
    <a href="https://twitter.com/@baiikzoo" target="" class="mx-2">
      <Icon data={faTwitter} />
    </a>
    <a
      href="https://www.linkedin.com/in/mohammad-baidhowi-alwi-5a41b01b7/"
      target=""
      class="mx-2"
    >
      <Icon data={faLinkedin} />
    </a>
  </div>
  <p class="text-sm md:text-base text-center">
    Powered by <strong>SvelteJs</strong> * Source code is available on
    <strong>
      <a href="https://github.com/ddrag23/my-portfolio" target="_blank"
        >Github</a
      >
    </strong>
  </p>
  <p class="text-sm md:text-base">
    Inspired design by <a
      href="https://elianiva.my.id/"
      class="font-bold"
      target="_blank"
      style="color: white;">Elianiva</a
    >
  </p>
</footer>

<style type="text/css" media="screen">
  footer a {
    color: white;
  }
  footer a:visited {
    color: inherit;
  }

  footer a:hover {
    color: #b656d3;
  }
</style>
