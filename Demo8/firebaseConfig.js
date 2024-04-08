// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaCf6vLB76TNkhBNzVNrFCkMvnzI8HLrA",
  authDomain: "md18309-b6c3c.firebaseapp.com",
  projectId: "md18309-b6c3c",
  storageBucket: "md18309-b6c3c.appspot.com",
  messagingSenderId: "1006454450290",
  appId: "1:1006454450290:web:1197875a04e9dff6b5faeb",
  measurementId: "G-N4VJ3VNYJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const DATABASE= getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);