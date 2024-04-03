import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCylcWHHTZnqPDPeab9MnoNDqLts77Ac94",
    authDomain: "gp-geo.firebaseapp.com",
    databaseURL: "https://gp-geo.firebaseio.com",
    projectId: "gp-geo",
    storageBucket: "gp-geo.appspot.com",
    messagingSenderId: "442954611097",
    appId: "1:442954611097:web:ccf546652217f87a8e7b08",
    measurementId: "G-YSY98TF1QK"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampInSnapshots: true })
// firebase.analytics();

export default firebaseApp.firestore()