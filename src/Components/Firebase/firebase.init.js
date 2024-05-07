
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "my_scret",
    authDomain: "firebaseapp.com",
    projectId: "project id",
    storageBucket: "bucket",
    messagingSenderId: "ghfggjg",
    appId: "1:667674246829:web:ebb63ffdfd28abbd88ce1939024",
    measurementId: "G-F91EdffdfdB40CLG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
