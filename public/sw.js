const CACHE_NAME = 'leap-cache-v4';
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
  // Non intercettare richieste per file JavaScript, CSS e altri asset dinamici
  if (event.request.url.includes('/assets/') || 
      event.request.url.endsWith('.js') || 
      event.request.url.endsWith('.css') ||
      event.request.url.includes('vite') ||
      event.request.url.includes('hot-update') ||
      event.request.url.includes('chunk') ||
      event.request.url.includes('module')) {
    return;
  }
  
  // Solo per richieste di navigazione (HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
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
      // Prendi il controllo di tutte le pagine immediatamente
      return self.clients.claim();
    }).then(() => {
      // Notifica tutti i client dell'aggiornamento
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SW_UPDATED' });
        });
      });
    })
  );
});
