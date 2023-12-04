// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm-2VUoJGqJNfSv5ted05NWrIo3vPLOcc",
  authDomain: "newsapp-67cd4.firebaseapp.com",
  projectId: "newsapp-67cd4",
  storageBucket: "newsapp-67cd4.appspot.com",
  messagingSenderId: "836681057019",
  appId: "1:836681057019:web:949e72a0822eed5d1ea65e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const provider = new GoogleAuthProvider()