// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0QyBjBm9UVOhfQBNM7Fygv97jNQ_ClG8",
  authDomain: "netflixgpt-96f35.firebaseapp.com",
  projectId: "netflixgpt-96f35",
  storageBucket: "netflixgpt-96f35.appspot.com",
  messagingSenderId: "800971933498",
  appId: "1:800971933498:web:e7be8ee179abeead6e3203",
  measurementId: "G-5HDVRBYN20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
