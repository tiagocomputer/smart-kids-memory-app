/* ============================================
   Memória Mágica — lógica do jogo
   ============================================ */

// ---------- Dados do jogo ----------

const THEMES = {
  animais: ['🐶', '🐱', '🦁', '🐼', '🦊', '🐸', '🐵', '🐰', '🐯', '🦒', '🐘', '🐷'],
  frutas:  ['🍎', '🍌', '🍇', '🍓', '🍉', '🍍', '🥝', '🍑', '🍒', '🥭', '🍋', '🍊'],
  espaco:  ['🚀', '🌟', '🪐', '👽', '🛸', '🌙', '☀️', '🛰️', '🌍', '🌈', '☄️', '🔭'],
  oceano:  ['🐠', '🐳', '🦈', '🐙', '🦀', '🐬', '🐢', '🦞', '🐡', '🦑', '⛵', '🐚'],
};

const LEVELS = {
  facil:   { pairs: 6,  cols: 3, bonus: 5,  label: 'Fácil' },
  medio:   { pairs: 8,  cols: 4, bonus: 10, label: 'Médio' },
  dificil: { pairs: 10, cols: 5, bonus: 20, label: 'Difícil' },
};

const AVATARS = ['🦁', '🐸', '🐙', '🦄'];
const PLAYER_NAMES = ['Leão', 'Sapinho', 'Polvo', 'Unicórnio'];

// Figurinhas colecionáveis do álbum (ganhas ao terminar partidas)
const STICKERS = [
  { id: 'dino',     emoji: '🦕', name: 'Dino' },
  { id: 'arcoiris', emoji: '🌈', name: 'Arco-íris' },
  { id: 'robo',     emoji: '🤖', name: 'Robô' },
  { id: 'sereia',   emoji: '🧜‍♀️', name: 'Sereia' },
  { id: 'dragao',   emoji: '🐉', name: 'Dragão' },
  { id: 'fada',     emoji: '🧚', name: 'Fada' },
  { id: 'pirata',   emoji: '🏴‍☠️', name: 'Pirata' },
  { id: 'castelo',  emoji: '🏰', name: 'Castelo' },
  { id: 'foguete',  emoji: '🚀', name: 'Foguete' },
  { id: 'panda',    emoji: '🐼', name: 'Panda' },
  { id: 'sorvete',  emoji: '🍦', name: 'Sorvete' },
  { id: 'estrela',  emoji: '🌟', name: 'Estrela' },
  { id: 'coroa',    emoji: '👑', name: 'Coroa' },
  { id: 'magico',   emoji: '🎩', name: 'Mágico' },
  { id: 'gatinho',  emoji: '😺', name: 'Gatinho' },
  { id: 'pinguim',  emoji: '🐧', name: 'Pinguim' },
  { id: 'borboleta',emoji: '🦋', name: 'Borboleta' },
  { id: 'tartaruga',emoji: '🐢', name: 'Tartaruga' },
  { id: 'doce',     emoji: '🍭', name: 'Pirulito' },
  { id: 'bolo',     emoji: '🎂', name: 'Bolo' },
  { id: 'guitarra', emoji: '🎸', name: 'Guitarra' },
  { id: 'futebol',  emoji: '⚽', name: 'Bola' },
  { id: 'diamante', emoji: '💎', name: 'Diamante' },
  { id: 'trofeu',   emoji: '🏆', name: 'Troféu' },
];

const ALL_STICKERS_BONUS = 25; // moedas extras quando o álbum já está completo

// ---------- Estado salvo no dispositivo ----------

