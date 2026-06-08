const CACHE_NAME = 'bookvista-v1';
const ASSETS = [
  '/book-finder/',
  '/book-finder/index.html',
  '/book-finder/book.html',
  '/book-finder/favorites.html',
  '/book-finder/post-book.html',
  '/book-finder/blog.html',
  '/book-finder/admin.html',
  '/book-finder/privacy.html',
  '/book-finder/terms.html',
  '/book-finder/contacts.html',
  '/book-finder/style.css',
  '/book-finder/translations.js',
  '/book-finder/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetched = fetch(e.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
