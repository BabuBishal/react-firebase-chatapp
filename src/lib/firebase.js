import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || process.env.API_KEY,
  authDomain: "react-chat-cc062.firebaseapp.com",
  projectId: "react-chat-cc062",
  storageBucket: "react-chat-cc062.appspot.com",
  messagingSenderId: "91076743448",
  appId: "1:91076743448:web:5ed3ad701de9f541480e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage()