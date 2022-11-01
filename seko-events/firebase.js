import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDaGgGYnkG1nyLM-WW0sjZOGXIk1tEBs50",
  authDomain: "klin-event.firebaseapp.com",
  databaseURL:"https://klin-event-default-rtdb.firebaseio.com/",
  projectId: "klin-event",
  storageBucket: "klin-event.appspot.com",
  messagingSenderId: "261619904761",
  appId: "1:261619904761:web:dc4fb0ffac2d49b8613228",
  measurementId: "G-MTWHYH4Z39"
};


let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}


const db = app.firestore();
const auth = firebase.auth();


export { db, auth};




