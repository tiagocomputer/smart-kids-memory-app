const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

// Execute the application logic with deterministic timers and a minimal DOM.
// UI rendering is checked separately in the browser; no Firebase writes here.
function harness(initial = {}, blocked = false) {
  const values = new Map(Object.entries({ mm_sound: 'off', ...initial }));
  const pending = new Map();
  let nextId = 0, now = 100000;
  class Element {
    constructor(id = '') {
      this.id = id; this.hidden = true; this.children = []; this.dataset = {}; this.style = {};
      this.attributes = {}; this.listeners = {}; this.textContent = ''; this.innerHTML = '';
      this.classes = new Set(); this.offsetHeight = 40;
      this.classList = { add: (...xs) => xs.forEach(x => this.classes.add(x)),
        remove: (...xs) => xs.forEach(x => this.classes.delete(x)), contains: x => this.classes.has(x),
        toggle: (x, flag) => flag === false ? this.classes.delete(x) : this.classes.add(x) };
    }
    addEventListener(name, fn) { this.listeners[name] = fn; }
    removeEventListener() {}
    setAttribute(k, v) { this.attributes[k] = String(v); }
    appendChild(el) { this.children.push(el); }
    querySelectorAll() { return []; }
    querySelector() { return null; }
    getBoundingClientRect() { return { top: 100 }; }
    focus() {}
  }
  const elements = new Map();
  const element = key => {
    if (!elements.has(key)) elements.set(key, new Element(key));
    return elements.get(key);
  };
  element('#screen-home').classList.add('active');
  const localStorage = {
    getItem(key) { if (blocked) throw new Error('storage denied'); return values.get(key) ?? null; },
    setItem(key, value) { if (blocked) throw new Error('quota'); values.set(key, String(value)); },
  };
  const document = {
    querySelector: element, getElementById: id => element('#' + id), querySelectorAll: () => [],
    createElement: () => new Element(), addEventListener() {}, documentElement: new Element(),
  };
  const window = { MM_AVATARS: { skins: ['#fff', '#aaa'], list: [{ id: 'a1', img: 'a.webp' }] },
    addEventListener() {}, scrollTo() {}, innerWidth: 390, innerHeight: 844, scrollY: 0,
    matchMedia: () => ({ matches: true }) };
  const context = vm.createContext({ window, document, localStorage, navigator: { language: 'pt' },
    location: { origin: 'http://localhost', pathname: '/', search: '' }, URL, URLSearchParams,
    history: { replaceState() {} }, console, Date: class extends Date { static now() { return now; } },
    performance: { now: () => now }, requestAnimationFrame() {}, cancelAnimationFrame() {},
    setTimeout: (fn, delay) => { const id = ++nextId; pending.set(id, { fn, at: now + delay }); return id; },
    clearTimeout: id => pending.delete(id), setInterval: () => ++nextId, clearInterval() {},
    cloud: { enabled: false, isSignedIn: () => false },
  });
  const source = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8').split('// ---------- Início ----------')[0];
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/music.js'), 'utf8'), context);
  vm.runInContext(source, context);
  const run = code => vm.runInContext(code, context);
  const advance = ms => {
    const target = now + ms;
    while (true) {
      const next = [...pending].filter(([, task]) => task.at <= target).sort((a, b) => a[1].at - b[1].at)[0];
      if (!next) break;
      pending.delete(next[0]); now = next[1].at; next[1].fn();
    }
    now = target;
  };
  const finish = () => run('game.matchedPairs = game.totalPairs; game.moves = game.totalPairs; game.players[0].pairs = game.totalPairs; endGame();');
  return { run, advance, finish, values, element };
}

test('all worlds cost 53540; unknown worlds stay locked; three worlds are free', () => {
  const { run } = harness();
  assert.equal(run('THEME_LIST.reduce((n, th) => n + th.cost, 0)'), 53540);
  assert.equal(run('THEME_LIST.filter(th => th.cost === 0).length'), 3);
  assert.equal(run('isThemeUnlocked("__proto__")'), false);
});

test('relaxed victory earns base + first-clear once; challenge shares claim', () => {
  const h = harness();
  h.run('startGame()'); h.finish();
  assert.equal(h.run('storage.coins'), 36);
  assert.equal(h.run('storage.mastery.animais_facil'), 3);
  assert.equal(h.run('getRecords().ppm'), 0);
  h.run('endGame()');
  assert.equal(h.run('storage.coins'), 36, 'reward is idempotent');
  h.run('startGame()'); h.finish();
  assert.equal(h.run('storage.coins'), 57);
  h.run('config.pace = "challenge"; startGame(); timeLeft = 50'); h.finish();
  assert.equal(h.run('storage.coins'), 88);
  assert.equal(h.run('lastWin.firstClear'), 0);
});

test('incomplete game never earns rewards', () => {
  const h = harness(); h.run('startGame(); endGame()');
  assert.equal(h.run('storage.coins'), 0);
  assert.equal(h.run('game.over'), false);
});

test('malformed saves and blocked storage remain playable', () => {
  const h = harness({ mm_lang: '__proto__', mm_coins: 'NaN', mm_stickers: '{}', mm_unlocked: 'null', mm_records: 'null', mm_mastery: '{"animais_facil":99}' });
  assert.equal(h.run('lang'), 'pt');
  assert.equal(h.run('storage.coins'), 0);
  assert.equal(h.run('storage.stickers.length'), 0);
  assert.equal(h.run('getRecords().xp'), 0);
  assert.equal(h.run('Object.keys(storage.mastery).length'), 0);
  const blocked = harness({}, true);
  blocked.run('storage.sound = false; startGame()'); blocked.finish();
  assert.equal(blocked.run('storage.coins'), 36);
});

