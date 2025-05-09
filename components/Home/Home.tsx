'use client';

import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import BlogSec from './Blogs/BlogSec';
import Rating from './Rating/Rating';
import Cta from './Cta/CtaSection';
import Solutions from './Solutions/Solutions';
import { getToken, onMessage, MessagePayload } from 'firebase/messaging';
import { messaging } from '@/lib/firebase';

const vapidKey = 'BHfnYwv9JrorR4GInmec2S_0FgOppg88B1gvJM4zDOLEpJqATufFHG3RaZ7-tlcwAdbg_CTXf2P9RSoTiH1fa-Y';

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
                vapidKey,
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

    if (messaging) {
      onMessage(messaging, (payload: MessagePayload) => {
        console.log('🔔 Foreground Notification:', payload);

        const { title, body, icon } = payload.notification || {};
        const click_action = payload.data?.click_action || '/';

        const notificationOptions: NotificationOptions = {
          body: body || '',
          icon: icon || '/images/icon-192.png',
          data: {
            click_action,
          },
        };

        // Try using service worker to show notification
        if (Notification.permission === 'granted') {
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
              type: 'SHOW_NOTIFICATION',
              payload: {
                title,
                ...notificationOptions,
              },
            });
          } else {
            // Fallback: Show system notification directly
            const notification = new Notification(title || 'Notification', notificationOptions);
            notification.onclick = () => {
              window.open(click_action, '_blank');
            };
          }
        }
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
