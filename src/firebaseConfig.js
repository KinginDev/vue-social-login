// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1yE1fGXXfU7WlxrYK1dStMwtDrV56LfA",
  authDomain: "safepazz-16ce5.firebaseapp.com",
  projectId: "safepazz-16ce5",
  storageBucket: "safepazz-16ce5.appspot.com",
  messagingSenderId: "1050519902978",
  appId: "1:1050519902978:web:6f77ba33056a553159001b",
  measurementId: "G-70MW1JDT3X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export default messaging;
