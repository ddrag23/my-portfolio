<svelte:head>
  <title>About</title>
</svelte:head>

<section id="about" class="max-w-screen-lg mx-auto py-8 pr-4 pl-0">
  <div class="section__about box-border mx-20 px-10">
    <h1 class="title__about">About Me</h1>
    <p class="title__content">
      Hi There!! I'm Alwi. My fullname Mohammad Baidhowi Alwi.I'm a 23 y/o.
      currently I learning English, js framework as sveltejs and nodejs, I'm
      experienced using php languange for build website. I also experienced
      build website using php framework as laravel and codeigniter. I always
      learned from mistakes and I've always loved new things about software
      development.
      <br />
    </p>
    <h1 class="title__about">Background</h1>
    <p class="title__content">
      I was born in Indonesia, Java island to be more precise. I start focus
      learning Programmer languange since the 3rd year of collage. actually, I
      know about Programming languange since the first years of collage. but I
      not focused for that. Because I focused on working as a vegetable seller
      in the market and I did that before I left for college.
    </p>
    <h1 class="title__about">Spoken Languanges</h1>
    <p class="title__content">
      I can speak Indonesian and currently i learn english languange because i
      want learn more about the world software development and i want to speak
      better when i discuss with people from outside my country, build
      relationship and more.
    </p>
    <h1 class="title__about">Programming Languanges</h1>
    <p class="title__content">
      Here are some Programming and Markup languanges that I know, I'm trying
      not to limit myselft for one languange. Because not every problems can be
      solved using one languange, this my opinion.
    </p>
    <ul class="about__list">
      <li class="list__item">
        <span class="list__title">HTML/CSS</span>
        <p class="list__item">
          I consider myself quite understanding html and css. indeed not an
          expert. but I am used to using css and html for making my website.
        </p>
      </li>
      <li class="list__item">
        <span class="list__title">Javascript</span>
        <p class="list__item">
          Javascript is my preferred programming languange for now. I using
          javascript in my website for manipulation user interface. I usually
          use vanilla javascript. I already using vanilla for 4 months and I'm
          now learning sveltejs to help make it easier for me in dom
          manipulation on my website. I built this website using sveltejs.
        </p>
      </li>
      <li class="list__item">
        <span class="list__title">PHP</span>
        <p class="list__item">
          PHP is my first programming languange in the programming world. until
          now i still use php to make the backend of my website. I usually use
          laravel to build my website. but, I don't limit myself to frameworks.
          because I like learning new things
        </p>
      </li>
    </ul>
  </div>
</section>

<style>
  :root {
    --primary-color: #4f46e5;
  }
  .about__list {
    margin-top: 10px;
    margin-left: 15px;
    list-style-position: inside;
    list-style: disc;
  }
  .list__item {
    padding-bottom: 1rem;
  }
  .list__title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
  }
  .section__about {
    max-width: 80ch;
    margin: auto;
  }

  .title__about {
    font-size: 1.8rem;
    color: var(--primary-color);
    margin: 0 0 1rem;
    position: relative;
    font-weight: 600;
  }
  .title__about:not(:first-child) {
    margin-top: 2rem;
  }
  .title__about::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.125rem;
    background-image: linear-gradient(
      to right,
      var(--primary-color),
      rgba(0, 0, 0, 0)
    );
  }

  /* .section__about p + p { */
  /*   margin-top: 1.5rem; */
  /* } */
</style>
