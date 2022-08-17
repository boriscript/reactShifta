// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4uwJE_H3ELjBT8zzq2Q0WrNXdeue7tVU",
  authDomain: "react-cursos-3fcf9.firebaseapp.com",
  projectId: "react-cursos-3fcf9",
  storageBucket: "react-cursos-3fcf9.appspot.com",
  messagingSenderId: "1013886672177",
  appId: "1:1013886672177:web:f84352b86df70be91fa410"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );