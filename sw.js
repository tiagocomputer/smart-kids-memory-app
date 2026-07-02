// Service worker do Memória Mágica.
// Estratégia conservadora (o app é atualizado com frequência via Vercel):
//  - Navegação/HTML: NETWORK-FIRST (mostra a versão nova assim que online).
//  - Estáticos mesma-origem (css/js/img com ?v=N): STALE-WHILE-REVALIDATE.
//  - Cross-origin (Firebase, Google Fonts, gstatic): NÃO intercepta (passa direto).
// Assim o jogo funciona offline sem "prender" versões antigas nem quebrar a nuvem.

const CACHE = 'mm-cache-v1';
const CORE = ['./', './index.html', './manifest.json', './img/pwa/icon-192.png'];

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

  // Estáticos: responde do cache e atualiza em segundo plano.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
