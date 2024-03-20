// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
self.importScripts(
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"
);
self.importScripts(
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js"
);

self.firebase.initializeApp({
  apiKey: "AIzaSyD1yE1fGXXfU7WlxrYK1dStMwtDrV56LfA",
  authDomain: "safepazz-16ce5.firebaseapp.com",
  projectId: "safepazz-16ce5",
  storageBucket: "safepazz-16ce5.appspot.com",
  messagingSenderId: "1050519902978",
  appId: "1:1050519902978:web:6f77ba33056a553159001b",
  measurementId: "G-70MW1JDT3X",
});

const messaging = self.firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  console.log(payload.notification);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
