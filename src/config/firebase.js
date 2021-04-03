import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZyWjzCxBvcTuXVD8wnxKAIshpSkg_Rlk",
  authDomain: "lampa-technical-task.firebaseapp.com",
  databaseURL:
    "https://lampa-technical-task-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lampa-technical-task",
  storageBucket: "lampa-technical-task.appspot.com",
  messagingSenderId: "190753962354",
  appId: "1:190753962354:web:0cd7edb995e481918785eb",
  measurementId: "G-GWDMSQTYNF",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
