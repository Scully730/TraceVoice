// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9FCnzrCjyACiTvve6qwXStEDv7fEJGU0",
    authDomain: "tracevoice-a4dc2.firebaseapp.com",
    projectId: "tracevoice-a4dc2",
    storageBucket: "tracevoice-a4dc2.firebasestorage.app",
    messagingSenderId: "50158032046",
    appId: "1:50158032046:web:b24e9bb187cc3cfd01493f",
    measurementId: "G-12D8GJPTRP"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
