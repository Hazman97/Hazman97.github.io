<template>
  <div>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      @click="printPage"
    >
      Print
    </button>
    <div id="resume" class="max-w-3xl mx-auto my-10 p-5 bg-white shadow-md rounded">
      <header class="text-center mb-6">
        <div class="flex justify-around">
          <div>
            <img
              class="object-center hover:object-top w-28 h-28 bg-white rounded-full mx-auto"
              src="https://media.licdn.com/dms/image/D5603AQFfmIf3-IMSMw/profile-displayphoto-shrink_800_800/0/1683793088607?e=1724889600&v=beta&t=qRNeTeTBK1TxUplWP7eBhKkWAYYDSG4wY-YCkWjJyYw"
              alt="Profile Picture"
            />
          </div>
          <div>
            <h1 class="text-2xl mt-5 uppercase font-bold">
              Muhammad Hazman bin Mohd Adanan
            </h1>
            <p class="text-gray-600">Programmer</p>
            <div class="mt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=6.162127648192204,102.19026789345943"
                class="text-blue-500 hover:underline ml-4"
              >
                Tumpat Kelantan
              </a>
              |
              <a href="mailto:hazman5001@gmail.com" class="text-blue-500 hover:underline">hazman5001@gmail.com</a>
              |
              <a href="tel:+60169333092" class="text-blue-500 hover:underline">0169333092</a>
            </div>
          </div>
        </div>
      </header>
      <section class="mb-6">
        <h2 class="text-center text-2xl font-bold border-b-2 border-gray-800 pb-1 mb-4">
          Summary
        </h2>
        <p class="text-gray-700">
          Experienced Front End Developer with Vue.js, Tailwind CSS. Skilled in HTML, Python, C++, and C, with proficiency in tools like NetBeans and Micropython. Strong background in networking and troubleshooting diverse operating systems. with a passion for continuous learning and contributing to both front-end development and IT support roles. Experienced Software Developer with expertise in Vue.js, Tailwind CSS, and modern web development technologies. Proven track record of delivering high-quality applications on time and within budget.
        </p>
      </section>
      <section class="mb-6">
        <h2 class="text-2xl text-center font-bold border-b-2 border-gray-800 pb-1 mb-4">
          Experience
        </h2>
        <div class="mb-4">
          <h3 class="text-xl font-semibold">Frontend Developer</h3>
          <div>
            <p class="text-gray-600 flex justify-between">
              <span>ABC Corp</span>
              <span class="text-gray-600">Dec 2023 - Present</span>
            </p>
          </div>
          <ul class="list-disc list-inside text-gray-700">
            <li>Lead a team of developers to build scalable web applications.</li>
            <li>Implemented new features and optimized existing codebase for better performance.</li>
            <li>Collaborated with cross-functional teams to define project requirements and deliverables.</li>
          </ul>
        </div>
        <div class="mb-4">
          <h3 class="text-xl font-semibold">Software Developer</h3>
          <p class="text-gray-600">XYZ Ltd | Jan 2017 - Dec 2019</p>
          <ul class="list-disc list-inside text-gray-700">
            <li>Developed and maintained web applications using Vue.js and Tailwind CSS.</li>
            <li>Worked closely with designers to create user-friendly interfaces.</li>
            <li>Assisted in the migration of legacy systems to modern web technologies.</li>
          </ul>
        </div>
      </section>
      <section class="mb-6">
        <h2 class="text-2xl text-center font-bold border-b-2 border-gray-800 pb-1 mb-4">
          Education
        </h2>
        <div class="mb-4">
          <h3 class="text-xl font-semibold">Bachelor of Computer Science And Maritime Informatics</h3>
          <p class="text-gray-600 flex justify-between">
            <span>Universiti Malaysia Terengganu</span>
            <span>2019 - 2024</span>
          </p>
          <p class="text-gray-600">CGPA: 3.31</p>
        </div>
        <div class="mb-4">
          <h3 class="text-xl font-semibold">Diploma Electric & Electronic</h3>
          <p class="text-gray-600 flex justify-between">
            <span>Politeknik Ibrahim Sultan</span>
            <span>2015 - 2018</span>
          </p>
          <p class="text-gray-600">HPNM: 2.87</p>
        </div>
      </section>
      <section>
        <h2 class="text-2xl font-bold border-b-2 text-center border-gray-800 pb-1 mb-4">Skills</h2>
        <h3 class="text-lg capitalize font-semibold">Soft Skills:</h3>
        <div class="mb-4 grid grid-cols-3 gap-4">
          <ul class="list-disc list-inside">
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
          <div>
            <ul class="list-disc list-inside">
              <li>SQL (Intermediate), MongoDB (Intermediate)</li>
              <li>Git (Intermediate), Docker (Intermediate)</li>
            </ul>
          </div>
          <div>
            <ul class="list-disc list-inside">
              <li>HTML (Advanced), CSS (Advanced), Tailwind CSS (Intermediate)</li>
              <li>SQL (Intermediate), MongoDB (Intermediate)</li>
              <li>Git (Intermediate), Docker (Intermediate)</li>
            </ul>
          </div>
        </div>
        <h3 class="text-lg capitalize font-semibold">Technical Skills:</h3>
        <div class="mb-4 grid grid-cols-3 gap-4">
          <ul class="list-disc list-inside">
            <li>English (Basic)</li>
          </ul>
          <div>
            <ul class="list-disc list-inside">
              <li>Malay (Advanced)</li>
            </ul>
          </div>
        </div>
        <h3 class="text-lg capitalize font-semibold">Programming Languages:</h3>
        <div class="mb-4 grid grid-cols-3 gap-4">
          <ul class="list-disc list-inside">
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
          <div>
            <ul class="list-disc list-inside">
              <li>SQL (Intermediate), MongoDB (Intermediate)</li>
              <li>Git (Intermediate), Docker (Intermediate)</li>
            </ul>
          </div>
          <div>
            <ul class="list-disc list-inside">
              <li>HTML (Advanced), CSS (Advanced), Tailwind CSS (Intermediate)</li>
              <li>SQL (Intermediate), MongoDB (Intermediate)</li>
              <li>Git (Intermediate), Docker (Intermediate)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeT",
  methods: {
    printPage() {
      const resumeElement = document.getElementById("resume").innerHTML;
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = resumeElement;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // To ensure that the Vue component re-renders correctly
    },
  },
};
</script>

<style>
/* Regular styles */

@media print {
  body {
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
    transform: scale(0.95); /* Adjust scale to fit the content within print margins */
    overflow: hidden;
  }
  #resume {
    width: 100%;
    box-shadow: none;
  }
  button {
    display: none;
  }

  /* Page break rules */
  header, section {
    page-break-inside: avoid;
  }
  header {
    page-break-before: auto;
  }
  section {
    page-break-before: auto;
    page-break-after: auto;
  }
  /* Ensure no unwanted margins are applied in print mode */
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>