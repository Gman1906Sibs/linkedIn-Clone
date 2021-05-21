import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLC8HJgDha8R9NZt6EZJ0pLTicGYzCVmo",
  authDomain: "linkedin-clone-46473.firebaseapp.com",
  projectId: "linkedin-clone-46473",
  storageBucket: "linkedin-clone-46473.appspot.com",
  messagingSenderId: "706438497427",
  appId: "1:706438497427:web:b448febc6ded112cdfb966",
  measurementId: "G-6BLZNMG2VX"
};

const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;