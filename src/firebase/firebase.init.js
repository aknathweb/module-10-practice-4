// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
    
//     apiKey: "AIzaSyA-YIBZarpuLVqp1n8YCfhDqU9-OG_K-hU",
//     authDomain: "news-portal-4b93e.firebaseapp.com",
//     projectId: "news-portal-4b93e",
//     storageBucket: "news-portal-4b93e.appspot.com",
//     messagingSenderId: "892945107471",
//     appId: "1:892945107471:web:1c81971ad8f0ae4a57317a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
