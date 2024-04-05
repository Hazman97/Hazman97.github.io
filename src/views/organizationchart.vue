<template>
  <div>
    <h1
      style="
        background-color: #3E7CC4;
        color: #fef9ef;
        text-align: center;
        padding: 1rem;
        font-size: 1.5em;
        z-index: 1;
      "
    >
      Organization Chart
    </h1>
    <div class="space-x-3 p-1">
      <button class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200" @click="fitChart">Fit to the screen</button>

      <button class="border rounded-lg p-1.5 border-gray-500border rounded-lg p-2 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200" @click="cycleLayout">Change Layout</button>
    </div>

   
    <div ref="chartContainer"></div>
  </div>
</template>

<script>
import { OrgChart } from 'd3-org-chart'
// import axios from 'axios'
import employeesData from '../views/data'

export default {
  name: 'TestComponent',
  data() {
    return {
      data: [], 
      chartReference: null,
      layoutIndex: 0,
      layoutPositions: ['top', 'right', 'left', 'bottom']
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
    //   axios
    //     .get('http://localhost:3000/employees')
    //     .then((response) => {
    //       console.log('Fetched data:', response.data)
    //       this.data = response.data
    //       this.renderChart()
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error)
    //     })
    // },
    Promise.resolve(employeesData)
    .then((data) => {
      console.log('Fetched data:', data);
      this.data = data;
      this.renderChart();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
},
    renderChart() {
      if (!this.chartReference) {
        this.chartReference = new OrgChart()
      }
      this.chartReference
        .container(this.$refs.chartContainer)
        .data(this.data) 
        .nodeHeight(() => 85 + 25)
        .nodeWidth(() => 220 + 2)
        .childrenMargin(() => 50)
        .compactMarginBetween(() => 35)
        .compactMarginPair(() => 30)
        .neighbourMargin(() => 20)
        .nodeContent(function (d) {
          const color = '#FFFFFF'
          const imageDiffVert = 25 + 2
          return `
            <div style='width:${d.width}px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
              <div style="font-family: 'Inter', sans-serif;background-color:${color};margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${d.data.id}</div>
                <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;"></div>
                <div style="margin-top:${-imageDiffVert - 20}px;"><img src="${d.data.imageUrl}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
                <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">${d.data.name}</div>
                <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;">${d.data.positionName}</div>
              </div>
            </div>
          `
        })
        .layout(this.layoutPositions[this.layoutIndex]) 

        .render()
    },
    fitChart() {
      if (this.chartReference) {
        this.chartReference.fit()
      }
    },
    cycleLayout() {
  
      this.layoutIndex = (this.layoutIndex + 1) % this.layoutPositions.length
   
      this.renderChart()
    }
  }
}
</script>

<!-- Add any necessary styles for your chart container -->
<style scoped>
.chart-container {
  /* Define styles for your chart container */
}
</style>
