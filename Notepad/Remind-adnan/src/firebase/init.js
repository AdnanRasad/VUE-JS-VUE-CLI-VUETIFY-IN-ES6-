import firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC72xirKwC88ykf89ObtEbZHQhxDm1OmKA",
  authDomain: "notepad-adnan.firebaseapp.com",
  databaseURL: "https://notepad-adnan.firebaseio.com",
  projectId: "notepad-adnan",
  storageBucket: "notepad-adnan.appspot.com",
  messagingSenderId: "784795099864"
};

const firebaseApp = firebase.initializeApp(config);

//firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