const storage = {
  get coins() { return parseInt(localStorage.getItem('mm_coins') || '0', 10); },
  set coins(v) { localStorage.setItem('mm_coins', String(v)); },
  get stickers() {
    try { return JSON.parse(localStorage.getItem('mm_stickers') || '[]'); }
    catch { return []; }
  },
  set stickers(list) { localStorage.setItem('mm_stickers', JSON.stringify(list)); },
  get sound() { return localStorage.getItem('mm_sound') !== 'off'; },
  set sound(on) { localStorage.setItem('mm_sound', on ? 'on' : 'off'); },
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
    const t = c.currentTime + start;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(t);
    osc.stop(t + duration + 0.05);
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
        case 'win':
          [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.18));
          break;
      }
    } catch { /* áudio bloqueado pelo navegador — segue sem som */ }
  }

  return { play };
})();

// ---------- Elementos ----------

const $ = (sel) => document.querySelector(sel);
const screens = {
  home: $('#screen-home'),
  setup: $('#screen-setup'),
  game: $('#screen-game'),
  win: $('#screen-win'),
  album: $('#screen-album'),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
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

const game = {
  players: [],       // [{ name, avatar, pairs }]
  current: 0,
  deck: [],          // [{ emoji, matched }]
  flipped: [],       // índices das cartas viradas neste turno
  lock: false,
  moves: 0,
  matchedPairs: 0,
  totalPairs: 0,
};

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

  game.players = Array.from({ length: config.players }, (_, i) => ({
    name: PLAYER_NAMES[i],
    avatar: AVATARS[i],
    pairs: 0,
  }));
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
    el.setAttribute('aria-label', 'Carta virada para baixo');
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
    // Modo solo: mostra o progresso de pares em vez de placar de disputa
    sb.innerHTML = `
      <div class="player-tag turn">
        <span class="avatar">${game.players[0].avatar}</span>
        Pares: <span class="score">${game.matchedPairs}/${game.totalPairs}</span>
      </div>`;
    return;
  }
  sb.innerHTML = game.players
    .map(
      (p, i) => `
      <div class="player-tag ${i === game.current ? 'turn' : ''}">
        <span class="avatar">${p.avatar}</span>${p.name}
        <span class="score">${p.pairs}</span>
      </div>`
    )
    .join('');
}

function updateMoves() {
  $('#moves-label').textContent = `Jogadas: ${game.moves}`;
}

function flipCard(idx, el) {
  if (game.lock) return;
  if (game.deck[idx].matched) return;
  if (game.flipped.includes(idx)) return;

  sound.play('flip');
  el.classList.add('flipped');
  game.flipped.push(idx);

  if (game.flipped.length < 2) return;

  // Duas cartas viradas: avalia
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
      renderScoreboard(); // acertou: continua jogando
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
        game.current = (game.current + 1) % game.players.length; // errou: passa a vez
        renderScoreboard();
      }, 600);
    }, 700);
  }
}

// ---------- Fim de jogo e recompensas ----------

function endGame() {
  const level = LEVELS[config.level];

  // Moedas: 2 por par encontrado + bônus do nível
  const coinsEarned = game.totalPairs * 2 + level.bonus;
  storage.coins += coinsEarned;

  // Figurinha surpresa: uma aleatória que ainda não tem no álbum
  const owned = storage.stickers;
  const missing = STICKERS.filter((s) => !owned.includes(s.id));
  let newSticker = null;
  if (missing.length > 0) {
    newSticker = missing[Math.floor(Math.random() * missing.length)];
    storage.stickers = [...owned, newSticker.id];
  } else {
    storage.coins += ALL_STICKERS_BONUS; // álbum completo: bônus em moedas
  }
  updateCoinChip();

  // Título: vencedor (multi) ou parabéns (solo)
  const winTitle = $('#win-title');
  const winSubtitle = $('#win-subtitle');
  const starsEl = $('#win-stars');

  if (game.players.length > 1) {
    const best = Math.max(...game.players.map((p) => p.pairs));
    const winners = game.players.filter((p) => p.pairs === best);
    if (winners.length === 1) {
      winTitle.textContent = `${winners[0].avatar} ${winners[0].name} venceu!`;
    } else {
      winTitle.textContent = `Empate! ${winners.map((w) => w.avatar).join(' ')}`;
    }
    winSubtitle.textContent = game.players
      .map((p) => `${p.avatar} ${p.pairs}`)
      .join('  ·  ');
    starsEl.innerHTML = '';
  } else {
    winTitle.textContent = 'Parabéns! 🎉';
    winSubtitle.textContent = `Você encontrou todos os pares em ${game.moves} jogadas!`;
    // Estrelas pela eficiência: menos jogadas = mais estrelas
    const ratio = game.moves / game.totalPairs;
    const stars = ratio <= 1.7 ? 3 : ratio <= 2.6 ? 2 : 1;
    starsEl.innerHTML = [1, 2, 3]
      .map((n) => `<span class="${n <= stars ? '' : 'dim'}">⭐</span>`)
      .join('');
  }

  // Caixas de recompensa
  $('#coins-earned').textContent = `+${coinsEarned}`;
  if (newSticker) {
    $('#sticker-earned').textContent = newSticker.emoji;
    $('#sticker-name').textContent = `Figurinha: ${newSticker.name}!`;
  } else {
    $('#sticker-earned').textContent = '🪙';
    $('#sticker-name').textContent = `Álbum completo! +${ALL_STICKERS_BONUS} moedas`;
  }

  showScreen('win');
  sound.play('win');
  setTimeout(() => sound.play('coin'), 900);
  launchConfetti();
}

