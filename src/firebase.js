import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqXV3ZLLDL2u_BdOtidwb_5WfqVWOd6uU",
    authDomain: "linkedin-clone-e2cc3.firebaseapp.com",
    projectId: "linkedin-clone-e2cc3",
    storageBucket: "linkedin-clone-e2cc3.appspot.com",
    messagingSenderId: "741407009025",
    appId: "1:741407009025:web:049ecf621598c74fe25300",
    measurementId: "G-G3V0WE9EJH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };