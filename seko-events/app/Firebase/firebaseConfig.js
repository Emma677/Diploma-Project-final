import firebase from  'firebase';


const firebaseConfig={
    apiKey: "AIzaSyDaGgGYnkG1nyLM-WW0sjZOGXIk1tEBs50",
    // authDomain: "klin-event.firebaseapp.com", 
    databaseURL:"https://klin-event-default-rtdb.firebaseio.com/",
    projectId: "klin-event",
    // storageBucket: "klin-event.appspot.com",
    // messagingSenderId: "261619904761",
    appId: "1:261619904761:web:dc4fb0ffac2d49b8613228",
    // measurementId: "G-MTWHYH4Z39"
}


export default firebase.initializeApp(firebaseConfig)