// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFO3D3zcSTJGpBWzheMR3PZ8qdSd_eulM",
  authDomain: "zomato-delivery-30b8f.firebaseapp.com",
  projectId: "zomato-delivery-30b8f",
  storageBucket: "zomato-delivery-30b8f.appspot.com",
  messagingSenderId: "610718225264",
  appId: "1:610718225264:web:111cd3826ce2955aecf5b5",
  measurementId: "G-75LDCWVFRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);