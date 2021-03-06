const cacheName = 'biiinge-cache-v1';
const precacheResources = [
  '/',
  'index.html',
  '/Logo.png',
  '/spinner.svg',
  '/eye-catcher-biiinge.png',
  '/static/css'
 
];
self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(caches.match(event.request)
      .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request);
        })
      );
  });
  self.addEventListener('install', event => {
    console.log('Service worker installing...');
    self.skipWaiting();
    // Add a call to skipWaiting here
    event.waitUntil(
      caches.open(cacheName)
        .then(cache => {
          return cache.addAll(precacheResources);
        })
    );
  });
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
  });
  self.addEventListener('activate', event => {
    console.log('Service worker activating...');
  });