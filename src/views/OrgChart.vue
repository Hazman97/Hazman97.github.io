<template>
    <div class="org-chart">
      <div v-for="node in nodes" :key="node.id" :style="{ marginLeft: node.level * 20 + 'px' }">
        <div>{{ node.name }} - {{ node.title }}</div>
        <button @click="addChildNode(node)">Add Child</button>
        <button @click="deleteNode(node)">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nodes: {
        type: Array,
        required: true
      }
    },
    methods: {
      addChildNode(parentNode) {
        const newNode = {
          id: Math.random().toString(36).substr(2, 9),
          name: 'New Employee',
          title: 'New Title',
          level: parentNode.level + 1
        };
        if (!parentNode.children) {
          this.$set(parentNode, 'children', []);
        }
        parentNode.children.push(newNode);
        this.$emit('node-added', this.nodes);
      },
      deleteNode(nodeToDelete) {
        const parentNode = this.findParentNode(nodeToDelete, this.nodes);
        if (parentNode) {
          parentNode.children = parentNode.children.filter(node => node.id !== nodeToDelete.id);
          this.$emit('node-deleted', this.nodes);
        } else {
          this.$emit('node-deleted', this.nodes.filter(node => node.id !== nodeToDelete.id));
        }
      },
      findParentNode(node, nodeList) {
        for (const item of nodeList) {
          if (item.children && item.children.includes(node)) {
            return item;
          }
          if (item.children) {
            const found = this.findParentNode(node, item.children);
            if (found) return found;
          }
        }
        return null;
      }
    }
  };
  </script>
  
  <style scoped>
  .org-chart {
    font-family: Arial, sans-serif;
  }
  .org-chart > div {
    margin-bottom: 10px;
  }
  .org-chart button {
    margin-left: 10px;
  }
  </style>
  