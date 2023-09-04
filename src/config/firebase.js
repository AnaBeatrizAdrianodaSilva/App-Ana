// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwylvs_5nUHKpOS3jOFV-soY5Q39wvPEw",
  authDomain: "app-ana-e327b.firebaseapp.com",
  projectId: "app-ana-e327b",
  storageBucket: "app-ana-e327b.appspot.com",
  messagingSenderId: "400474091846",
  appId: "1:400474091846:web:e99736e27917184e91b547"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const firebaseApp = initializeApp(firebaseConfig);