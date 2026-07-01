// js/cloud.js — Sincronização OPCIONAL na nuvem (login + ranking mundial).
//
// >>> Enquanto FIREBASE_CONFIG estiver vazio, este módulo fica inerte: o jogo
//     funciona exatamente como antes (100% offline, tudo no localStorage). <<<
//
// Para ativar login com Google/e-mail e o ranking mundial, crie um projeto no
// Firebase e cole os valores em FIREBASE_CONFIG abaixo. Passo a passo completo
// em FIREBASE_SETUP.md (na raiz do projeto).

const cloud = (() => {
  // ------------------------------------------------------------------
  // 1) COLE AQUI a config do seu projeto Firebase (veja FIREBASE_SETUP.md)
  // ------------------------------------------------------------------
  const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyCMLttv3VqNfnuhh-IvCxjwcFGp0KN81uE',
    authDomain: 'memoria-magica-b8ce2.firebaseapp.com',
    projectId: 'memoria-magica-b8ce2',
    storageBucket: 'memoria-magica-b8ce2.firebasestorage.app',
    messagingSenderId: '376835253719',
    appId: '1:376835253719:web:92a25d45f0aefef9a31792',
    // URL do Realtime Database — cole aqui a URL que o Firebase mostra ao criar
    // o banco (ex.: https://memoria-magica-b8ce2-default-rtdb.firebaseio.com).
    databaseURL: 'https://memoria-magica-b8ce2-default-rtdb.firebaseio.com',
  };

  const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
  const enabled = !!(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.databaseURL);

  const state = { ready: false, user: null };
  const readyCbs = [];
  let fb = null; // { auth, db, authApi, dbApi }

  // ---------- Identidade ----------
  // uid de convidado persistente: mesmo antes de logar, o dispositivo tem uma
  // identidade estável (não é recriada a cada QR/link).
  function guestUid() {
    let id = localStorage.getItem('mm_uid');
    if (!id) {
      id = 'g_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem('mm_uid', id);
    }
    return id;
  }
  function uid() { return state.user ? state.user.uid : guestUid(); }
  function isSignedIn() { return !!(state.user && !state.user.isAnonymous); }
  function currentUser() {
    if (!state.user) return null;
    return {
      uid: state.user.uid,
      email: state.user.email || '',
      name: state.user.displayName || '',
      isAnonymous: !!state.user.isAnonymous,
    };
  }

  function onReady(cb) {
    if (state.ready) { try { cb(state); } catch (e) { /* ignora */ } }
    else readyCbs.push(cb);
  }
  function fireReady() {
    state.ready = true;
    const cbs = readyCbs.splice(0);
    cbs.forEach((cb) => { try { cb(state); } catch (e) { /* ignora */ } });
  }
  // dispara para TODOS os listeners a cada mudança de login (não só a 1ª vez)
  const changeCbs = [];
  function onAuthChange(cb) { changeCbs.push(cb); }
  function fireChange() { changeCbs.forEach((cb) => { try { cb(currentUser()); } catch (e) { /* ignora */ } }); }

  // ---------- Init ----------
  async function init() {
    if (!enabled) { fireReady(); return; }
    try {
      const [appMod, authApi, dbApi] = await Promise.all([
        import(`${SDK}/firebase-app.js`),
        import(`${SDK}/firebase-auth.js`),
        import(`${SDK}/firebase-database.js`),
      ]);
      const app = appMod.initializeApp(FIREBASE_CONFIG);
      const auth = authApi.getAuth(app);
      const db = dbApi.getDatabase(app);
      fb = { auth, db, authApi, dbApi };
      authApi.onAuthStateChanged(auth, (user) => {
        const was = state.user && state.user.uid;
        state.user = user;
        fireReady();
        if ((user && user.uid) !== was) fireChange();
      });
    } catch (e) {
      console.warn('[cloud] Firebase indisponível, seguindo offline:', e);
      fireReady();
    }
  }

  // ---------- Login ----------
  async function signInGoogle() {
    if (!fb) throw new Error('cloud-off');
    const provider = new fb.authApi.GoogleAuthProvider();
    await fb.authApi.signInWithPopup(fb.auth, provider);
    return currentUser();
  }
  async function registerEmail(email, pass) {
    if (!fb) throw new Error('cloud-off');
    await fb.authApi.createUserWithEmailAndPassword(fb.auth, email, pass);
    return currentUser();
  }
  async function signInEmail(email, pass) {
    if (!fb) throw new Error('cloud-off');
    await fb.authApi.signInWithEmailAndPassword(fb.auth, email, pass);
    return currentUser();
  }
  async function signOut() {
    if (!fb) return;
    await fb.authApi.signOut(fb.auth);
  }

  // ---------- Save/Load do progresso (identidade portável entre aparelhos) ----------
  async function loadState() {
    if (!fb || !isSignedIn()) return null;
    try {
      const snap = await fb.dbApi.get(fb.dbApi.ref(fb.db, `users/${uid()}`));
      return snap.exists() ? snap.val() : null;
    } catch (e) { console.warn('[cloud] loadState', e); return null; }
  }
  async function saveState(snapshot) {
    if (!fb || !isSignedIn()) return;
    try {
      await fb.dbApi.update(fb.dbApi.ref(fb.db, `users/${uid()}`), {
        ...snapshot, updatedAt: fb.dbApi.serverTimestamp(),
      });
    } catch (e) { console.warn('[cloud] saveState', e); }
  }

  // ---------- Ranking mundial ----------
  async function submitScore(rec, profile) {
    if (!fb || !isSignedIn()) return; // só publica quem tem conta
    try {
      await fb.dbApi.set(fb.dbApi.ref(fb.db, `leaderboard/${uid()}`), {
        name: (profile && profile.name) || 'Jogador',
        avatarId: (profile && profile.avatarId) || null,
        skin: (profile && profile.skin) != null ? profile.skin : null,
        xp: rec.xp || 0,
        wins: rec.wins || 0,
        ppm: rec.ppm || 0,
        updatedAt: fb.dbApi.serverTimestamp(),
      });
    } catch (e) { console.warn('[cloud] submitScore', e); }
  }
  // ID da semana atual (segunda-feira em UTC) — usado no ranking semanal, que
  // "reinicia" naturalmente porque cada semana é um nó separado.
  function weekId() {
    const d = new Date();
    const dow = (d.getUTCDay() + 6) % 7; // 0 = segunda
    const mon = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - dow));
    const y = mon.getUTCFullYear();
    const m = String(mon.getUTCMonth() + 1).padStart(2, '0');
    const day = String(mon.getUTCDate()).padStart(2, '0');
    return `${y}${m}${day}`;
  }

  // Soma XP (delta) num placar incremental — usado por semana e por mundo.
  async function bumpBoard(path, delta, profile) {
    if (!fb || !isSignedIn() || !(delta > 0)) return;
    try {
      const { ref, update, increment, serverTimestamp } = fb.dbApi;
      await update(ref(fb.db, `${path}/${uid()}`), {
        name: (profile && profile.name) || 'Jogador',
        avatarId: (profile && profile.avatarId) || null,
        skin: (profile && profile.skin) != null ? profile.skin : null,
        xp: increment(delta),
        updatedAt: serverTimestamp(),
      });
    } catch (e) { console.warn('[cloud] bumpBoard', path, e); }
  }

  // Top N de um placar qualquer (leaderboard, weekly/<id>, world/<id>).
  async function topBoard(path, n = 20) {
    if (!fb) return [];
    try {
      const { ref, query, orderByChild, limitToLast, get } = fb.dbApi;
      const q = query(ref(fb.db, path), orderByChild('xp'), limitToLast(n));
      const snap = await get(q);
      const rows = [];
      snap.forEach((child) => { rows.push({ uid: child.key, ...child.val() }); });
      // RTDB devolve em ordem crescente de xp; invertemos para o maior primeiro.
      return rows.reverse();
    } catch (e) { console.warn('[cloud] topBoard', path, e); return []; }
  }

  return {
    enabled, init, onReady, onAuthChange,
    uid, guestUid, isSignedIn, currentUser,
    signInGoogle, registerEmail, signInEmail, signOut,
    loadState, saveState, submitScore,
    weekId, bumpBoard, topBoard,
  };
})();
