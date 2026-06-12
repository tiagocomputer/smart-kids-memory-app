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
    profileTitle: 'Quem é você? 🙋', continueBtn: 'Continuar',
    nameNeeded: 'Escreva seu nome! ✏️',
    yourName: 'Seu nome', chooseAvatar: 'Escolha seu avatar',
    qPlayers: 'Quantos jogadores?', qTheme: 'Escolha a fase', qLevel: 'Escolha o nível',
    howToPlay2: 'Como jogar em 2?', sameDevice: 'Mesmo aparelho', viaQR: 'Outro celular (QR)',
    inviteTitle: 'Convide o Jogador 2 📱',
    inviteHint: 'Peça para o jogador 2 escanear este código com a câmera do celular',
    waitingPlayer: 'Esperando o jogador 2…', connecting: 'Conectando…',
    joinTitle: 'Entrar no jogo 🎮', joinBtn: 'Entrar!',
    connLost: 'A conexão caiu 😢', cancel: 'Cancelar', wellPlayed: 'Bem jogado!',
    themeAnimais: 'Animais', themeFrutas: 'Frutas', themeEspaco: 'Espaço', themeOceano: 'Oceano',
    themeDinos: 'Dinossauros', themeComida: 'Comida', themeBrinquedos: 'Brinquedos', themeHerois: 'Heróis',
    levelFacil: 'Fácil', levelMedio: 'Médio', levelDificil: 'Difícil',
    pairs: 'pares', start: 'Começar!', restart: 'Recomeçar',
    moves: 'Jogadas: {n}', pairsLabel: 'Pares:',
    congrats: 'Parabéns! 🎉',
    completedMsg: 'Você completou o nível e ganhou uma figurinha nova!',
    soloDone: 'Você encontrou todos os pares em {n} jogadas!',
    coins: 'Moedas', giftTap: 'Toque para abrir o pacotinho!', newSticker: 'Figurinha nova:',
    timeBonus: 'Bônus de tempo ⏱️ +{n}',
    bonusLabel: 'Bônus do álbum!', albumCompleteMsg: 'Álbum completo! +{n} moedas',
    playAgain: 'Jogar de novo', seeAlbum: 'Ver Álbum',
    winnerWon: '{name} venceu!', tie: 'Empate!',
    timeUpTitle: 'Tempo esgotado! ⏰', timeUpMsg: 'Quase lá! Respire fundo e tente de novo!',
    tryAgain: 'Tentar de novo',
    unlockMsg: 'Comprar a chave desta fase por {n} moedas?',
    unlockYes: 'Comprar a chave 🗝️', unlockNo: 'Agora não',
    needCoins: 'Faltam {n} moedas! Jogue mais para ganhar.',
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
    profileTitle: 'Who are you? 🙋', continueBtn: 'Continue',
    nameNeeded: 'Write your name! ✏️',
    yourName: 'Your name', chooseAvatar: 'Choose your avatar',
    qPlayers: 'How many players?', qTheme: 'Choose the stage', qLevel: 'Choose the level',
    howToPlay2: 'How to play with 2?', sameDevice: 'Same device', viaQR: 'Another phone (QR)',
    inviteTitle: 'Invite Player 2 📱',
    inviteHint: 'Ask player 2 to scan this code with their phone camera',
    waitingPlayer: 'Waiting for player 2…', connecting: 'Connecting…',
    joinTitle: 'Join the game 🎮', joinBtn: 'Join!',
    connLost: 'Connection lost 😢', cancel: 'Cancel', wellPlayed: 'Well played!',
    themeAnimais: 'Animals', themeFrutas: 'Fruits', themeEspaco: 'Space', themeOceano: 'Ocean',
    themeDinos: 'Dinosaurs', themeComida: 'Food', themeBrinquedos: 'Toys', themeHerois: 'Heroes',
    levelFacil: 'Easy', levelMedio: 'Medium', levelDificil: 'Hard',
    pairs: 'pairs', start: 'Start!', restart: 'Restart',
    moves: 'Moves: {n}', pairsLabel: 'Pairs:',
    congrats: 'Congratulations! 🎉',
    completedMsg: 'You completed the level and won a brand new sticker!',
    soloDone: 'You matched all pairs in {n} moves!',
    coins: 'Coins', giftTap: 'Tap to open the pack!', newSticker: 'New sticker:',
    timeBonus: 'Time bonus ⏱️ +{n}',
    bonusLabel: 'Album bonus!', albumCompleteMsg: 'Album complete! +{n} coins',
    playAgain: 'Play again', seeAlbum: 'See Album',
    winnerWon: '{name} wins!', tie: "It's a tie!",
    timeUpTitle: "Time's up! ⏰", timeUpMsg: 'So close! Take a breath and try again!',
    tryAgain: 'Try again',
    unlockMsg: 'Buy the key to this stage for {n} coins?',
    unlockYes: 'Buy the key 🗝️', unlockNo: 'Not now',
    needCoins: 'You need {n} more coins! Play to earn more.',
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
    profileTitle: 'Qui es-tu? 🙋', continueBtn: 'Continuer',
    nameNeeded: 'Écris ton prénom! ✏️',
    yourName: 'Ton prénom', chooseAvatar: 'Choisis ton avatar',
    qPlayers: 'Combien de joueurs?', qTheme: 'Choisis le niveau', qLevel: 'Choisis la difficulté',
    howToPlay2: 'Comment jouer à 2?', sameDevice: 'Même appareil', viaQR: 'Autre téléphone (QR)',
    inviteTitle: 'Invite le Joueur 2 📱',
    inviteHint: 'Demande au joueur 2 de scanner ce code avec son téléphone',
    waitingPlayer: 'En attente du joueur 2…', connecting: 'Connexion…',
    joinTitle: 'Rejoindre le jeu 🎮', joinBtn: 'Entrer!',
    connLost: 'Connexion perdue 😢', cancel: 'Annuler', wellPlayed: 'Bien joué!',
    themeAnimais: 'Animaux', themeFrutas: 'Fruits', themeEspaco: 'Espace', themeOceano: 'Océan',
    themeDinos: 'Dinosaures', themeComida: 'Nourriture', themeBrinquedos: 'Jouets', themeHerois: 'Héros',
    levelFacil: 'Facile', levelMedio: 'Moyen', levelDificil: 'Difficile',
    pairs: 'paires', start: 'Commencer!', restart: 'Recommencer',
    moves: 'Coups: {n}', pairsLabel: 'Paires:',
    congrats: 'Bravo! 🎉',
    completedMsg: 'Tu as terminé le niveau et gagné un nouvel autocollant!',
    soloDone: 'Tu as trouvé toutes les paires en {n} coups!',
    coins: 'Pièces', giftTap: 'Touche pour ouvrir le paquet!', newSticker: 'Nouvel autocollant:',
    timeBonus: 'Bonus de temps ⏱️ +{n}',
    bonusLabel: "Bonus d'album!", albumCompleteMsg: 'Album complet! +{n} pièces',
    playAgain: 'Rejouer', seeAlbum: "Voir l'album",
    winnerWon: '{name} gagne!', tie: 'Égalité!',
    timeUpTitle: 'Temps écoulé! ⏰', timeUpMsg: 'Presque! Respire et réessaie!',
    tryAgain: 'Réessayer',
    unlockMsg: 'Acheter la clé de ce niveau pour {n} pièces?',
    unlockYes: 'Acheter la clé 🗝️', unlockNo: 'Pas maintenant',
    needCoins: 'Il te manque {n} pièces! Joue pour en gagner plus.',
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

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ---------- Dados do jogo ----------

