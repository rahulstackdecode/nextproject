if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5a537b27274e9a1b1a061b4f2f7d4c8f"},{url:"/_next/static/W6x6shZbgnf9p2AOaMb_h/_buildManifest.js",revision:"708ab632096db0fbee1d0794df587ed7"},{url:"/_next/static/W6x6shZbgnf9p2AOaMb_h/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/341.df3329d77a5faa19.js",revision:"df3329d77a5faa19"},{url:"/_next/static/chunks/472.a3826d29d6854395.js",revision:"a3826d29d6854395"},{url:"/_next/static/chunks/4bd1b696-ea8457096315284e.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/63-bf5332b89d56fe3e.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/684-9f31e94f6bbe6132.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/app/_not-found/page-f76c6b05adeed9bd.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/app/layout-7b8f5dcc46c32276.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/app/page-551ccbc24e3b732f.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/c916193b-02797d3f399caa83.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/f7333993-b6a7c231a2155485.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/framework-f593a28cde54158e.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/main-a5927a3d7bfba866.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/main-app-e46cc7ae8b415023.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/pages/_app-92f2aae776f86b9c.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/pages/_error-71d2b6a7b832d02a.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-60ed60c210eb03b3.js",revision:"W6x6shZbgnf9p2AOaMb_h"},{url:"/_next/static/css/c001bd63d0a3084f.css",revision:"c001bd63d0a3084f"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/images/appstore.png",revision:"bbd10cfec14d2950bd58e63f281d171f"},{url:"/images/banner-img.jpg",revision:"64d5312077e924202ca54f764aa41b14"},{url:"/images/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/images/googleplay.png",revision:"ddb013c60d3aef4923f94c73ddbafc6d"},{url:"/images/hero.webp",revision:"d9961e2a079b9690de3f3fbccbca7740"},{url:"/manifest.json",revision:"e3d3cdfd4c46f5ed9eb6529061880664"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
