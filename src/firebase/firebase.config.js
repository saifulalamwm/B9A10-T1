// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1gsHzi8WRKUXBF6nBCUGGL2MmLfWpDy0",
  authDomain: "coffee-store-910de.firebaseapp.com",
  projectId: "coffee-store-910de",
  storageBucket: "coffee-store-910de.appspot.com",
  messagingSenderId: "632025779485",
  appId: "1:632025779485:web:9577d748aaf182fc42a5f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; // Export the auth object for use in other parts of the app.
