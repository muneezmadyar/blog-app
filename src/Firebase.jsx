
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC19_saYMmcIsfx2uqJfCK1DGjHhW3cyrI",
//   authDomain: "blog-log-sig.firebaseapp.com",
//   projectId: "blog-log-sig",
//   storageBucket: "blog-log-sig.firebasestorage.app",
//   messagingSenderId: "1094480255937",
//   appId: "1:1094480255937:web:df55cfe6e2b3f198bced40"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

// export {auth}





// <------------------------------------->

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC19_saYMmcIsfx2uqJfCK1DGjHhW3cyrI",
  authDomain: "blog-log-sig.firebaseapp.com",
  projectId: "blog-log-sig",
  storageBucket: "blog-log-sig.firebasestorage.app",
  messagingSenderId: "1094480255937",
  appId: "1:1094480255937:web:df55cfe6e2b3f198bced40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Exports
export const auth = getAuth(app);        // Authentication (Login/Signup)
export const db = getFirestore(app);     // Firestore Database (Blog Data Store)
export const storage = getStorage(app);  // Storage (Images Store)
