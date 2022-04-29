// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpOet6nr4etqFvPYX1_WwsBfTGqgA_ijo",
    authDomain: "bikers-warehouse.firebaseapp.com",
    projectId: "bikers-warehouse",
    storageBucket: "bikers-warehouse.appspot.com",
    messagingSenderId: "17902631926",
    appId: "1:17902631926:web:b52259851e276f9311e5d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;