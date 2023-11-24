// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBnDcKoJgztemID3ivejiV3bNLI4SilpE",
  authDomain: "carpool-react-5ae53.firebaseapp.com",
  projectId: "carpool-react-5ae53",
  storageBucket: "carpool-react-5ae53.appspot.com",
  messagingSenderId: "49742321628",
  appId: "1:49742321628:web:104baf547981107dd8e119",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
