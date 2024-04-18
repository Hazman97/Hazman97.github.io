<template>
  <div class="flex">
    <div :style="{ backgroundColor: boxColors[0] }" class="box m-4 p-4">
      <p class="text-white">#007d99</p>
    </div>
    <div :style="{ backgroundColor: boxColors[1] }" class="box m-4 p-4">
      <p class="text-white">#00afad</p>
    </div>
    <div :style="{ backgroundColor: boxColors[2] }" class="box m-4 p-4">
      <p class="text-white">#ff763b</p>
    </div>
    <div :style="{ backgroundColor: boxColors[3] }" class="box m-4 p-4">
      <p class="text-black">#ffffff</p>
    </div>
  </div>
  <input v-model="newColor" class="p-2 mt-4" placeholder="Enter new color">
  <button @click="changeColor" class="p-2 mt-2 bg-gray-800 text-white">Change Color</button>



  <div class="w-auto h-screen bg-gradient-to-b from-[#007d99] to-[#00afad] mt-4"><nav>
  <div class="flex item-center justify-between ml-20 mr-20 p-5">
    <div>
<img class="h-10 w-auto grayscale" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo">
    </div>
    <div class="flex space-x-4 items-center">
<a ref="https://www.google.com" class="text-white">Google</a>
<a ref="https://www.google.com" class="text-white">Google</a>
<a ref="https://www.google.com" class="text-white">Google</a>
<a ref="https://www.google.com" class="text-white">Google</a>
<button class="bg-[#ff763b] rounded-full text-white py-3 px-8"> orange</button>
    </div>
  </div>
</nav>
    <div class="flex justify-around">
      <div class="mt-40">
<h1 class="text-white text-5xl font-bold  ">HAPPY WORKING</h1>
      
      <article class="text-wrap text-slate-300">
        <h1>Beloved Manhattan soup stand closes</h1>
        <p>New Yorkers are facing the winter chill...</p>
      </article></div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxColors: ['#007d99', '#00afad', '#ff763b', '#ffffff'], // Initial colors of the boxes
      newColor: '' // User input for new color
    };
  },
  methods: {
    changeColor() {
      // Update the color of each box based on the user input
      if (this.newColor) {
        this.boxColors = [this.newColor, this.newColor, this.newColor, this.newColor];
        // Reset the input field after updating the colors
        this.newColor = '';
      }
    }
  }
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
}
</style>
