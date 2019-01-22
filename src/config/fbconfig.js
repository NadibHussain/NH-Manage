 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCsFUomJh3wjEjiLgWy2ZmetcU7Y6aVL2I",
    authDomain: "nh-manage.firebaseapp.com",
    databaseURL: "https://nh-manage.firebaseio.com",
    projectId: "nh-manage",
    storageBucket: "nh-manage.appspot.com",
    messagingSenderId: "361440553082"
  };
  firebase.initializeApp(config);
  export default firebase;