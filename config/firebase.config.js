// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: "bills-ea65e.firebaseapp.com",
  projectId: "bills-ea65e",
  storageBucket: "bills-ea65e.appspot.com",
  messagingSenderId: "307052158829",
  appId: "1:307052158829:web:e21d36b6ca7c1215a6c464"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }