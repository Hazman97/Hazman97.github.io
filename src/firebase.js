// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH1Y-nDy9Rr6z8ZzOEOgVEb6l9wKFJqL4",
  authDomain: "vue-js-109c9.firebaseapp.com",
  projectId: "vue-js-109c9",
  storageBucket: "vue-js-109c9.appspot.com",
  messagingSenderId: "83129437860",
  appId: "1:83129437860:web:7dd9fcee39ff99d8716031"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(firebaseApp);

export default db;