const THEMES = {
  animais:    ['🐶', '🐱', '🦁', '🐼', '🦊', '🐸', '🐵', '🐰', '🐯', '🦒', '🐘', '🐷'],
  frutas:     ['🍎', '🍌', '🍇', '🍓', '🍉', '🍍', '🥝', '🍑', '🍒', '🥭', '🍋', '🍊'],
  espaco:     ['🚀', '🌟', '🪐', '👽', '🛸', '🌙', '☀️', '🛰️', '🌍', '🌈', '☄️', '🔭'],
  oceano:     ['🐠', '🐳', '🦈', '🐙', '🦀', '🐬', '🐢', '🦞', '🐡', '🦑', '⛵', '🐚'],
  dinos:      ['🦕', '🦖', '🦴', '🥚', '🌋', '🌿', '🦎', '🐊', '🐉', '⛰️', '🐾', '🌴'],
  comida:     ['🍕', '🍔', '🍟', '🌭', '🍦', '🍩', '🎂', '🍪', '🥨', '🌮', '🍿', '🧁'],
  brinquedos: ['🧸', '🪀', '🎲', '🪁', '🚂', '🎠', '🤖', '🎯', '🪆', '🛴', '🎪', '🎨'],
  herois:     ['🦸‍♂️', '🦸‍♀️', '🦹‍♂️', '🕸️', '🦇', '⚡', '🛡️', '💥', '👊', '🧪', '🚨', '💪'],
};

// Fases: cost 0 = sempre aberta; cost > 0 = precisa comprar a chave com moedas
const THEME_LIST = [
  { id: 'animais',    icon: '🐶', key: 'themeAnimais',    cost: 0 },
  { id: 'frutas',     icon: '🍎', key: 'themeFrutas',     cost: 0 },
  { id: 'espaco',     icon: '🚀', key: 'themeEspaco',     cost: 0 },
  { id: 'oceano',     icon: '🐠', key: 'themeOceano',     cost: 0 },
  { id: 'dinos',      icon: '🦖', key: 'themeDinos',      cost: 30 },
  { id: 'comida',     icon: '🍕', key: 'themeComida',     cost: 50 },
  { id: 'brinquedos', icon: '🧸', key: 'themeBrinquedos', cost: 80 },
  { id: 'herois',     icon: '🦸', key: 'themeHerois',     cost: 120 },
];

const LEVELS = {
  facil:   { pairs: 8,  cols: 4, bonus: 5,  time: 100, key: 'levelFacil' },
  medio:   { pairs: 10, cols: 5, bonus: 10, time: 130, key: 'levelMedio' },
  dificil: { pairs: 12, cols: 6, bonus: 20, time: 160, key: 'levelDificil' },
};
const EXTRA_TIME_PER_PLAYER = 40; // segundos a mais por jogador adicional
const CONSOLATION_COINS = 3;      // moedas de consolação para quem perde no modo online

const AVATAR_CHOICES = ['🦁', '🐸', '🐙', '🦄', '🐯', '🐼', '🦊', '🤖'];
const PLAYER_KEYS = ['p1', 'p2', 'p3', 'p4'];

