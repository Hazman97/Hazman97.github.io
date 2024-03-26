<template>
    <div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newNode.name" />
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="newNode.title" />
        <button @click="addNode">Add Node</button>
      </div>
      <org-chart :nodes="nodes" @node-deleted="updateNodes" @node-added="updateNodes"></org-chart>
    </div>
  </template>
  
  <script>
  import OrgChart from '../views/OrgChart.vue';
  
  export default {
    name: 'TapdaoP',
    components: {
      OrgChart
    },
    data() {
      return {
        nodes: [
          // Initial nodes
          { id: 1, name: 'John Doe', title: 'CEO', level: 0, children: [
            { id: 2, name: 'Jane Doe', title: 'Manager', level: 1 }
          ]}
          // Add more initial nodes if needed
        ],
        newNode: { name: '', title: '' }
      };
    },
    methods: {
      addNode() {
        // Add logic to add a new node here
        const newNode = {
          id: Math.random().toString(36).substr(2, 9),
          name: this.newNode.name,
          title: this.newNode.title,
          level: 0
        };
        this.nodes.push(newNode);
        this.newNode = { name: '', title: '' }; // Clear the input fields
      },
      updateNodes(nodes) {
        this.nodes = nodes;
      }
    }
  };
  </script>
  
  <style>
  /* Add styles if needed */
  </style>
  