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

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/images/icon-192.png',
    data: {
      click_action: payload.notification.click_action || '/',
    },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle custom notifications from the app in foreground
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, icon, click_action } = event.data.payload;
    self.registration.showNotification(title || 'Notification', {
      body: body || '',
      icon: icon || '/images/icon-192.png',
      data: { click_action: click_action || '/' },
    });
  }
});

// Handle notification click
self.addEventListener('notificationclick', function (event) {
  const click_action = event.notification.data.click_action;
  event.notification.close();
  event.waitUntil(clients.openWindow(click_action));
});
