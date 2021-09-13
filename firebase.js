import firebase from 'firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBKlvaPkKubh-kFbA6E92BryO5hKoWgwr4",
    authDomain: "fb-clone-nextjs-c6f20.firebaseapp.com",
    projectId: "fb-clone-nextjs-c6f20",
    storageBucket: "fb-clone-nextjs-c6f20.appspot.com",
    messagingSenderId: "78295621689",
    appId: "1:78295621689:web:633a3afdf37bdd3586ade8"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export {db,storage};