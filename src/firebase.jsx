// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmewLExjXJD3OQjajGAWRGs51WXi-WVUg",
  authDomain: "chatapp-67bcd.firebaseapp.com",
  projectId: "chatapp-67bcd",
  storageBucket: "chatapp-67bcd.appspot.com",
  messagingSenderId: "339455499295",
  appId: "1:339455499295:web:ea850a426e0573f9bbc92a"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);