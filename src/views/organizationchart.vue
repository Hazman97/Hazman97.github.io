<template>
  <Chart :data="data"></Chart>
</template>

<script>
import * as d3 from 'd3';
import Chart from '../Chart.js';

export default {
  name: "BarChart",
  data() {
    return {
      data: [], // Initialize data as an empty array
    };
  },
  components: {
    Chart,
  },
  created() {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((csvData) => {
      // Process the fetched CSV data here if needed
      // For example, you might want to convert it to a different format

      // Set the processed data to the component's data property
      this.data = csvData;

      console.log('Fetched data:', this.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  },
};
</script>
