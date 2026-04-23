self.addEventListener('fetch', function(event) {
  // Tut gar nichts, leitet nur weiter
  event.respondWith(fetch(event.request));
});
