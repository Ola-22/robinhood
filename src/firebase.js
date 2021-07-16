import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDArOokciL-UrBtFNKs6w4-5PJZSVTPCD8",
  authDomain: "robinhood-8fdc4.firebaseapp.com",
  databaseURL: "https://robinhood-8fdc4-default-rtdb.firebaseio.com",
  projectId: "robinhood-8fdc4",
  storageBucket: "robinhood-8fdc4.appspot.com",
  messagingSenderId: "402684466777",
  appId: "1:402684466777:web:c66f68839252dd86cb8348",
  measurementId: "G-9JHXWXKJXY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
