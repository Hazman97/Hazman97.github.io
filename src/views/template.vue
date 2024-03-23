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
          <button type="submit" class="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900">
            Add Template
          </button>
        </div>
      </form>
    </div>

    <!-- Display Templates -->
    <div v-for="template in templates" :key="template.id" class="mb-8 rounded-lg border border-gray-300 overflow-hidden">
      <div class="p-4 bg-gray-100">
        <template v-if="!template.editMode">
          <h2 class="text-xl font-semibold mb-2">{{ template.title }}</h2>
          <p class="text-gray-700">{{ template.description }}</p>
          <div class="p-4">
            <div class="relative mb-4">
              <pre class="whitespace-pre-wrap overflow-x-auto max-w-full rounded-lg border border-gray-300  bg-slate-200 overflow-y-auto max-h-80 p-2">
                <code class="language-html">{{ template.html }}</code>
              </pre>
            </div>
            <hr class="my-4">
          <h3 class="text-lg font-semibold mb-2">Preview:</h3>
          <div v-html="template.preview"></div>
            <div class="flex justify-end">
              <button @click="editTemplate(template)" class="bg-blue-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-blue-600 focus:outline-none mr-2">Edit</button>
              <button @click="deleteTemplate(template.id)" class="bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-600 focus:outline-none">Delete</button>
            </div>
          </div>
        </template>

        <!-- Edit Mode -->
        <template v-else>
          <input type="text" v-model="template.title" class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 mb-2">
          <textarea v-model="template.description" rows="3" class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 mb-2"></textarea>
          <textarea v-model="template.html" rows="6" class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 mb-2"></textarea>
          <textarea id="templatePreview" v-model="template.preview" rows="3" class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"></textarea>
          <div class="flex justify-end">
            <button @click="saveChanges(template)" class="bg-green-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-green-600 focus:outline-none mr-2">Save</button>
            <button @click="cancelEdit(template)" class="bg-gray-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-gray-600 focus:outline-none">Cancel</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase.js'; // Adjust the path if necessary
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, orderBy, query } from 'firebase/firestore';


export default {
  data() {
    return {
      isEditing: false,
      editedTemplate: {
        id: '',
        title: '',
        description: '',
        html: '',
        preview: ''
      },
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
editTemplate(template) {
  // Set the editMode property of the template to true
  template.editMode = true;
  // Copy the template data to editedTemplate for editing
  this.editedTemplate = { ...template };
},

async saveChanges(template) {
  try {
    // Update the template data in Firestore
    const templateRef = doc(db, 'templates', template.id);
    await updateDoc(templateRef, {
      title: template.title,
      description: template.description,
      html: template.html,
      preview: template.preview
    });
    console.log('Document successfully updated');
    // Close the edit mode
    template.editMode = false;
  } catch (error) {
    console.error('Error updating document:', error);
  }
},



  // Cancel Edit Method
  cancelEdit(template) {
  // Reset the template properties to their original values
  template.title = this.editedTemplate.title;
  template.description = this.editedTemplate.description;
  template.html = this.editedTemplate.html;
  template.preview = this.editedTemplate.preview;
  // Exit edit mode
  template.editMode = false;
},


  // Delete Template Method
  async deleteTemplate(templateId) {
  const confirmation = confirm("Are you sure you want to delete this template?");
  if (confirmation) {
    try {
      await deleteDoc(doc(db, 'templates', templateId));
      console.log('Document successfully deleted');
      // Remove the deleted template from the templates array
      this.templates = this.templates.filter(template => template.id !== templateId);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
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
