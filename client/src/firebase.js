// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-89982.firebaseapp.com",
  projectId: "mern-estate-89982",
  storageBucket: "mern-estate-89982.appspot.com",
  messagingSenderId: "871637168115",
  appId: "1:871637168115:web:8a2606e2902a9e18166c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app