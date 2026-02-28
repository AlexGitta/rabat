const CACHE_NAME = 'rabat-holiday-v4';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/web-app-manifest-192x192.png',
  './icons/web-app-manifest-512x512.png',
  './icons/apple-touch-icon.png',
  './images/chellah.jpg',
  './images/hassan-tower.jpg',
  './images/kasbah.jpg',
  './images/flouka.jpg',
  './images/dinarjat.jpg',
  './images/sufra.jpg',
  './images/museum.jpg',
  './images/villa.jpg',
  './images/medina.jpg',
  './images/kasr.jpg',
  './images/beach.jpg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME && k !== 'fonts-v1').map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Cache-first for Google Fonts (works offline after first visit)
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open('fonts-v1').then(cache =>
        cache.match(event.request).then(cached => {
          const network = fetch(event.request).then(res => {
            cache.put(event.request, res.clone());
            return res;
          });
          return cached || network;
        })
      )
    );
    return;
  }

  // Cache-first for everything else
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
