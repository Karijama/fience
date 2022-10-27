import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBbqsLy_ISAjvl2TuuA7WKGcys0pvKm148",
  authDomain: "addeven-3eee2.firebaseapp.com",
  databaseURL: "https://addeven-3eee2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "addeven-3eee2",
  storageBucket: "addeven-3eee2.appspot.com",
  messagingSenderId: "1009532799298",
  appId: "1:1009532799298:web:4dcec1b2c1989f35ae60db",
  measurementId: "G-X18M3DTV1V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
