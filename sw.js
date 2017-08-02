const onCache = cache => cache.addAll([
  './',
  './index.html',
]);

this.addEventListener('install', e => e.waitUntil(
  caches
    .open('v1')
    .then(onCache)
));

this.addEventListener('fetch', e =>	e.respondWith(
  caches
    .match(e.request)
    .then(res => res || fetch(e.request))
));
