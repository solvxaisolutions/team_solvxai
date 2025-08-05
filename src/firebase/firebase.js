// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3gJpq_aTEuAgy5WCl9TO9xRpEjUdav4o",
  authDomain: "solvxai-fcbbf.firebaseapp.com",
  projectId: "solvxai-fcbbf",
  storageBucket: "solvxai-fcbbf.firebasestorage.app",
  messagingSenderId: "11964402146",
  appId: "1:11964402146:web:591959fd86354060ab91bb",
  measurementId: "G-0S5G1WZ9ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);