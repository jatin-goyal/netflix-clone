import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNQSl6mbJn4qbJiBeODmerwYEDWRzVSOE",
  authDomain: "netflix-clone-3dc76.firebaseapp.com",
  projectId: "netflix-clone-3dc76",
  storageBucket: "netflix-clone-3dc76.appspot.com",
  messagingSenderId: "975812212156",
  appId: "1:975812212156:web:354a59bc948d24cda427b9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
