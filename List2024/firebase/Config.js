// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxpbGOr4mLTa5-LhCAdJ9y__OKjNm8iM",
  authDomain: "ahmed-17fe6.firebaseapp.com",
  projectId: "ahmed-17fe6",
  storageBucket: "ahmed-17fe6.appspot.com",
  messagingSenderId: "177655955403",
  appId: "1:177655955403:web:834f10b2244c4695f3004e",
  measurementId: "G-11EQ0KYB3X",
};

// collection ref

// Initialize Firebase
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const colRef = collection(db, "users");
getDocs(colRef)
  .then((snapshot) => {
    // console.log(snapshot.docs)
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), name: doc.name });
    });
    console.log(users);
  })
  .catch((err) => {
    console.log(err.message);
  });

export { app, db, auth };
