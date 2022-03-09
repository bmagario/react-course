import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getFirestore,
  getDocs,
  getDoc,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpPKkBsrnHpBXKgxM0pswQ1aVTXMwXHjg",
  authDomain: "react-redux-5f308.firebaseapp.com",
  projectId: "react-redux-5f308",
  storageBucket: "react-redux-5f308.appspot.com",
  messagingSenderId: "680901505175",
  appId: "1:680901505175:web:e9dc2d37a97eefbcf1b9d2",
  measurementId: "G-5THV8E1JZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
	app,
  addDoc,
	auth,
  collection,
  createUserWithEmailAndPassword,
  doc,
	db,
  deleteDoc,
	getDocs,
  getDoc,
	googleAuthProvider,
  onAuthStateChanged,
	signInWithPopup,
	signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  setDoc,
  query,
  updateProfile,
  updateDoc,
  where,
}