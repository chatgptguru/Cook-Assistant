// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzF8TOBsucyiQWrhn88MGcGkaWey6_TXQ",
  authDomain: "cook-e-a2365.firebaseapp.com",
  projectId: "cook-e-a2365",
  storageBucket: "cook-e-a2365.appspot.com",
  messagingSenderId: "907259754053",
  appId: "1:907259754053:web:823e06e8cbbb830283152c",
  measurementId: "G-SP7XNW3MNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
const auth = getAuth(app);
const db = getDatabase(app);
const firestoredDB = getFirestore(app);
const storage = getStorage(app);

export { auth, db,firestoredDB, storage };
