<template>
  <div class="antialiased bg-gray-400 sticky top-0 z-20">
    <header
      class="lg:px-16 px-6 bg-white flex flex-wrap items-center p-4 py-3 lg:py-0 py-2 lg:px-40 dark:bg-black"
    >
      <div class="flex-1 flex justify-between items-center dark:text-slate-200">
        <a href="https://hazman97.github.io"> Hazman Adanan </a>
      </div>

      <!-- <div class="bg-green-700 sm:bg-blue-600 md:bg-red-900 lg:bg-yellow-400 xl:bg-purple-200 2xl:bg-slate-200">test</div> -->

      <label for="menu-toggle" class="pointer-cursor lg:hidden block p-4 py-2" @click="toggleMenu">
        <svg
          class="fill-current text-gray-900 dark:text-slate-500"
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
          <ul
            class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 dark:text-slate-400"
          >
            <li>
              <darkmode class="block" />
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                href="/code"
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
  <main class="bg-gray-200 min-h-screen flex justify-center items-center dark:bg-[#151618]">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Home Section -->
      <div class="bg-slate-200 dark:bg-[#151618]">
        <div class="my-5 min-h-screen flex flex-wrap justify-center items-center">
          <section class="text-center flex-initial w-full sm:w-3/4 px-4" id="home">
            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-slate-200"
            >
              Hi there!
            </h1>
            <p class="text-lg text-gray-700 mb-8 dark:text-slate-400">
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
  <main
    class="bg-gray-100 max-h-screen flex justify-start items-start dark:bg-[#232426] dark:text-slate-300"
  >
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
  <main
    class="bg-gray-200 min-h-screen flex justify-start items-start dark:bg-[#151618] dark:text-slate-300"
  >
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <!-- Experience -->
      <section class="mt-12" id="Experience">
        <h2 class="text-2xl font-semibold mb-4">Experience</h2>
        <p>This is where you can showcase your projects with descriptions and links.</p>
      </section>
    </div>
  </main>
  <main
    class="bg-gray-100 min-h-screen flex justify-start items-start dark:bg-[#151618] dark:text-slate-300"
  >
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <!-- Resume Section -->
      <section class="mt-12" id="Project">
        <h2 class="text-2xl font-semibold mb-4">Project</h2>
        <p>This is where you can provide a downloadable version of your resume or CV.</p>
        <div class="flex flex-1 space-x-5 mt-3">
          <div
            class="max-w-[300px] overflow-hidden rounded-xl bg-white dark:bg-[#232426] shadow-md duration-200 hover:scale-105 hover:shadow-xl"
          >
            <img
              src="/src/img/Screenshot 2024-04-18 122056.png"
              alt="plant"
              class="h-auto min-w-[300px]"
            />
            <div class="p-5">
              <P class="font-bold text-center text-lg">Color Palette Portfolio</P>
              <p class="text-medium mb-5 text-gray-700 dark:text-slate-400">
                The Color Palette Portfolio helps users pick website colors easily. They can try out
                different combinations using custom palettes, see how they look on a website, and
                get color codes for use.
              </p>
              <a
                href="https://hazman5540.tech/colorpalette"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  class="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
                >
                  See More
                </button>
              </a>
            </div>
          </div>
          <div
            class="max-w-[300px] overflow-hidden rounded-xl bg-white dark:bg-[#232426] shadow-md duration-200 hover:scale-105 hover:shadow-xl"
          >
            <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
            <div class="p-5">
              <p class="text-medium mb-5 text-gray-700  dark:text-slate-400">
                Well, aren't you going up to the lake tonight, you've been planning it for two
                weeks.
              </p>
              <button
                class="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
              >
                See More
              </button>
            </div>
          </div>
          <div
            class="max-w-sm overflow-hidden rounded-xl bg-white  dark:bg-[#232426] shadow-md duration-200 hover:scale-105 hover:shadow-xl"
          >
            <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
            <div class="p-5">
              <p class="text-medium mb-5 text-gray-700  dark:text-slate-400">
                Well, aren't you going up to the lake tonight, you've been planning it for two
                weeks.
              </p>
              <button
                class="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <main
    class="bg-gray-200 min-h-screen flex justify-start items-start dark:bg-[#232426] dark:text-slate-300"
  >
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <!-- Contact Section -->
      <section class="mt-12" id="Education">
        <h2 class="text-2xl font-semibold mb-4">Education</h2>
        <p>This is where you can include a contact form or provide contact information.</p>
        <!-- component -->
        <div class="flex-1 bg-white dark:bg-[#151618] rounded-lg shadow-xl mt-4 p-8">
          <h4 class="text-xl text-gray-900 dark:text-slate-300 font-bold">Timeline</h4>
          <div class="relative px-4 z-10">
            <div
              class="absolute h-full border border-dashed border-opacity-20 border-secondary"
            ></div>

            <!-- start::Timeline item -->
            <div class="flex items-center w-full my-6 -ml-1.5 relative">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full">
                  <span
                    class="absolute -left-8 top-0 text-blue-300 text-sm md:left-3 lg:left-3 xl:left-3 2xl:left-3"
                  >
                    2010 </span
                  ><span
                    class="md:left-3 lg:left-3 xl:left-3 2xl:left-3 text-blue-300 text-sm absolute bottom-0 -left-8"
                  >
                    2013
                  </span>
                </div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Profile informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.Profile
                  informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.
                </p>
                <p class="text-xs text-gray-500">3 min ago</p>
              </div>
            </div>

            <div class="flex items-center w-full my-6 -ml-1.5 relative">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full">
                  <span
                    class="absolute -left-8 top-0 text-blue-300 text-sm md:left-3 lg:left-3 xl:left-3 2xl:left-3"
                  >
                    2010 </span
                  ><span
                    class="md:left-3 lg:left-3 xl:left-3 2xl:left-3 text-blue-300 text-sm absolute bottom-0 -left-8"
                  >
                    2013
                  </span>
                </div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Profile informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.Profile
                  informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.
                </p>
                <p class="text-xs text-gray-500">3 min ago</p>
              </div>
            </div>
            <div class="flex items-center w-full my-6 -ml-1.5 relative">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full">
                  <span
                    class="absolute -left-8 top-0 text-blue-300 text-sm md:left-3 lg:left-3 xl:left-3 2xl:left-3"
                  >
                    2010 </span
                  ><span
                    class="md:left-3 lg:left-3 xl:left-3 2xl:left-3 text-blue-300 text-sm absolute bottom-0 -left-8"
                  >
                    2013
                  </span>
                </div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Profile informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.Profile
                  informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.
                </p>
                <p class="text-xs text-gray-500">3 min ago</p>
              </div>
            </div>
            <div class="flex items-center w-full my-6 -ml-1.5 relative">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full">
                  <span
                    class="absolute -left-8 top-0 text-blue-300 text-sm md:left-3 lg:left-3 xl:left-3 2xl:left-3"
                  >
                    2010 </span
                  ><span
                    class="md:left-3 lg:left-3 xl:left-3 2xl:left-3 text-blue-300 text-sm absolute bottom-0 -left-8"
                  >
                    2013
                  </span>
                </div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Profile informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.Profile
                  informations changed.Profile informations changed.Profile informations
                  changed.Profile informations changed.Profile informations changed.
                </p>
                <p class="text-xs text-gray-500">3 min ago</p>
              </div>
            </div>
            <!-- end::Timeline item -->

            <!-- end::Timeline item -->
          </div>
        </div>
      </section>
    </div>
  </main>
  <main
    class="bg-gray-100 min-h-screen flex justify-start items-start dark:bg-[#151618] dark:text-slate-300"
  >
    <div class="max-w-4xl 2xl:mx-40 xl:mx-40 mx-auto px-4">
      <section class="mt-12" id="Skill">
        <h2 class="text-2xl font-semibold mb-4">Skill</h2>
        <p>This is where you can include a contact form or provide contact information.</p>
      </section>
    </div>
  </main>
</template>

<script>
import darkmode from '../components/ThemeSwitcher.vue'
export default {
  components: {
    darkmode
  },

  name: 'maskformdsdasVidsadews',
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
