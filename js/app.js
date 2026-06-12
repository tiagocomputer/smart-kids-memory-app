/* ============================================================
   Memória Mágica — lógica do jogo
   ============================================================ */

// ---------- Traduções (PT / EN / FR) ----------

const I18N = {
  pt: {
    appName1: 'Memória', appName2: 'Mágica',
    subtitle: 'Encontre os pares, ganhe moedas e colecione figurinhas!',
    owlGreeting: 'Olá! Vamos brincar?',
    play: 'Jogar', album: 'Álbum de Figurinhas',
    setupTitle: 'Preparar Jogo 🎮',
    qPlayers: 'Quantos jogadores?', qTheme: 'Escolha o tema', qLevel: 'Escolha o nível',
    themeAnimais: 'Animais', themeFrutas: 'Frutas', themeEspaco: 'Espaço', themeOceano: 'Oceano',
    levelFacil: 'Fácil', levelMedio: 'Médio', levelDificil: 'Difícil',
    pairs: 'pares', start: 'Começar!', restart: 'Recomeçar',
    moves: 'Jogadas: {n}', pairsLabel: 'Pares:',
    congrats: 'Parabéns! 🎉',
    completedMsg: 'Você completou o nível e ganhou uma figurinha nova!',
    soloDone: 'Você encontrou todos os pares em {n} jogadas!',
    coins: 'Moedas', giftTap: 'Toque para abrir!', newSticker: 'Figurinha nova:',
    bonusLabel: 'Bônus do álbum!', albumCompleteMsg: 'Álbum completo! +{n} moedas',
    playAgain: 'Jogar de novo', seeAlbum: 'Ver Álbum',
    winnerWon: '{name} venceu!', tie: 'Empate!',
    albumTitle: 'Álbum de Figurinhas 📒',
    albumProgress: '{a} de {b} figurinhas coletadas', albumPlay: 'Jogar para ganhar mais!',
    catAnimais: 'Animais', catMar: 'Animais Marinhos', catComida: 'Comida', catFantasia: 'Fantasia', catDiversao: 'Diversão',
    p1: 'Leão', p2: 'Sapinho', p3: 'Polvo', p4: 'Unicórnio',
    home: 'Início', language: 'Idioma', theme: 'Tema', sound: 'Som',
    sticker: {
      dino:'Dino', panda:'Panda', gato:'Gatinho', pinguim:'Pinguim', tartaruga:'Tartaruga', leao:'Leão', raposa:'Raposa', coala:'Coala',
      polvo:'Polvo', baleia:'Baleia', tubarao:'Tubarão', golfinho:'Golfinho', peixe:'Peixinho', caranguejo:'Caranguejo', baiacu:'Baiacu', concha:'Concha',
      sorvete:'Sorvete', bolo:'Bolo', pizza:'Pizza', hamburguer:'Hambúrguer', pirulito:'Pirulito', donut:'Rosquinha', morango:'Morango', cupcake:'Cupcake',
      unicornio:'Unicórnio', dragao:'Dragão', sereia:'Sereia', fada:'Fada', robo:'Robô', mago:'Mago', castelo:'Castelo', arcoiris:'Arco-íris',
      bola:'Bola', guitarra:'Guitarra', balao:'Balão', pipa:'Pipa', jogo:'Videogame', circo:'Circo', medalha:'Medalha', coroa:'Coroa',
    },
  },
  en: {
    appName1: 'Magic', appName2: 'Memory',
    subtitle: 'Match the pairs, earn coins and collect stickers!',
    owlGreeting: "Hi! Let's play?",
    play: 'Play', album: 'Sticker Album',
    setupTitle: 'Set Up Game 🎮',
    qPlayers: 'How many players?', qTheme: 'Choose the theme', qLevel: 'Choose the level',
    themeAnimais: 'Animals', themeFrutas: 'Fruits', themeEspaco: 'Space', themeOceano: 'Ocean',
    levelFacil: 'Easy', levelMedio: 'Medium', levelDificil: 'Hard',
    pairs: 'pairs', start: 'Start!', restart: 'Restart',
    moves: 'Moves: {n}', pairsLabel: 'Pairs:',
    congrats: 'Congratulations! 🎉',
    completedMsg: 'You completed the level and won a brand new sticker!',
    soloDone: 'You matched all pairs in {n} moves!',
    coins: 'Coins', giftTap: 'Tap to open!', newSticker: 'New sticker:',
    bonusLabel: 'Album bonus!', albumCompleteMsg: 'Album complete! +{n} coins',
    playAgain: 'Play again', seeAlbum: 'See Album',
    winnerWon: '{name} wins!', tie: 'It\'s a tie!',
    albumTitle: 'Sticker Album 📒',
    albumProgress: '{a} of {b} stickers collected', albumPlay: 'Play to win more!',
    catAnimais: 'Animals', catMar: 'Sea Animals', catComida: 'Food', catFantasia: 'Fantasy', catDiversao: 'Fun',
    p1: 'Lion', p2: 'Froggy', p3: 'Octopus', p4: 'Unicorn',
    home: 'Home', language: 'Language', theme: 'Theme', sound: 'Sound',
    sticker: {
      dino:'Dino', panda:'Panda', gato:'Kitty', pinguim:'Penguin', tartaruga:'Turtle', leao:'Lion', raposa:'Fox', coala:'Koala',
      polvo:'Octopus', baleia:'Whale', tubarao:'Shark', golfinho:'Dolphin', peixe:'Fish', caranguejo:'Crab', baiacu:'Pufferfish', concha:'Shell',
      sorvete:'Ice Cream', bolo:'Cake', pizza:'Pizza', hamburguer:'Burger', pirulito:'Lollipop', donut:'Donut', morango:'Strawberry', cupcake:'Cupcake',
      unicornio:'Unicorn', dragao:'Dragon', sereia:'Mermaid', fada:'Fairy', robo:'Robot', mago:'Wizard', castelo:'Castle', arcoiris:'Rainbow',
      bola:'Ball', guitarra:'Guitar', balao:'Balloon', pipa:'Kite', jogo:'Game', circo:'Circus', medalha:'Medal', coroa:'Crown',
    },
  },
  fr: {
    appName1: 'Mémoire', appName2: 'Magique',
    subtitle: 'Trouve les paires, gagne des pièces et collectionne des autocollants!',
    owlGreeting: 'Salut! On joue?',
    play: 'Jouer', album: "Album d'autocollants",
    setupTitle: 'Préparer le jeu 🎮',
    qPlayers: 'Combien de joueurs?', qTheme: 'Choisis le thème', qLevel: 'Choisis le niveau',
    themeAnimais: 'Animaux', themeFrutas: 'Fruits', themeEspaco: 'Espace', themeOceano: 'Océan',
    levelFacil: 'Facile', levelMedio: 'Moyen', levelDificil: 'Difficile',
    pairs: 'paires', start: 'Commencer!', restart: 'Recommencer',
    moves: 'Coups: {n}', pairsLabel: 'Paires:',
    congrats: 'Bravo! 🎉',
    completedMsg: 'Tu as terminé le niveau et gagné un nouvel autocollant!',
    soloDone: 'Tu as trouvé toutes les paires en {n} coups!',
    coins: 'Pièces', giftTap: 'Touche pour ouvrir!', newSticker: 'Nouvel autocollant:',
    bonusLabel: "Bonus d'album!", albumCompleteMsg: 'Album complet! +{n} pièces',
    playAgain: 'Rejouer', seeAlbum: "Voir l'album",
    winnerWon: '{name} gagne!', tie: 'Égalité!',
    albumTitle: "Album d'autocollants 📒",
    albumProgress: '{a} sur {b} autocollants collectés', albumPlay: 'Joue pour en gagner plus!',
    catAnimais: 'Animaux', catMar: 'Animaux Marins', catComida: 'Nourriture', catFantasia: 'Fantaisie', catDiversao: 'Amusement',
    p1: 'Lion', p2: 'Grenouille', p3: 'Pieuvre', p4: 'Licorne',
    home: 'Accueil', language: 'Langue', theme: 'Thème', sound: 'Son',
    sticker: {
      dino:'Dino', panda:'Panda', gato:'Chaton', pinguim:'Pingouin', tartaruga:'Tortue', leao:'Lion', raposa:'Renard', coala:'Koala',
      polvo:'Pieuvre', baleia:'Baleine', tubarao:'Requin', golfinho:'Dauphin', peixe:'Poisson', caranguejo:'Crabe', baiacu:'Poisson-globe', concha:'Coquillage',
      sorvete:'Glace', bolo:'Gâteau', pizza:'Pizza', hamburguer:'Burger', pirulito:'Sucette', donut:'Beignet', morango:'Fraise', cupcake:'Cupcake',
      unicornio:'Licorne', dragao:'Dragon', sereia:'Sirène', fada:'Fée', robo:'Robot', mago:'Magicien', castelo:'Château', arcoiris:'Arc-en-ciel',
      bola:'Ballon', guitarra:'Guitare', balao:'Ballon', pipa:'Cerf-volant', jogo:'Jeu', circo:'Cirque', medalha:'Médaille', coroa:'Couronne',
    },
  },
};

