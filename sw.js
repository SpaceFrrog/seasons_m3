self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installiert');
});

self.addEventListener('fetch', (e) => {
  // Hier könnte später das Caching für den Offline-Modus stehen
});