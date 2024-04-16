import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-dd9b7.firebaseapp.com",
    projectId: "reactchat-dd9b7",
    storageBucket: "reactchat-dd9b7.appspot.com",
    messagingSenderId: "1067672853867",
    appId: "1:1067672853867:web:db45f055afea46cb95802e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()