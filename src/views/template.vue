<template class="">
  <div class=" flex justify-center items-center mx-auto mx-auto max-w-full 2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm p-4">

    <button v-if="!user"
      @click="signInWithGoogle" aria-label="Continue with google" role="button" class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                        <p class="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
    <button 
      v-if="user"
      @click="signOut"
      class="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:outline-none justify-end"
    >
      Sign out
    </button>
  </div>

  <div
    class="mx-auto max-w-full 2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm p-4 bg-gradient-to-b from-[#d3e3ea] to-[#D0DCE1]"
  >
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-2 text-[#233945]">Template Manager</h1>
      <p class="text-[#233945]">Manage your templates</p>
    </div>

    <!-- Add New Template Section -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-2 text-[#233945]">Add New Template</h2>
      <form @submit.prevent="addTemplate">
        <div>
          <label for="templateTitle" class="block text-[#233945] font-semibold mb-1"
            >Template Title:</label
          >
          <input
            type="text"
            id="templateTitle"
            required
            v-model="newTemplate.title"
            class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
          />
        </div>
        <div class="mt-4">
          <label for="templateDescription" class="block text-[#233945] font-semibold mb-1"
            >Template Description:</label
          >
          <textarea
            id="templateDescription"
            required
            v-model="newTemplate.description"
            rows="3"
            class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
          ></textarea>
        </div>
        <div class="mt-4">
          <label for="templateHTML" class="block text-[#233945] font-semibold mb-1"
            >HTML Code:</label
          >
          <textarea
            id="templateHTML"
            required
            v-model="newTemplate.html"
            rows="6"
            class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
          ></textarea>
        </div>
        <div class="mt-4">
          <label for="templatePreview" class="block text-[#233945] font-semibold mb-1"
            >Preview:</label
          >
          <textarea
            id="templatePreview"
            v-model="newTemplate.preview"
            rows="3"
            class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
          ></textarea>
        </div>

        <div class="mt-4">
          <button
            type="submit"
            class="bg-[#3E5A69] text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900"
          >
            Add Template
          </button>
        </div>
      </form>
    </div>

    <!-- Display Templates -->
    <div
      v-for="template in templates"
      :key="template.id"
      class="mb-8 rounded-lg border border-gray-300 overflow-hidden"
    >
      <div class="p-4 bg-gradient-to-b from-[#FCFDFE] to-">
        <template v-if="!template.editMode">
          <h2 class="text-xl font-semibold mb-2 text-[#233945]">{{ template.title }}</h2>
          <p class="text-[#576A73]">{{ template.description }}</p>
          <div class="p-4">
            <div class="relative mb-4">
              <pre
                class="whitespace-pre-wrap overflow-x-auto max-w-full rounded-lg border border-gray-300 bg-slate-200 overflow-y-auto max-h-80 p-2"
              >
                <code class="language-html">{{ template.html }}</code>
              </pre>
              <button
                @click="copyCode(template.html)"
                class="absolute top-0 right-0 m-2 bg-blue-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
              >
                Copy
              </button>
            </div>
            <hr class="my-4" />
            <h3 class="text-lg font-semibold mb-2">Preview:</h3>
            <div v-html="template.preview"></div>
            <div class="flex justify-end">
              <button
                @click="editTemplate(template)"
                class="bg-blue-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-blue-600 focus:outline-none mr-2"
              >
                Edit
              </button>
              <button
                @click="deleteTemplate(template.id)"
                class="bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        </template>

        <!-- Edit Mode -->
        <template v-else>
          <input
            type="text"
            v-model="template.title"
            class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 mb-2"
          />
          <textarea
            v-model="template.description"
            rows="3"
            class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 mb-2"
          ></textarea>
          <textarea
            v-model="template.html"
            rows="6"
            class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 mb-2"
          ></textarea>
          <textarea
            id="templatePreview"
            v-model="template.preview"
            rows="3"
            class="w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
          ></textarea>
          <div class="flex justify-end">
            <button
              @click="saveChanges(template)"
              class="bg-green-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-green-600 focus:outline-none mr-2"
            >
              Save
            </button>
            <button
              @click="cancelEdit(template)"
              class="bg-gray-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-gray-600 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import db from '@/firebase.js' // Adjust the path if necessary
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  orderBy,
  query,
  where
} from 'firebase/firestore'

export default {
  data() {
    return {
      user: null,
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
    }
  },
  mounted() {
  // Initialize authentication and fetch data
  this.initAuth();
},
  methods: {
    async signOut() {
      const auth = getAuth()
      try {
        await signOut(auth)
        // Handle successful sign-out
        console.log('User signed out successfully')
      } catch (error) {
        // Handle sign-out error
        console.error('Sign-out error:', error)
      }
    },
    async fetchData(uid = null) {
  try {
    let q;
    if (uid) {
      q = query(
        collection(db, 'templates'),
        where('userId', '==', uid),
        orderBy('createdAt', 'desc')
      );
    } else {
      q = query(
  collection(db, 'templates'),
  orderBy('createdAt', 'desc'),
  where('userId', '==', "xlogin")
);

    }

    const querySnapshot = await getDocs(q);
    this.templates = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
},

async initAuth() {
  const auth = getAuth();
  auth.onAuthStateChanged(async (user) => {
    this.user = user;
    if (user) {
      // User is signed in
      await this.fetchData(user.uid); // Fetch user-specific data
    } else {
      // No user is signed in
      await this.fetchData(); // Fetch general data
    }
  });
},


    async signInWithGoogle() {
      try {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        // User signed in successfully
        const user = result.user
        console.log('Signed in as:', user.displayName,user.uid)
      } catch (error) {
        console.error('Google sign-in error:', error)
      }
    },

    async addTemplate() {
  try {
    if (this.user) {
      // If user is logged in, add template with user-specific data
      const docRef = await addDoc(collection(db, 'templates'), {
        title: this.newTemplate.title,
        description: this.newTemplate.description,
        html: this.newTemplate.html,
        preview: this.newTemplate.preview,
        createdAt: serverTimestamp(), // Automatically set the timestamp
        userId: this.user.uid // Assign user ID to the template
      });
      console.log('Document written with ID: ', docRef.id);
      this.templates.push({ ...this.newTemplate, id: docRef.id });
    } else {
      // If user is not logged in, add template without user-specific data
      const docRef = await addDoc(collection(db, 'templates'), {
        title: this.newTemplate.title,
        description: this.newTemplate.description,
        html: this.newTemplate.html,
        preview: this.newTemplate.preview,
        userId: "xlogin", // Assign user ID to the template
        createdAt: serverTimestamp() // Automatically set the timestamp
      });
      console.log('Document written with ID: ', docRef.id);
      this.templates.push({ ...this.newTemplate, id: docRef.id });
    }
    this.resetNewTemplate();
  } catch (error) {
    console.error('Error adding document: ', error);
  }
},

    editTemplate(template) {
      // Set the editMode property of the template to true
      template.editMode = true
      // Copy the template data to editedTemplate for editing
      this.editedTemplate = { ...template }
    },

    async saveChanges(template) {
      try {
        // Update the template data in Firestore
        const templateRef = doc(db, 'templates', template.id)
        await updateDoc(templateRef, {
          title: template.title,
          description: template.description,
          html: template.html,
          preview: template.preview
        })
        console.log('Document successfully updated')
        // Close the edit mode
        template.editMode = false
      } catch (error) {
        console.error('Error updating document:', error)
      }
    },

    // Cancel Edit Method
    cancelEdit(template) {
      // Reset the template properties to their original values
      template.title = this.editedTemplate.title
      template.description = this.editedTemplate.description
      template.html = this.editedTemplate.html
      template.preview = this.editedTemplate.preview
      // Exit edit mode
      template.editMode = false
    },

    // Delete Template Method
    async deleteTemplate(templateId) {
      const confirmation = confirm('Are you sure you want to delete this template?')
      if (confirmation) {
        try {
          await deleteDoc(doc(db, 'templates', templateId))
          console.log('Document successfully deleted')
          // Remove the deleted template from the templates array
          this.templates = this.templates.filter((template) => template.id !== templateId)
        } catch (error) {
          console.error('Error deleting document:', error)
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
      }
    },
    copyCode(code) {
      const el = document.createElement('textarea')
      el.value = code
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      alert('Code copied to clipboard!')
    }
  }
}
</script>