let lang = localStorage.getItem('mm_lang');
if (!I18N[lang]) {
  const nav = (navigator.language || 'pt').slice(0, 2);
  lang = I18N[nav] ? nav : 'pt';
}

function t(key, vars) {
  let s = I18N[lang][key];
  if (s == null) s = I18N.pt[key] ?? key;
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
}
function tSticker(id) { return (I18N[lang].sticker[id] || I18N.pt.sticker[id] || id); }

// ---------- Dados do jogo ----------

const THEMES = {
  animais: ['🐶', '🐱', '🦁', '🐼', '🦊', '🐸', '🐵', '🐰', '🐯', '🦒', '🐘', '🐷'],
  frutas:  ['🍎', '🍌', '🍇', '🍓', '🍉', '🍍', '🥝', '🍑', '🍒', '🥭', '🍋', '🍊'],
  espaco:  ['🚀', '🌟', '🪐', '👽', '🛸', '🌙', '☀️', '🛰️', '🌍', '🌈', '☄️', '🔭'],
  oceano:  ['🐠', '🐳', '🦈', '🐙', '🦀', '🐬', '🐢', '🦞', '🐡', '🦑', '⛵', '🐚'],
};

const LEVELS = {
  facil:   { pairs: 6,  cols: 3, bonus: 5,  key: 'levelFacil' },
  medio:   { pairs: 8,  cols: 4, bonus: 10, key: 'levelMedio' },
  dificil: { pairs: 10, cols: 5, bonus: 20, key: 'levelDificil' },
};

