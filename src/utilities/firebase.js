import firebase from 'firebase/app';
import 'firebase/database';
import { useObjectVal } from 'react-firebase-hooks/database';

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