test('successful persistence does not cache stale balances across tabs', () => {
  const h = harness(); h.run('storage.coins = 100'); h.values.set('mm_coins', '40');
  assert.equal(h.run('storage.coins'), 40);
});

test('wallet keeps coins/unlocks/first-clear claims from the same latest snapshot', () => {
  const h = harness({ mm_coins: '40', mm_unlocked: '["oceano"]', mm_wallet_updated: '2000', mm_mastery: '{"animais_facil":3}' });
  h.run('mergeCloudIntoLocal({coins:100, unlocked:[], walletUpdatedAt:1000})');
  assert.equal(h.run('storage.coins'), 40);
  assert.equal(h.run('storage.unlocked.includes("oceano")'), true);
  h.run('mergeCloudIntoLocal({coins:10, unlocked:["oceano","comida"], mastery:{animais_facil:3}, walletUpdatedAt:3000})');
  assert.equal(h.run('storage.coins'), 10);
  assert.equal(h.run('storage.unlocked.length'), 2);
  assert.equal(h.run('storage.walletUpdatedAt'), 3000);
  assert.equal(h.run('storage.mastery.animais_facil'), 3);
});

test('legacy local purchase survives upgrade; empty device adopts cloud', () => {
  const local = harness({ mm_coins: '80', mm_unlocked: '["oceano"]' });
  local.run('mergeCloudIntoLocal({coins:140,unlocked:[],walletUpdatedAt:1000})');
  assert.equal(local.run('storage.coins'), 80);
  assert.equal(local.run('storage.unlocked.includes("oceano")'), true);
  const fresh = harness(); fresh.run('mergeCloudIntoLocal({coins:80,unlocked:["oceano"],walletUpdatedAt:1000})');
  assert.equal(fresh.run('storage.coins'), 80);
  assert.equal(fresh.run('storage.unlocked.includes("oceano")'), true);
});

test('restart cancels pending card animations; pause freezes resolution', () => {
  const h = harness();
  h.run('startGame(); const first = game.deck[0].face; const partner = game.deck.findIndex((c, i) => i > 0 && c.face === first); flipCard(0, $("#board").children[0]); flipCard(partner, $("#board").children[partner]); pauseGame();');
  h.advance(1000);
  assert.equal(h.run('game.lock'), true);
  h.run('resumeGame()'); h.advance(150);
  assert.equal(h.run('game.lock'), false);
  assert.equal(h.run('game.pausedMs'), 1000);
  h.run('afterMatchDelay(() => { game.moves = 999; }, 500); startGame()'); h.advance(1000);
  assert.equal(h.run('game.moves'), 0);
  assert.equal(h.run('game.pausedMs'), 0);
});

test('duel decks require exact pair count, integer indexes and two of each face', () => {
  const h = harness();
  h.run('const good = {theme:"animais",level:"facil",deck:[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]}');
  assert.equal(h.run('validRemoteDeck(good)'), true);
  assert.equal(h.run('validRemoteDeck({...good, deck:good.deck.slice(2)})'), false);
  assert.equal(h.run('validRemoteDeck({...good, deck:Array(16).fill(0)})'), false);
  assert.equal(h.run('validRemoteDeck({...good, deck:good.deck.map(String)})'), false);
  assert.equal(h.run('validRemoteDeck({...good,level:"constructor"})'), false);
});

test('remote player cannot flip on our turn or replace an active match', () => {
  const h = harness(); h.run('startGame(); game.online = true; game.myIndex = 0; netRole = "host"; applyRemoteFlip(0)');
  assert.equal(h.run('game.flipped.length'), 0);
  h.run('flipCard(-1, null); handleNetData({type:"start",theme:"animais",level:"facil",deck:[0,0]})');
  assert.equal(h.run('game.totalPairs'), 8);
  h.run('game.lock = true; applyRemoteFlip(0); applyRemoteFlip(1); applyRemoteFlip(0)');
  assert.equal(h.run('remoteQueue.length'), 3, 'legitimate repeated indexes retain order');
});

test('remote queue overflow ends the duel rather than silently dropping a turn', () => {
  const h = harness();
  h.run('startGame(); game.online = true; game.lock = true; for (let i = 0; i < 129; i++) applyRemoteFlip(i % 16)');
  assert.equal(h.run('game.over'), true);
  assert.equal(h.run('currentScreen()'), 'home');
});

test('guest settles a finishing game before accepting a new host round', () => {
  const h = harness();
  h.run(`const deck = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    const profiles = [{name:'A',avatarId:'a1',skin:1},{name:'B',avatarId:'a1',skin:1}];
    config.players=2; netRole='guest'; startGame({online:true,myIndex:1,deck,profiles});
    game.matchedPairs=8; game.finishing=true; game.players[1].pairs=8;
    handleNetData({type:'start',theme:'animais',level:'facil',deck,profiles});`);
  assert.equal(h.run('game.over'), false);
  assert.equal(h.run('game.matchedPairs'), 0);
  assert.equal(h.run('storage.coins'), 21);
  h.advance(2000);
  assert.equal(h.run('currentScreen()'), 'game');
  assert.equal(h.run('$("#rematch-modal").hidden'), true);
});

test('prototype-like avatar identifiers render the safe fallback', () => {
  const h = harness();
  assert.match(h.run('avatarSVG("__proto__", 1)'), /a.webp/);
  assert.match(h.run('avatarSVG("constructor", 1)'), /a.webp/);
});