// Figurinhas colecionáveis, organizadas por categoria
const STICKERS = [
  { id:'dino', emoji:'🦕', cat:'animais' }, { id:'panda', emoji:'🐼', cat:'animais' },
  { id:'gato', emoji:'😺', cat:'animais' }, { id:'pinguim', emoji:'🐧', cat:'animais' },
  { id:'tartaruga', emoji:'🐢', cat:'animais' }, { id:'leao', emoji:'🦁', cat:'animais' },
  { id:'raposa', emoji:'🦊', cat:'animais' }, { id:'coala', emoji:'🐨', cat:'animais' },
  { id:'polvo', emoji:'🐙', cat:'mar' }, { id:'baleia', emoji:'🐳', cat:'mar' },
  { id:'tubarao', emoji:'🦈', cat:'mar' }, { id:'golfinho', emoji:'🐬', cat:'mar' },
  { id:'peixe', emoji:'🐠', cat:'mar' }, { id:'caranguejo', emoji:'🦀', cat:'mar' },
  { id:'baiacu', emoji:'🐡', cat:'mar' }, { id:'concha', emoji:'🐚', cat:'mar' },
  { id:'sorvete', emoji:'🍦', cat:'comida' }, { id:'bolo', emoji:'🎂', cat:'comida' },
  { id:'pizza', emoji:'🍕', cat:'comida' }, { id:'hamburguer', emoji:'🍔', cat:'comida' },
  { id:'pirulito', emoji:'🍭', cat:'comida' }, { id:'donut', emoji:'🍩', cat:'comida' },
  { id:'morango', emoji:'🍓', cat:'comida' }, { id:'cupcake', emoji:'🧁', cat:'comida' },
  { id:'unicornio', emoji:'🦄', cat:'fantasia' }, { id:'dragao', emoji:'🐉', cat:'fantasia' },
  { id:'sereia', emoji:'🧜‍♀️', cat:'fantasia' }, { id:'fada', emoji:'🧚', cat:'fantasia' },
  { id:'robo', emoji:'🤖', cat:'fantasia' }, { id:'mago', emoji:'🎩', cat:'fantasia' },
  { id:'castelo', emoji:'🏰', cat:'fantasia' }, { id:'arcoiris', emoji:'🌈', cat:'fantasia' },
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
  get unlocked() { try { return JSON.parse(localStorage.getItem('mm_unlocked') || '[]'); } catch { return []; } },
  set unlocked(list) { localStorage.setItem('mm_unlocked', JSON.stringify(list)); },
  get sound() { return localStorage.getItem('mm_sound') !== 'off'; },
  set sound(on) { localStorage.setItem('mm_sound', on ? 'on' : 'off'); },
  get theme() { return localStorage.getItem('mm_theme') || 'dark'; },
  set theme(v) { localStorage.setItem('mm_theme', v); },
  get name() { return (localStorage.getItem('mm_name') || '').slice(0, 12); },
  set name(v) { localStorage.setItem('mm_name', String(v).slice(0, 12)); },
  get avatar() {
    const a = localStorage.getItem('mm_avatar');
    return AVATAR_CHOICES.includes(a) ? a : AVATAR_CHOICES[0];
  },
  set avatar(v) { if (AVATAR_CHOICES.includes(v)) localStorage.setItem('mm_avatar', v); },
};

function isThemeUnlocked(id) {
  const th = THEME_LIST.find((x) => x.id === id);
  return !th || th.cost === 0 || storage.unlocked.includes(id);
}

// ---------- Sons (Web Audio, sem arquivos) ----------

const sound = (() => {
  let ctx = null;
  function ensureCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, start, duration, type = 'sine', volume = 0.18) {
    try {
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
    } catch { /* áudio bloqueado — segue sem som */ }
  }
  function play(name) {
    if (!storage.sound) return;
    switch (name) {
      case 'flip':  tone(420, 0, 0.1, 'triangle'); break;
      case 'match': tone(523, 0, 0.12); tone(659, 0.1, 0.12); tone(784, 0.2, 0.2); break;
      case 'miss':  tone(220, 0, 0.18, 'sawtooth', 0.08); tone(180, 0.12, 0.22, 'sawtooth', 0.08); break;
      case 'click': tone(600, 0, 0.06, 'triangle', 0.1); break;
      case 'coin':  tone(880, 0, 0.08, 'square', 0.08); tone(1320, 0.07, 0.14, 'square', 0.08); break;
      case 'tick':  tone(1000, 0, 0.05, 'square', 0.06); break;
      case 'timeup': [392, 330, 262, 196].forEach((f, i) => tone(f, i * 0.18, 0.22, 'sawtooth', 0.09)); break;
      case 'unlock': [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.08, 0.15)); break;
      case 'reveal': [659, 880, 1047, 1319].forEach((f, i) => tone(f, i * 0.09, 0.16)); break;
      case 'win':   [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.18)); break;
    }
  }
  return { play, tone };
})();

// ---------- Música de fundo ----------

