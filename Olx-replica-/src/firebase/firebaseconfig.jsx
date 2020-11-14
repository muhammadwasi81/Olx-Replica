import firebase from "firebase/app"
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyAwNdy98BTpSpiHq4hUA_-1OkaE-soo8L8",
  authDomain: "abdulhaseebstore.firebaseapp.com",
  databaseURL: "https://abdulhaseebstore.firebaseio.com",
  projectId: "abdulhaseebstore",
  storageBucket: "abdulhaseebstore.appspot.com",
  messagingSenderId: "612246799924",
  appId: "1:612246799924:web:f02674f871cb900a742c61",
  measurementId: "G-QKEF58W1QE"
};

  export default firebase.initializeApp(firebaseConfig);