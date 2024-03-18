<template>
  <div class="antialiased bg-gray-400 sticky top-0">
    <header
      class="lg:px-16 px-6 bg-white flex flex-wrap items-center p-4 py-3 lg:py-0 py-2 lg:px-40"
    >
      <div class="flex-1 flex justify-between items-center">
        <a href="https://hazman97.github.io"> Hazman Adanan </a>
      </div>

      <label for="menu-toggle" class="pointer-cursor lg:hidden block p-4 py-2" @click="toggleMenu">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div
        :class="
          menuOpen
            ? 'lg:flex lg:items-center lg:w-auto w-full'
            : 'hidden lg:flex lg:items-center lg:w-auto w-full'
        "
        id="menu"
      >
        <nav>
          <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <theme-switcher
                :theme="theme"
                @themeChanged="updateTheme"
                class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
              />
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="#about"
                >About</a
              >
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="#Experience"
                >experience</a
              >
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="#Project"
                >Project</a
              >
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                href="#Education"
                >Education</a
              >
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                href="#Skill"
                >Skill</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
  <main class="bg-gray-200 min-h-screen flex justify-center items-center">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Home Section -->
      <div class="bg-slate-200">
        <div class="my-5 min-h-screen flex flex-wrap justify-center items-center">
          <section class="text-center flex-initial w-full sm:w-3/4 px-4" id="home">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hi there!</h1>
            <p class="text-lg text-gray-700 mb-8">
              I'm a front-end enthusiast gaining practical experience in the field. After completing
              an internship, I've transitioned into a role as a Front End Developer. Passionate
              about web development, I'm also intrigued by networking and computer support
              technology. With a solid foundation in these areas and a commitment to ongoing
              learning, I'm eager to explore opportunities that allow me to contribute to both
              front-end development and IT support roles.
            </p>
          </section>
          <div class="flex-initial w-full md:w-1/4 px-4 text-center">
            <img
              class="rounded-full object-scale-down mx-auto h-48 w-96"
              src="/src/assets/hazman.jpg"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
  <main class="bg-gray-100 max-h-screen flex justify-start items-start">
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <!-- About Section -->
      <section class="py-20" id="about">
        <h2 class="flex-start text-2xl font-semibold">About Me</h2>
        <p>
          This is where you can introduce yourself and describe your skills, experiences, and
          interests.
        </p>
      </section>
    </div>
  </main>
  <main class="bg-gray-200 min-h-screen flex justify-start items-start">
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <!-- Experience -->
      <section class="mt-12" id="Experience">
        <h2 class="text-2xl font-semibold mb-4">Experience</h2>
        <p>This is where you can showcase your projects with descriptions and links.</p>
      </section>
    </div>
  </main>
  <main class="bg-gray-100 min-h-screen flex justify-start items-start">
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <!-- Resume Section -->
      <section class="mt-12" id="Project">
        <h2 class="text-2xl font-semibold mb-4">Project</h2>
        <p>This is where you can provide a downloadable version of your resume or CV.</p>
      </section>
    </div>
  </main>
  <main class="bg-gray-200 min-h-screen flex justify-start items-start">
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <!-- Contact Section -->
      <section class="mt-12" id="Education">
        <h2 class="text-2xl font-semibold mb-4">Education</h2>
        <p>This is where you can include a contact form or provide contact information.</p>
      </section>
    </div>
  </main>
  <main class="bg-gray-100 min-h-screen flex justify-start items-start">
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <section class="mt-12" id="Skill">
        <h2 class="text-2xl font-semibold mb-4">Skill</h2>
        <p>This is where you can include a contact form or provide contact information.</p>
      </section>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
/* Add custom styles here */
</style>
