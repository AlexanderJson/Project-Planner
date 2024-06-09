import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCKyzSITO3DWeBo_xyuJyGLcGxvNuXJGRo",
    authDomain: "groupplanner-71cd7.firebaseapp.com",
    databaseURL: "https://groupplanner-71cd7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "groupplanner-71cd7",
    storageBucket: "groupplanner-71cd7.appspot.com",
    messagingSenderId: "304650147943",
    appId: "1:304650147943:web:30b1e0f6a97a0f520bdcc2",
    measurementId: "G-LL5031RSMN"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const timestamp = serverTimestamp();
