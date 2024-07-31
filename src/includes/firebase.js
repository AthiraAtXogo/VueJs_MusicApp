
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ3aaBcDtzD01_vL7oTLpzbvmZHRlFM-E",
    authDomain: "vuemusicapp-203af.firebaseapp.com",
    projectId: "vuemusicapp-203af",
    storageBucket: "vuemusicapp-203af.appspot.com",
    appId: "1:1025628183206:web:76f0e3d55b8ae1a12c7267"
  };

  export default firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db= firebase.firestore();

  db.enablePersistence().catch((error)=>{
    console.log(`Firebase persistence error ${error.code}`)
  });
  const userCollection = db.collection('users')
  const songsCollection = db.collection('songs')
  const commentsCollection = db.collection('comments')

  const storage = firebase.storage();



  export {
    auth,
    db,
    userCollection,
    songsCollection,
    commentsCollection,
    storage,
  }