const music = (() => {
  // Frequências das notas
  const C4=261.6, D4=293.7, E4=329.6, F4=349.2, G4=392, A4=440, B4=493.9,
        C5=523.3, D5=587.3, E5=659.3, G5=784, _=0;
  const SONGS = {
    // Tela principal: animada e convidativa
    home:    { tempo: 210, type: 'triangle', vol: 0.045,
               notes: [C5,_,G4,A4, B4,C5,D5,_, E5,D5,C5,B4, C5,_,G4,_] },
    // Fácil: melodia calminha e alegre
    facil:   { tempo: 300, type: 'triangle', vol: 0.045,
               notes: [C4,E4,G4,E4, F4,A4,C5,A4, G4,B4,D5,B4, C5,_,G4,_] },
    // Médio: mais animada
    medio:   { tempo: 230, type: 'triangle', vol: 0.045,
               notes: [E4,G4,A4,_, A4,C5,B4,_, G4,A4,B4,D5, C5,B4,A4,G4] },
    // Difícil: rápida e empolgante
    dificil: { tempo: 175, type: 'square', vol: 0.028,
               notes: [A4,A4,C5,A4, E5,_,D5,C5, A4,A4,C5,E5, G5,_,E5,_] },
  };
  let gen = 0, timer = null, current = null;
  function play(name) {
    if (current === name && timer) return; // já está tocando essa música
    stop();
    current = name;
    if (!storage.sound || !SONGS[name]) return;
    const song = SONGS[name];
    const myGen = ++gen;
    const step = song.tempo / 1000;
    const loop = () => {
      if (myGen !== gen || !storage.sound) return;
      song.notes.forEach((f, i) => { if (f) sound.tone(f, i * step, step * 0.85, song.type, song.vol); });
      timer = setTimeout(loop, song.notes.length * song.tempo);
    };
    loop();
  }
  function stop() { gen++; current = null; if (timer) { clearTimeout(timer); timer = null; } }
  return { play, stop };
})();

// ---------- Elementos e telas ----------

const $ = (sel) => document.querySelector(sel);
const screens = {
  home: $('#screen-home'), profile: $('#screen-profile'), setup: $('#screen-setup'),
  invite: $('#screen-invite'), join: $('#screen-join'), game: $('#screen-game'),
  timeup: $('#screen-timeup'), win: $('#screen-win'), album: $('#screen-album'),
};
const MENU_SCREENS = new Set(['home', 'profile', 'setup', 'album', 'invite', 'join']);

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'setup') renderProfileChip();
  if (MENU_SCREENS.has(name)) music.play('home');
}
function currentScreen() {
  return Object.keys(screens).find((k) => screens[k].classList.contains('active'));
}

let toastTimer = null;
function showToast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3500);
}

// ---------- Idioma e tema visual ----------

function applyI18n() {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('#lang-menu button').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
}

