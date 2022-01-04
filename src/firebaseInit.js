import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "FROM FIREBASE CONSOLE",
//   authDomain: "FROM FIREBASE CONSOLE",
//   databaseURL: "FROM FIREBASE CONSOLE",
//   projectId: "FROM FIREBASE CONSOLE",
//   storageBucket: "FROM FIREBASE CONSOLE",
//   messagingSenderId: "FROM FIREBASE CONSOLE",
//   appId: "FROM FIREBASE CONSOLE",
//   measurementId: "FROM FIREBASE CONSOLE",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCXiiONlU_bK1UBk4YEPItPC5WsEJDQpis",
  authDomain: "phongnv-9ba8d.firebaseapp.com",
  projectId: "phongnv-9ba8d",
  storageBucket: "phongnv-9ba8d.appspot.com",
  messagingSenderId: "958140979583",
  appId: "1:958140979583:web:a63c0c544f347bba08e24a",
  measurementId: "G-XW81TZD44K"
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
