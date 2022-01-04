// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
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

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
