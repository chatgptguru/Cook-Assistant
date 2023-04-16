// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwESKzQv9l6UzkTsxBvX4d_G-GfGR-zWk",
  authDomain: "cook-e-ai.firebaseapp.com",
  projectId: "cook-e-ai",
  storageBucket: "cook-e-ai.appspot.com",
  messagingSenderId: "915319492687",
  appId: "1:915319492687:web:0c6e6c9c5b410436959a3a",
  measurementId: "G-NEF7JVWNHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
const auth = getAuth(app);
const db = getDatabase(app);
const firestoredDB = getFirestore(app);
const storage = getStorage(app);

export { auth, db,firestoredDB, storage };
