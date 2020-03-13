import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp ({
        apiKey: "AIzaSyBjFtL_gH1EAH9L0-Z_U8zIXkejuKis4EM",
        authDomain: "burger-queen-4ac86.firebaseapp.com",
        databaseURL: "https://burger-queen-4ac86.firebaseio.com",
        projectId: "burger-queen-4ac86",
        storageBucket: "burger-queen-4ac86.appspot.com",
        messagingSenderId: "97172325648",
        appId: "1:97172325648:web:63ca59dd7c55b443155195",
        measurementId: "G-MWHE02R8G6"
});

let db = firebase.firestore();
db.settings({timestampsInSnapshots:true}); //firestore maneja la info en forma de snapshot (snapshot es como una captura de informacion DEL MOMENTO)

export default db;

