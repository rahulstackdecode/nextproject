'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import BlogSec from './Blogs/BlogSec';
import Rating from './Rating/Rating';
import Cta from './Cta/CtaSection';
import Solutions from './Solutions/Solutions';
// import ProductsPage from './Products/Products';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from '@/lib/firebase';


const Home = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('✅ Service Worker registered:', registration);

          Notification.requestPermission().then((permission) => {
            if (permission === 'granted' && messaging) {
              getToken(messaging, {
                vapidKey: 'BHfnYwv9JrorR4GInmec2S_0FgOppg88B1gvJM4zDOLEpJqATufFHG3RaZ7-tlcwAdbg_CTXf2P9RSoTiH1fa-Y',
                serviceWorkerRegistration: registration,
              })
                .then((token) => {
                  console.log('📬 FCM Token:', token);
                  // 🔁 Optional: Send token to your backend here
                })
                .catch((err) => {
                  console.warn('🔴 Error getting FCM token:', err);
                });
            }
          });
        })
        .catch((err) => console.error('❌ Service Worker registration failed:', err));
    }

    if (messaging !== null) {
      onMessage(messaging, (payload) => {
        console.log('🔔 Foreground Notification:', payload);
        alert(`${payload.notification?.title}\n${payload.notification?.body}`);
      });
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Solutions />
      {/* <ProductsPage /> */}
      <WhyChoose />
      <Cta />
      <Rating />
      <BlogSec />
    </div>
  );
};

export default Home;
