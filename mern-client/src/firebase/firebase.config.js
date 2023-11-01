// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwe41Npq-oIHNJxkV3K-Jpicy3nc-GV6M",
  authDomain: "mern-book-inventory-483ed.firebaseapp.com",
  projectId: "mern-book-inventory-483ed",
  storageBucket: "mern-book-inventory-483ed.appspot.com",
  messagingSenderId: "1005280360132",
  appId: "1:1005280360132:web:4f89fc280ce3feab473b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;