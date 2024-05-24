// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Q8gCLp-fiPJ3CegJHmTwWB9EoTeCo5k",
  authDomain: "bruin-fit.firebaseapp.com",
  projectId: "bruin-fit",
  storageBucket: "bruin-fit.appspot.com",
  messagingSenderId: "910679899266",
  appId: "1:910679899266:web:b08fde48b77fa5fc61489b",
  measurementId: "G-WCVMCZ21P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, app };