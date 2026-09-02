import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "aman-portfolio-b6e1e.firebaseapp.com",
  projectId: "aman-portfolio-b6e1e",
  storageBucket: "aman-portfolio-b6e1e.firebasestorage.app",
  messagingSenderId: "626462590934",
  appId: "1:626462590934:web:a70a36fbdbfc1545524677",
  measurementId: "G-51VP951QWT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);