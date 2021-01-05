import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkPi_UCwCgVu8JBVlht-7DhCMghqL_uzg",
  authDomain: "whats-app-clone-76341.firebaseapp.com",
  projectId: "whats-app-clone-76341",
  storageBucket: "whats-app-clone-76341.appspot.com",
  messagingSenderId: "231461786021",
  appId: "1:231461786021:web:1739ccbf71e0ca3847584c",
  measurementId: "G-PJLEGTKTMP"
};

// Inicializacion del Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Traemos la base de datos
const db = firebaseApp.firestore();
// Herramienta para autenticacion
const auth = firebase.auth();
// Autenticacion por google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;