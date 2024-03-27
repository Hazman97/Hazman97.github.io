<template>
    <div ref="chart"></div>
  </template>
  
  <script>
  import { OrgChart } from 'd3-org-chart';
  
  export default {
    name: 'OrgChartExample',
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        OrgChart()(this.$refs.chart)
          .data({
            name: "CEO",
            children: [
              { name: "Manager 1" },
              { name: "Manager 2" }
            ]
          })
          .render();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any necessary styles */
  </style>
  