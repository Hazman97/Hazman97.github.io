<template>
  <div>
    <!-- Color palette for background gradient -->
    <div class="flex">
  <!-- Background Color Palette -->
  <div v-for="(color, index) in backgroundColors" :key="'background' + index" :style="{ backgroundColor: color }" class="box m-4 p-4">
    <input v-model="backgroundColors[index]" type="color" class="p-1 mt-8" placeholder="Enter color" />
    <input v-model="backgroundColors[index]" class="p-1 mt-2 w-20" />
  </div>
  
  <!-- Button Color Palette -->
  <div v-for="(color, index) in buttonColors" :key="'button' + index" :style="{ backgroundColor: color }" class="box m-4 p-4">
    <input v-model="buttonColors[index]" type="color" class="p-1 mt-8" placeholder="Enter color" />
    <input v-model="buttonColors[index]" class="p-1 mt-2 w-20" />
  </div>

  <!-- Text Color Palette -->
  <div v-for="(color, index) in textColors" :key="'text' + index" :style="{ backgroundColor: color }" class="box m-4 p-4">
    <input v-model="textColors[index]" type="color" class="p-1 mt-8" placeholder="Enter color" />
    <input v-model="textColors[index]" class="p-1 mt-2 w-20" />
  </div>
</div>


    <div :style="{ background: 'linear-gradient(to bottom, ' + backgroundColors.join(', ') + ')' }" class="w-auto h-screen mt-4">
      <nav>
        <div class="flex item-center justify-between ml-20 mr-20 p-5">
          <div>
            <img
              class="h-10 w-auto grayscale"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google logo"
            />
          </div>
          <div class="flex space-x-4 items-center">
            <a ref="https://www.google.com" :style="{  color: textColors[0] }" class="text-white">Google</a>
            <a ref="https://www.google.com" :style="{  color: textColors[0] }" class="text-white">Google</a>
            <a ref="https://www.google.com" :style="{  color: textColors[0] }" class="text-white">Google</a>
          <a ref="https://www.google.com" :style="{  color: textColors[0] }" class="">Google</a>
            <button :style="{ backgroundColor: buttonColors[0], color: textColors[0] }" class="rounded-full text-white py-3 px-8">Button</button>
          </div>
        </div>
      </nav>
      <div class="flex justify-around">
        <div class="mt-40">
          <h1 :style="{ color: textColors[0] }" class="text-5xl font-bold">HAPPY WORKING</h1>

          <article :style="{ color: textColors[0] }" class="text-wrap text-slate-300 mt-2">
            <h1>Beloved Manhattan soup stand closes</h1>
            <p>New Yorkers are facing the winter chill...</p>
          </article>
        </div>
        <div></div>
      </div>
      <div class="item-center justify-center flex mt-10">
        <input class="p-2 rounded-l-lg" type="text" placeholder="type your works email">
        <button :style="{ backgroundColor: buttonColors[0], color: textColors[0] }" class=" rounded-r-2xl bg-slate-50 p-2">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPaletteView',
  data() {
    return {
      backgroundColors: ['#007d99', '#00afad'], 
      buttonColors: ['#ff763b'], 
      textColors: ['#ffffff'], 
    }
  },
}
</script>

<style>
.box {
  width: 100px;
  height: 100px;
}
</style>
