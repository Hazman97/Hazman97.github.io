<template>
    <div class="mx-auto max-w-lg p-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-2">Template Manager</h1>
        <p class="text-gray-600">Manage your templates</p>
      </div>
  
      <!-- Add New Template Section -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-2">Add New Template</h2>
        <form @submit.prevent="addTemplate">
        <div>
          <label for="templateTitle" class="block text-gray-700 font-semibold mb-1 ">Template Title:</label>
          <input type="text" id="templateTitle" required v-model="newTemplate.title" class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500">
        </div>
        <div class="mt-4">
          <label for="templateDescription" class="block text-gray-700 font-semibold mb-1">Template Description:</label>
          <textarea id="templateDescription" required v-model="newTemplate.description" rows="3" class="w-full  p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"></textarea>
        </div>
        <div class="mt-4">
          <label for="templateHTML" class="block text-gray-700 font-semibold mb-1">HTML Code:</label>
          <textarea id="templateHTML" required v-model="newTemplate.html" rows="6" class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"></textarea>
        </div>
        <div class="mt-4">
          <label for="templatePreview" class="block text-gray-700 font-semibold mb-1">Preview:</label>
          <textarea id="templatePreview" v-model="newTemplate.preview" rows="3" class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"></textarea>
        </div>
        
        <div class="mt-4">
          <button @click="submit" class="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900">
            Add Template
          </button>
        </div></form>
      </div>
     
  
       <!-- Display Templates -->
    <div v-for="(template, index) in templates" :key="index" class="mb-8 rounded-lg border border-gray-300 overflow-hidden">
      <div class="p-4 bg-gray-100">
        <h2 class="text-xl font-semibold mb-2">{{ template.title }}</h2>
        <p class="text-gray-700">{{ template.description }}</p>
        <div class="p-4">
          <div class="relative mb-4">
            <pre class="whitespace-pre-wrap overflow-x-auto max-w-full rounded-lg border border-gray-300  bg-slate-200 overflow-y-auto max-h-80 p-2">
              <code class="language-html">{{ template.html }}</code>
            </pre>
            <button @click="copyCode(template.html)" class="absolute top-0 right-0 m-2 bg-blue-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Copy</button>
          </div>
          <hr class="my-4">
          <h3 class="text-lg font-semibold mb-2">Preview:</h3>
          <div v-html="template.preview"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase.js'; // Adjust the path if necessary
import { collection, getDocs, addDoc, serverTimestamp, orderBy, query } from 'firebase/firestore';

export default {
  data() {
    return {
      newTemplate: {
        title: '',
        description: '',
        html: '',
        preview: ''
      },
      templates: []
    };
  },
  async mounted() {
    // Fetch data from Firestore
    await this.fetchData();
  },
  methods: {
    async fetchData() {
  try {
    const q = query(collection(db, 'templates'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.templates.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
},


    async addTemplate() {
      try {
    
        const docRef = await addDoc(collection(db, 'templates'), {
          title: this.newTemplate.title,
          description: this.newTemplate.description,
          html: this.newTemplate.html,
          preview: this.newTemplate.preview,
          createdAt: serverTimestamp() // Automatically set the timestamp
        });
        console.log("Document written with ID: ", docRef.id);
        this.templates.push({ ...this.newTemplate, id: docRef.id });
        this.resetNewTemplate();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    resetNewTemplate() {
      // Reset the newTemplate object
      this.newTemplate = {
        title: '',
        description: '',
        html: '',
        preview: ''
      };
    },
    copyCode(code) {
        const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('Code copied to clipboard!');
    }
  }
};
</script>