const AVATARS = ['🦁', '🐸', '🐙', '🦄'];
const PLAYER_KEYS = ['p1', 'p2', 'p3', 'p4'];

// Figurinhas colecionáveis, organizadas por categoria
const STICKERS = [
  // Animais
  { id:'dino', emoji:'🦕', cat:'animais' }, { id:'panda', emoji:'🐼', cat:'animais' },
  { id:'gato', emoji:'😺', cat:'animais' }, { id:'pinguim', emoji:'🐧', cat:'animais' },
  { id:'tartaruga', emoji:'🐢', cat:'animais' }, { id:'leao', emoji:'🦁', cat:'animais' },
  { id:'raposa', emoji:'🦊', cat:'animais' }, { id:'coala', emoji:'🐨', cat:'animais' },
  // Animais marinhos
  { id:'polvo', emoji:'🐙', cat:'mar' }, { id:'baleia', emoji:'🐳', cat:'mar' },
  { id:'tubarao', emoji:'🦈', cat:'mar' }, { id:'golfinho', emoji:'🐬', cat:'mar' },
  { id:'peixe', emoji:'🐠', cat:'mar' }, { id:'caranguejo', emoji:'🦀', cat:'mar' },
  { id:'baiacu', emoji:'🐡', cat:'mar' }, { id:'concha', emoji:'🐚', cat:'mar' },
  // Comida
  { id:'sorvete', emoji:'🍦', cat:'comida' }, { id:'bolo', emoji:'🎂', cat:'comida' },
  { id:'pizza', emoji:'🍕', cat:'comida' }, { id:'hamburguer', emoji:'🍔', cat:'comida' },
  { id:'pirulito', emoji:'🍭', cat:'comida' }, { id:'donut', emoji:'🍩', cat:'comida' },
  { id:'morango', emoji:'🍓', cat:'comida' }, { id:'cupcake', emoji:'🧁', cat:'comida' },
  // Fantasia
  { id:'unicornio', emoji:'🦄', cat:'fantasia' }, { id:'dragao', emoji:'🐉', cat:'fantasia' },
  { id:'sereia', emoji:'🧜‍♀️', cat:'fantasia' }, { id:'fada', emoji:'🧚', cat:'fantasia' },
  { id:'robo', emoji:'🤖', cat:'fantasia' }, { id:'mago', emoji:'🎩', cat:'fantasia' },
  { id:'castelo', emoji:'🏰', cat:'fantasia' }, { id:'arcoiris', emoji:'🌈', cat:'fantasia' },
  // Diversão
  { id:'bola', emoji:'⚽', cat:'diversao' }, { id:'guitarra', emoji:'🎸', cat:'diversao' },
  { id:'balao', emoji:'🎈', cat:'diversao' }, { id:'pipa', emoji:'🪁', cat:'diversao' },
  { id:'jogo', emoji:'🎮', cat:'diversao' }, { id:'circo', emoji:'🎪', cat:'diversao' },
  { id:'medalha', emoji:'🏅', cat:'diversao' }, { id:'coroa', emoji:'👑', cat:'diversao' },
];

