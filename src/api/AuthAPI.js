import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app, auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    let res = signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    return error;
  }
};

export const RegisterAPI = (email, password) => {
  try {
    let res = createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    return error;
  }
};

export const GoogleSigninAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    return error;
  }
};
