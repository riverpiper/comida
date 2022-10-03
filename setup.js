import react from "react";
// import firebase from "firebase";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const firebaseconfig = {
  apiKey: "AIzaSyBLHH4mkhllqvkKEmVL2S0l3OiKhrDSthw",
  authDomain: "comida-b3d16.firebaseapp.com",
  projectId: "comida-b3d16",
  storageBucket: "comida-b3d16.appspot.com",
  messagingSenderId: "298973669337",
  appId: "1:298973669337:web:1a069ca1b0e933a48a1bc8",
  measurementId: "G-7QSJVHP5GR",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconfig);
}

export default { firebase, auth, firestore };
