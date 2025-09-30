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
      // Notifica i client di ricaricare
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SW_DISABLED' });
        });
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Non intercettare nessuna richiesta - passa tutto alla rete
  return;
});

// Disattiva se stesso dopo l'attivazione
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      console.log('Service Worker disattivato con successo');
    })
  );
});
