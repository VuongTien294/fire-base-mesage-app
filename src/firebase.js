import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyB9Nbpg5yPvHvYPBCCfJpcv-84jcvfjNLk",
    authDomain: "projectbasecuatien.firebaseapp.com",
    projectId: "projectbasecuatien",
    storageBucket: "projectbasecuatien.appspot.com",
    messagingSenderId: "640716547469",
    appId: "1:640716547469:web:2b106934aa82491e39c9c4",
    measurementId: "G-W72BJBZJXE"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
