import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC3pZD5I6zD-VDr_L3ue0UGkjd8lKWuHFY",
  authDomain: "linkedin-clone-e6bef.firebaseapp.com",
  projectId: "linkedin-clone-e6bef",
  storageBucket: "linkedin-clone-e6bef.appspot.com",
  messagingSenderId: "993011421237",
  appId: "1:993011421237:web:a47ad2526bead09b04e17c",
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore();
const auth=firebase.auth();

export {db ,auth}