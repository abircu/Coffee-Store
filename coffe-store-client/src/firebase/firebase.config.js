
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG3j8XzQFlLc08qZVzGLkY1QYMa9jfwuA",
  authDomain: "coffee-store-c0600.firebaseapp.com",
  projectId: "coffee-store-c0600",
  storageBucket: "coffee-store-c0600.appspot.com",
  messagingSenderId: "666345818806",
  appId: "1:666345818806:web:b620cff9da1f27db09f417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;