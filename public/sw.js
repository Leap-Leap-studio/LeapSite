const CACHE_NAME = 'leap-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/favicon.ico',
  '/manifest.json',
  '/sitemap.xml',
  '/robots.txt'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  // Non intercettare richieste per file JavaScript e CSS dinamici
  if (event.request.url.includes('/assets/') || 
      event.request.url.endsWith('.js') || 
      event.request.url.endsWith('.css')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Prendi il controllo di tutte le pagine
      return self.clients.claim();
    })
  );
});
