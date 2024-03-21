// store/index.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    reportData: null
  },
  mutations: {
    setReportData(state, data) {
      state.reportData = data;
    }
  },
  actions: {
    fetchReportData({ commit }, reportType) {
      // Simulating asynchronous data fetching
      setTimeout(() => {
        // Fetch report data based on reportType
        // For this example, just mocking some data
        const reportData = {
          type: reportType,
          content: 'Sample report content'
        };
        commit('setReportData', reportData);
      }, 1000);
    },
    submitReport({ state }) {
      // Simulating submitting report data to backend
      setTimeout(() => {
        console.log('Submitting report data:', state.reportData);
        // In a real application, you would send state.reportData to the backend
      }, 500);
    }
  }
});
