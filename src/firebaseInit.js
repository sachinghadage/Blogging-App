// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfB2PELd1vWIxMz5W7TzjownMtZbQ8G88",
  authDomain: "blogging-app-6f200.firebaseapp.com",
  projectId: "blogging-app-6f200",
  storageBucket: "blogging-app-6f200.appspot.com",
  messagingSenderId: "78841387936",
  appId: "1:78841387936:web:a8fdce13f6507d369ba2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
