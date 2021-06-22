
  import firebase from 'firebase';
  

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDnbrrOOIeG0SHvPAO6P8JLmVGrsbhVWmE",
    authDomain: "instagram-clone-85449.firebaseapp.com",
    projectId: "instagram-clone-85449",
    storageBucket: "instagram-clone-85449.appspot.com",
    messagingSenderId: "361957768346",
    appId: "1:361957768346:web:d79b03d904fb253e593323"
  });

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage} ;


  //export default db;