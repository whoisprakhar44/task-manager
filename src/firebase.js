// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrtMXWcyLnevtezbvBLogfhJVn8FVOs5A",
    authDomain: "task-manager-b7be5.firebaseapp.com",
    projectId: "task-manager-b7be5",
    storageBucket: "task-manager-b7be5.appspot.com",
    messagingSenderId: "396748254412",
    appId: "1:396748254412:web:7fdcf8e1db742f2a786669",
    measurementId: "G-48468BHH9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
