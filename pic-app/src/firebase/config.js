/**import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
**/

import { getStorage } from 'firebase/storage';
import { getFirestore, serverTimestamp, collection, addDoc } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getStorage } from 'firebase/storage/10.4.0'; // Update the path to match your Firebase version
//import { getFirestore, serverTimestamp, collection, addDoc } from 'firebase/firestore/10.4.0'; // Update the path
//import { initializeApp } from 'firebase/app/10.4.0'; // Update the path

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the getAuth function

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAnEYo_UuzOAuwia6Sry9ZFOP7W6xX7SY",
  authDomain: "pic-app-13be3.firebaseapp.com",
  projectId: "pic-app-13be3",
  storageBucket: "pic-app-13be3.appspot.com",
  messagingSenderId: "331670202098",
  appId: "1:331670202098:web:29a09cbaca70353dcbd26b"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app); // Initialize Firebase Storage
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

// Initialize Firebase authentication
const auth = getAuth(app);

export { projectStorage, projectFirestore, timestamp, collection, addDoc, auth };