<template>
  <div class="bg-white h-screen">
    <div class="relative">
      <img
        class="rounded-3xl p-2 md:h-96 md:w-96 h-80 w-80 mx-auto"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Forest"
        style="width: 100%"
      />

      <div
        class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full"
        style="width: 45%"
      >
        <img
          class="rounded-full p-2"
          src="https://media.licdn.com/dms/image/D4E03AQGGcQyu_VcRmg/profile-displayphoto-shrink_100_100/0/1683897295996?e=1718841600&amp;v=beta&amp;t=ofmCiLCfbABBIpYF45pRPNt5I8qZDcNrB-Etrq-Mo1Q"
          alt="Profile"
          style="width: 100%; height: auto; border-radius: 50%"
        />
      </div>
    </div>
    <div class="flex-wrap mx-auto items-center text-center pt-14">
      <h1 class="font-bold text-4xl text-slate-700">JOHN DEO</h1>
      <H1 class="text-md text-slate-700 font-semibold"> Front End Developer </H1>
      <span class="flex justify-center pt-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="30px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
          />
        </svg>
      </span>

      <p>0169333092</p>

      <span class="flex justify-center pt-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
          />
        </svg>
      </span>
      <p>hazman5001@gmail.com</p>
    </div>
    <div>
      <div class="flex justify-center space-x- pt-10">
        <button class="p-2 bg-[#010101] text-white rounded-sm flex item-center font-semibold text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
            />
          </svg>
          save card
        </button>
        <button class="border-4 text-slate-700 p-1 border-[#010101] font-semibold flex text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
            /></svg
          >whatsapp
        </button>
      </div>
      <p class="text-wrap pt-4 p-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias quo animi neque ex
        voluptatem non ad? Eum sit delectus, nisi sequi harum soluta sint sed tenetur ipsum, itaque
        nobis?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrgChartExample'
}
</script>
