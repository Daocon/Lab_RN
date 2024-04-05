// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXyvmjpE0RkrTA6-vxE_cvbKCeYKFvRGo",
    authDomain: "fpoly-56c97.firebaseapp.com",
    projectId: "fpoly-56c97",
    storageBucket: "fpoly-56c97.appspot.com",
    messagingSenderId: "505140591540",
    appId: "1:505140591540:web:bea1b1080211f14ddc90e1",
    measurementId: "G-P1YYN58M42"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);
export const DATABASE = getDatabase(FIREBASE_APP);