const CATEGORIES = [
  { id: 'animais', key: 'catAnimais', emoji: '🐾' },
  { id: 'mar', key: 'catMar', emoji: '🌊' },
  { id: 'comida', key: 'catComida', emoji: '🍔' },
  { id: 'fantasia', key: 'catFantasia', emoji: '🦄' },
  { id: 'diversao', key: 'catDiversao', emoji: '🎉' },
];

const ALL_STICKERS_BONUS = 25;

// ---------- Estado salvo no dispositivo ----------

const storage = {
  get coins() { return parseInt(localStorage.getItem('mm_coins') || '0', 10); },
  set coins(v) { localStorage.setItem('mm_coins', String(v)); },
  get stickers() { try { return JSON.parse(localStorage.getItem('mm_stickers') || '[]'); } catch { return []; } },
  set stickers(list) { localStorage.setItem('mm_stickers', JSON.stringify(list)); },
  get sound() { return localStorage.getItem('mm_sound') !== 'off'; },
  set sound(on) { localStorage.setItem('mm_sound', on ? 'on' : 'off'); },
  get theme() { return localStorage.getItem('mm_theme') || 'dark'; },
  set theme(v) { localStorage.setItem('mm_theme', v); },
};

// ---------- Sons (Web Audio, sem arquivos) ----------

const sound = (() => {
  let ctx = null;
  function ensureCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, start, duration, type = 'sine', volume = 0.18) {
    const c = ensureCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const t0 = c.currentTime + start;
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(volume, t0 + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }
  function play(name) {
    if (!storage.sound) return;
    try {
      switch (name) {
        case 'flip':  tone(420, 0, 0.1, 'triangle'); break;
        case 'match': tone(523, 0, 0.12); tone(659, 0.1, 0.12); tone(784, 0.2, 0.2); break;
        case 'miss':  tone(220, 0, 0.18, 'sawtooth', 0.08); tone(180, 0.12, 0.22, 'sawtooth', 0.08); break;
        case 'click': tone(600, 0, 0.06, 'triangle', 0.1); break;
        case 'coin':  tone(880, 0, 0.08, 'square', 0.08); tone(1320, 0.07, 0.14, 'square', 0.08); break;
        case 'reveal': [659, 880, 1047, 1319].forEach((f, i) => tone(f, i * 0.09, 0.16)); break;
        case 'win':   [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.18)); break;
      }
    } catch { /* áudio bloqueado — segue sem som */ }
  }
  return { play };
})();

// ---------- Elementos ----------

const $ = (sel) => document.querySelector(sel);
const screens = {
  home: $('#screen-home'), setup: $('#screen-setup'), game: $('#screen-game'),
  win: $('#screen-win'), album: $('#screen-album'),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}
function currentScreen() {
  return Object.keys(screens).find((k) => screens[k].classList.contains('active'));
}

// ---------- Idioma e tema ----------

function applyI18n() {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('#lang-menu button').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
}

function setLang(next) {
  lang = next;
  localStorage.setItem('mm_lang', lang);
  applyI18n();
  // Atualiza conteúdos gerados por JS na tela atual
  const cur = currentScreen();
  if (cur === 'game') { renderScoreboard(); updateMoves(); }
  if (cur === 'album') renderAlbum();
  if (cur === 'win') renderWinTexts();
}

