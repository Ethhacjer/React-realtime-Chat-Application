import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAilnAJIP1JbiFDf6i7E-kGv-8duUYiWyQ",
  authDomain: "react-firebase-chatapp-80adc.firebaseapp.com",
  projectId: "react-firebase-chatapp-80adc",
  storageBucket: "react-firebase-chatapp-80adc.appspot.com",
  messagingSenderId: "1040729168864",
  appId: "1:1040729168864:web:4c869f9d758bb44377a985",
  measurementId: "G-F5KTZBDKHG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()