'use client';
import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import BlogSec from './Blogs/BlogSec';
import Rating from './Rating/Rating';
import Cta from './Cta/CtaSection';
import Solutions from './Solutions/Solutions';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from '@/lib/firebase';
import { toast } from 'react-toastify';

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || typeof window === 'undefined') return;

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
        const { title, body } = payload.notification || {};
        toast.info(<div><strong>{title}</strong><p>{body}</p></div>);
      });
    }
  }, [hasMounted]);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Solutions />
      <WhyChoose />
      <Cta />
      <Rating />
      <BlogSec />
    </div>
  );
};

export default Home;
