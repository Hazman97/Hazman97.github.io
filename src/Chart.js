import { OrgChart } from 'd3-org-chart';

export default {
  template: `<div ref="chartContainer"></div>`,
  props: ['data'],
  mounted() {
    this.renderChart();
  },
  watch: {
    data: {
      immediate: true,
      handler(newData) {
        this.renderChart(newData);
      },
    },
  },
  methods: {
    renderChart(data) {
      if (!this.$refs.chartContainer) {
        return;
      }

      console.log('Data:', data); // Log data to inspect it

      if (!this.chart) {
        this.chart = new OrgChart();
      }

      this.$refs.chartContainer.innerHTML = '';

      this.chart
        .container(this.$refs.chartContainer)
        .data(data || this.data)
        .render();
    },
  },
};
