// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgRrD2kj30IxZrnEQL7bluxhSVITt_7O4",
  authDomain: "noteslist-vue-915c6.firebaseapp.com",
  projectId: "noteslist-vue-915c6",
  storageBucket: "noteslist-vue-915c6.appspot.com",
  messagingSenderId: "272131675696",
  appId: "1:272131675696:web:c73309fb5ba22058083ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };