// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkC1afvRYlvwSbO86JCUC7L4MHSpnFaMw",
  authDomain: "movie-auth-8a93e.firebaseapp.com",
  projectId: "movie-auth-8a93e",
  storageBucket: "movie-auth-8a93e.firebasestorage.app",
  messagingSenderId: "210882411456",
  appId: "1:210882411456:web:8acbd4bb3e12488489e625"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
export const auth = getAuth(app);