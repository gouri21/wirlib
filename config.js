import * as firebase from 'firebase'
require('firebase/firestore')
window.addEventListener = (x) => x;
var firebaseConfig = {
    apiKey: "AIzaSyDTNb3aRkBn7MZ3XX7RT5YaPwGZ8U2DQe8",
    authDomain: "wireless-library-7ac2d.firebaseapp.com",
    databaseURL: "https://wireless-library-7ac2d.firebaseio.com",
    projectId: "wireless-library-7ac2d",
    storageBucket: "wireless-library-7ac2d.appspot.com",
    messagingSenderId: "303769706275",
    appId: "1:303769706275:web:1be4bb8af4411fae15b696"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()