// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz94n_ooyr50xs1LFP0mCKpxD6iksVb5E",
  authDomain: "creadore-b1cd2.firebaseapp.com",
  projectId: "creadore-b1cd2",
  storageBucket: "creadore-b1cd2.appspot.com",
  messagingSenderId: "1041620236303",
  appId: "1:1041620236303:web:9d75485b5be2a13642cb7a",
  measurementId: "G-82KGYRVJCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);