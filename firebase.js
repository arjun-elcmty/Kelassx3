// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyCFUpLCTtPv8BTRwOC5NxAhfxygh0cgvZo",
  authDomain: "kelas-x-3-781e0.firebaseapp.com",
  projectId: "kelas-x-3-781e0",
  storageBucket: "kelas-x-3-781e0.appspot.com",
  messagingSenderId: "840099918326",
  appId: "1:840099918326:web:e5edbb692042250d07d7d7"
/* sec */
/* apiKey: "AIzaSyCFUpLCTtPv8BTRwOC5NxAhfxygh0cgvZo",
  authDomain: "kelas-x-3-781e0.firebaseapp.com",
  projectId: "kelas-x-3-781e0",
  storageBucket: "kelas-x-3-781e0.appspot.com",
  messagingSenderId: "840099918326",
  appId: "1:840099918326:web:e5edbb692042250d07d7d7" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();