import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr-o9uRs7WdXvXnf9CGseEA4zX8RGz3i0",
    authDomain: "journal-app-e0bae.firebaseapp.com",
    projectId: "journal-app-e0bae",
    storageBucket: "journal-app-e0bae.appspot.com",
    messagingSenderId: "327503991981",
    appId: "1:327503991981:web:f94a71207ab1b2f50b2224"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db, googleAuthProvider
}