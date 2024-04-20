import { auth } from "./Config";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
} from "firebase/auth";

// Listen for authentication state to change.
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

async function register(email, password, name) {
  const cred = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
    name
  );
  return cred;
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

export { register, login, sendPasswordReset };
