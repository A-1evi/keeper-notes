// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdGfgxa5H8_2FfSMwGHSF1zOiJb5pgZ3g",
  authDomain: "notes-976d6.firebaseapp.com",
  projectId: "notes-976d6",
  storageBucket: "notes-976d6.appspot.com",
  messagingSenderId: "313102491206",
  appId: "1:313102491206:web:28241a7656c41525967447",
  measurementId: "G-3Z1HDVQ2M6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
