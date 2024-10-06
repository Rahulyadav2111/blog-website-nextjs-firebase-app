import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDLwVLQC4w8P_t4MzGAiq9sOF6FKd4jgGs",
  authDomain: "lyeana-blog-ff072.firebaseapp.com",
  projectId: "lyeana-blog-ff072",
  storageBucket: "lyeana-blog-ff072.appspot.com",
  messagingSenderId: "1058314155954",
  appId: "1:1058314155954:web:2c8cd492739bedea8d16ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();