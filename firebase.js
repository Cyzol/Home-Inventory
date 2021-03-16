import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzJ_UMBxUfCeyGuhE4KX9LYwMWcnfoWu0",
  authDomain: "home-inventory-6a05c.firebaseapp.com",
  projectId: "home-inventory-6a05c",
  storageBucket: "home-inventory-6a05c.appspot.com",
  messagingSenderId: "388581431205",
  appId: "1:388581431205:web:ea5be6135d4029a4547a4c",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
