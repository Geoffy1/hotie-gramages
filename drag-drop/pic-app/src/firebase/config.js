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
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi7xFHsO7BtUrJcBxUowByhVVDOq8dTYs",
  authDomain: "hot-picapp.firebaseapp.com",
  projectId: "hot-picapp",
  storageBucket: "hot-picapp.appspot.com",
  messagingSenderId: "955883367581",
  appId: "1:955883367581:web:dcc84d8d6c4cc8910df874"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app); // Initialize Firebase Storage
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp, collection, addDoc };