import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyC_drl6Y7q-UzOB3ur7d4FI1vV54t2ZD28",
  authDomain: "disney-plus-clone-fa4ce.firebaseapp.com",
  projectId: "disney-plus-clone-fa4ce",
  storageBucket: "disney-plus-clone-fa4ce.firebasestorage.app",
  messagingSenderId: "579822568966",
  appId: "1:579822568966:web:7e63bd4c71803af0aaa587",
  measurementId: "G-LY2NNECRLR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;