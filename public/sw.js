// Service Worker disabilitato - disattiva se stesso
self.addEventListener('install', (event) => {
  // Non installa nulla
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Disattiva tutti i service worker esistenti
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // Prendi il controllo e disattiva
      return self.clients.claim();
    }).then(() => {
      // Notifica i client che è stato disattivato
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SW_DISABLED' });
        });
      });
    }).then(() => {
      // Disattiva se stesso dopo aver notificato i client
      return self.registration.unregister().then(() => {
        console.log('Service Worker disattivato con successo');
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Non intercettare nessuna richiesta - passa tutto alla rete
  return;
});
