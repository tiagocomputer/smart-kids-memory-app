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
  };

  const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
  const enabled = !!(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId);

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
        import(`${SDK}/firebase-firestore.js`),
      ]);
      const app = appMod.initializeApp(FIREBASE_CONFIG);
      const auth = authApi.getAuth(app);
      const db = dbApi.getFirestore(app);
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
      const ref = fb.dbApi.doc(fb.db, 'users', uid());
      const snap = await fb.dbApi.getDoc(ref);
      return snap.exists() ? snap.data() : null;
    } catch (e) { console.warn('[cloud] loadState', e); return null; }
  }
  async function saveState(snapshot) {
    if (!fb || !isSignedIn()) return;
    try {
      const ref = fb.dbApi.doc(fb.db, 'users', uid());
      await fb.dbApi.setDoc(ref, { ...snapshot, updatedAt: fb.dbApi.serverTimestamp() }, { merge: true });
    } catch (e) { console.warn('[cloud] saveState', e); }
  }

  // ---------- Ranking mundial ----------
  async function submitScore(rec, profile) {
    if (!fb || !isSignedIn()) return; // só publica quem tem conta
    try {
      const ref = fb.dbApi.doc(fb.db, 'leaderboard', uid());
      await fb.dbApi.setDoc(ref, {
        name: (profile && profile.name) || 'Jogador',
        avatarId: (profile && profile.avatarId) || null,
        skin: (profile && profile.skin) != null ? profile.skin : null,
        xp: rec.xp || 0,
        wins: rec.wins || 0,
        ppm: rec.ppm || 0,
        updatedAt: fb.dbApi.serverTimestamp(),
      }, { merge: true });
    } catch (e) { console.warn('[cloud] submitScore', e); }
  }
  async function topScores(n = 20) {
    if (!fb) return [];
    try {
      const { collection, query, orderBy, limit, getDocs } = fb.dbApi;
      const q = query(collection(fb.db, 'leaderboard'), orderBy('xp', 'desc'), limit(n));
      const snap = await getDocs(q);
      return snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
    } catch (e) { console.warn('[cloud] topScores', e); return []; }
  }

  return {
    enabled, init, onReady, onAuthChange,
    uid, guestUid, isSignedIn, currentUser,
    signInGoogle, registerEmail, signInEmail, signOut,
    loadState, saveState, submitScore, topScores,
  };
})();
