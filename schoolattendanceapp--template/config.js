 import   firebase from "firebase";
 const firebaseConfig = {
  apiKey: "AIzaSyC8QfGSdZt09bs_t8F2C9BXKNsX2kNxF6w",
  authDomain: "project61schoolattendance.firebaseapp.com",
  databaseURL: "https://project61schoolattendance-default-rtdb.firebaseio.com",
  projectId: "project61schoolattendance",
  storageBucket: "project61schoolattendance.appspot.com",
  messagingSenderId: "793110908894",
  appId: "1:793110908894:web:03aadb57a53782524ed74f"
};

//initialize your database
firebase.initializeApp(firebaseConfig)

  export default firebase.database()
 

  