importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCUO8GKVIZyJ4vveXgWLMXWp2_NKotexBA',
  authDomain: 'cloud-messaging-bd2e9.firebaseapp.com',
  projectId: 'cloud-messaging-bd2e9',
  messagingSenderId: '523548667773',
  appId: '1:523548667773:web:1ff4ff72c80a8495b66614',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/images/icon-192.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
