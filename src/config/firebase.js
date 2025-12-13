import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgrAFSaruCIrkGVE2GsH4F20k2pmsr6zk",
    authDomain: "my-first-app-12b6d.firebaseapp.com",
    projectId: "my-first-app-12b6d",
    storageBucket: "my-first-app-12b6d.firebasestorage.app",
    messagingSenderId: "277634591703",
    appId: "1:277634591703:web:1251798831acb13d67b992",
    measurementId: "G-0RQ1LX254B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};