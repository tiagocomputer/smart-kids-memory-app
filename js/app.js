/* ============================================================
   Memória Mágica — lógica do jogo
   ============================================================ */

// ---------- Traduções (PT / EN / FR) ----------

const I18N = {
  pt: {
    appName1: 'Memória', appName2: 'Mágica',
    subtitle: 'Encontre os pares, ganhe moedas e colecione figurinhas!',
    madeBy: 'Desenvolvido por',
    owlGreeting: 'Vamos treinar a memória!',
    play: 'Jogar', album: 'Álbum de Figurinhas', records: 'Recordes',
    setupTitle: 'Preparar Jogo 🎮',
    profileTitle: 'Quem é você? 🙋', continueBtn: 'Continuar',
    nameNeeded: 'Escreva seu nome! ✏️',
    yourName: 'Seu nome', chooseAvatar: 'Escolha seu avatar', chooseSkin: 'Cor da pele',
    qPlayers: 'Quantos jogadores?', qTheme: 'Escolha a fase', qLevel: 'Escolha o nível',
    onePlayer: '1 jogador', onePlayerSub: 'Jogue sozinho',
    twoPlayers: '2 jogadores', twoPlayersSub: 'Duelo · QR code',
    inviteTitle: 'Convide o Jogador 2 📱',
    inviteHint: 'Peça para o jogador 2 escanear este código com a câmera do celular',
    shareLink: 'Ou envie o link', linkCopied: 'Link copiado! 📋',
    startQR: 'Gerar QR Code 📱',
    waitingPlayer: 'Esperando o jogador 2…', connecting: 'Conectando…',
    joinTitle: 'Entrar no jogo 🎮', joinBtn: 'Entrar!',
    connLost: 'A conexão caiu 😢', cancel: 'Cancelar', wellPlayed: 'Bem jogado!',
    soundOn: 'Som ligado', soundOff: 'Som desligado', soundBlocked: 'Áudio bloqueado pelo navegador',
    rematchQ: 'Continuar o duelo?', rematchYes: 'Continuar duelo', rematchNo: 'Sair',
    rematchPhase: 'Trocar de fase', waitingPhase: 'O outro está escolhendo a fase… 🗺️',
    waitingRematch: 'Esperando o outro jogador…', peerWantsRematch: 'O outro quer jogar de novo! 🔁',
    peerLeft: 'O outro jogador saiu 👋',
    themeAnimais: 'Animais', themeFrutas: 'Frutas', themeEspaco: 'Espaço', themeOceano: 'Oceano',
    themeDinos: 'Dinossauros', themeComida: 'Comida', themeBrinquedos: 'Brinquedos', themeHerois: 'Heróis',
    themeMario: 'Mundo dos Cogumelos', themeMonstrinhos: 'Monstrinhos',
    themeEncanadores: 'Mundo dos Encanadores', themeRobos: 'Mundo dos Robôs',
    themeFantasia: 'Mundo da Fantasia', themeEmocoes: 'Mundo das Emoções',
    themeAventureiros: 'Mundo dos Aventureiros', themeCriaturas: 'Criaturinhas',
    levelFacil: 'Fácil', levelMedio: 'Médio', levelDificil: 'Difícil',
    pairs: 'pares', start: 'Começar!', restart: 'Recomeçar',
    pause: 'Pausar', paused: 'Jogo pausado ⏸️', resume: 'Continuar',
    moves: 'Jogadas: {n}', pairsLabel: 'Pares:',
    congrats: 'Parabéns! 🎉',
    completedMsg: 'Você completou o nível e ganhou uma figurinha nova!',
    coins: 'Moedas', giftTap: 'Toque para abrir o pacotinho!', newSticker: 'Figurinha nova:',
    legendaryLabel: 'LENDÁRIA DOURADA! ✨', speedLine: '⚡ {n} pares por minuto', newRecord: 'Novo recorde! 🏆',
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
    catAnimais: 'Animais', catMar: 'Animais Marinhos', catComida: 'Comida', catFantasia: 'Fantasia',
    catDiversao: 'Diversão', catLendarias: 'Lendárias Douradas',
    recordsTitle: 'Seus Recordes 🏆', rankLabel: 'Seu nível', nextRank: 'Faltam {n} pares para {r}',
    maxRank: 'Você é o melhor de todos! 👑', bestTimes: 'Melhores tempos ⏱️', bestSpeed: 'Velocidade recorde ⚡',
    stickersOwned: 'Figurinhas', gamesWon: 'Vitórias', noRecord: '—', ppmUnit: '{n}/min',
    rankBronze: 'Bronze', rankPrata: 'Prata', rankOuro: 'Ouro', rankDiamante: 'Diamante', rankMestre: 'Mestre',
    music: 'Música', chooseMusic: 'Escolha a música',
    musAlegre: 'Alegre 🎉', musAventura: 'Aventura 🗺️', musCalma: 'Calminha 🌙',
    musEspacial: 'Espacial 🚀', musHeroi: 'Herói 💥',
    p1: 'Leão', p2: 'Sapinho', p3: 'Polvo', p4: 'Unicórnio',
    home: 'Início', language: 'Idioma', theme: 'Tema', sound: 'Som',
    sticker: {
      dino:'Dino', panda:'Panda', gato:'Gatinho', pinguim:'Pinguim', tartaruga:'Tartaruga', leao:'Leão', raposa:'Raposa', coala:'Coala', cavalo:'Cavalo', vaca:'Vaquinha',
      polvo:'Polvo', baleia:'Baleia', tubarao:'Tubarão', golfinho:'Golfinho', peixe:'Peixinho', caranguejo:'Caranguejo', baiacu:'Baiacu', concha:'Concha', foca:'Foca', medusa:'Água-viva',
      sorvete:'Sorvete', bolo:'Bolo', pizza:'Pizza', hamburguer:'Hambúrguer', pirulito:'Pirulito', donut:'Rosquinha', morango:'Morango', cupcake:'Cupcake', taco:'Taco', cookie:'Biscoito',
      unicornio:'Unicórnio', dragao:'Dragão', sereia:'Sereia', fada:'Fada', robo:'Robô', mago:'Mago', castelo:'Castelo', arcoiris:'Arco-íris', estrela:'Estrela', pocao:'Poção',
      bola:'Bola', guitarra:'Guitarra', balao:'Balão', pipa:'Pipa', jogo:'Videogame', circo:'Circo', medalha:'Medalha', coroa:'Coroa', dado:'Dado', alvo:'Alvo',
      genio:'Gênio', fenix:'Fênix', pavao:'Pavão', cisne:'Cisne', varinha:'Varinha Mágica', estrelacadente:'Estrela Cadente', diamante:'Diamante', trofeu:'Troféu',
    },
  },
  en: {
    appName1: 'Magic', appName2: 'Memory',
    subtitle: 'Match the pairs, earn coins and collect stickers!',
    madeBy: 'Made by',
    owlGreeting: "Let's train our memory!",
    play: 'Play', album: 'Sticker Album', records: 'Records',
    setupTitle: 'Set Up Game 🎮',
    profileTitle: 'Who are you? 🙋', continueBtn: 'Continue',
    nameNeeded: 'Write your name! ✏️',
    yourName: 'Your name', chooseAvatar: 'Choose your avatar', chooseSkin: 'Skin tone',
    qPlayers: 'How many players?', qTheme: 'Choose the stage', qLevel: 'Choose the level',
    onePlayer: '1 player', onePlayerSub: 'Play solo',
    twoPlayers: '2 players', twoPlayersSub: 'Duel · QR code',
    inviteTitle: 'Invite Player 2 📱',
    inviteHint: 'Ask player 2 to scan this code with their phone camera',
    shareLink: 'Or send the link', linkCopied: 'Link copied! 📋',
    startQR: 'Generate QR Code 📱',
    waitingPlayer: 'Waiting for player 2…', connecting: 'Connecting…',
    joinTitle: 'Join the game 🎮', joinBtn: 'Join!',
    connLost: 'Connection lost 😢', cancel: 'Cancel', wellPlayed: 'Well played!',
    soundOn: 'Sound on', soundOff: 'Sound off', soundBlocked: 'Audio blocked by the browser',
    rematchQ: 'Continue the duel?', rematchYes: 'Keep dueling', rematchNo: 'Leave',
    rematchPhase: 'Change stage', waitingPhase: 'The other is picking a stage… 🗺️',
    waitingRematch: 'Waiting for the other player…', peerWantsRematch: 'The other wants a rematch! 🔁',
    peerLeft: 'The other player left 👋',
    themeAnimais: 'Animals', themeFrutas: 'Fruits', themeEspaco: 'Space', themeOceano: 'Ocean',
    themeDinos: 'Dinosaurs', themeComida: 'Food', themeBrinquedos: 'Toys', themeHerois: 'Heroes',
    themeMario: 'Mushroom World', themeMonstrinhos: 'Lil Monsters',
    themeEncanadores: 'Plumbers World', themeRobos: 'Robots World',
    themeFantasia: 'Fantasy World', themeEmocoes: 'Emotions World',
    themeAventureiros: 'Adventurers World', themeCriaturas: 'Lil Creatures',
    levelFacil: 'Easy', levelMedio: 'Medium', levelDificil: 'Hard',
    pairs: 'pairs', start: 'Start!', restart: 'Restart',
    pause: 'Pause', paused: 'Game paused ⏸️', resume: 'Resume',
    moves: 'Moves: {n}', pairsLabel: 'Pairs:',
    congrats: 'Congratulations! 🎉',
    completedMsg: 'You completed the level and won a brand new sticker!',
    coins: 'Coins', giftTap: 'Tap to open the pack!', newSticker: 'New sticker:',
    legendaryLabel: 'GOLDEN LEGENDARY! ✨', speedLine: '⚡ {n} pairs per minute', newRecord: 'New record! 🏆',
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
    catAnimais: 'Animals', catMar: 'Sea Animals', catComida: 'Food', catFantasia: 'Fantasy',
    catDiversao: 'Fun', catLendarias: 'Golden Legendaries',
    recordsTitle: 'Your Records 🏆', rankLabel: 'Your rank', nextRank: '{n} more pairs to {r}',
    maxRank: "You're the best of all! 👑", bestTimes: 'Best times ⏱️', bestSpeed: 'Record speed ⚡',
    stickersOwned: 'Stickers', gamesWon: 'Wins', noRecord: '—', ppmUnit: '{n}/min',
    rankBronze: 'Bronze', rankPrata: 'Silver', rankOuro: 'Gold', rankDiamante: 'Diamond', rankMestre: 'Master',
    music: 'Music', chooseMusic: 'Choose the music',
    musAlegre: 'Happy 🎉', musAventura: 'Adventure 🗺️', musCalma: 'Calm 🌙',
    musEspacial: 'Space 🚀', musHeroi: 'Hero 💥',
    p1: 'Lion', p2: 'Froggy', p3: 'Octopus', p4: 'Unicorn',
    home: 'Home', language: 'Language', theme: 'Theme', sound: 'Sound',
    sticker: {
      dino:'Dino', panda:'Panda', gato:'Kitty', pinguim:'Penguin', tartaruga:'Turtle', leao:'Lion', raposa:'Fox', coala:'Koala', cavalo:'Horse', vaca:'Cow',
      polvo:'Octopus', baleia:'Whale', tubarao:'Shark', golfinho:'Dolphin', peixe:'Fish', caranguejo:'Crab', baiacu:'Pufferfish', concha:'Shell', foca:'Seal', medusa:'Jellyfish',
      sorvete:'Ice Cream', bolo:'Cake', pizza:'Pizza', hamburguer:'Burger', pirulito:'Lollipop', donut:'Donut', morango:'Strawberry', cupcake:'Cupcake', taco:'Taco', cookie:'Cookie',
      unicornio:'Unicorn', dragao:'Dragon', sereia:'Mermaid', fada:'Fairy', robo:'Robot', mago:'Wizard', castelo:'Castle', arcoiris:'Rainbow', estrela:'Star', pocao:'Potion',
      bola:'Ball', guitarra:'Guitar', balao:'Balloon', pipa:'Kite', jogo:'Game', circo:'Circus', medalha:'Medal', coroa:'Crown', dado:'Dice', alvo:'Target',
      genio:'Genie', fenix:'Phoenix', pavao:'Peacock', cisne:'Swan', varinha:'Magic Wand', estrelacadente:'Shooting Star', diamante:'Diamond', trofeu:'Trophy',
    },
  },
  fr: {
    appName1: 'Mémoire', appName2: 'Magique',
    subtitle: 'Trouve les paires, gagne des pièces et collectionne des autocollants!',
    madeBy: 'Développé par',
    owlGreeting: 'Entraînons notre mémoire !',
    play: 'Jouer', album: "Album d'autocollants", records: 'Records',
    setupTitle: 'Préparer le jeu 🎮',
    profileTitle: 'Qui es-tu? 🙋', continueBtn: 'Continuer',
    nameNeeded: 'Écris ton prénom! ✏️',
    yourName: 'Ton prénom', chooseAvatar: 'Choisis ton avatar', chooseSkin: 'Couleur de peau',
    qPlayers: 'Combien de joueurs?', qTheme: 'Choisis le niveau', qLevel: 'Choisis la difficulté',
    onePlayer: '1 joueur', onePlayerSub: 'Joue en solo',
    twoPlayers: '2 joueurs', twoPlayersSub: 'Duel · QR code',
    inviteTitle: 'Invite le Joueur 2 📱',
    inviteHint: 'Demande au joueur 2 de scanner ce code avec son téléphone',
    shareLink: 'Ou envoie le lien', linkCopied: 'Lien copié! 📋',
    startQR: 'Générer le QR Code 📱',
    waitingPlayer: 'En attente du joueur 2…', connecting: 'Connexion…',
    joinTitle: 'Rejoindre le jeu 🎮', joinBtn: 'Entrer!',
    connLost: 'Connexion perdue 😢', cancel: 'Annuler', wellPlayed: 'Bien joué!',
    soundOn: 'Son activé', soundOff: 'Son coupé', soundBlocked: 'Audio bloqué par le navigateur',
    rematchQ: 'Continuer le duel?', rematchYes: 'Continuer le duel', rematchNo: 'Sortir',
    rematchPhase: 'Changer de phase', waitingPhase: "L'autre choisit la phase… 🗺️",
    waitingRematch: "En attente de l'autre joueur…", peerWantsRematch: "L'autre veut rejouer! 🔁",
    peerLeft: "L'autre joueur est parti 👋",
    themeAnimais: 'Animaux', themeFrutas: 'Fruits', themeEspaco: 'Espace', themeOceano: 'Océan',
    themeDinos: 'Dinosaures', themeComida: 'Nourriture', themeBrinquedos: 'Jouets', themeHerois: 'Héros',
    themeMario: 'Monde des Champignons', themeMonstrinhos: 'Petits Monstres',
    themeEncanadores: 'Monde des Plombiers', themeRobos: 'Monde des Robots',
    themeFantasia: 'Monde de la Fantaisie', themeEmocoes: 'Monde des Émotions',
    themeAventureiros: 'Monde des Aventuriers', themeCriaturas: 'Petites Créatures',
    levelFacil: 'Facile', levelMedio: 'Moyen', levelDificil: 'Difficile',
    pairs: 'paires', start: 'Commencer!', restart: 'Recommencer',
    pause: 'Pause', paused: 'Jeu en pause ⏸️', resume: 'Reprendre',
    moves: 'Coups: {n}', pairsLabel: 'Paires:',
    congrats: 'Bravo! 🎉',
    completedMsg: 'Tu as terminé le niveau et gagné un nouvel autocollant!',
    coins: 'Pièces', giftTap: 'Touche pour ouvrir le paquet!', newSticker: 'Nouvel autocollant:',
    legendaryLabel: 'LÉGENDAIRE DORÉ! ✨', speedLine: '⚡ {n} paires par minute', newRecord: 'Nouveau record! 🏆',
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
    catAnimais: 'Animaux', catMar: 'Animaux Marins', catComida: 'Nourriture', catFantasia: 'Fantaisie',
    catDiversao: 'Amusement', catLendarias: 'Légendaires Dorés',
    recordsTitle: 'Tes Records 🏆', rankLabel: 'Ton niveau', nextRank: '{n} paires pour {r}',
    maxRank: 'Tu es le meilleur de tous! 👑', bestTimes: 'Meilleurs temps ⏱️', bestSpeed: 'Vitesse record ⚡',
    stickersOwned: 'Autocollants', gamesWon: 'Victoires', noRecord: '—', ppmUnit: '{n}/min',
    rankBronze: 'Bronze', rankPrata: 'Argent', rankOuro: 'Or', rankDiamante: 'Diamant', rankMestre: 'Maître',
    music: 'Musique', chooseMusic: 'Choisis la musique',
    musAlegre: 'Joyeux 🎉', musAventura: 'Aventure 🗺️', musCalma: 'Calme 🌙',
    musEspacial: 'Espace 🚀', musHeroi: 'Héros 💥',
    p1: 'Lion', p2: 'Grenouille', p3: 'Pieuvre', p4: 'Licorne',
    home: 'Accueil', language: 'Langue', theme: 'Thème', sound: 'Son',
    sticker: {
      dino:'Dino', panda:'Panda', gato:'Chaton', pinguim:'Pingouin', tartaruga:'Tortue', leao:'Lion', raposa:'Renard', coala:'Koala', cavalo:'Cheval', vaca:'Vache',
      polvo:'Pieuvre', baleia:'Baleine', tubarao:'Requin', golfinho:'Dauphin', peixe:'Poisson', caranguejo:'Crabe', baiacu:'Poisson-globe', concha:'Coquillage', foca:'Phoque', medusa:'Méduse',
      sorvete:'Glace', bolo:'Gâteau', pizza:'Pizza', hamburguer:'Burger', pirulito:'Sucette', donut:'Beignet', morango:'Fraise', cupcake:'Cupcake', taco:'Taco', cookie:'Biscuit',
      unicornio:'Licorne', dragao:'Dragon', sereia:'Sirène', fada:'Fée', robo:'Robot', mago:'Magicien', castelo:'Château', arcoiris:'Arc-en-ciel', estrela:'Étoile', pocao:'Potion',
      bola:'Ballon', guitarra:'Guitare', balao:'Ballon', pipa:'Cerf-volant', jogo:'Jeu', circo:'Cirque', medalha:'Médaille', coroa:'Couronne', dado:'Dé', alvo:'Cible',
      genio:'Génie', fenix:'Phénix', pavao:'Paon', cisne:'Cygne', varinha:'Baguette Magique', estrelacadente:'Étoile Filante', diamante:'Diamant', trofeu:'Trophée',
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
  animais:    ['🐶', '🐱', '🦁', '🐼', '🦊', '🐸', '🐵', '🐰', '🐯', '🦒', '🐘', '🐷', '🐮', '🐔', '🐨', '🐧'],
  frutas:     ['🍎', '🍌', '🍇', '🍓', '🍉', '🍍', '🥝', '🍑', '🍒', '🥭', '🍋', '🍊', '🥥', '🍐', '🫐', '🍈'],
  espaco:     ['🚀', '🌟', '🪐', '👽', '🛸', '🌙', '☀️', '🛰️', '🌍', '🌈', '☄️', '🔭', '👾', '🌠', '💫', '🌌'],
  oceano:     ['🐠', '🐳', '🦈', '🐙', '🦀', '🐬', '🐢', '🦞', '🐡', '🦑', '⛵', '🐚', '🐟', '🐋', '🦭', '🪼'],
  comida:     ['🍕', '🍔', '🍟', '🌭', '🍦', '🍩', '🎂', '🍪', '🥨', '🌮', '🍿', '🧁', '🍫', '🍬', '🥞', '🍰'],
  brinquedos: ['🧸', '🪀', '🎲', '🪁', '🚂', '🎠', '🤖', '🎯', '🪆', '🛴', '🎪', '🎨', '🎮', '🧩', '🚁', '🛼'],
  herois:     ['🦸‍♂️', '🦸‍♀️', '🦹‍♂️', '🕸️', '🦇', '⚡', '🛡️', '💥', '👊', '🧪', '🚨', '💪', '🦸', '🧑‍🚀', '🥷', '🦾'],
  fantasia2:  ['🐉', '🦄', '🧙‍♂️', '🧚', '🧜‍♀️', '🏰', '👑', '🗡️', '🛡️', '🔮', '🌟', '🧝‍♀️', '🐲', '🦅', '⚔️', '📜'],
  bandeiras:  ['🇧🇷', '🇺🇸', '🇫🇷', '🇯🇵', '🇮🇹', '🇩🇪', '🇪🇸', '🇬🇧', '🇨🇦', '🇲🇽', '🇦🇷', '🇵🇹', '🇨🇳', '🇦🇺', '🇰🇷', '🇳🇱'],
  // dinos é tratado de forma especial (espécies coloridas) em buildFaces()
  dinos:      ['🦕', '🦖'],
};

// Personagens originais em SVG (mario/toy/pokemon/disney) — ver js/characters.js
const CHAR_THEMES = window.MM_CHARACTERS || {};
// Ilustrações detalhadas (animais e dinossauros) — ver js/art.js
const ART_THEMES = window.MM_ART || {};

// Espécies de dinossauro: cada carta é um dinossauro, todas diferentes (cor + forma)
const DINO_SPECIES = [];
[0, 50, 110, 165, 215, 290].forEach((hue) => {
  DINO_SPECIES.push({ face: `🦖#${hue}`, emoji: '🦖', hue });
  DINO_SPECIES.push({ face: `🦕#${hue}`, emoji: '🦕', hue });
});

// Fases com IMAGENS (arquivos fornecidos). Cada item é uma figura recortada.
const imgTheme = (prefix, dir, n) =>
  Array.from({ length: n }, (_, i) => ({ id: prefix + (i + 1), img: 'img/' + dir + '/' + prefix + (i + 1) + '.webp' }));
const IMG_THEMES = {
  animais: imgTheme('an', 'animais', 13),
  frutas: imgTheme('fr', 'frutas', 12),
  espaco: imgTheme('es', 'espaco', 12),
  oceano: imgTheme('oc', 'oceano', 12),
  dinos: imgTheme('d', 'dinos', 12),
  comida: imgTheme('co', 'comida', 12),
  brinquedos: imgTheme('br', 'brinquedos', 12),
  herois: imgTheme('he', 'herois', 12),
  mario: imgTheme('cog', 'cogumelos', 12),
  monstrinhos: imgTheme('mo', 'monstrinhos', 12),
  fantasia: imgTheme('fa', 'fantasia', 12),
  emocoes: imgTheme('em', 'emocoes', 12),
  encanadores: imgTheme('en', 'encanadores', 12),
  robos: imgTheme('ro', 'robos', 12),
  aventureiros: imgTheme('v', 'adv', 12),
};

const THEME_FACES = {};
function themeFaces(id) {
  if (THEME_FACES[id]) return THEME_FACES[id];
  let faces;
  if (IMG_THEMES[id]) faces = IMG_THEMES[id].map((f) => ({ face: f.id, img: f.img, hue: f.hue || 0 }));
  else if (ART_THEMES[id]) faces = ART_THEMES[id].map((a) => ({ face: `${id}:${a.id}`, svg: a.svg }));
  else if (CHAR_THEMES[id]) faces = CHAR_THEMES[id].map((ch) => ({ face: `${id}:${ch.id}`, svg: ch.svg }));
  else faces = (THEMES[id] || []).map((e) => ({ face: e, emoji: e, hue: 0 }));
  THEME_FACES[id] = faces;
  return faces;
}

// Fases: cost 0 = sempre aberta; cost > 0 = precisa comprar a chave
const THEME_LIST = [
  { id: 'animais',    icon: '🐶', key: 'themeAnimais',    cost: 0 },
  { id: 'frutas',     icon: '🍎', key: 'themeFrutas',     cost: 0 },
  { id: 'espaco',     icon: '🚀', key: 'themeEspaco',     cost: 0 },
  { id: 'oceano',     icon: '🐠', key: 'themeOceano',     cost: 0 },
  { id: 'dinos',      icon: '🦖', key: 'themeDinos',      cost: 30 },
  { id: 'comida',     icon: '🍕', key: 'themeComida',     cost: 50 },
  { id: 'brinquedos', icon: '🧸', key: 'themeBrinquedos', cost: 80 },
  { id: 'herois',     icon: '🦸', key: 'themeHerois',     cost: 120 },
  { id: 'mario',      icon: '🍄', key: 'themeMario',      cost: 160 },
  { id: 'monstrinhos',icon: '👾', key: 'themeMonstrinhos',cost: 200 },
  { id: 'encanadores',icon: '🔧', key: 'themeEncanadores',cost: 240 },
  { id: 'robos',      icon: '🤖', key: 'themeRobos',      cost: 280 },
  { id: 'fantasia',   icon: '🏰', key: 'themeFantasia',   cost: 320 },
  { id: 'emocoes',    icon: '😊', key: 'themeEmocoes',    cost: 360 },
  { id: 'aventureiros', icon: '🧭', key: 'themeAventureiros', cost: 420 },
  { id: 'criaturas',  icon: '🐣', key: 'themeCriaturas',  cost: 480 },
];
const THEME_IDS = new Set(THEME_LIST.map((x) => x.id));

const LEVELS = {
  facil:   { pairs: 8,  cols: 4, bonus: 5,  time: 100, key: 'levelFacil' },
  medio:   { pairs: 10, cols: 5, bonus: 10, time: 130, key: 'levelMedio' },
  dificil: { pairs: 12, cols: 6, bonus: 20, time: 160, key: 'levelDificil' },
};
const EXTRA_TIME_PER_PLAYER = 40;
const CONSOLATION_COINS = 3;

// Avatares ilustrados (com tom de pele) — ver js/avatars.js
const AVATARS = window.MM_AVATARS || { skins: ['#f1c27d'], list: [] };
const AVATAR_MAP = {};
AVATARS.list.forEach((a) => { AVATAR_MAP[a.id] = a; });
const AVATAR_IDS = AVATARS.list.map((a) => a.id);
const DEFAULT_AVATAR = AVATAR_IDS[0] || 'k1';
function avatarSVG(id, skinIdx) {
  const a = AVATAR_MAP[id] || AVATARS.list[0];
  if (!a) return '';
  if (a.img) return `<img class="avatar-img" src="${a.img}" alt="" draggable="false">`;
  const skin = AVATARS.skins[skinIdx] != null ? AVATARS.skins[skinIdx] : (AVATARS.skins[1] || AVATARS.skins[0]);
  return a.svg(a.human ? skin : undefined);
}
const PLAYER_KEYS = ['p1', 'p2', 'p3', 'p4'];

// Figurinhas colecionáveis (rarity 'legendary' = dourada e rara)
const STICKERS = [
  { id:'dino', emoji:'🦕', cat:'animais' }, { id:'panda', emoji:'🐼', cat:'animais' },
  { id:'gato', emoji:'😺', cat:'animais' }, { id:'pinguim', emoji:'🐧', cat:'animais' },
  { id:'tartaruga', emoji:'🐢', cat:'animais' }, { id:'leao', emoji:'🦁', cat:'animais' },
  { id:'raposa', emoji:'🦊', cat:'animais' }, { id:'coala', emoji:'🐨', cat:'animais' },
  { id:'cavalo', emoji:'🐴', cat:'animais' }, { id:'vaca', emoji:'🐮', cat:'animais' },
  { id:'polvo', emoji:'🐙', cat:'mar' }, { id:'baleia', emoji:'🐳', cat:'mar' },
  { id:'tubarao', emoji:'🦈', cat:'mar' }, { id:'golfinho', emoji:'🐬', cat:'mar' },
  { id:'peixe', emoji:'🐠', cat:'mar' }, { id:'caranguejo', emoji:'🦀', cat:'mar' },
  { id:'baiacu', emoji:'🐡', cat:'mar' }, { id:'concha', emoji:'🐚', cat:'mar' },
  { id:'foca', emoji:'🦭', cat:'mar' }, { id:'medusa', emoji:'🪼', cat:'mar' },
  { id:'sorvete', emoji:'🍦', cat:'comida' }, { id:'bolo', emoji:'🎂', cat:'comida' },
  { id:'pizza', emoji:'🍕', cat:'comida' }, { id:'hamburguer', emoji:'🍔', cat:'comida' },
  { id:'pirulito', emoji:'🍭', cat:'comida' }, { id:'donut', emoji:'🍩', cat:'comida' },
  { id:'morango', emoji:'🍓', cat:'comida' }, { id:'cupcake', emoji:'🧁', cat:'comida' },
  { id:'taco', emoji:'🌮', cat:'comida' }, { id:'cookie', emoji:'🍪', cat:'comida' },
  { id:'unicornio', emoji:'🦄', cat:'fantasia' }, { id:'dragao', emoji:'🐉', cat:'fantasia' },
  { id:'sereia', emoji:'🧜‍♀️', cat:'fantasia' }, { id:'fada', emoji:'🧚', cat:'fantasia' },
  { id:'robo', emoji:'🤖', cat:'fantasia' }, { id:'mago', emoji:'🎩', cat:'fantasia' },
  { id:'castelo', emoji:'🏰', cat:'fantasia' }, { id:'arcoiris', emoji:'🌈', cat:'fantasia' },
  { id:'estrela', emoji:'🌟', cat:'fantasia' }, { id:'pocao', emoji:'🧪', cat:'fantasia' },
  { id:'bola', emoji:'⚽', cat:'diversao' }, { id:'guitarra', emoji:'🎸', cat:'diversao' },
  { id:'balao', emoji:'🎈', cat:'diversao' }, { id:'pipa', emoji:'🪁', cat:'diversao' },
  { id:'jogo', emoji:'🎮', cat:'diversao' }, { id:'circo', emoji:'🎪', cat:'diversao' },
  { id:'medalha', emoji:'🏅', cat:'diversao' }, { id:'coroa', emoji:'👑', cat:'diversao' },
  { id:'dado', emoji:'🎲', cat:'diversao' }, { id:'alvo', emoji:'🎯', cat:'diversao' },
  // Lendárias douradas (raras)
  { id:'genio', emoji:'🧞', cat:'lendarias', legendary:true }, { id:'fenix', emoji:'🐲', cat:'lendarias', legendary:true },
  { id:'pavao', emoji:'🦚', cat:'lendarias', legendary:true }, { id:'cisne', emoji:'🦢', cat:'lendarias', legendary:true },
  { id:'varinha', emoji:'🪄', cat:'lendarias', legendary:true }, { id:'estrelacadente', emoji:'🌠', cat:'lendarias', legendary:true },
  { id:'diamante', emoji:'💎', cat:'lendarias', legendary:true }, { id:'trofeu', emoji:'🏆', cat:'lendarias', legendary:true },
];

const CATEGORIES = [
  { id: 'animais', key: 'catAnimais', emoji: '🐾' },
  { id: 'mar', key: 'catMar', emoji: '🌊' },
  { id: 'comida', key: 'catComida', emoji: '🍔' },
  { id: 'fantasia', key: 'catFantasia', emoji: '🦄' },
  { id: 'diversao', key: 'catDiversao', emoji: '🎉' },
  { id: 'lendarias', key: 'catLendarias', emoji: '✨', legendary: true },
];

const LEGENDARY_CHANCE = 0.14;
const ALL_STICKERS_BONUS = 25;

// Níveis (rank) do jogador conforme pares já encontrados
const RANK_TIERS = [
  { min: 0,   emoji: '🥉', key: 'rankBronze' },
  { min: 60,  emoji: '🥈', key: 'rankPrata' },
  { min: 180, emoji: '🥇', key: 'rankOuro' },
  { min: 400, emoji: '💎', key: 'rankDiamante' },
  { min: 800, emoji: '👑', key: 'rankMestre' },
];
function rankFor(xp) { let r = RANK_TIERS[0]; for (const tier of RANK_TIERS) if (xp >= tier.min) r = tier; return r; }
function nextRankFor(xp) { return RANK_TIERS.find((tier) => tier.min > xp) || null; }

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
  get menuMusic() { const m = localStorage.getItem('mm_music'); return MUSIC_IDS.has(m) ? m : 'home'; },
  set menuMusic(v) { if (MUSIC_IDS.has(v)) localStorage.setItem('mm_music', v); },
  get name() { return (localStorage.getItem('mm_name') || '').slice(0, 12); },
  set name(v) { localStorage.setItem('mm_name', String(v).slice(0, 12)); },
  get avatar() { const a = localStorage.getItem('mm_avatar'); return AVATAR_IDS.includes(a) ? a : DEFAULT_AVATAR; },
  set avatar(v) { if (AVATAR_IDS.includes(v)) localStorage.setItem('mm_avatar', v); },
  get skin() { const n = parseInt(localStorage.getItem('mm_skin') || '1', 10); return (n >= 0 && n < AVATARS.skins.length) ? n : 1; },
  set skin(v) { const n = parseInt(v, 10); if (n >= 0 && n < AVATARS.skins.length) localStorage.setItem('mm_skin', String(n)); },
  get records() { try { return JSON.parse(localStorage.getItem('mm_records') || '{}'); } catch { return {}; } },
  set records(v) { localStorage.setItem('mm_records', JSON.stringify(v)); },
};

function getRecords() {
  const r = storage.records;
  return { xp: r.xp || 0, wins: r.wins || 0, fast: r.fast || {}, ppm: r.ppm || 0 };
}

function isThemeUnlocked(id) {
  const th = THEME_LIST.find((x) => x.id === id);
  return !th || th.cost === 0 || storage.unlocked.includes(id);
}

// ---------- Sons (Web Audio, sem arquivos) ----------

const sound = (() => {
  let ctx = null;
  let master = null;
  let unlocked = false;
  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch { return null; }
      try {
        master = ctx.createGain();
        master.gain.value = 0.9;
        master.connect(ctx.destination);
      } catch { master = null; }
    }
    // resume cobre 'suspended' E 'interrupted' (iOS) — antes só tratava 'suspended'
    if (ctx.state !== 'running' && ctx.resume) {
      try { const p = ctx.resume(); if (p && p.catch) p.catch(() => {}); } catch { /* ignora */ }
    }
    return ctx;
  }
  // Destrava o áudio no 1º gesto do usuário: cria o contexto, dá resume e toca
  // um buffer MUDO (obrigatório no iOS). Cobre web, Android e iOS.
  function unlock() {
    // Após o aparelho dormir, o iOS deixa o contexto preso em 'interrupted'
    // (e 'closed' nunca volta); resume() não recupera. Recria do zero no gesto.
    if (ctx && (ctx.state === 'interrupted' || ctx.state === 'closed')) {
      try { if (ctx.state !== 'closed' && ctx.close) ctx.close(); } catch { /* ignora */ }
      ctx = null; master = null; unlocked = false;
    }
    const c = ensureCtx();
    if (!c) return;
    if (!unlocked) {
      try {
        const buf = c.createBuffer(1, 1, 22050);
        const src = c.createBufferSource();
        src.buffer = buf;
        src.connect(c.destination);
        src.start(0);
        unlocked = true;
      } catch { /* ignora */ }
    }
    if (c.state !== 'running' && c.resume) { try { c.resume(); } catch { /* ignora */ } }
  }
  function resume() { unlock(); }
  function tone(freq, start, duration, type = 'sine', volume = 0.18) {
    try {
      const c = ensureCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      const t0 = c.currentTime + 0.03 + start;   // pequena folga p/ não agendar no passado
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(volume, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
      osc.connect(gain).connect(master || c.destination);
      osc.start(t0);
      osc.stop(t0 + duration + 0.05);
    } catch { /* áudio bloqueado — segue sem som */ }
  }
  function state() { return ctx ? ctx.state : 'sem-contexto'; }
  function play(name) {
    if (!storage.sound) return;
    ensureCtx();   // garante contexto ativo a cada som pedido
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
      case 'legendary': [784, 988, 1175, 1568, 1175, 1568, 2093].forEach((f, i) => tone(f, i * 0.1, 0.22, 'triangle', 0.13)); break;
      case 'win':   [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.18)); break;
    }
  }
  return { play, tone, resume, unlock, state };
})();

