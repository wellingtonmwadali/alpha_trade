// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM391DjioJ_uj5OUU5h4OHoSnwuRjS4uM",
  authDomain: "alpha-trade-a5d3b.firebaseapp.com",
  projectId: "alpha-trade-a5d3b",
  storageBucket: "alpha-trade-a5d3b.appspot.com",
  messagingSenderId: "637414189628",
  appId: "1:637414189628:web:4493d55d87a861089a7139",
  measurementId: "G-SL0XG92XYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider};