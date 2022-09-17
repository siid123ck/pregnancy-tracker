import * as firebase from 'firebase/compat';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// import 'firebase/firestore';
// import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyATXe6uzw3zY34n1gB2SwB5OY54LfnipIk',
  authDomain: 'pregnancytracker-6648d.firebaseapp.com',
  databaseURL: 'https://pregnancytracker-6648d-default-rtdb.firebaseio.com',
  projectId: 'pregnancytracker-6648d',
  storageBucket: 'pregnancytracker-6648d.appspot.com',
  messagingSenderId: '982400697319',
  appId: '1:982400697319:web:6fff6518ee30db8a1a7342',
  measurementId: 'G-4MJ8CDXJ3S',
};
let app;
if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
export const db = getFirestore(app);
export const dbR = getDatabase(app);
export const auth = getAuth(app);
export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export { firebase };
