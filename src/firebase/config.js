// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfEjn_BAEUQp7YdYpcT9smSYA7LzdqStk",
  authDomain: "clone-wars-85fe9.firebaseapp.com",
  projectId: "clone-wars-85fe9",
  storageBucket: "clone-wars-85fe9.appspot.com",
  messagingSenderId: "510269859304",
  appId: "1:510269859304:web:85953f3287c5ab18fdb05d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
