import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCUO8GKVIZyJ4vveXgWLMXWp2_NKotexBA',
  authDomain: 'cloud-messaging-bd2e9.firebaseapp.com',
  projectId: 'cloud-messaging-bd2e9',
  storageBucket: 'cloud-messaging-bd2e9.appspot.com',
  messagingSenderId: '523548667773',
  appId: '1:523548667773:web:1ff4ff72c80a8495b66614',
};

const app = initializeApp(firebaseConfig);

export const messaging = typeof window !== 'undefined' ? getMessaging(app) : null;
