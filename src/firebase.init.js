// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDoXb5fsGf8gRuudyqDhRDhWJ_dPp7SNA",
    authDomain: "info-programming-85774.firebaseapp.com",
    projectId: "info-programming-85774",
    storageBucket: "info-programming-85774.appspot.com",
    messagingSenderId: "685574567101",
    appId: "1:685574567101:web:1ec07d046dea71a508b3d4",
    measurementId: "G-8SK71Y7XKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
/* const analytics = getAnalytics(app); */