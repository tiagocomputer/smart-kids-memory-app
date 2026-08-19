// Service worker do Memória Mágica.
// Estratégia conservadora (o app é atualizado com frequência via Vercel):
//  - Navegação/HTML: NETWORK-FIRST (mostra a versão nova assim que online).
//  - Estáticos mesma-origem: CACHE-FIRST (menos rede em refresh/dados móveis).
//  - Cross-origin (Firebase, Google Fonts, gstatic): NÃO intercepta (passa direto).
// Assim o HTML atualiza rápido e os assets já baixados não pesam em refresh.

const CACHE = 'mm-cache-v2';
const CORE = ['./', './index.html', './manifest.json', './img/pwa/icon-192.png'];
const STATIC_DESTINATIONS = new Set(['style', 'script', 'image', 'font', 'audio', 'manifest']);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).catch(() => {}).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Só cuidamos da nossa própria origem. Firebase/fontes vão direto pra rede.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;

  // Navegação (abrir a página): rede primeiro, cai pro cache se offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Estáticos: responde do cache e só busca na rede se ainda não estiver salvo.
  if (STATIC_DESTINATIONS.has(req.destination)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        });
      })
    );
    return;
  }

  // Outros GETs mesma-origem: rede primeiro, cache como reserva.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
