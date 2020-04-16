import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBapExYcjpspHNw9F5bNJEakhwDkgeUVLY",
  authDomain: "crwn-db-e5a8f.firebaseapp.com",
  databaseURL: "https://crwn-db-e5a8f.firebaseio.com",
  projectId: "crwn-db-e5a8f",
  storageBucket: "crwn-db-e5a8f.appspot.com",
  messagingSenderId: "690208835655",
  appId: "1:690208835655:web:bf1cba66a99c5cf9ab8962",
  measurementId: "G-G7Y3FKHY5H"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
