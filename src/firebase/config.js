import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyCpL8gj34ge8jaNIjCSi3djtCxvc6Q5yd0",
    authDomain: "global-express-courier.firebaseapp.com",
    projectId: "global-express-courier",
    storageBucket: "global-express-courier.appspot.com",
    messagingSenderId: "134494641518",
    appId: "1:134494641518:web:f668e7d3a1e819f342f57f"
};

// init firebase
initializeApp(firebaseConfig)

// init firebase Auth
const auth = getAuth()

const database = getDatabase();

const db = getFirestore();

export { auth, db, database }
