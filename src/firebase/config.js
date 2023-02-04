
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQlaguu6LBxyuwLDvB-UEeQFQDLmA2ICo",
  authDomain: "react-money-spend.firebaseapp.com",
  projectId: "react-money-spend",
  storageBucket: "react-money-spend.appspot.com",
  messagingSenderId: "890540503913",
  appId: "1:890540503913:web:13cdb10d05b14999dec3f8"
};


initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {db, auth};