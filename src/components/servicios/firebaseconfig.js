import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCivcbN1VoMQUB1eIoHNf8eaJ2qv_8tbZQ",
  authDomain: "recatjs-ecomer.firebaseapp.com",
  projectId: "recatjs-ecomer",
  storageBucket: "recatjs-ecomer.appspot.com",
  messagingSenderId: "683156520632",
  appId: "1:683156520632:web:0be32fc7c8ef231ad2fe4d"
};

const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app) 