// Destrava/religa o áudio no 1º gesto e em QUALQUER toque/tecla depois (cobre o
// bloqueio de autoplay na web, Android e iOS, e quando o iOS interrompe o som).
['pointerdown', 'touchstart', 'touchend', 'mousedown', 'click', 'keydown'].forEach((ev) =>
  document.addEventListener(ev, () => sound.unlock(), { passive: true, capture: true }));

// ---------- Música de fundo ----------

const music = (() => {
  const C4=261.6, D4=293.7, E4=329.6, F4=349.2, G4=392, A4=440, B4=493.9,
        C5=523.3, D5=587.3, E5=659.3, F5=698.5, G5=784, A5=880, _=0;
  const SONGS = {
    // Músicas de menu (escolhíveis pelo botão 🎵)
    home:     { tempo: 200, type: 'triangle', vol: 0.05,
                notes: [C5,_,G4,A4, B4,C5,D5,_, E5,D5,C5,B4, C5,_,G4,_] },
    aventura: { tempo: 190, type: 'triangle', vol: 0.05,
                notes: [E4,A4,B4,C5, D5,_,C5,B4, A4,B4,C5,A4, E5,_,_,_] },
    calma:    { tempo: 320, type: 'sine', vol: 0.06,
                notes: [C5,E5,G4,_, A4,C5,E5,_, F4,A4,C5,_, G4,B4,D5,_] },
    espacial: { tempo: 240, type: 'sine', vol: 0.05,
                notes: [A4,_,E5,_, D5,_,A4,_, F5,_,E5,_, C5,_,A4,_] },
    heroi:    { tempo: 175, type: 'square', vol: 0.03,
                notes: [G4,G4,G4,C5, _,C5,_,G4, A4,B4,C5,D5, E5,_,C5,_] },
    // Músicas de partida (por nível)
    facil:    { tempo: 300, type: 'triangle', vol: 0.045,
                notes: [C4,E4,G4,E4, F4,A4,C5,A4, G4,B4,D5,B4, C5,_,G4,_] },
    medio:    { tempo: 230, type: 'triangle', vol: 0.045,
                notes: [E4,G4,A4,_, A4,C5,B4,_, G4,A4,B4,D5, C5,B4,A4,G4] },
    dificil:  { tempo: 175, type: 'square', vol: 0.028,
                notes: [A4,A4,C5,A4, E5,_,D5,C5, A4,A4,C5,E5, G5,_,E5,_] },
  };
  let gen = 0, timer = null, current = null;
  function play(name) {
    if (current === name && timer) return;
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
  function playMenu() { play(storage.menuMusic); }
  function stop() { gen++; current = null; if (timer) { clearTimeout(timer); timer = null; } }
  return { play, playMenu, stop };
})();

const MUSIC_CHOICES = [
  { id: 'home', key: 'musAlegre' }, { id: 'aventura', key: 'musAventura' },
  { id: 'calma', key: 'musCalma' }, { id: 'espacial', key: 'musEspacial' },
  { id: 'heroi', key: 'musHeroi' },
];
const MUSIC_IDS = new Set(MUSIC_CHOICES.map((m) => m.id));

// ---------- Voz da coruja: escolhe a melhor voz FEMININA e NATURAL do aparelho ----------
const owlVoice = (() => {
  const synth = window.speechSynthesis || null;
  let voices = [];
  function load() { try { voices = synth ? synth.getVoices() : []; } catch { voices = []; } }
  if (synth) { load(); try { synth.onvoiceschanged = load; } catch { /* ignora */ } }
  const BCP = { pt: 'pt-BR', en: 'en-US', fr: 'fr-FR' };
  // vozes femininas naturais conhecidas (iOS / Android / Windows / Chrome)
  const FEMALE = {
    pt: ['luciana', 'google português', 'maria', 'francisca', 'joana', 'fernanda', 'camila', 'vitória', 'helena', 'catarina'],
    en: ['samantha', 'karen', 'victoria', 'moira', 'tessa', 'serena', 'allison', 'ava', 'susan', 'zira', 'aria', 'jenny', 'michelle', 'google us english', 'google uk english female', 'female'],
    fr: ['amélie', 'amelie', 'audrey', 'aurelie', 'aurélie', 'marie', 'julie', 'hortense', 'denise', 'google français', 'female'],
  };
  const GOOD = ['natural', 'neural', 'enhanced', 'premium', 'google', 'siri'];
  const BAD = ['compact', 'espeak', 'pico', 'robot'];
  // nomes tipicamente masculinos — evitar
  const MALE = ['daniel', 'thomas', 'felipe', 'ricardo', 'jorge', 'diego', 'paul', 'fred', 'alex', 'aaron', 'male', 'masculin', 'homme'];
  function score(v, code) {
    const n = (v.name || '').toLowerCase();
    const vl = (v.lang || '').replace('_', '-').toLowerCase();
    if (vl.slice(0, 2) !== code) return -999;
    let s = 0;
    if (vl === BCP[code].toLowerCase()) s += 2;                       // dialeto exato (pt-BR etc.)
    if (FEMALE[code].some((f) => n.includes(f))) s += 8;             // feminina conhecida
    if (GOOD.some((g) => n.includes(g))) s += 4;                      // qualidade alta
    if (v.localService === false) s += 1;                            // voz de nuvem (costuma ser melhor)
    if (BAD.some((b) => n.includes(b))) s -= 5;
    if (MALE.some((m) => n.includes(m))) s -= 7;                      // evita voz masculina
    return s;
  }
  function pickVoice(code) {
    let best = null, bestS = -1000;
    for (const v of voices) { const s = score(v, code); if (s > bestS) { bestS = s; best = v; } }
    return bestS > -900 ? best : null;
  }
  // Vozes GRAVADAS (extraídas do vídeo) por idioma — quando existe, usa o áudio
  // real (voz humana natural) no lugar da síntese do navegador.
  const FILES = { pt: 'audio/owl-pt.mp3?v=26' };
  const clips = {};
  for (const k in FILES) { try { const a = new Audio(FILES[k]); a.preload = 'auto'; clips[k] = a; } catch { /* ignora */ } }
  function speakTTS() {
    if (!synth) return;
    try {
      synth.cancel();
      const u = new SpeechSynthesisUtterance(t('owlGreeting'));
      u.lang = BCP[lang] || 'pt-BR';
      const v = pickVoice(lang);
      if (v) u.voice = v;
      u.pitch = 1.06;
      u.rate = 0.95;
      u.volume = 1;
      synth.speak(u);
    } catch { /* voz indisponível no aparelho */ }
  }
  function speak() {
    if (!storage.sound) return;
    const clip = clips[lang];
    if (clip) {                              // voz gravada do vídeo
      try { if (synth) synth.cancel(); clip.currentTime = 0; const p = clip.play(); if (p && p.catch) p.catch(speakTTS); return; }
      catch { /* cai p/ síntese */ }
    }
    speakTTS();
  }
  return { speak, supported: !!synth };
})();

// ---------- Elementos e telas ----------

const $ = (sel) => document.querySelector(sel);
const screens = {
  home: $('#screen-home'), profile: $('#screen-profile'), setup: $('#screen-setup'),
  invite: $('#screen-invite'), join: $('#screen-join'), game: $('#screen-game'),
  timeup: $('#screen-timeup'), win: $('#screen-win'), album: $('#screen-album'),
  records: $('#screen-records'),
};
const MENU_SCREENS = new Set(['home', 'profile', 'setup', 'album', 'invite', 'join', 'records']);

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'setup') renderProfileChip();
  if (MENU_SCREENS.has(name)) music.playMenu();
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
  renderMusicMenu();
  updateStartButton();
  const cur = currentScreen();
  if (cur === 'game') { renderScoreboard(); updateMoves(); }
  if (cur === 'album') renderAlbum();
  if (cur === 'records') renderRecords();
  if (cur === 'win') { renderWinTexts(); if (game.online) updateRematchUI(); }
  if (cur === 'home') owlVoice.speak();   // troca de idioma -> coruja fala no novo idioma
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

