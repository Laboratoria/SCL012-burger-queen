import firebase from 'firebase/app';
import 'firebase/firestore';
// Llave de firebase para poder acceder a la base de datos que tenemos en ella 
const firebaseConfig = {
  apiKey: "AIzaSyApeD3RcmaSDiguwNje4koampuoFwm9RII",
  authDomain: "burqer-queen1.firebaseapp.com",
  databaseURL: "https://burqer-queen1.firebaseio.com",
  projectId: "burqer-queen1",
  storageBucket: "burqer-queen1.appspot.com",
  messagingSenderId: "524330997269",
  appId: "1:524330997269:web:1cdfb715a1fcaf5f49601c",
  measurementId: "G-BVLQSW8VWQ"
};

firebase.initializeApp(firebaseConfig);
 let db= firebase.firestore(); // Conectamos firebase con firestore
 export default db