// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyC3sri2pG06vJUbHIQRkTg7UcqoWPUog4s",
  authDomain: "chat-app-d0123.firebaseapp.com",
  projectId: "chat-app-d0123",
  storageBucket: "chat-app-d0123.appspot.com",
  messagingSenderId: "833141852281",
  appId: "1:833141852281:web:1db4c80e1b0209d7406ca8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
