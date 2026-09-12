// Cache do Memória Mágica: só páginas/arquivos públicos conhecidos.
// Código: rede primeiro, para receber correções. Mídia: cache primeiro.
// Firebase, autenticação, APIs e outras origens nunca entram no cache do jogo.
const CACHE_PREFIX = 'mm-cache-';
const CACHE = CACHE_PREFIX + 'v4';
const ROOT = new URL('./', self.location.href);
const CORE = [
  './', './index.html', './privacidade.html', './manifest.json',
  './css/style.css', './js/art.js', './js/characters.js', './js/avatars.js',
  './js/cloud.js', './js/music.js', './js/app.js', './img/pwa/icon-192.png',
];
const keyFor = (pathname) => new URL(pathname, ROOT).href;
const APP_PAGE = keyFor('index.html');
const MEDIA_DESTINATIONS = new Set(['image', 'font', 'audio', 'manifest']);

function cacheable(response) {
  return response && response.ok && response.type === 'basic' &&
    !/no-store|private/i.test(response.headers.get('Cache-Control') || '');
}
async function save(cache, key, response) {
  if (cacheable(response)) {
    try { await cache.put(key, response.clone()); } catch { /* Cache cheio: continua pela rede. */ }
  }
  return response;
}
async function networkFirst(request, key) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.status >= 500) {
      const cached = await cache.match(key);
      if (cached) return cached;
    }
    return await save(cache, key, response);
  } catch (error) {
    const cached = await cache.match(key);
    if (cached) return cached;
    throw error;
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) return;
  if (request.headers.has('Authorization') || request.headers.has('Range')) return;
  const relative = url.pathname.slice(ROOT.pathname.length);
  // Não armazena APIs, dados privados nem endpoints adicionados no futuro.
  if (request.mode === 'navigate') {
    if (!['', 'index.html', 'privacidade.html'].includes(relative)) return;
    // Convites (?join=...) não são persistidos no cache.
    const key = relative === '' ? APP_PAGE : keyFor(relative);
    event.respondWith(networkFirst(request, key));
    return;
  }
  if ((request.destination === 'script' && relative.startsWith('js/')) ||
      (request.destination === 'style' && relative.startsWith('css/'))) {
    // Chave sem versão mantém uma cópia utilizável offline após atualizações.
    event.respondWith(networkFirst(request, keyFor(relative)));
    return;
  }
  if (MEDIA_DESTINATIONS.has(request.destination) &&
      /^(img\/|audio\/|fonts\/|manifest\.json$)/.test(relative)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const key = keyFor(relative);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        return await save(cache, request, response);
      } catch (error) {
        // Pré-cache sem query, por exemplo o ícone do aplicativo.
        const fallback = await cache.match(key);
        if (fallback) return fallback;
        throw error;
      }
    })());
  }
});
