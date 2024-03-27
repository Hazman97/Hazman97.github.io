<template>
    <div class="node bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img :src="node.image" alt="Profile" class="w-16 h-16 rounded-full mb-2">
      <div class="text-lg font-semibold">{{ node.name }}</div>
      <div class="text-sm text-gray-500">{{ node.position }}</div>
      <div class="children mt-4" v-if="node.children">
        <TreeNode v-for="child in node.children" :key="child.name" :node="child" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TreeNode',
    props: {
      node: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .node {
    width: 200px;
  }
  
  .children {
    margin-top: 20px;
  }
  </style>
  