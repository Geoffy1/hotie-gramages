import  *  as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9zgXppB2zdZx_ZYGL1gQE3H6VprvKEhg",
  authDomain: "hotie-gramages.firebaseapp.com",
  projectId: "hotie-gramages",
  storageBucket: "hotie-gramages.appspot.com",
  messagingSenderId: "43094351093",
  appId: "1:43094351093:web:10df53de147baf3b68b9bc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