function setLang(next) {
  lang = next;
  localStorage.setItem('mm_lang', lang);
  applyI18n();
  renderThemeOptions();
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

// ---------- Perfil do jogador (nome + avatar) ----------

function renderAvatarPicker(id) {
  const row = document.getElementById(id);
  row.innerHTML = AVATAR_CHOICES.map((a) =>
    `<button class="opt avatar-opt ${a === storage.avatar ? 'selected' : ''}" data-avatar="${a}" aria-label="${a}">${a}</button>`
  ).join('');
}

function setupProfileControls() {
  const pickers = ['profile-avatar-options', 'join-avatar-options'];
  pickers.forEach((id) => {
    renderAvatarPicker(id);
    document.getElementById(id).addEventListener('click', (e) => {
      const b = e.target.closest('[data-avatar]');
      if (!b) return;
      storage.avatar = b.dataset.avatar;
      sound.play('click');
      pickers.forEach(renderAvatarPicker);
    });
  });
  const inputs = ['profile-name-input', 'join-name-input'].map((id) => document.getElementById(id));
  inputs.forEach((el) => {
    el.value = storage.name;
    el.addEventListener('input', () => {
      storage.name = el.value;
      inputs.forEach((o) => { if (o !== el) o.value = storage.name; });
    });
  });
}

function myProfile() {
  return { name: storage.name, avatar: storage.avatar };
}

// Pede o nome antes de deixar continuar; devolve true se está preenchido
function requireName(inputId) {
  if (storage.name.trim()) return true;
  const el = document.getElementById(inputId);
  el.classList.remove('shake');
  void el.offsetWidth;
  el.classList.add('shake');
  el.focus();
  showToast(t('nameNeeded'));
  sound.play('miss');
  return false;
}

function renderProfileChip() {
  $('#profile-chip-avatar').textContent = storage.avatar;
  $('#profile-chip-name').textContent = storage.name;
}

// Vai para a preparação do jogo, passando pelo perfil se o nome estiver vazio
function goSetup() {
  if (!storage.name.trim()) { showScreen('profile'); return; }
  renderProfileChip();
  renderThemeOptions();
  showScreen('setup');
}

// ---------- Configuração escolhida ----------

const config = { players: 1, theme: 'animais', level: 'facil', mode: 'local' };

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
bindOptionRow('player-options', 'players', (v) => {
  config.players = parseInt(v, 10);
  $('#mode-block').hidden = config.players !== 2;
});
bindOptionRow('mode-options', 'mode', (v) => (config.mode = v));
bindOptionRow('level-options', 'level', (v) => (config.level = v));

// ---------- Fases (temas) com cadeado ----------

function renderThemeOptions() {
  const row = $('#theme-options');
  row.innerHTML = THEME_LIST.map((th) => {
    const locked = !isThemeUnlocked(th.id);
    return `
      <button class="opt ${config.theme === th.id ? 'selected' : ''} ${locked ? 'locked' : ''}" data-theme="${th.id}">
        <span class="opt-emoji">${locked ? '🔒' : th.icon}</span>
        <span>${t(th.key)}</span>
        ${locked ? `<small class="cost">🗝️ ${th.cost} 🪙</small>` : ''}
      </button>`;
  }).join('');
}

$('#theme-options').addEventListener('click', (e) => {
  const btn = e.target.closest('.opt');
  if (!btn) return;
  const id = btn.dataset.theme;
  if (!isThemeUnlocked(id)) {
    sound.play('click');
    openUnlockModal(id);
    return;
  }
  config.theme = id;
  sound.play('click');
  renderThemeOptions();
});

// Modal de desbloqueio
let pendingUnlock = null;

function openUnlockModal(id) {
  pendingUnlock = THEME_LIST.find((x) => x.id === id);
  if (!pendingUnlock) return;
  $('#unlock-title').textContent = `${pendingUnlock.icon} ${t(pendingUnlock.key)}`;
  $('#unlock-msg').textContent = t('unlockMsg', { n: pendingUnlock.cost });
  $('#btn-unlock-yes').textContent = t('unlockYes');
  $('#btn-unlock-no').textContent = t('unlockNo');
  $('#unlock-error').hidden = true;
  $('#unlock-modal').hidden = false;
}

function closeUnlockModal() {
  $('#unlock-modal').hidden = true;
  pendingUnlock = null;
}

$('#btn-unlock-yes').addEventListener('click', () => {
  if (!pendingUnlock) return;
  const cost = pendingUnlock.cost;
  if (storage.coins >= cost) {
    storage.coins -= cost;
    storage.unlocked = [...storage.unlocked, pendingUnlock.id];
    config.theme = pendingUnlock.id;
    updateCoinChip();
    sound.play('unlock');
    closeUnlockModal();
    renderThemeOptions();
  } else {
    const err = $('#unlock-error');
    err.textContent = t('needCoins', { n: cost - storage.coins });
    err.hidden = false;
    sound.play('miss');
    const card = $('#unlock-card');
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');
  }
});
$('#btn-unlock-no').addEventListener('click', () => { sound.play('click'); closeUnlockModal(); });
$('#unlock-modal').addEventListener('click', (e) => { if (e.target.id === 'unlock-modal') closeUnlockModal(); });

// ---------- Multijogador online (QR + WebRTC via PeerJS) ----------

let peer = null;
let conn = null;
let netGuestProfile = null;
const remoteQueue = [];

function netDestroy() {
  try { if (conn) conn.close(); } catch { /* já fechada */ }
  try { if (peer) peer.destroy(); } catch { /* já destruído */ }
  peer = null;
  conn = null;
  netGuestProfile = null;
}
function netSend(msg) {
  try { if (conn && conn.open) conn.send(msg); } catch { /* conexão caiu; o close trata */ }
}

function sanitizeProfile(p) {
  const name = String((p && p.name) || '').replace(/[<>&"']/g, '').slice(0, 12);
  const avatar = AVATAR_CHOICES.includes(p && p.avatar) ? p.avatar : '🐸';
  return { name, avatar };
}

function hostInvite() {
  netDestroy();
  showScreen('invite');
  $('#qr-box').innerHTML = '';
  $('#invite-status').textContent = t('connecting');
  peer = new Peer();
  peer.on('open', (id) => {
    const url = `${location.origin}${location.pathname}?join=${encodeURIComponent(id)}`;
    const qr = qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    $('#qr-box').innerHTML = qr.createSvgTag({ cellSize: 5, margin: 2 });
    $('#invite-status').textContent = t('waitingPlayer');
  });
  peer.on('connection', (c) => {
    if (conn) { try { c.close(); } catch { /* lotado */ } return; }
    conn = c;
    conn.on('data', handleNetData);
    conn.on('close', handleDisconnect);
    conn.on('error', handleDisconnect);
  });
  peer.on('error', () => {
    if (currentScreen() === 'invite') {
      showToast(t('connLost'));
      netDestroy();
      showScreen('setup');
    } else {
      handleDisconnect();
    }
  });
}

let joinHostId = null;

function joinGame() {
  if (!joinHostId) return;
  if (!requireName('join-name-input')) return;
  const btn = $('#btn-join');
  btn.disabled = true;
  $('#join-status').textContent = t('connecting');
  netDestroy();
  peer = new Peer();
  peer.on('open', () => {
    conn = peer.connect(joinHostId, { reliable: true });
    conn.on('open', () => {
      $('#join-status').textContent = t('waitingPlayer');
      netSend({ type: 'hello', ...myProfile() });
    });
    conn.on('data', handleNetData);
    conn.on('close', handleDisconnect);
    conn.on('error', handleDisconnect);
  });
  peer.on('error', () => {
    showToast(t('connLost'));
    netDestroy();
    btn.disabled = false;
    if (currentScreen() === 'join') $('#join-status').textContent = '';
  });
}

function hostStartMatch() {
  const level = LEVELS[config.level];
  // Baralho determinístico enviado como índices do tema (seguro e leve)
  const idxs = shuffle([...THEMES[config.theme].keys()]).slice(0, level.pairs);
  const deckIdx = shuffle([...idxs, ...idxs]);
  const profiles = [sanitizeProfile(myProfile()), netGuestProfile];
  netSend({ type: 'start', theme: config.theme, level: config.level, deck: deckIdx, profiles });
  startGame({ online: true, myIndex: 0, deck: deckIdx, profiles });
}

function handleNetData(data) {
  if (!data || typeof data !== 'object') return;
  switch (data.type) {
    case 'hello': // host recebe o perfil do convidado e começa a partida
      if (currentScreen() !== 'invite') return;
      netGuestProfile = sanitizeProfile(data);
      hostStartMatch();
      break;
    case 'start': { // convidado recebe o baralho e os perfis
      if (!THEMES[data.theme] || !LEVELS[data.level] || !Array.isArray(data.deck)) return;
      const nPairs = LEVELS[data.level].pairs;
      const deck = data.deck.map((i) => parseInt(i, 10)).filter((i) => i >= 0 && i < 12);
      if (deck.length !== nPairs * 2) return;
      config.theme = data.theme;
      config.level = data.level;
      const profiles = (Array.isArray(data.profiles) ? data.profiles : []).slice(0, 2).map(sanitizeProfile);
      while (profiles.length < 2) profiles.push({ name: '', avatar: '🐸' });
      startGame({ online: true, myIndex: 1, deck, profiles });
      break;
    }
    case 'flip':
      applyRemoteFlip(parseInt(data.idx, 10));
      break;
    case 'bye':
      handleDisconnect();
      break;
  }
}

function handleDisconnect() {
  const cur = currentScreen();
  if (cur === 'game' && game.online && !game.over) {
    showToast(t('connLost'));
    leaveGame();
    showScreen('home');
  } else if (cur === 'invite') {
    showToast(t('connLost'));
    netDestroy();
    showScreen('setup');
  } else if (cur === 'join') {
    showToast(t('connLost'));
    netDestroy();
    $('#btn-join').disabled = false;
    $('#join-status').textContent = '';
  } else {
    netDestroy();
  }
}

function applyRemoteFlip(idx) {
  if (!game.online || game.over || !Number.isInteger(idx)) return;
  if (game.lock) { remoteQueue.push(idx); return; }
  const el = $('#board').children[idx];
  if (el) flipCard(idx, el, true);
}

function drainRemoteQueue() {
  while (!game.lock && !game.over && remoteQueue.length) {
    const idx = remoteQueue.shift();
    const el = $('#board').children[idx];
    if (el) flipCard(idx, el, true);
  }
}

// ---------- Estado da partida ----------

const game = {
  players: [], current: 0, deck: [], flipped: [], lock: false, over: false,
  moves: 0, matchedPairs: 0, totalPairs: 0, online: false, myIndex: 0,
};
let lastWin = null;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startGame(opts = {}) {
  const level = LEVELS[config.level];
  game.online = !!opts.online;
  game.myIndex = opts.myIndex ?? 0;
  remoteQueue.length = 0;

  let deckEmojis;
  if (opts.deck) {
    deckEmojis = opts.deck.map((i) => THEMES[config.theme][i]);
  } else {
    const emojis = shuffle(THEMES[config.theme]).slice(0, level.pairs);
    deckEmojis = shuffle([...emojis, ...emojis]);
  }

  if (game.online) {
    game.players = opts.profiles.map((p, i) => ({
      key: PLAYER_KEYS[i], avatar: p.avatar, name: p.name || null, pairs: 0,
    }));
  } else {
    // Jogador 1 usa o perfil salvo; os demais recebem avatares diferentes
    const mine = storage.avatar;
    const others = AVATAR_CHOICES.filter((a) => a !== mine);
    game.players = Array.from({ length: config.players }, (_, i) => ({
      key: PLAYER_KEYS[i],
      avatar: i === 0 ? mine : others[i - 1],
      name: i === 0 ? (storage.name || null) : null,
      pairs: 0,
    }));
  }

  game.current = 0;
  game.deck = deckEmojis.map((emoji) => ({ emoji, matched: false }));
  game.flipped = [];
  game.lock = false;
  game.over = false;
  game.moves = 0;
  game.matchedPairs = 0;
  game.totalPairs = level.pairs;

  renderBoard(level);
  renderScoreboard();
  updateMoves();
  showScreen('game');

  // Sem cronômetro no modo online (os dois aparelhos jogam no mesmo ritmo)
  $('#timer-wrap').hidden = game.online;
  if (game.online) stopTimer();
  else startTimer(level.time + (config.players - 1) * EXTRA_TIME_PER_PLAYER);

  music.play(config.level);
}

function renderBoard(level) {
  const board = $('#board');
  board.dataset.cols = level.cols;
  board.innerHTML = '';
  game.deck.forEach((card, idx) => {
    const el = document.createElement('button');
    el.className = 'card';
    el.dataset.index = idx;
    el.style.animationDelay = `${idx * 35}ms`;
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

function playerLabel(p) { return p.name ? esc(p.name) : t(p.key); }

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
      <div class="player-tag ${i === game.current ? 'turn' : ''} ${game.online && i === game.myIndex ? 'me' : ''}">
        <span class="avatar">${p.avatar}</span>${playerLabel(p)}
        <span class="score">${p.pairs}</span>
      </div>`).join('');
}

function updateMoves() { $('#moves-label').textContent = t('moves', { n: game.moves }); }

// ---------- Cronômetro ----------

let timeLeft = 0;
let timerInt = null;

function startTimer(seconds) {
  stopTimer();
  timeLeft = seconds;
  renderTimer();
  timerInt = setInterval(timerTick, 1000);
}
function stopTimer() {
  if (timerInt) { clearInterval(timerInt); timerInt = null; }
}
function timerTick() {
  timeLeft--;
  renderTimer();
  if (timeLeft <= 5 && timeLeft > 0) sound.play('tick');
  if (timeLeft <= 0) {
    stopTimer();
    if (game.matchedPairs < game.totalPairs) timeUp();
  }
}
function renderTimer() {
  const el = $('#timer');
  const m = Math.max(0, Math.floor(timeLeft / 60));
  const s = Math.max(0, timeLeft % 60);
  el.textContent = `⏱️ ${m}:${String(s).padStart(2, '0')}`;
  el.classList.toggle('urgent', timeLeft <= 10);
}

function timeUp() {
  if (game.over) return;
  game.over = true;
  game.lock = true;
  music.stop();
  sound.play('timeup');
  showScreen('timeup');
}

// Pausa cronômetro/música quando a aba fica em segundo plano
document.addEventListener('visibilitychange', () => {
  const cur = currentScreen();
  if (document.hidden) {
    music.stop();
    if (cur === 'game') stopTimer();
  } else if (cur === 'game' && !game.over) {
    if (!game.online && timeLeft > 0 && !timerInt) timerInt = setInterval(timerTick, 1000);
    music.play(config.level);
  } else if (MENU_SCREENS.has(cur)) {
    music.play('home');
  }
});

// ---------- Virar cartas ----------

function flipCard(idx, el, remote = false) {
  if (game.lock || game.over || game.deck[idx].matched || game.flipped.includes(idx)) return;
  // No modo online, cada um só joga na sua vez
  if (game.online && !remote && game.current !== game.myIndex) return;
  if (game.online && !remote) netSend({ type: 'flip', idx });

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
    if (game.matchedPairs === game.totalPairs) stopTimer(); // garante a vitória antes do tempo acabar
    if (navigator.vibrate) navigator.vibrate(60);
    setTimeout(() => {
      sound.play('match');
      cards[a].classList.add('matched');
      cards[b].classList.add('matched');
      game.flipped = [];
      game.lock = false;
      renderScoreboard();
      if (game.matchedPairs === game.totalPairs) setTimeout(endGame, 700);
      else drainRemoteQueue();
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
        drainRemoteQueue();
      }, 600);
    }, 700);
  }
}

// ---------- Fim de jogo e recompensas ----------

function endGame() {
  if (game.over) return;
  game.over = true;
  stopTimer();
  music.stop();

  const level = LEVELS[config.level];

  let result = null;
  if (game.players.length > 1) {
    const best = Math.max(...game.players.map((p) => p.pairs));
    const winners = game.players
      .map((p, i) => ({ ...p, index: i }))
      .filter((p) => p.pairs === best);
    result = {
      tie: winners.length > 1,
      winnerIndex: winners[0].index,
      winnerKey: winners[0].key,
      winnerName: winners[0].name,
      winnerAvatar: winners[0].avatar,
      scores: game.players.map((p) => ({ avatar: p.avatar, pairs: p.pairs })),
    };
  }

  // No modo online, as moedas vão para quem venceu (empate: os dois ganham)
  const iWin = !(game.online && result) || result.tie || result.winnerIndex === game.myIndex;
  const timeBonus = (!game.online && timeLeft > 0) ? Math.floor(timeLeft / 5) : 0;
  const coinsEarned = iWin ? game.totalPairs * 2 + level.bonus + timeBonus : CONSOLATION_COINS;
  storage.coins += coinsEarned;

  // Figurinha surpresa só para quem venceu
  let newSticker = null;
  let bonusCoins = 0;
  if (iWin) {
    const owned = storage.stickers;
    const missing = STICKERS.filter((s) => !owned.includes(s.id));
    if (missing.length > 0) {
      newSticker = missing[Math.floor(Math.random() * missing.length)];
      storage.stickers = [...owned, newSticker.id];
    } else {
      bonusCoins = ALL_STICKERS_BONUS;
      storage.coins += bonusCoins;
    }
  }
  updateCoinChip();

  lastWin = {
    coinsEarned, timeBonus, moves: game.moves, totalPairs: game.totalPairs,
    stickerId: newSticker ? newSticker.id : null,
    stickerEmoji: newSticker ? newSticker.emoji : null,
    bonusCoins, result, iWin, revealed: false,
  };

  $('#gift-area').hidden = !iWin;
  preparePack();
  renderWinTexts();
  showScreen('win');
  sound.play(iWin ? 'win' : 'miss');
  if (iWin) setTimeout(() => sound.play('coin'), 700);
  launchConfetti(iWin ? 4500 : 1500);
}

function renderWinTexts() {
  if (!lastWin) return;
  const w = lastWin;
  const title = $('#win-title');
  const subtitle = $('#win-subtitle');
  const starsEl = $('#win-stars');

  if (w.result) {
    const winnerLabel = w.result.winnerName ? esc(w.result.winnerName) : t(w.result.winnerKey);
    title.textContent = w.result.tie ? t('tie') : t('winnerWon', { name: w.result.winnerAvatar + ' ' + winnerLabel });
    subtitle.textContent = w.result.scores.map((s) => `${s.avatar} ${s.pairs}`).join('  ·  ');
    starsEl.innerHTML = '';
  } else {
    title.textContent = t('congrats');
    subtitle.textContent = t('completedMsg');
    const ratio = w.moves / w.totalPairs;
    const stars = ratio <= 1.7 ? 3 : ratio <= 2.6 ? 2 : 1;
    starsEl.innerHTML = [1, 2, 3].map((n) => `<span class="${n <= stars ? '' : 'dim'}">⭐</span>`).join('');
  }

  $('#coins-label').textContent = w.iWin ? t('coins') : t('wellPlayed');
  $('#coins-earned').textContent = `+${w.coinsEarned}`;
  const tb = $('#time-bonus');
  if (w.timeBonus > 0) {
    tb.textContent = t('timeBonus', { n: w.timeBonus });
    tb.hidden = false;
  } else {
    tb.hidden = true;
  }

  if (w.revealed) fillReveal();
}

function preparePack() {
  const pack = $('#pack-box');
  pack.classList.remove('opening');
  pack.style.display = '';
  $('#sticker-reveal').hidden = true;
  lastWin.revealed = false;
}

function fillReveal() {
  const w = lastWin;
  if (w.stickerId) {
    $('#reveal-label').textContent = t('newSticker');
    $('#reveal-emoji').textContent = w.stickerEmoji;
    $('#reveal-name').textContent = tSticker(w.stickerId);
  } else {
    $('#reveal-label').textContent = t('bonusLabel');
    $('#reveal-emoji').textContent = '🪙';
    $('#reveal-name').textContent = t('albumCompleteMsg', { n: w.bonusCoins });
  }
}

function openPack() {
  if (!lastWin || lastWin.revealed) return;
  lastWin.revealed = true;
  const pack = $('#pack-box');
  pack.classList.add('opening');
  sound.play('reveal');
  launchConfetti(2500);
  setTimeout(() => {
    pack.style.display = 'none';
    fillReveal();
    const reveal = $('#sticker-reveal');
    reveal.hidden = false;
    const em = $('#reveal-emoji');
    em.style.animation = 'none';
    void em.offsetWidth;
    em.style.animation = '';
  }, 380);
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

function leaveGame() {
  stopTimer();
  music.stop();
  game.over = true;
  if (game.online) {
    netSend({ type: 'bye' });
    netDestroy();
    game.online = false;
  }
}

// ---------- Navegação ----------

$('#btn-go-setup').addEventListener('click', () => { sound.play('click'); showScreen('profile'); });
$('#btn-profile-continue').addEventListener('click', () => {
  if (!requireName('profile-name-input')) return;
  sound.play('click');
  renderProfileChip();
  renderThemeOptions();
  showScreen('setup');
});
$('#btn-edit-profile').addEventListener('click', () => { sound.play('click'); showScreen('profile'); });
$('#btn-go-album').addEventListener('click', () => { sound.play('click'); renderAlbum(); showScreen('album'); });
$('#btn-start').addEventListener('click', () => {
  sound.play('click');
  if (config.players === 2 && config.mode === 'online') hostInvite();
  else startGame();
});
$('#btn-restart').addEventListener('click', () => {
  sound.play('click');
  if (game.online) { leaveGame(); showScreen('setup'); }
  else startGame();
});
$('#btn-try-again').addEventListener('click', () => { sound.play('click'); startGame(); });
$('#btn-timeup-home').addEventListener('click', () => { sound.play('click'); showScreen('home'); });
$('#btn-invite-cancel').addEventListener('click', () => { sound.play('click'); netDestroy(); showScreen('setup'); });
$('#btn-join').addEventListener('click', () => { sound.play('click'); joinGame(); });
$('#btn-play-again').addEventListener('click', () => {
  sound.play('click');
  if (game.online) leaveGame();
  goSetup();
});
$('#btn-win-album').addEventListener('click', () => {
  sound.play('click');
  renderAlbum(lastWin && lastWin.stickerId);
  showScreen('album');
});
$('#btn-album-play').addEventListener('click', () => { sound.play('click'); goSetup(); });
$('#btn-home').addEventListener('click', () => {
  sound.play('click');
  if (currentScreen() === 'game') leaveGame();
  netDestroy();
  showScreen('home');
});

$('#pack-box').addEventListener('click', openPack);

$('#btn-sound').addEventListener('click', () => {
  storage.sound = !storage.sound;
  updateSoundButton();
  sound.play('click');
  music.stop();
  const cur = currentScreen();
  if (storage.sound) {
    if (cur === 'game' && !game.over) music.play(config.level);
    else if (MENU_SCREENS.has(cur)) music.play('home');
  }
});
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

// O navegador só libera o áudio depois do primeiro toque:
// começa a música da tela inicial nesse momento
document.addEventListener('pointerdown', () => {
  if (storage.sound && MENU_SCREENS.has(currentScreen())) {
    music.stop();
    music.play('home');
  }
}, { once: true, capture: true });

// ---------- Início ----------

applyTheme();
applyI18n();
setupProfileControls();
renderThemeOptions();
updateCoinChip();
updateSoundButton();

// Convidado chegando por QR code (?join=ID)
joinHostId = new URLSearchParams(location.search).get('join');
if (joinHostId) {
  history.replaceState({}, '', location.pathname);
  showScreen('join');
}
