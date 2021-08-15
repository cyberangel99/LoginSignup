import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSIR30NJ1kwnUpkz3_q4Jug1aiH1uigBM',
  authDomain: 'readaway-cc9bf.firebaseapp.com',
  projectId: 'readaway-cc9bf',
  storageBucket: 'readaway-cc9bf.appspot.com',
  messagingSenderId: '800497666000',
  appId: '1:800497666000:web:92b49eb1cfe73e95b7dbd5',
  measurementId: 'G-QKGHYCJBRX'
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
