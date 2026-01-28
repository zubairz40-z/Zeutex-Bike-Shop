// firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbaCJihnt0KOZtYseSSdU-oKH2s6oZHc4",
  authDomain: "zeutexapp.firebaseapp.com",
  projectId: "zeutexapp",
  storageBucket: "zeutexapp.firebasestorage.app",
  messagingSenderId: "188136016485",
  appId: "1:188136016485:web:87fa6c03e068ee9889948c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export everything
export { app, auth, db, storage };
