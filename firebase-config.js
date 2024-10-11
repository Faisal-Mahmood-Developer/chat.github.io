import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, set, onValue, off, remove } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'; // Correct version of auth

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRijy4Qy-UTegosRZS2IB0-H8jksVepRU",
    authDomain: "chat-app-d13f7.firebaseapp.com",
    projectId: "chat-app-d13f7",
    storageBucket: "chat-app-d13f7.appspot.com",
    messagingSenderId: "786773309986",
    appId: "1:786773309986:web:2f1a28ba8637cb944ee87b",
    measurementId: "G-K7Q18EZ62M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, ref, set, onValue, remove, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged };
