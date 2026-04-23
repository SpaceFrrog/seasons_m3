const CACHE_NAME = 'pwa-cache-v1';
const ASSETS = [
  './',                // Wichtig: Punkt vor dem Slash für das aktuelle Verzeichnis
  './index.html',
  './style.css',       // Falls vorhanden
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});
