import * as firebase from 'firebase';
import { ASYNC_START, ASYNC_END, USER_SIGN_UP } from '../constants/actionTypes';

const config = {
  apiKey: "AIzaSyCoATjw-Px7x2m4PbBGvNio_eBVptCZdQ8",
  authDomain: "image-platform.firebaseapp.com",
  databaseURL: "https://image-platform.firebaseio.com",
  projectId: "image-platform",
  storageBucket: "image-platform.appspot.com",
  messagingSenderId: "702110788648"
};


export const firebaseApp = firebase.initializeApp(config);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();


const Auth = {
  current: () =>
    firebaseApp.auth().currentUser,
  signIn: (email, password) =>
    firebaseApp.auth().signInWithEmailAndPassword(email, password),
  signUp: (email, password) =>
    firebaseApp.auth().createUserWithEmailAndPassword(email, password),
  signOut: () =>
    firebaseApp.auth().signOut(),
  save: user => {
    return null;
  },
}

export default { Auth };
