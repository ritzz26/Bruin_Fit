import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdlFCBHIFNo_TD_pNJvXWpY1czaRU-EC4",
  authDomain: "bruin-fit.firebaseapp.com",
  databaseURL: "https://bruin-fit-default-rtdb.firebaseio.com",
  projectId: "bruin-fit",
  storageBucket: "bruin-fit.appspot.com",
  messagingSenderId: "910679899266",
  appId: "1:910679899266:web:042846e4e3ce231e61489b",
  measurementId: "G-ZDNZ8WPQYZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);