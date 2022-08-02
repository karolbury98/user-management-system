import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaGRxw6ylvVSPfxtZ2syTZT4gxd8uh2PU",
    authDomain: "user-management-system-ae26a.firebaseapp.com",
    projectId: "user-management-system-ae26a",
    storageBucket: "user-management-system-ae26a.appspot.com",
    messagingSenderId: "328833813822",
    appId: "1:328833813822:web:a10ade76132bdd836b706f"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const usersCollection = db.collection('users')