// ---------- Álbum ----------

function renderAlbum(highlightId = null) {
  const owned = storage.stickers;
  $('#album-progress').textContent = `${owned.length} de ${STICKERS.length} figurinhas coletadas`;
  $('#album-grid').innerHTML = STICKERS.map((s) => {
    const has = owned.includes(s.id);
    const isNew = s.id === highlightId;
    return `
      <div class="sticker ${has ? '' : 'locked'} ${isNew ? 'new' : ''}">
        <span class="s-emoji">${has ? s.emoji : '❔'}</span>
        <span class="s-name">${has ? s.name : '???'}</span>
      </div>`;
  }).join('');
}

// ---------- Confete ----------

function launchConfetti() {
  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#fbbf24', '#f472b6', '#34d399', '#60a5fa', '#fb923c', '#a78bfa'];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.5,
    w: 8 + Math.random() * 8,
    h: 6 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 2 + Math.random() * 3.5,
    drift: (Math.random() - 0.5) * 2,
    rot: Math.random() * Math.PI,
    rotSpeed: (Math.random() - 0.5) * 0.2,
  }));

  const start = performance.now();
  function frame(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      p.y += p.speed;
      p.x += p.drift;
      p.rot += p.rotSpeed;
      if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (now - start < 5000 && screens.win.classList.contains('active')) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(frame);
}

// ---------- Topo: moedas e som ----------

function updateCoinChip() {
  $('#coin-count').textContent = storage.coins;
}

function updateSoundButton() {
  $('#btn-sound').textContent = storage.sound ? '🔊' : '🔇';
}

// ---------- Navegação ----------

$('#btn-go-setup').addEventListener('click', () => { sound.play('click'); showScreen('setup'); });
$('#btn-go-album').addEventListener('click', () => { sound.play('click'); renderAlbum(); showScreen('album'); });
$('#btn-start').addEventListener('click', () => { sound.play('click'); startGame(); });
$('#btn-restart').addEventListener('click', () => { sound.play('click'); startGame(); });
$('#btn-play-again').addEventListener('click', () => { sound.play('click'); showScreen('setup'); });
$('#btn-win-album').addEventListener('click', () => {
  sound.play('click');
  const last = storage.stickers[storage.stickers.length - 1] || null;
  renderAlbum(last);
  showScreen('album');
});
$('#btn-album-play').addEventListener('click', () => { sound.play('click'); showScreen('setup'); });
$('#btn-home').addEventListener('click', () => { sound.play('click'); showScreen('home'); });
$('#btn-sound').addEventListener('click', () => {
  storage.sound = !storage.sound;
  updateSoundButton();
  sound.play('click');
});

// ---------- Início ----------

updateCoinChip();
updateSoundButton();
