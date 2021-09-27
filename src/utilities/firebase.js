import firebase from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import { useObjectVal } from 'react-firebase-hooks/database';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCY9HNf9k8fQ_nqlE3HloErFw_TGNoUokQ",
    authDomain: "cs497-scheduler-e968a.firebaseapp.com",
    databaseURL: "https://cs497-scheduler-e968a-default-rtdb.firebaseio.com",
    projectId: "cs497-scheduler-e968a",
    storageBucket: "cs497-scheduler-e968a.appspot.com",
    messagingSenderId: "236995178603",
    appId: "1:236995178603:web:5e8cf2a682b84305ca012e",
    measurementId: "G-BN3LPFL1PB"
};

firebase.initializeApp(firebaseConfig);

export const useData = (path, transform) => (
  useObjectVal(firebase.database().ref(path), { transform })
);

export const setData = (path, value) => (
  firebase.database().ref(path).set(value)
);

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

export const signOut = () => firebase.auth().signOut();

export const useUserState = () => useAuthState(firebase.auth());