const AVATAR_PICKERS = ['profile-avatar-options', 'join-avatar-options'];
const SKIN_PICKERS = ['profile-skin-options', 'join-skin-options'];

function renderAvatarPicker(id) {
  const row = document.getElementById(id);
  if (!row) return;
  row.innerHTML = AVATARS.list.map((a) =>
    `<button class="avatar-opt ${a.id === storage.avatar ? 'selected' : ''}" data-avatar="${a.id}" aria-label="avatar">${avatarSVG(a.id, storage.skin)}</button>`
  ).join('');
}
function renderSkinPicker(id) {
  const row = document.getElementById(id);
  if (!row) return;
  row.innerHTML = AVATARS.skins.map((c, i) =>
    `<button class="skin-opt ${i === storage.skin ? 'selected' : ''}" data-skin="${i}" style="background:${c}" aria-label="cor de pele"></button>`
  ).join('');
}
function renderAllPickers() {
  AVATAR_PICKERS.forEach(renderAvatarPicker);
  SKIN_PICKERS.forEach(renderSkinPicker);
}

function setupProfileControls() {
  AVATAR_PICKERS.forEach((id) => {
    renderAvatarPicker(id);
    const row = document.getElementById(id);
    if (row) row.addEventListener('click', (e) => {
      const b = e.target.closest('[data-avatar]');
      if (!b) return;
      storage.avatar = b.dataset.avatar;
      sound.play('click');
      AVATAR_PICKERS.forEach(renderAvatarPicker);
    });
  });
  // Sem tom de pele (avatares são imagens prontas): esconde o seletor
  SKIN_PICKERS.forEach((id) => {
    const row = document.getElementById(id);
    if (!row) return;
    if (AVATARS.skins.length === 0) {
      row.hidden = true;
      const h = row.previousElementSibling;
      if (h && h.tagName === 'H3') h.hidden = true;
      return;
    }
    renderSkinPicker(id);
    row.addEventListener('click', (e) => {
      const b = e.target.closest('[data-skin]');
      if (!b) return;
      storage.skin = b.dataset.skin;
      sound.play('click');
      renderAllPickers();
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

function myProfile() { return { name: storage.name, avatarId: storage.avatar, skin: storage.skin }; }

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
  $('#profile-chip-avatar').innerHTML = avatarSVG(storage.avatar, storage.skin);
  $('#profile-chip-name').textContent = storage.name;
}

function goSetup() {
  if (!storage.name.trim()) { showScreen('profile'); return; }
  duelPicking = false;
  renderProfileChip();
  renderThemeOptions();
  updateStartButton();
  showScreen('setup');
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
bindOptionRow('player-options', 'players', (v) => {
  config.players = parseInt(v, 10);
  updateStartButton();
});
bindOptionRow('level-options', 'level', (v) => (config.level = v));

function updateStartButton() {
  if (duelPicking) { $('#start-label').textContent = `${t('rematchYes')} ⚔️`; return; }
  $('#start-label').textContent = config.players === 2 ? t('startQR') : `${t('start')} 🎉`;
}

// ---------- Fases (temas) com cadeado ----------

const coinTiny = '<span class="coin-badge tiny" aria-hidden="true">★</span>';

function themeIcon(th) {
  if (IMG_THEMES[th.id] && IMG_THEMES[th.id][0]) {
    return `<span class="opt-svg"><img class="opt-img" src="${IMG_THEMES[th.id][0].img}" alt=""></span>`;
  }
  const art = ART_THEMES[th.id];
  if (art && art[0]) return `<span class="opt-svg">${art[0].svg}</span>`;
  if (th.char && CHAR_THEMES[th.id] && CHAR_THEMES[th.id][0]) {
    return `<span class="opt-svg">${CHAR_THEMES[th.id][0].svg}</span>`;
  }
  return th.icon;
}

function renderThemeOptions() {
  const row = $('#theme-options');
  row.innerHTML = THEME_LIST.map((th) => {
    const locked = !isThemeUnlocked(th.id);
    return `
      <button class="opt ${config.theme === th.id ? 'selected' : ''} ${locked ? 'locked' : ''}" data-theme="${th.id}">
        <span class="opt-emoji">${locked ? '🔒' : themeIcon(th)}</span>
        <span>${t(th.key)}</span>
        ${locked ? `<small class="cost">🗝️ ${th.cost}${coinTiny}</small>` : ''}
      </button>`;
  }).join('');
}

$('#theme-options').addEventListener('click', (e) => {
  const btn = e.target.closest('.opt');
  if (!btn) return;
  const id = btn.dataset.theme;
  if (!isThemeUnlocked(id)) { sound.play('click'); openUnlockModal(id); return; }
  config.theme = id;
  sound.play('click');
  renderThemeOptions();
});

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
function closeUnlockModal() { $('#unlock-modal').hidden = true; pendingUnlock = null; }

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

// STUN + TURN (relay) para conectar mesmo em redes de celular (CGNAT),
// onde a conexão direta entre os aparelhos costuma falhar só com STUN.
const PEER_CONFIG = {
  config: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'turn:openrelay.metered.ca:80', username: 'openrelayproject', credential: 'openrelayproject' },
      { urls: 'turn:openrelay.metered.ca:443', username: 'openrelayproject', credential: 'openrelayproject' },
      { urls: 'turn:openrelay.metered.ca:443?transport=tcp', username: 'openrelayproject', credential: 'openrelayproject' },
    ],
  },
};

function netDestroy() {
  try { if (conn) conn.close(); } catch { /* já fechada */ }
  try { if (peer) peer.destroy(); } catch { /* já destruído */ }
  peer = null; conn = null; netGuestProfile = null;
}
function netSend(msg) {
  try { if (conn && conn.open) conn.send(msg); } catch { /* caiu; o close trata */ }
}
function sanitizeProfile(p) {
  const name = String((p && p.name) || '').replace(/[<>&"']/g, '').slice(0, 12);
  const avatarId = AVATAR_IDS.includes(p && p.avatarId) ? p.avatarId : DEFAULT_AVATAR;
  let skin = parseInt(p && p.skin, 10);
  if (!(skin >= 0 && skin < AVATARS.skins.length)) skin = 1;
  return { name, avatarId, skin };
}

let inviteUrl = '';
let inviteTimeout = null;

function makeRoomId() {
  if (window.crypto && crypto.randomUUID) return 'mm-' + crypto.randomUUID();
  return 'mm-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function inviteFailed() {
  clearTimeout(inviteTimeout);
  if (currentScreen() !== 'invite') { handleDisconnect(); return; }
  $('#invite-status').textContent = t('connLost');
  $('#btn-invite-retry').hidden = false;
}

function hostInvite() {
  netDestroy();
  clearTimeout(inviteTimeout);
  showScreen('invite');
  $('#btn-invite-retry').hidden = true;

  const roomId = makeRoomId();
  inviteUrl = `${location.origin}${location.pathname}?join=${encodeURIComponent(roomId)}`;
  const qr = qrcode(0, 'M');
  qr.addData(inviteUrl);
  qr.make();
  $('#qr-box').innerHTML = qr.createSvgTag({ cellSize: 5, margin: 2 });
  $('#invite-status').textContent = t('connecting');

  peer = new Peer(roomId, PEER_CONFIG);
  peer.on('open', () => {
    clearTimeout(inviteTimeout);
    if (currentScreen() === 'invite') $('#invite-status').textContent = t('waitingPlayer');
  });
  peer.on('disconnected', () => { try { peer.reconnect(); } catch { /* ignora */ } });
  peer.on('connection', (c) => {
    if (conn) { try { c.close(); } catch { /* lotado */ } return; }
    conn = c;
    conn.on('data', handleNetData);
    conn.on('close', handleDisconnect);
    conn.on('error', handleDisconnect);
  });
  peer.on('error', inviteFailed);
  inviteTimeout = setTimeout(() => {
    if (currentScreen() === 'invite' && (!peer || !peer.open)) inviteFailed();
  }, 20000);
}

async function shareInviteLink() {
  if (!inviteUrl) return;
  try { if (navigator.share) { await navigator.share({ title: 'Memória Mágica', url: inviteUrl }); return; } }
  catch { /* cancelado — tenta copiar */ }
  try { await navigator.clipboard.writeText(inviteUrl); showToast(t('linkCopied')); }
  catch { /* sem clipboard */ }
}

let joinHostId = null;

function joinGame() {
  if (!joinHostId) return;
  if (!requireName('join-name-input')) return;
  const btn = $('#btn-join');
  btn.disabled = true;
  $('#join-status').textContent = t('connecting');
  netDestroy();
  peer = new Peer(PEER_CONFIG);
  peer.on('disconnected', () => { try { peer.reconnect(); } catch { /* ignora */ } });
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
  const faces = themeFaces(config.theme);
  const need = Math.min(level.pairs, faces.length);
  const idxs = shuffle([...faces.keys()]).slice(0, need);
  const deckIdx = shuffle([...idxs, ...idxs]);
  const profiles = [sanitizeProfile(myProfile()), netGuestProfile];
  netSend({ type: 'start', theme: config.theme, level: config.level, deck: deckIdx, profiles });
  startGame({ online: true, myIndex: 0, deck: deckIdx, profiles });
}

// ---------- Revanche (duelo) ----------

let rematchMe = false, rematchPeer = false, peerLeft = false;
let duelPicking = false;   // anfitrião escolhendo nova fase com o duelo ainda conectado

function resetRematch() { rematchMe = false; rematchPeer = false; peerLeft = false; }

function openRematchModal() {
  updateRematchUI();
  $('#rematch-modal').hidden = false;
}
function closeRematchModal() { $('#rematch-modal').hidden = true; }

function updateRematchUI() {
  const status = $('#rematch-status');
  const yes = $('#btn-rematch-yes');
  const phase = $('#btn-rematch-phase');
  if (peerLeft) {
    yes.disabled = true;
    if (phase) phase.disabled = true;
    status.textContent = t('peerLeft');
    return;
  }
  if (phase) phase.disabled = false;
  if (rematchMe) {
    yes.disabled = true;
    status.textContent = rematchPeer ? '' : t('waitingRematch');
  } else {
    yes.disabled = false;
    status.textContent = rematchPeer ? t('peerWantsRematch') : '';
  }
}

function tryStartRematch() {
  if (rematchMe && rematchPeer && !peerLeft) {
    resetRematch();
    closeRematchModal();
    // Só o anfitrião monta o novo baralho; o convidado espera o 'start'
    if (game.myIndex === 0) hostStartMatch();
  }
}

function requestRematch() {
  if (rematchMe || peerLeft) return;
  sound.play('click');
  rematchMe = true;
  netSend({ type: 'rematch' });
  updateRematchUI();
  tryStartRematch();
}

// Trocar de fase mantendo o duelo conectado: o anfitrião (índice 0) escolhe a
// nova fase na tela de preparar; o convidado espera o 'start'.
function chooseNewPhase() {
  if (peerLeft) return;
  sound.play('click');
  resetRematch();
  closeRematchModal();
  if (game.myIndex === 0) {
    duelPicking = true;
    renderThemeOptions();
    updateStartButton();
    showScreen('setup');
    showToast(t('rematchPhase') + ' 🗺️');
  } else {
    // convidado pede ao anfitrião e fica aguardando
    netSend({ type: 'pickphase' });
    openRematchModal();
    $('#rematch-status').textContent = t('waitingPhase');
    $('#btn-rematch-yes').disabled = true;
    $('#btn-rematch-phase').disabled = true;
  }
}

function handleNetData(data) {
  if (!data || typeof data !== 'object') return;
  switch (data.type) {
    case 'hello':
      if (currentScreen() !== 'invite') return;
      netGuestProfile = sanitizeProfile(data);
      hostStartMatch();
      break;
    case 'rematch':
      rematchPeer = true;
      if (currentScreen() === 'win') updateRematchUI();
      tryStartRematch();
      break;
    case 'pickphase':
      // o outro jogador pediu para trocar de fase; só o anfitrião escolhe
      if (game.myIndex === 0 && !peerLeft) {
        resetRematch();
        closeRematchModal();
        duelPicking = true;
        renderThemeOptions();
        updateStartButton();
        showScreen('setup');
        showToast(t('rematchPhase') + ' 🗺️');
      }
      break;
    case 'start': {
      if (!THEME_IDS.has(data.theme) || !LEVELS[data.level] || !Array.isArray(data.deck)) return;
      const faces = themeFaces(data.theme);
      const maxPairs = Math.min(LEVELS[data.level].pairs, faces.length);
      const deck = data.deck.map((i) => parseInt(i, 10)).filter((i) => i >= 0 && i < faces.length);
      if (deck.length < 4 || deck.length % 2 !== 0 || deck.length > maxPairs * 2) return;
      config.theme = data.theme;
      config.level = data.level;
      const profiles = (Array.isArray(data.profiles) ? data.profiles : []).slice(0, 2).map(sanitizeProfile);
      while (profiles.length < 2) profiles.push({ name: '', avatarId: DEFAULT_AVATAR, skin: 1 });
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
  if (cur === 'game' && game.online && !game.over && !game.finishing) {
    showToast(t('connLost')); leaveGame(); showScreen('home');
  } else if ((cur === 'win' || game.finishing) && game.online) {
    // Partida acabou (ou está terminando) e o outro saiu: só deixa sair
    peerLeft = true; rematchPeer = false;
    updateRematchUI();
    netDestroy();
  } else if (cur === 'invite') {
    showToast(t('connLost')); netDestroy(); showScreen('setup');
  } else if (cur === 'join') {
    showToast(t('connLost')); netDestroy();
    $('#btn-join').disabled = false; $('#join-status').textContent = '';
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
  players: [], current: 0, deck: [], flipped: [], lock: false, over: false, paused: false,
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
  const faces = themeFaces(config.theme);
  game.online = !!opts.online;
  game.myIndex = opts.myIndex ?? 0;
  remoteQueue.length = 0;
  resetRematch();
  duelPicking = false;
  closeRematchModal();

  // Algumas fases têm menos figuras que o nível pede (ex.: 8 dinossauros);
  // nesses casos a rodada usa só o que a fase tem.
  const need = Math.min(level.pairs, faces.length);
  let deckFaces;
  if (opts.deck) {
    deckFaces = opts.deck.map((i) => faces[i]);
  } else {
    const picked = shuffle(faces.slice()).slice(0, need);
    deckFaces = shuffle([...picked, ...picked]);
  }

  if (game.online) {
    game.players = opts.profiles.map((p, i) => ({ key: PLAYER_KEYS[i], avatarId: p.avatarId, skin: p.skin, name: p.name || null, pairs: 0 }));
  } else {
    const others = AVATAR_IDS.filter((a) => a !== storage.avatar);
    game.players = Array.from({ length: config.players }, (_, i) => ({
      key: PLAYER_KEYS[i],
      avatarId: i === 0 ? storage.avatar : (others[i - 1] || DEFAULT_AVATAR),
      skin: storage.skin,
      name: i === 0 ? (storage.name || null) : null,
      pairs: 0,
    }));
  }

  game.current = 0;
  game.deck = deckFaces.map((f) => ({ face: f.face, emoji: f.emoji, hue: f.hue || 0, svg: f.svg, img: f.img, matched: false }));
  game.flipped = [];
  game.lock = false;
  game.over = false;
  game.finishing = false;
  game.moves = 0;
  game.matchedPairs = 0;
  game.totalPairs = opts.deck ? opts.deck.length / 2 : need;
  game.startTime = Date.now();

  closeRematchModal();
  clearPause();
  $('#btn-pause').hidden = game.online || game.players.length > 1;
  renderBoard(level);
  renderScoreboard();
  updateMoves();
  showScreen('game');

  $('#timer-wrap').hidden = game.online;
  if (game.online) stopTimer();
  else startTimer(level.time + (config.players - 1) * EXTRA_TIME_PER_PLAYER);

  music.play(config.level);
  requestAnimationFrame(() => requestAnimationFrame(fitBoard));
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
    let front, frontClass = '', frontStyle = '';
    if (card.img) {
      const hf = card.hue ? ` style="filter:hue-rotate(${card.hue}deg)"` : '';
      front = `<img class="card-img" src="${card.img}"${hf} alt="" draggable="false">`;
      frontClass = 'has-img';
    } else if (card.svg) {
      front = card.svg; frontClass = 'has-svg';
    } else {
      front = card.emoji;
      if (card.hue) frontStyle = ` style="filter:hue-rotate(${card.hue}deg) saturate(1.6)"`;
    }
    el.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-back">❓</div>
        <div class="card-face card-front ${frontClass}"${frontStyle}>${front}</div>
      </div>`;
    el.addEventListener('click', () => flipCard(idx, el));
    board.appendChild(el);
  });
}

// Ajusta o tamanho das cartas para o tabuleiro inteiro caber na tela (sem rolagem).
// Escolhe o número de colunas que deixa as cartas o maior possível cabendo em
// largura E altura disponíveis — adaptando-se a cada tela e orientação.
function fitBoard() {
  if (currentScreen() !== 'game') return;
  const board = $('#board');
  const n = game.deck.length;
  if (!n) return;

  const ratio = 1.06;                              // altura/largura de cada carta
  const gap = window.innerWidth < 420 ? 6 : 8;
  const availW = Math.min(window.innerWidth, 720) - 24;
  const footer = document.querySelector('#screen-game .game-footer');
  const top = board.getBoundingClientRect().top + window.scrollY;
  // reserva: rodapé + sua margem + respiro inferior (evita qualquer rolagem)
  const footerH = (footer ? footer.offsetHeight : 0) + 34;
  const availH = window.innerHeight - top - footerH;
  if (availW <= 0 || availH <= 0) return;

  let best = { cols: 2, size: 0 };
  const maxCols = Math.min(n, 8);
  for (let cols = 2; cols <= maxCols; cols++) {
    const rows = Math.ceil(n / cols);
    const w = (availW - gap * (cols - 1)) / cols;
    const h = (availH - gap * (rows - 1)) / rows;
    const size = Math.min(w, h / ratio);
    if (size > best.size) best = { cols, size };
  }
  const size = Math.max(28, Math.min(best.size, 116));
  board.dataset.cols = best.cols;
  board.classList.add('fitted');
  board.style.gridTemplateColumns = `repeat(${best.cols}, ${size}px)`;
  board.style.gridAutoRows = `${Math.round(size * ratio)}px`;
  board.style.gap = `${gap}px`;
}

let fitTimer = null;
function scheduleFit() {
  clearTimeout(fitTimer);
  fitTimer = setTimeout(fitBoard, 120);
}
window.addEventListener('resize', () => { if (currentScreen() === 'game') scheduleFit(); });
window.addEventListener('orientationchange', () => { if (currentScreen() === 'game') scheduleFit(); });

function playerLabel(p) { return p.name ? esc(p.name) : t(p.key); }

function renderScoreboard() {
  const sb = $('#scoreboard');
  if (game.players.length === 1) {
    sb.innerHTML = `
      <div class="player-tag turn">
        <span class="avatar">${avatarSVG(game.players[0].avatarId, game.players[0].skin)}</span>
        ${t('pairsLabel')} <span class="score">${game.matchedPairs}/${game.totalPairs}</span>
      </div>`;
    return;
  }
  sb.innerHTML = game.players.map((p, i) => `
      <div class="player-tag ${i === game.current ? 'turn' : ''} ${game.online && i === game.myIndex ? 'me' : ''}">
        <span class="avatar">${avatarSVG(p.avatarId, p.skin)}</span>${playerLabel(p)}
        <span class="score">${p.pairs}</span>
      </div>`).join('');
}

function updateMoves() { $('#moves-label').textContent = t('moves', { n: game.moves }); }

// ---------- Cronômetro ----------

let timeLeft = 0;
let timerInt = null;

function startTimer(seconds) { stopTimer(); timeLeft = seconds; renderTimer(); timerInt = setInterval(timerTick, 1000); }
function stopTimer() { if (timerInt) { clearInterval(timerInt); timerInt = null; } }
function timerTick() {
  timeLeft--;
  renderTimer();
  if (timeLeft <= 5 && timeLeft > 0) sound.play('tick');
  if (timeLeft <= 0) { stopTimer(); if (game.matchedPairs < game.totalPairs) timeUp(); }
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
  game.over = true; game.lock = true;
  music.stop(); sound.play('timeup');
  showScreen('timeup');
}

// ---------- Pausa (solo) ----------
function pauseGame() {
  if (game.over || game.paused || currentScreen() !== 'game') return;
  game.paused = true;
  stopTimer();
  music.stop();
  $('#board').classList.add('paused');
  $('#pause-modal').hidden = false;
}
function resumeGame() {
  if (!game.paused) return;
  game.paused = false;
  $('#board').classList.remove('paused');
  $('#pause-modal').hidden = true;
  if (!game.online && timeLeft > 0 && !game.over && !timerInt) timerInt = setInterval(timerTick, 1000);
  if (storage.sound) music.play(config.level);
}
function clearPause() {
  game.paused = false;
  $('#board').classList.remove('paused');
  $('#pause-modal').hidden = true;
}

document.addEventListener('visibilitychange', () => {
  const cur = currentScreen();
  if (document.hidden) {
    music.stop();
    if (cur === 'game') stopTimer();
  } else if (sound.resume(), cur === 'game' && !game.over && !game.paused) {
    if (!game.online && timeLeft > 0 && !timerInt) timerInt = setInterval(timerTick, 1000);
    music.play(config.level);
  } else if (MENU_SCREENS.has(cur)) {
    music.playMenu();
  }
});

// ---------- Virar cartas ----------

function flipCard(idx, el, remote = false) {
  if (game.lock || game.over || game.paused || game.deck[idx].matched || game.flipped.includes(idx)) return;
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

  if (game.deck[a].face === game.deck[b].face) {
    game.deck[a].matched = true;
    game.deck[b].matched = true;
    game.matchedPairs++;
    game.players[game.current].pairs++;
    if (game.matchedPairs === game.totalPairs) { game.finishing = true; stopTimer(); }
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

// ---------- Sorteio de figurinha (com lendárias raras) ----------

function drawSticker() {
  const owned = storage.stickers;
  const legMissing = STICKERS.filter((s) => s.legendary && !owned.includes(s.id));
  const normMissing = STICKERS.filter((s) => !s.legendary && !owned.includes(s.id));
  let pool = null;
  if (legMissing.length && (Math.random() < LEGENDARY_CHANCE || normMissing.length === 0)) pool = legMissing;
  else if (normMissing.length) pool = normMissing;
  else if (legMissing.length) pool = legMissing;
  if (!pool) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ---------- Recordes / ranking ----------

function updateSoloRecords(secondsUsed, pairs) {
  const r = getRecords();
  let beat = false;
  const lvl = config.level;
  if (!r.fast[lvl] || secondsUsed < r.fast[lvl]) { r.fast[lvl] = secondsUsed; beat = true; }
  const ppm = secondsUsed > 0 ? Math.round((pairs / secondsUsed) * 60) : 0;
  if (ppm > r.ppm) { r.ppm = ppm; beat = true; }
  storage.records = r;
  return { beat, ppm };
}

function addXp(pairs, won) {
  const r = getRecords();
  r.xp = (r.xp || 0) + pairs;
  if (won) r.wins = (r.wins || 0) + 1;
  storage.records = r;
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
    const ranked = game.players.map((p, i) => ({ ...p, index: i })).sort((x, y) => y.pairs - x.pairs);
    const best = ranked[0].pairs;
    const tie = ranked.filter((p) => p.pairs === best).length > 1;
    result = {
      tie, winnerIndex: ranked[0].index, winnerKey: ranked[0].key,
      winnerName: ranked[0].name, winnerAvatar: avatarSVG(ranked[0].avatarId, ranked[0].skin),
      ranking: ranked.map((p) => ({ avatar: avatarSVG(p.avatarId, p.skin), name: p.name, pairs: p.pairs })),
    };
  }

  const iWin = !(game.online && result) || result.tie || result.winnerIndex === game.myIndex;
  const secondsUsed = !game.online ? Math.max(1, Math.round((Date.now() - game.startTime) / 1000)) : 0;
  const timeBonus = (!game.online && timeLeft > 0) ? Math.floor(timeLeft / 5) : 0;
  // No duelo, cada jogador ganha moedas pelos pares que ELE encontrou
  // (+ bônus do nível para quem vence) e isso soma à carteira geral dele.
  let coinsEarned;
  if (game.online && result) {
    coinsEarned = Math.max(2, game.players[game.myIndex].pairs * 2 + (iWin ? level.bonus : 0));
  } else {
    coinsEarned = game.totalPairs * 2 + level.bonus + timeBonus;
  }
  storage.coins += coinsEarned;

  // XP/ranking: solo conta os pares do nível; online conta os meus pares
  let speed = null;
  if (!game.online && config.players === 1) {
    const rec = updateSoloRecords(secondsUsed, game.totalPairs);
    speed = { ppm: rec.ppm, beat: rec.beat };
    addXp(game.totalPairs, true);
  } else if (game.online) {
    addXp(game.players[game.myIndex].pairs, iWin);
  } else {
    addXp(game.players[0].pairs, true);
  }

  let newSticker = null;
  let bonusCoins = 0;
  if (iWin) {
    newSticker = drawSticker();
    if (newSticker) storage.stickers = [...storage.stickers, newSticker.id];
    else { bonusCoins = ALL_STICKERS_BONUS; storage.coins += bonusCoins; }
  }
  updateCoinChip();

  lastWin = {
    coinsEarned, timeBonus, speed,
    stickerId: newSticker ? newSticker.id : null,
    stickerEmoji: newSticker ? newSticker.emoji : null,
    stickerLegendary: !!(newSticker && newSticker.legendary),
    bonusCoins, result, iWin, revealed: false,
  };

  $('#gift-area').hidden = !iWin;
  // No duelo (online), esconde os botões normais e usa o popup de revanche
  $('#win-buttons-default').hidden = game.online;
  closeRematchModal();
  if (game.online) resetRematch();
  preparePack();
  renderWinTexts();
  showScreen('win');
  sound.play(iWin ? 'win' : 'miss');
  if (iWin) setTimeout(() => sound.play('coin'), 700);
  launchConfetti(iWin ? 4500 : 1500);

  if (game.online) {
    // Mostra a recompensa sozinha e abre o popup "Continuar o duelo?"
    if (iWin) setTimeout(openPack, 500);
    setTimeout(() => { if (currentScreen() === 'win' && game.online) openRematchModal(); }, 1500);
  }
}

function renderWinTexts() {
  if (!lastWin) return;
  const w = lastWin;
  const title = $('#win-title');
  const subtitle = $('#win-subtitle');
  const starsEl = $('#win-stars');

  if (w.result) {
    const winnerLabel = w.result.winnerName ? esc(w.result.winnerName) : t(w.result.winnerKey);
    if (w.result.tie) {
      title.textContent = t('tie');
    } else {
      title.innerHTML = `<span class="win-ava">${w.result.winnerAvatar}</span> ${t('winnerWon', { name: winnerLabel })}`;
    }
    const medals = ['🥇', '🥈'];
    subtitle.innerHTML = w.result.ranking
      .map((p, i) => `<span class="rank-row">${medals[i] || ''} <span class="win-ava-sm">${p.avatar}</span> ${p.name ? esc(p.name) : ''} <b>${p.pairs}</b></span>`)
      .join('');
    starsEl.innerHTML = '';
  } else {
    title.textContent = t('congrats');
    let sub = t('completedMsg');
    if (w.speed) {
      sub += `<br><span class="speed-line">${t('speedLine', { n: w.speed.ppm })}${w.speed.beat ? ' · ' + t('newRecord') : ''}</span>`;
    }
    subtitle.innerHTML = sub;
    // Estrelas pela eficiência (menos jogadas por par = mais estrelas)
    const r2 = game.moves / game.totalPairs;
    const stars = r2 <= 1.7 ? 3 : r2 <= 2.6 ? 2 : 1;
    starsEl.innerHTML = [1, 2, 3].map((n) => `<span class="${n <= stars ? '' : 'dim'}">⭐</span>`).join('');
  }

  $('#coins-label').textContent = w.iWin ? t('coins') : t('wellPlayed');
  $('#coins-earned').textContent = `+${w.coinsEarned}`;
  const tb = $('#time-bonus');
  if (w.timeBonus > 0) { tb.textContent = t('timeBonus', { n: w.timeBonus }); tb.hidden = false; }
  else tb.hidden = true;

  if (w.revealed) fillReveal();
}

function preparePack() {
  const pack = $('#pack-box');
  pack.classList.remove('opening');
  pack.style.display = '';
  $('#sticker-reveal').hidden = true;
  $('#sticker-reveal').classList.remove('legendary');
  lastWin.revealed = false;
}

function fillReveal() {
  const w = lastWin;
  const reveal = $('#sticker-reveal');
  if (w.stickerId) {
    $('#reveal-label').textContent = w.stickerLegendary ? t('legendaryLabel') : t('newSticker');
    $('#reveal-emoji').textContent = w.stickerEmoji;
    $('#reveal-name').textContent = tSticker(w.stickerId);
    reveal.classList.toggle('legendary', w.stickerLegendary);
  } else {
    $('#reveal-label').textContent = t('bonusLabel');
    $('#reveal-emoji').textContent = '⭐';
    $('#reveal-name').textContent = t('albumCompleteMsg', { n: w.bonusCoins });
    reveal.classList.remove('legendary');
  }
}

function openPack() {
  if (!lastWin || lastWin.revealed) return;
  lastWin.revealed = true;
  const pack = $('#pack-box');
  pack.classList.add('opening');
  sound.play(lastWin.stickerLegendary ? 'legendary' : 'reveal');
  launchConfetti(lastWin.stickerLegendary ? 4000 : 2500, lastWin.stickerLegendary);
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
        <div class="sticker ${has ? '' : 'locked'} ${isNew ? 'new' : ''} ${cat.legendary ? 'legendary' : ''}">
          <span class="s-emoji">${has ? s.emoji : (cat.legendary ? '✦' : '❔')}</span>
          <span class="s-name">${has ? tSticker(s.id) : '???'}</span>
        </div>`;
    }).join('');
    return `
      <section class="album-cat ${cat.legendary ? 'legendary' : ''}">
        <h3 class="album-cat-title">${cat.emoji} ${t(cat.key)} <span class="cat-count">${have}/${items.length}</span></h3>
        <div class="album-grid">${grid}</div>
      </section>`;
  }).join('');
}

// ---------- Recordes ----------

function fmtTime(sec) {
  if (sec == null) return t('noRecord');
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function renderRecords() {
  const r = getRecords();
  const rank = rankFor(r.xp);
  const next = nextRankFor(r.xp);
  const ownedStickers = storage.stickers.length;

  let progressHtml;
  if (next) {
    const span = next.min - rank.min;
    const pct = Math.min(100, Math.round(((r.xp - rank.min) / span) * 100));
    progressHtml = `
      <div class="rank-bar"><span style="width:${pct}%"></span></div>
      <p class="rank-next">${t('nextRank', { n: next.min - r.xp, r: t(next.key) })}</p>`;
  } else {
    progressHtml = `<p class="rank-next">${t('maxRank')}</p>`;
  }

  $('#records-content').innerHTML = `
    <div class="rank-card">
      <div class="rank-emoji">${rank.emoji}</div>
      <div class="rank-name">${t(rank.key)}</div>
      <div class="rank-sub">${t('rankLabel')}</div>
      ${progressHtml}
    </div>
    <div class="record-grid">
      <div class="record-box"><div class="record-ico">⭐</div><div class="record-num">${ownedStickers}/${STICKERS.length}</div><div class="record-cap">${t('stickersOwned')}</div></div>
      <div class="record-box"><div class="record-ico">🏆</div><div class="record-num">${r.wins}</div><div class="record-cap">${t('gamesWon')}</div></div>
      <div class="record-box"><div class="record-ico">⚡</div><div class="record-num">${r.ppm || 0}</div><div class="record-cap">${t('bestSpeed')}</div></div>
    </div>
    <h3 class="records-sub">${t('bestTimes')}</h3>
    <div class="record-grid">
      ${['facil', 'medio', 'dificil'].map((lv) => `
        <div class="record-box"><div class="record-ico">${LEVELS[lv].pairs}🃏</div><div class="record-num">${fmtTime(r.fast[lv])}</div><div class="record-cap">${t(LEVELS[lv].key)}</div></div>
      `).join('')}
    </div>`;
}

// ---------- Confete ----------

let confettiAnim = null;
function launchConfetti(durationMs = 4000, golden = false) {
  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = golden
    ? ['#fde047', '#fbbf24', '#f59e0b', '#fffbeb', '#facc15']
    : ['#fbbf24', '#f472b6', '#34d399', '#60a5fa', '#fb923c', '#a78bfa'];
  const pieces = Array.from({ length: golden ? 200 : 150 }, () => ({
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
    if (now - start < durationMs && screens.win.classList.contains('active')) confettiAnim = requestAnimationFrame(frame);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); confettiAnim = null; }
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
  duelPicking = false;
  if (game.online) { netSend({ type: 'bye' }); netDestroy(); game.online = false; }
}

// ---------- Menu de música ----------

function renderMusicMenu() {
  const menu = $('#music-menu');
  menu.innerHTML = MUSIC_CHOICES.map((m) =>
    `<button data-music="${m.id}" class="${m.id === storage.menuMusic ? 'active' : ''}">${t(m.key)}</button>`
  ).join('');
}

// ---------- Navegação ----------

$('#btn-go-setup').addEventListener('click', () => { sound.play('click'); showScreen('profile'); });
// Toque na coruja (ou no balão) -> ela fala "Vamos treinar a memória" no idioma atual
(function () {
  const stage = document.querySelector('.home-owl');
  if (stage) stage.addEventListener('click', () => owlVoice.speak());
})();
$('#btn-profile-continue').addEventListener('click', () => {
  if (!requireName('profile-name-input')) return;
  sound.play('click');
  renderProfileChip();
  renderThemeOptions();
  showScreen('setup');
});
$('#btn-edit-profile').addEventListener('click', () => { sound.play('click'); showScreen('profile'); });
$('#btn-go-album').addEventListener('click', () => { sound.play('click'); renderAlbum(); showScreen('album'); });
$('#btn-go-records').addEventListener('click', () => { sound.play('click'); renderRecords(); showScreen('records'); });
$('#btn-records-back').addEventListener('click', () => { sound.play('click'); showScreen('home'); });
$('#btn-start').addEventListener('click', () => {
  sound.play('click');
  if (duelPicking && game.online && conn) { duelPicking = false; hostStartMatch(); }
  else if (config.players === 2) hostInvite();
  else startGame();
});
$('#btn-restart').addEventListener('click', () => {
  sound.play('click');
  if (game.online) { leaveGame(); showScreen('setup'); }
  else startGame();
});
$('#btn-try-again').addEventListener('click', () => { sound.play('click'); startGame(); });
$('#btn-timeup-home').addEventListener('click', () => { sound.play('click'); showScreen('home'); });
$('#btn-invite-cancel').addEventListener('click', () => {
  sound.play('click'); clearTimeout(inviteTimeout); netDestroy(); showScreen('setup');
});
$('#btn-invite-retry').addEventListener('click', () => { sound.play('click'); hostInvite(); });
$('#btn-share-link').addEventListener('click', () => { sound.play('click'); shareInviteLink(); });
$('#btn-join').addEventListener('click', () => { sound.play('click'); joinGame(); });
$('#btn-play-again').addEventListener('click', () => { sound.play('click'); if (game.online) leaveGame(); goSetup(); });
$('#btn-win-album').addEventListener('click', () => {
  sound.play('click');
  renderAlbum(lastWin && lastWin.stickerId);
  showScreen('album');
});
$('#btn-album-play').addEventListener('click', () => { sound.play('click'); goSetup(); });
$('#btn-home').addEventListener('click', () => {
  sound.play('click');
  closeRematchModal();
  clearPause();
  if (currentScreen() === 'game') leaveGame();
  netDestroy();
  showScreen('home');
});

$('#pack-box').addEventListener('click', openPack);

$('#btn-pause').addEventListener('click', () => { sound.play('click'); pauseGame(); });
$('#btn-resume').addEventListener('click', () => { sound.play('click'); resumeGame(); });
$('#btn-pause-restart').addEventListener('click', () => { sound.play('click'); clearPause(); startGame(); });
$('#btn-pause-home').addEventListener('click', () => {
  sound.play('click');
  clearPause();
  if (currentScreen() === 'game') leaveGame();
  showScreen('home');
});

$('#btn-rematch-yes').addEventListener('click', requestRematch);
$('#btn-rematch-phase').addEventListener('click', chooseNewPhase);
$('#btn-rematch-no').addEventListener('click', () => { sound.play('click'); closeRematchModal(); leaveGame(); showScreen('home'); });

$('#btn-sound').addEventListener('click', () => {
  storage.sound = !storage.sound;
  updateSoundButton();
  sound.unlock();            // destrava no próprio gesto do botão
  music.stop();
  const cur = currentScreen();
  if (storage.sound) {
    // toca um "teste" claro e mostra o estado do áudio (ajuda a diagnosticar)
    sound.play('reveal');
    const st = sound.state();
    showToast(st === 'running' ? `${t('soundOn')} 🔊` : `🔇 ${t('soundBlocked')} (${st})`);
    if (cur === 'game' && !game.over) music.play(config.level);
    else if (MENU_SCREENS.has(cur)) music.playMenu();
  } else {
    showToast(`${t('soundOff')} 🔇`);
  }
});
$('#btn-theme').addEventListener('click', () => { sound.play('click'); toggleTheme(); });

// Menus suspensos (idioma + música)
const langMenu = $('#lang-menu');
const musicMenu = $('#music-menu');
$('#btn-lang').addEventListener('click', (e) => { e.stopPropagation(); musicMenu.hidden = true; langMenu.hidden = !langMenu.hidden; });
langMenu.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-lang]');
  if (!b) return;
  setLang(b.dataset.lang);
  langMenu.hidden = true;
  sound.play('click');
});
$('#btn-music').addEventListener('click', (e) => { e.stopPropagation(); langMenu.hidden = true; musicMenu.hidden = !musicMenu.hidden; });
musicMenu.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-music]');
  if (!b) return;
  storage.menuMusic = b.dataset.music;
  renderMusicMenu();
  sound.play('click');
  if (storage.sound && MENU_SCREENS.has(currentScreen())) { music.stop(); music.playMenu(); }
  musicMenu.hidden = true;
});
document.addEventListener('click', () => { langMenu.hidden = true; musicMenu.hidden = true; });

// O áudio só é liberado após o primeiro toque
document.addEventListener('pointerdown', () => {
  if (storage.sound && MENU_SCREENS.has(currentScreen())) { music.stop(); music.playMenu(); }
}, { once: true, capture: true });

// ---------- Início ----------

applyTheme();
applyI18n();
setupProfileControls();
renderThemeOptions();
renderMusicMenu();
updateStartButton();
updateCoinChip();
updateSoundButton();

joinHostId = new URLSearchParams(location.search).get('join');
if (joinHostId) {
  history.replaceState({}, '', location.pathname);
  showScreen('join');
}