function applyTheme() {
  const th = storage.theme;
  document.documentElement.dataset.theme = th;
  $('#btn-theme').textContent = th === 'light' ? '☀️' : '🌙';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = th === 'light' ? '#bae6fd' : '#4c1d95';
}
function toggleTheme() {
  storage.theme = storage.theme === 'light' ? 'dark' : 'light';
  applyTheme();
}

// ---------- Configuração escolhida ----------

const config = { players: 1, theme: 'animais', level: 'facil' };

function bindOptionRow(rowId, dataKey, onPick) {
  const row = document.getElementById(rowId);
  row.addEventListener('click', (e) => {
    const btn = e.target.closest('.opt');
    if (!btn) return;
    row.querySelectorAll('.opt').forEach((o) => o.classList.remove('selected'));
    btn.classList.add('selected');
    sound.play('click');
    onPick(btn.dataset[dataKey]);
  });
}
bindOptionRow('player-options', 'players', (v) => (config.players = parseInt(v, 10)));
bindOptionRow('theme-options', 'theme', (v) => (config.theme = v));
bindOptionRow('level-options', 'level', (v) => (config.level = v));

// ---------- Estado da partida ----------

const game = { players: [], current: 0, deck: [], flipped: [], lock: false, moves: 0, matchedPairs: 0, totalPairs: 0 };
let lastWin = null; // guarda dados da vitória para re-render ao trocar idioma

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startGame() {
  const level = LEVELS[config.level];
  const emojis = shuffle(THEMES[config.theme]).slice(0, level.pairs);
  game.players = Array.from({ length: config.players }, (_, i) => ({ key: PLAYER_KEYS[i], avatar: AVATARS[i], pairs: 0 }));
  game.current = 0;
  game.deck = shuffle([...emojis, ...emojis]).map((emoji) => ({ emoji, matched: false }));
  game.flipped = [];
  game.lock = false;
  game.moves = 0;
  game.matchedPairs = 0;
  game.totalPairs = level.pairs;
  renderBoard(level);
  renderScoreboard();
  updateMoves();
  showScreen('game');
}

