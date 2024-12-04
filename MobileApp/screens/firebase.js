// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNAIMHJXb4FR_VRsV5YMYJBNJdq7MUpPI",
  authDomain: "emtechproject-2eb89.firebaseapp.com",
  projectId: "emtechproject-2eb89",
  storageBucket: "emtechproject-2eb89.firebasestorage.app",
  messagingSenderId: "169639233897",
  appId: "1:169639233897:web:ed2999536d105e69fd95f8",
  measurementId: "G-9PV14WL2TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
