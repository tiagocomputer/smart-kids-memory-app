const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const plain = (value) => JSON.parse(JSON.stringify(value));

async function cloudHarness() {
  const calls = [];
  let authChanged;
  let getValue = { exists: () => false };
  let getError;
  let writeError;
  const dbApi = {
    getDatabase: () => ({}), ref: (_, location) => location,
    serverTimestamp: () => ({ '.sv': 'timestamp' }),
    increment: (amount) => ({ '.sv': { increment: amount } }),
    orderByChild: (child) => ({ child }), limitToLast: (limit) => ({ limit }),
    query: (location, ...options) => ({ location, options }),
    async get(location) { calls.push({ method: 'get', location }); if (getError) throw getError; return getValue; },
    async set(location, value) { calls.push({ method: 'set', location, value: plain(value) }); if (writeError) throw writeError; },
    async update(location, value) { calls.push({ method: 'update', location, value: plain(value) }); if (writeError) throw writeError; },
  };
  const user = { uid: 'player-a', isAnonymous: false };
  const authApi = {
    getAuth: () => ({}), setPersistence: async () => {},
    onAuthStateChanged: (_, callback) => { authChanged = callback; callback(user); },
    signOut: async () => authChanged(null),
  };
  const context = vm.createContext({
    console: { warn() {} }, localStorage: { getItem: () => null, setItem() {} },
    testImport: async (url) => url.endsWith('firebase-app.js') ? { initializeApp: () => ({}) }
      : url.endsWith('firebase-auth.js') ? authApi : dbApi,
  });
  // Replace only the module loader; execute the actual module/API with fake SDK I/O.
  const source = fs.readFileSync(path.join(root, 'js/cloud.js'), 'utf8').replace(/\bimport\(/g, 'testImport(');
  vm.runInContext(source + '\nglobalThis.subject = cloud;', context);
  await context.subject.init();
  return {
    cloud: context.subject, calls,
    remote(value) { getValue = { exists: () => value !== null, val: () => value }; },
    rows(value) { getValue = { forEach: (callback) => value.forEach(([key, row]) => callback({ key, val: () => row })) }; },
    readError(error) { getError = error; }, writeError(error) { writeError = error; },
    changeUser(value) { authChanged(value); },
    deferredRead(promise) { dbApi.get = () => promise; },
  };
}

test('cloud stores only bounded progress fields and valid mastery keys', async () => {
  const h = await cloudHarness();
  await h.cloud.saveState({
    name: '<script> nickname\u0000', avatarId: '<img>', skin: 22,
    coins: -20, xp: Infinity, wins: 3.8, ppm: '<img onerror=alert(1)>',
    fast: { facil: 15.5, medio: -2, dificil: '8', injected: 1 },
    stickers: ['animais1', 'animais1', 'bad/id', { injected: true }],
    unlocked: ['oceano', 'invented', 'oceano'],
    mastery: { animais_facil: 3, animais_medio: 4, invented_facil: 2 },
    walletUpdatedAt: 123, premium: true, 'other-user/path': 999,
  });
  const value = h.calls.find((c) => c.method === 'set').value;
  assert.equal(value.name, 'script nickname');
  assert.equal(value.coins, 0); assert.equal(value.xp, 0); assert.equal(value.wins, 3);
  assert.equal(value.ppm, 0); assert.equal(value.skin, 5); assert.equal(value.avatarId, null);
  assert.deepEqual(value.fast, { facil: 15.5 });
  assert.deepEqual(value.stickers, ['animais1']); assert.deepEqual(value.unlocked, ['oceano']);
  assert.deepEqual(value.mastery, { animais_facil: 3 });
  assert.equal(value.walletUpdatedAt, 123); assert.equal(value.premium, undefined);
  assert.equal(value['other-user/path'], undefined);
  assert.deepEqual(value.updatedAt, { '.sv': 'timestamp' });
});

test('cloud preserves legacy wallet time and an explicit zero version', async () => {
  const h = await cloudHarness();
  h.remote({ coins: 20, updatedAt: 12345 });
  assert.equal((await h.cloud.loadState()).walletUpdatedAt, 12345);
  h.remote({ coins: 20, updatedAt: 12345, walletUpdatedAt: 0 });
  assert.equal((await h.cloud.loadState()).walletUpdatedAt, 0);
  h.remote({ coins: 20, updatedAt: 12345, walletUpdatedAt: 54321 });
  assert.equal((await h.cloud.loadState()).walletUpdatedAt, 54321);
});

test('cloud read/write errors propagate instead of looking like a successful empty save', async () => {
  const h = await cloudHarness();
  h.readError(new Error('offline'));
  await assert.rejects(h.cloud.loadState(), /offline/);
  assert.equal(h.calls.some((c) => c.method === 'set'), false);
  h.writeError(new Error('permission-denied'));
  await assert.rejects(h.cloud.saveState({ coins: 1 }), /permission-denied/);
});

test('cloud rejects an in-flight save read after an account changes', async () => {
  const h = await cloudHarness();
  let finish;
  h.deferredRead(new Promise((resolve) => { finish = resolve; }));
  const pending = h.cloud.loadState();
  h.changeUser({ uid: 'player-b', isAnonymous: false });
  finish({ exists: () => true, val: () => ({ coins: 55 }) });
  await assert.rejects(pending, /cloud-account-changed/);
});

test('rankings use limited known paths, numeric scores and server row identities', async () => {
  const h = await cloudHarness();
  assert.deepEqual(plain(await h.cloud.topBoard('users/player-a', 500)), []);
  await h.cloud.bumpBoard('users', 10, {});
  await h.cloud.bumpBoard('leaderboard', 10, {});
  await h.cloud.bumpBoard('world/animais', Infinity, {});
  await h.cloud.bumpBoard('weekly/20260907', 1.5, {});
  assert.equal(h.calls.length, 0);
  h.rows([['real-uid', { name: 'Nick', avatarId: '__proto__', xp: '<svg onload=alert(1)>', uid: 'forged-uid', email: 'private' }]]);
  const result = plain(await h.cloud.topBoard('leaderboard', 1000));
  assert.equal(result[0].xp, 0); assert.equal(result[0].uid, 'real-uid');
  assert.equal(result[0].email, undefined);
  assert.equal(result[0].avatarId, null);
  assert.equal(h.calls[0].location.options[1].limit, 50);
  await h.cloud.bumpBoard('world/animais', 12, { name: 'Nick' });
  assert.deepEqual(h.calls[1].value.xp, { '.sv': { increment: 12 } });
});

test('signed-out players never load, save or publish to Firebase', async () => {
  const h = await cloudHarness();
  await h.cloud.signOut();
  assert.equal(await h.cloud.loadState(), null);
  await h.cloud.saveState({ coins: 1 });
  await h.cloud.submitScore({ xp: 100 }, {});
  await h.cloud.bumpBoard('world/animais', 10, {});
  assert.equal(h.calls.length, 0);
});

function swHarness() {
  const origin = 'https://game.test/';
  const handlers = {};
  const maps = new Map();
  const requests = [];
  const deleted = [];
  let fetcher = async () => response('network');
  let skipped = false;
  const key = (request) => new URL(typeof request === 'string' ? request : request.url, origin).href;
  const caches = {
    async open(name) {
      if (!maps.has(name)) maps.set(name, new Map());
      const items = maps.get(name);
      return { match: async (request) => items.get(key(request)), put: async (request, value) => items.set(key(request), value),
        addAll: async (urls) => { for (const url of urls) items.set(key(url), response('precache')); } };
    },
    keys: async () => [...maps.keys()], delete: async (name) => { deleted.push(name); return maps.delete(name); },
  };
  const context = vm.createContext({ URL, Set, caches,
    fetch: async (request) => { requests.push(request); return fetcher(request); },
    self: { location: { href: origin + 'sw.js' }, addEventListener: (type, callback) => { handlers[type] = callback; },
      skipWaiting: async () => { skipped = true; }, clients: { claim: async () => {} } },
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), context);
  return {
    maps, requests, deleted, caches, skipped: () => skipped,
    fetcher(value) { fetcher = value; },
    async event(type) { let promise; handlers[type]({ waitUntil: (pending) => { promise = pending; } }); await promise; },
    dispatch(relative, options = {}) {
      let pending;
      const request = { url: new URL(relative, origin).href, method: 'GET', destination: '', mode: 'cors', headers: new Headers(), ...options };
      handlers.fetch({ request, respondWith: (value) => { pending = value; } });
      return pending;
    },
    async cached(url, value) { const cache = await caches.open('mm-cache-v3'); await cache.put(new URL(url, origin).href, value); },
  };
}
function response(body, status = 200, cacheControl = '') {
  return { body, status, ok: status >= 200 && status < 300, type: 'basic',
    headers: new Headers({ 'Cache-Control': cacheControl }), clone() { return response(body, status, cacheControl); } };
}

test('service worker does not cache APIs, authorization, third-party traffic or byte ranges', () => {
  const h = swHarness();
  assert.equal(h.dispatch('/api/account'), undefined);
  assert.equal(h.dispatch('/other.html', { mode: 'navigate' }), undefined);
  assert.equal(h.dispatch('https://firebase.test/sdk.js', { destination: 'script' }), undefined);
  assert.equal(h.dispatch('/js/app.js', { destination: 'script', headers: new Headers({ Authorization: 'Bearer example' }) }), undefined);
  assert.equal(h.dispatch('/audio/owl-pt.mp3', { destination: 'audio', headers: new Headers({ Range: 'bytes=0-12' }) }), undefined);
  assert.equal(h.dispatch('/js/app.js', { destination: 'script', method: 'POST' }), undefined);
  assert.equal(h.requests.length, 0);
});

test('service worker refreshes code online and uses its versionless copy offline', async () => {
  const h = swHarness();
  await h.cached('/js/app.js', response('old code'));
  h.fetcher(async () => response('fixed code'));
  assert.equal((await h.dispatch('/js/app.js?v=75', { destination: 'script' })).body, 'fixed code');
  h.fetcher(async () => { throw new Error('offline'); });
  assert.equal((await h.dispatch('/js/app.js?v=76', { destination: 'script' })).body, 'fixed code');
});

test('service worker keeps privacy/app pages separate and does not store invitation queries', async () => {
  const h = swHarness();
  h.fetcher(async (request) => response(request.url.includes('privacidade') ? 'privacy' : 'game'));
  await h.dispatch('/?join=private-room', { mode: 'navigate' });
  await h.dispatch('/privacidade.html?lang=pt', { mode: 'navigate' });
  const cache = h.maps.get('mm-cache-v3');
  assert.equal(cache.get('https://game.test/index.html').body, 'game');
  assert.equal(cache.get('https://game.test/privacidade.html').body, 'privacy');
  assert.equal([...cache.keys()].some((url) => url.includes('?')), false);
  h.fetcher(async () => { throw new Error('offline'); });
  assert.equal((await h.dispatch('/privacidade.html', { mode: 'navigate' })).body, 'privacy');
});

test('service worker preserves good copies during server errors and excludes private responses', async () => {
  const h = swHarness();
  await h.cached('/index.html', response('good'));
  h.fetcher(async () => response('server error', 503));
  assert.equal((await h.dispatch('/', { mode: 'navigate' })).body, 'good');
  h.fetcher(async () => response('sensitive', 200, 'private, no-store'));
  await h.dispatch('/', { mode: 'navigate' });
  assert.equal(h.maps.get('mm-cache-v3').get('https://game.test/index.html').body, 'good');
});

test('service worker precaches game code and removes only its own older caches', async () => {
  const h = swHarness();
  await h.caches.open('other-app-cache'); await h.caches.open('mm-cache-v2');
  await h.event('install'); await h.event('activate');
  assert.equal(h.skipped(), true);
  assert.deepEqual(h.deleted, ['mm-cache-v2']);
  assert.equal(h.maps.has('other-app-cache'), true);
  assert.equal(h.maps.get('mm-cache-v3').has('https://game.test/js/app.js'), true);
});

// Optional integration suite. Explicit loopback guard makes production inaccessible.
// Start Firebase Realtime Database Emulator and set FIREBASE_DATABASE_EMULATOR_HOST=127.0.0.1:9009.
test('Firebase emulator enforces ownership, schema, bounded queries and timestamps', {
  skip: !process.env.FIREBASE_DATABASE_EMULATOR_HOST,
}, async (t) => {
  const host = process.env.FIREBASE_DATABASE_EMULATOR_HOST;
  assert.match(host, /^127\.0\.0\.1:[0-9]+$/);
  const namespace = 'demo-memory-security-tests';
  const endpoint = (location, query = '') => `http://${host}/${location}.json?ns=${namespace}${query}`;
  const rules = fs.readFileSync(path.join(root, 'database.rules.json'), 'utf8');
  const admin = { Authorization: 'Bearer owner', 'Content-Type': 'application/json' };
  const installed = await fetch(endpoint('.settings/rules'), { method: 'PUT', headers: admin, body: rules });
  assert.equal(installed.status, 200, await installed.text());
  await fetch(endpoint(''), { method: 'DELETE', headers: admin });
  function token(uid, provider = 'password') {
    const b64 = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
    const now = Math.floor(Date.now() / 1000);
    return `${b64({ alg: 'none', typ: 'JWT' })}.${b64({
      iss: `https://securetoken.google.com/${namespace}`, aud: namespace, sub: uid, user_id: uid,
      iat: now, exp: now + 3600, auth_time: now, firebase: { sign_in_provider: provider, identities: {} },
    })}.`;
  }
  // REST ID tokens go in auth=; Authorization is the OAuth/admin pathway.
  const write = async (location, value, uid = 'alice', provider = 'password') => fetch(endpoint(location, '&auth=' + encodeURIComponent(token(uid, provider))), {
    method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(value),
  });
  const valid = { name: 'Coruja', avatarId: 'a1', skin: 1, coins: 100, xp: 20, wins: 1, ppm: 12.5,
    walletUpdatedAt: 123, mastery: { animais_facil: 3 }, fast: { facil: 20 }, stickers: ['animais1'], unlocked: ['oceano'], updatedAt: { '.sv': 'timestamp' } };
  const score = { name: 'Coruja', avatarId: 'a1', skin: 1, xp: 20, wins: 1, ppm: 12.5, updatedAt: { '.sv': 'timestamp' } };
  await t.test('owner can save and read own progress; guests and another owner cannot', async () => {
    const saved = await write('users/alice', valid); assert.equal(saved.status, 200, await saved.text());
    assert.equal((await fetch(endpoint('users/alice', '&auth=' + encodeURIComponent(token('alice'))))).status, 200);
    assert.equal((await fetch(endpoint('users/alice'))).status, 401);
    assert.equal((await write('users/alice', valid, 'bob')).status, 401);
    assert.equal((await write('users/guest', valid, 'guest', 'anonymous')).status, 401);
  });
  await t.test('unsafe types, unknown fields, bad collections and forged timestamps fail', async () => {
    for (const patch of [{ coins: -1 }, { xp: 1.2 }, { premium: true }, { coins: '<img>' },
      { updatedAt: 1 }, { avatarId: '__proto__' }, { avatarId: 'constructor' },
      { mastery: { animais_facil: 4 } }, { mastery: { unknown_facil: 1 } },
      { unlocked: ['unknown'] }, { stickers: { 512: 'animais1' } }, { fast: { injected: 2 } }]) {
      const result = await write('users/alice', { ...valid, ...patch });
      assert.equal(result.status, 401, JSON.stringify(patch) + ' ' + await result.text());
    }
  });
  await t.test('public ranking reads require xp ordering and a limit of at most 50', async () => {
    assert.equal((await write('leaderboard/alice', score)).status, 200);
    assert.equal((await fetch(endpoint('leaderboard'))).status, 401);
    assert.equal((await fetch(endpoint('leaderboard', '&orderBy=%22xp%22&limitToLast=20'))).status, 200);
    assert.equal((await fetch(endpoint('leaderboard', '&orderBy=%22xp%22&limitToLast=51'))).status, 401);
    assert.equal((await write('leaderboard/alice', { ...score, xp: 100000001 })).status, 401);
  });
  await t.test('weekly/world paths and required score fields are validated', async () => {
    const { wins, ppm, ...small } = score;
    assert.equal((await write('weekly/20260907/alice', small)).status, 200);
    assert.equal((await write('world/animais/alice', small)).status, 200);
    assert.equal((await write('world/unknown/alice', small)).status, 401);
    assert.equal((await write('weekly/injected/alice', small)).status, 401);
    assert.equal((await write('leaderboard/alice', { xp: 100 })).status, 401);
  });
});
