import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFEePmgoye2Dbp4Y5xaMtTkLZA5JnXiKI",
  authDomain: "blog-website-3eee7.firebaseapp.com",
  projectId: "blog-website-3eee7",
  storageBucket: "blog-website-3eee7.appspot.com",
  messagingSenderId: "232873952071",
  appId: "1:232873952071:web:e055783b9f03cc3dc28262"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app , db, auth ,storage , signInWithEmailAndPassword };