<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 min-h-[80vh]"
        >
          <h2 class="text-2xl font-bold text-gray-700 capitalize dark:text-white">lapor wei</h2>
          <div class="justify-center items-center">
            <div class="flex justify-end ">
              <label
                @click="selectedTab = 'something'"
                :class="{ 'bg-blue-500 text-white': selectedTab === 'something' }"
                class="flex justify-center cursor-pointer rounded-l-2xl border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 hover:text-slate-500 focus:outline-none transition-all duration-500 ease-in-out"
                >Something</label
              >
              <label
                @click="selectedTab = 'about'"
                :class="{ 'bg-blue-500 text-white': selectedTab === 'about' }"
                class="flex justify-center cursor-pointer  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                >About</label
              >
              <label
                @click="selectedTab = 'details'"
                :class="{ 'bg-blue-500 text-white': selectedTab === 'details' }"
                class="flex justify-center cursor-pointer rounded-r-2xl border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                >Details</label
              >
            </div>
            <div class="flex items-center justify-center">
              <ul class="mx-auto px-8 justify-end relative">
                <li v-if="selectedTab === 'something'" class="">
                  <input
                    class="peer sr-only"
                    type="radio"
                    value="something"
                    name="answer"
                    id="something"
                    checked
                  />
                  <div
                    class="bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg mx-auto transition-all duration-500 ease-in-out"
          
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
                    voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore
                    nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum!
                    Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a
                    aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsudm
                    dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
                    dadsadjasd jdajda djak djkajd sakjd sakkasj kdsajddjkasjd a ksajd ka sd

                    <button class="absolute right-10 border-indigo-300 -bottom-9 mt-3 w-full inline-flex justify-center rounded-b-2xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Save </button>
                
                  </div>
                </li>
                <li v-else-if="selectedTab === 'about'" class="">
                  <input class="peer sr-only" type="radio" value="about" name="answer" id="about" />
                  <div
                    class="bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg mx-auto transition-all duration-500 ease-in-out"
                  >
                  consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur
                    ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
                    amet condsectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur
                    error nulla quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?    consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur
                    ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
                    amet condsectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur
                    error nulla quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                    <button class="absolute right-10 border-indigo-300 -bottom-9 mt-3 w-full inline-flex justify-center rounded-b-2xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Save </button>
                
                  </div>
                </li>
                <li v-else class="">
                  <input
                    class="peer sr-only"
                    type="radio"
                    value="details"
                    name="answer"
                    id="details"
                  />
                  <div
                    class="bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg mx-auto transition-all duration-500 ease-in-out"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
                    voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore
                    nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum!
                    Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a
                    aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsudm
                    dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
                    consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur
                    ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
                    amet condsectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur
                    error nulla quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                    consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur
                    ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit
                    amet condsectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur
                    error nulla quaerat rem fugit provident tempore nihil a aspernatur ad
                    laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                    <button class="absolute right-10 border-indigo-300 -bottom-9 mt-3 w-full inline-flex justify-center rounded-b-2xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Save </button>
                
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: ''
    }
  }
}
</script>

<style lang="css">
/* If you're using scoped styles, you can place Tailwind CSS here */
</style>
