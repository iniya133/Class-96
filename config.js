import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyA37eUz4205tka14Gzg0bDYs6ufePNfp9o",
    authDomain: "job-app-7910b.firebaseapp.com",
    projectId: "job-app-7910b",
    storageBucket: "job-app-7910b.appspot.com",
    messagingSenderId: "713006369433",
    appId: "1:713006369433:web:27afc1ce6fbbab170d8608"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();