function renderBoard(level) {
  const board = $('#board');
  board.dataset.cols = level.cols;
  board.innerHTML = '';
  game.deck.forEach((card, idx) => {
    const el = document.createElement('button');
    el.className = 'card';
    el.dataset.index = idx;
    el.setAttribute('aria-label', '?');
    el.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-back">❓</div>
        <div class="card-face card-front">${card.emoji}</div>
      </div>`;
    el.addEventListener('click', () => flipCard(idx, el));
    board.appendChild(el);
  });
}

function renderScoreboard() {
  const sb = $('#scoreboard');
  if (game.players.length === 1) {
    sb.innerHTML = `
      <div class="player-tag turn">
        <span class="avatar">${game.players[0].avatar}</span>
        ${t('pairsLabel')} <span class="score">${game.matchedPairs}/${game.totalPairs}</span>
      </div>`;
    return;
  }
  sb.innerHTML = game.players.map((p, i) => `
      <div class="player-tag ${i === game.current ? 'turn' : ''}">
        <span class="avatar">${p.avatar}</span>${t(p.key)}
        <span class="score">${p.pairs}</span>
      </div>`).join('');
}

function updateMoves() { $('#moves-label').textContent = t('moves', { n: game.moves }); }

function flipCard(idx, el) {
  if (game.lock || game.deck[idx].matched || game.flipped.includes(idx)) return;
  sound.play('flip');
  el.classList.add('flipped');
  game.flipped.push(idx);
  if (game.flipped.length < 2) return;

  game.lock = true;
  game.moves++;
  updateMoves();

  const [a, b] = game.flipped;
  const cards = $('#board').children;

  if (game.deck[a].emoji === game.deck[b].emoji) {
    game.deck[a].matched = true;
    game.deck[b].matched = true;
    game.matchedPairs++;
    game.players[game.current].pairs++;
    setTimeout(() => {
      sound.play('match');
      cards[a].classList.add('matched');
      cards[b].classList.add('matched');
      game.flipped = [];
      game.lock = false;
      renderScoreboard();
      if (game.matchedPairs === game.totalPairs) setTimeout(endGame, 700);
    }, 450);
  } else {
    setTimeout(() => {
      sound.play('miss');
      cards[a].classList.add('shake');
      cards[b].classList.add('shake');
      setTimeout(() => {
        cards[a].classList.remove('flipped', 'shake');
        cards[b].classList.remove('flipped', 'shake');
        game.flipped = [];
        game.lock = false;
        game.current = (game.current + 1) % game.players.length;
        renderScoreboard();
      }, 600);
    }, 700);
  }
}

// ---------- Fim de jogo e recompensas ----------

function endGame() {
  const level = LEVELS[config.level];
  const coinsEarned = game.totalPairs * 2 + level.bonus;
  storage.coins += coinsEarned;

  // Sorteia uma figurinha que ainda não foi coletada
  const owned = storage.stickers;
  const missing = STICKERS.filter((s) => !owned.includes(s.id));
  let newSticker = null;
  let bonusCoins = 0;
  if (missing.length > 0) {
    newSticker = missing[Math.floor(Math.random() * missing.length)];
    storage.stickers = [...owned, newSticker.id];
  } else {
    bonusCoins = ALL_STICKERS_BONUS;
    storage.coins += bonusCoins;
  }
  updateCoinChip();

  // Resultado para multiplayer
  let result = null;
  if (game.players.length > 1) {
    const best = Math.max(...game.players.map((p) => p.pairs));
    const winners = game.players.filter((p) => p.pairs === best);
    result = {
      tie: winners.length > 1,
      winnerKey: winners[0].key,
      winnerAvatar: winners[0].avatar,
      scores: game.players.map((p) => ({ avatar: p.avatar, pairs: p.pairs })),
    };
  }

  lastWin = {
    coinsEarned, moves: game.moves, totalPairs: game.totalPairs,
    stickerId: newSticker ? newSticker.id : null,
    stickerEmoji: newSticker ? newSticker.emoji : null,
    bonusCoins, result, revealed: false,
  };

  prepareGift();
  renderWinTexts();
  showScreen('win');
  sound.play('win');
  setTimeout(() => sound.play('coin'), 700);
  launchConfetti(4500);
}

function renderWinTexts() {
  if (!lastWin) return;
  const w = lastWin;
  const title = $('#win-title');
  const subtitle = $('#win-subtitle');
  const starsEl = $('#win-stars');

  if (w.result) {
    title.textContent = w.result.tie ? t('tie') : t('winnerWon', { name: w.result.winnerAvatar + ' ' + t(w.result.winnerKey) });
    subtitle.textContent = w.result.scores.map((s) => `${s.avatar} ${s.pairs}`).join('  ·  ');
    starsEl.innerHTML = '';
  } else {
    title.textContent = t('congrats');
    subtitle.textContent = t('completedMsg');
    const ratio = w.moves / w.totalPairs;
    const stars = ratio <= 1.7 ? 3 : ratio <= 2.6 ? 2 : 1;
    starsEl.innerHTML = [1, 2, 3].map((n) => `<span class="${n <= stars ? '' : 'dim'}">⭐</span>`).join('');
  }

  $('#coins-earned').textContent = `+${w.coinsEarned}`;

  // Texto dentro da revelação (se já aberta, mantém)
  if (w.revealed) fillReveal();
}

function prepareGift() {
  const gift = $('#gift-box');
  const reveal = $('#sticker-reveal');
  gift.classList.remove('opening');
  gift.style.display = '';
  reveal.hidden = true;
  lastWin.revealed = false;
}

function fillReveal() {
  const w = lastWin;
  const label = $('#reveal-label');
  const emoji = $('#reveal-emoji');
  const name = $('#reveal-name');
  if (w.stickerId) {
    label.textContent = t('newSticker');
    emoji.textContent = w.stickerEmoji;
    name.textContent = tSticker(w.stickerId);
  } else {
    label.textContent = t('bonusLabel');
    emoji.textContent = '🪙';
    name.textContent = t('albumCompleteMsg', { n: w.bonusCoins });
  }
}

function openGift() {
  if (!lastWin || lastWin.revealed) return;
  lastWin.revealed = true;
  const gift = $('#gift-box');
  const reveal = $('#sticker-reveal');
  gift.classList.add('opening');
  sound.play('reveal');
  launchConfetti(2500);
  setTimeout(() => {
    gift.style.display = 'none';
    fillReveal();
    reveal.hidden = false;
    // reinicia a animação de entrada
    const em = $('#reveal-emoji');
    em.style.animation = 'none';
    void em.offsetWidth;
    em.style.animation = '';
  }, 360);
}

// ---------- Álbum ----------

function renderAlbum(highlightId = null) {
  const owned = storage.stickers;
  $('#album-progress').textContent = t('albumProgress', { a: owned.length, b: STICKERS.length });
  $('#album-bar-fill').style.width = `${(owned.length / STICKERS.length) * 100}%`;

  const content = $('#album-content');
  content.innerHTML = CATEGORIES.map((cat) => {
    const items = STICKERS.filter((s) => s.cat === cat.id);
    const have = items.filter((s) => owned.includes(s.id)).length;
    const grid = items.map((s) => {
      const has = owned.includes(s.id);
      const isNew = s.id === highlightId;
      return `
        <div class="sticker ${has ? '' : 'locked'} ${isNew ? 'new' : ''}">
          <span class="s-emoji">${has ? s.emoji : '❔'}</span>
          <span class="s-name">${has ? tSticker(s.id) : '???'}</span>
        </div>`;
    }).join('');
    return `
      <section class="album-cat">
        <h3 class="album-cat-title">${cat.emoji} ${t(cat.key)} <span class="cat-count">${have}/${items.length}</span></h3>
        <div class="album-grid">${grid}</div>
      </section>`;
  }).join('');
}

// ---------- Confete ----------

let confettiAnim = null;
function launchConfetti(durationMs = 4000) {
  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#fbbf24', '#f472b6', '#34d399', '#60a5fa', '#fb923c', '#a78bfa'];
  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.6,
    w: 8 + Math.random() * 8, h: 6 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 2 + Math.random() * 3.5, drift: (Math.random() - 0.5) * 2,
    rot: Math.random() * Math.PI, rotSpeed: (Math.random() - 0.5) * 0.2,
  }));
  const start = performance.now();
  if (confettiAnim) cancelAnimationFrame(confettiAnim);
  function frame(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      p.y += p.speed; p.x += p.drift; p.rot += p.rotSpeed;
      if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (now - start < durationMs && screens.win.classList.contains('active')) {
      confettiAnim = requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confettiAnim = null;
    }
  }
  confettiAnim = requestAnimationFrame(frame);
}

// ---------- Topo ----------

function updateCoinChip() { $('#coin-count').textContent = storage.coins; }
function updateSoundButton() { $('#btn-sound').textContent = storage.sound ? '🔊' : '🔇'; }

// ---------- Navegação ----------

$('#btn-go-setup').addEventListener('click', () => { sound.play('click'); showScreen('setup'); });
$('#btn-go-album').addEventListener('click', () => { sound.play('click'); renderAlbum(); showScreen('album'); });
$('#btn-start').addEventListener('click', () => { sound.play('click'); startGame(); });
$('#btn-restart').addEventListener('click', () => { sound.play('click'); startGame(); });
$('#btn-play-again').addEventListener('click', () => { sound.play('click'); showScreen('setup'); });
$('#btn-win-album').addEventListener('click', () => {
  sound.play('click');
  renderAlbum(lastWin && lastWin.stickerId);
  showScreen('album');
});
$('#btn-album-play').addEventListener('click', () => { sound.play('click'); showScreen('setup'); });
$('#btn-home').addEventListener('click', () => { sound.play('click'); showScreen('home'); });

$('#gift-box').addEventListener('click', openGift);

$('#btn-sound').addEventListener('click', () => { storage.sound = !storage.sound; updateSoundButton(); sound.play('click'); });
$('#btn-theme').addEventListener('click', () => { sound.play('click'); toggleTheme(); });

// Menu de idiomas
const langMenu = $('#lang-menu');
$('#btn-lang').addEventListener('click', (e) => { e.stopPropagation(); langMenu.hidden = !langMenu.hidden; });
langMenu.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-lang]');
  if (!b) return;
  setLang(b.dataset.lang);
  langMenu.hidden = true;
  sound.play('click');
});
document.addEventListener('click', () => { langMenu.hidden = true; });

// ---------- Início ----------

applyTheme();
applyI18n();
updateCoinChip();
updateSoundButton();
