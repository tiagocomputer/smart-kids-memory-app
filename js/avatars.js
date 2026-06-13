/* ============================================================
   Memória Mágica — avatares ilustrados (SVG)
   Crianças (com tom de pele ajustável, estilo emoji do WhatsApp),
   princesas, dinossauros e bichinhos. Tudo arte original.
   Expõe window.MM_AVATARS = { skins:[...], list:[{id, human, svg(skin)}] }
   ============================================================ */

(function () {
  'use strict';

  // tons de pele (claro -> escuro), como o seletor do WhatsApp
  const SKINS = ['#ffd9b3', '#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#5c3a21'];

  function svg(inner) {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`;
  }
  function E(x, y, r) {
    r = r || 5;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="rgba(0,0,0,.25)" stroke-width="1"/>` +
           `<circle cx="${x}" cy="${(y + 0.6).toFixed(1)}" r="${(r * 0.55).toFixed(1)}" fill="#23170c"/>` +
           `<circle cx="${(x + r * 0.3).toFixed(1)}" cy="${(y - r * 0.3).toFixed(1)}" r="${(r * 0.22).toFixed(1)}" fill="#fff"/>`;
  }
  const MOUTH = `<path d="M42 65 Q50 72 58 65" fill="none" stroke="#9a5a3a" stroke-width="2.4" stroke-linecap="round"/>`;
  const BLUSH = `<circle cx="32" cy="62" r="4" fill="#ff8fb1" opacity=".45"/><circle cx="68" cy="62" r="4" fill="#ff8fb1" opacity=".45"/>`;
  const GLASSES = `<g fill="none" stroke="#3a3a3a" stroke-width="2.6"><circle cx="40" cy="54" r="9"/><circle cx="60" cy="54" r="9"/><path d="M49 53 H51 M31 51 L23 49 M69 51 L77 49"/></g>`;

  // rosto humano com tom de pele
  function face(skin) {
    return `<ellipse cx="18" cy="55" rx="6" ry="8" fill="${skin}" stroke="rgba(0,0,0,.14)" stroke-width="1.5"/>` +
           `<ellipse cx="82" cy="55" rx="6" ry="8" fill="${skin}" stroke="rgba(0,0,0,.14)" stroke-width="1.5"/>` +
           `<circle cx="50" cy="55" r="33" fill="${skin}" stroke="rgba(0,0,0,.18)" stroke-width="2"/>` +
           `<ellipse cx="50" cy="78" rx="22" ry="11" fill="rgba(0,0,0,.05)"/>`;
  }
  function kid(skin, back, front, extra) {
    return svg((back || '') + face(skin) + (front || '') + E(40, 55) + E(60, 55) + MOUTH + BLUSH + (extra || ''));
  }

  // ---- cabelos ----
  const fringe = (c) => `<path d="M18 47 Q18 15 50 15 Q82 15 82 47 Q74 31 50 31 Q26 31 18 47 Z" fill="${c}"/>`;
  const buzz = (c) => `<path d="M22 44 Q24 18 50 18 Q76 18 78 44 Q70 33 50 33 Q30 33 22 44 Z" fill="${c}" opacity=".92"/>`;
  const longBack = (c) => `<path d="M14 54 Q12 16 50 14 Q88 16 86 54 L86 88 Q78 70 78 56 Q64 40 50 40 Q36 40 22 56 Q22 70 14 88 Z" fill="${c}"/>`;
  const bobBack = (c) => `<path d="M14 56 Q12 16 50 14 Q88 16 86 56 L84 72 Q80 56 70 50 L30 50 Q20 56 16 72 Z" fill="${c}"/>`;
  const afro = (c) => `<g fill="${c}"><circle cx="28" cy="30" r="14"/><circle cx="50" cy="20" r="15"/><circle cx="72" cy="30" r="14"/><circle cx="20" cy="46" r="10"/><circle cx="80" cy="46" r="10"/></g>`;
  const bun = (c) => `<circle cx="50" cy="14" r="9" fill="${c}"/>` + fringe(c);
  const ponytail = (c) => `<path d="M80 40 Q94 50 88 74 Q84 60 76 56 Z" fill="${c}"/>` + fringe(c);
  const crown = `<path d="M30 22 L37 9 L44 20 L50 5 L56 20 L63 9 L70 22 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" stroke-linejoin="round"/><circle cx="50" cy="14" r="2.2" fill="#ef4444"/>`;
  const tiara = `<path d="M34 24 Q50 10 66 24 Q50 18 34 24 Z" fill="#fde047" stroke="#eab308" stroke-width="1.4"/><circle cx="50" cy="17" r="3" fill="#f472b6"/>`;
  const freckles = `<g fill="#b06a3a" opacity=".6"><circle cx="36" cy="62" r="1.3"/><circle cx="40" cy="64" r="1.3"/><circle cx="60" cy="64" r="1.3"/><circle cx="64" cy="62" r="1.3"/></g>`;

  // ---- avatares não-humanos (tom de pele ignorado) ----
  function dinoFace(col, belly) {
    return svg(
      `<path d="M30 30 L26 16 L37 28 Z" fill="${col}" stroke="#2b2b2b" stroke-width="2"/><path d="M70 30 L74 16 L63 28 Z" fill="${col}" stroke="#2b2b2b" stroke-width="2"/>` +
      `<circle cx="50" cy="55" r="33" fill="${col}" stroke="#2b2b2b" stroke-width="2.6"/>` +
      `<ellipse cx="50" cy="67" rx="20" ry="13" fill="${belly}"/>` +
      `<path d="M40 30 Q46 24 52 30 M30 38 Q37 32 44 38" stroke="#2b2b2b" stroke-width="2" fill="none"/>` +
      E(40, 52, 6) + E(60, 52, 6) +
      `<ellipse cx="44" cy="64" rx="2" ry="3" fill="#2b2b2b"/><ellipse cx="56" cy="64" rx="2" ry="3" fill="#2b2b2b"/>` +
      `<path d="M40 72 Q50 79 60 72" fill="none" stroke="#2b2b2b" stroke-width="2.4" stroke-linecap="round"/>`
    );
  }
  function animalFace(parts) { return svg(parts); }

  const cat = animalFace(
    `<path d="M26 38 L22 16 L42 32 Z" fill="#f0a04b" stroke="#7a5a2a" stroke-width="2"/><path d="M74 38 L78 16 L58 32 Z" fill="#f0a04b" stroke="#7a5a2a" stroke-width="2"/>` +
    `<circle cx="50" cy="55" r="33" fill="#f4b46a" stroke="#7a5a2a" stroke-width="2.4"/>` +
    `<ellipse cx="50" cy="64" rx="15" ry="11" fill="#fde6c8"/>` + E(40, 52, 5.5) + E(60, 52, 5.5) +
    `<path d="M46 60 L54 60 L50 65 Z" fill="#e07a7a"/><path d="M50 65 V69 M50 67 Q44 70 40 68 M50 67 Q56 70 60 68" stroke="#7a5a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>` +
    `<path d="M30 60 H16 M30 64 H17 M70 60 H84 M70 64 H83" stroke="#caa06a" stroke-width="1.4"/>`);
  const dog = animalFace(
    `<path d="M20 40 Q12 64 30 74 L36 54 Z" fill="#b9863f" stroke="#6b4f2a" stroke-width="2"/><path d="M80 40 Q88 64 70 74 L64 54 Z" fill="#b9863f" stroke="#6b4f2a" stroke-width="2"/>` +
    `<circle cx="50" cy="54" r="32" fill="#e3b96a" stroke="#6b4f2a" stroke-width="2.4"/>` +
    `<ellipse cx="50" cy="64" rx="16" ry="12" fill="#f3dca0"/>` + E(40, 50, 5.5) + E(60, 50, 5.5) +
    `<ellipse cx="50" cy="60" rx="5.5" ry="4" fill="#33240f"/><path d="M50 64 V70 M50 68 Q44 71 40 69 M50 68 Q56 71 60 69" stroke="#6b4f2a" stroke-width="2" fill="none" stroke-linecap="round"/>`);
  const fox = animalFace(
    `<path d="M22 44 L14 14 L40 34 Z" fill="#e0682a" stroke="#9a3d12" stroke-width="2"/><path d="M78 44 L86 14 L60 34 Z" fill="#e0682a" stroke="#9a3d12" stroke-width="2"/>` +
    `<path d="M50 28 Q74 30 72 54 L50 86 L28 54 Q26 30 50 28 Z" fill="#ef7a36" stroke="#9a3d12" stroke-width="2.4"/>` +
    `<path d="M50 52 L70 54 L50 84 L30 54 Z" fill="#fbe9d2"/>` + E(40, 50, 5) + E(60, 50, 5) +
    `<path d="M44 64 L56 64 L50 72 Z" fill="#2a1c12"/>`);
  const unicorn = animalFace(
    `<path d="M50 14 L44 36 L56 36 Z" fill="#fde68a" stroke="#caa24a" stroke-width="2"/><path d="M46 32 H54 M45 26 H55 M47 20 H53" stroke="#caa24a" stroke-width="1.4"/>` +
    `<path d="M22 34 Q12 50 18 70 Q24 56 30 50 Z" fill="#f472b6"/><path d="M24 34 Q16 52 22 70 Q28 56 32 50 Z" fill="#a78bfa" opacity=".8"/>` +
    `<circle cx="52" cy="56" r="31" fill="#fff" stroke="#cbb8d8" stroke-width="2.4"/>` + E(44, 54, 5.5) + E(62, 54, 5.5) +
    `<ellipse cx="53" cy="66" rx="13" ry="9" fill="#f6e0ee"/><ellipse cx="49" cy="64" rx="1.6" ry="2.4" fill="#b06a8a"/><ellipse cx="57" cy="64" rx="1.6" ry="2.4" fill="#b06a8a"/>`);
  const robot = animalFace(
    `<line x1="50" y1="22" x2="50" y2="10" stroke="#8a93a6" stroke-width="3"/><circle cx="50" cy="8" r="4" fill="#ef4444"/>` +
    `<rect x="20" y="26" width="60" height="56" rx="14" fill="#aeb7c8" stroke="#5a6478" stroke-width="2.6"/>` +
    `<rect x="30" y="44" width="40" height="20" rx="8" fill="#2b3140"/>` +
    `<circle cx="42" cy="54" r="5" fill="#67e8f9"/><circle cx="58" cy="54" r="5" fill="#67e8f9"/>` +
    `<rect x="40" y="70" width="20" height="5" rx="2.5" fill="#5a6478"/>`);
  const alien = animalFace(
    `<path d="M50 18 Q80 24 76 52 Q72 80 50 84 Q28 80 24 52 Q20 24 50 18 Z" fill="#7ed957" stroke="#3f8a2a" stroke-width="2.6"/>` +
    `<ellipse cx="40" cy="52" rx="8" ry="11" fill="#1b2a14"/><ellipse cx="60" cy="52" rx="8" ry="11" fill="#1b2a14"/>` +
    `<circle cx="42" cy="48" r="2.4" fill="#fff"/><circle cx="62" cy="48" r="2.4" fill="#fff"/>` +
    `<path d="M44 70 Q50 74 56 70" fill="none" stroke="#3f8a2a" stroke-width="2.2" stroke-linecap="round"/>`);

  // ---- lista de avatares (ordem estável = vira o id salvo) ----
  const L = [
    { id: 'k1', human: true, svg: (s) => kid(s, null, fringe('#6b4423')) },
    { id: 'k2', human: true, svg: (s) => kid(s, afro('#2b2320'), null, GLASSES) },
    { id: 'k3', human: true, svg: (s) => kid(s, longBack('#6b4423'), ponytail('#6b4423')) },
    { id: 'k4', human: true, svg: (s) => kid(s, null, fringe('#e6c068')) },
    { id: 'k5', human: true, svg: (s) => kid(s, longBack('#2b2320'), fringe('#2b2320')) },
    { id: 'k6', human: true, svg: (s) => kid(s, null, fringe('#c4502a'), freckles) },
    { id: 'k7', human: true, svg: (s) => kid(s, bun('#6b4423')) },
    { id: 'k8', human: true, svg: (s) => kid(s, null, buzz('#3a2a1a'), GLASSES) },
    { id: 'k9', human: true, svg: (s) => kid(s, bobBack('#2b2320')) },
    { id: 'k10', human: true, svg: (s) => kid(s, null, afro('#3a2a1a')) },
    { id: 'pr1', human: true, svg: (s) => kid(s, longBack('#e6c068'), fringe('#e6c068') + crown) },
    { id: 'pr2', human: true, svg: (s) => kid(s, longBack('#2b2320'), tiara) },
    { id: 'pr3', human: true, svg: (s) => kid(s, longBack('#6b4423'), fringe('#6b4423') + crown) },
    { id: 'prince', human: true, svg: (s) => kid(s, null, fringe('#3a2a1a') + crown) },
    { id: 'hero', human: true, svg: (s) => kid(s, null,
        `<path d="M16 46 Q50 36 84 46 Q84 58 68 58 L60 50 Q50 54 40 50 L32 58 Q16 58 16 46 Z" fill="#e23b3b" stroke="#a81f1f" stroke-width="1.6"/>`) },
    { id: 'dinoG', human: false, svg: () => dinoFace('#6abf6a', '#cdeeb6') },
    { id: 'dinoB', human: false, svg: () => dinoFace('#4a90d9', '#bcd9f4') },
    { id: 'dinoO', human: false, svg: () => dinoFace('#f0863c', '#fcdcc0') },
    { id: 'dinoP', human: false, svg: () => dinoFace('#a06ad0', '#ddc6f0') },
    { id: 'cat', human: false, svg: () => cat },
    { id: 'dog', human: false, svg: () => dog },
    { id: 'fox', human: false, svg: () => fox },
    { id: 'unicorn', human: false, svg: () => unicorn },
    { id: 'robot', human: false, svg: () => robot },
    { id: 'alien', human: false, svg: () => alien },
  ];

  // avatares de emoji (os antigos) — agora em ícones redondos
  function emojiAvatar(ch) {
    return svg(`<rect x="0" y="0" width="100" height="100" rx="50" fill="#fff"/>` +
      `<text x="50" y="70" font-size="56" text-anchor="middle" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">${ch}</text>`);
  }
  const EMOJI = ['🦁', '🐯', '🐶', '🐱', '🦊', '🐼', '🐨', '🐵', '🐸', '🐰', '🐷', '🐮', '🐔', '🐧',
    '🐙', '🐳', '🐬', '🦈', '🐠', '🦀', '🐢', '🦭', '🦄', '🐉', '🧚', '🧜‍♀️', '🧙‍♂️', '🦸‍♂️',
    '🦸‍♀️', '🥷', '🤖', '👽', '🧞', '🐲', '👸', '🤴', '👑', '🧝‍♀️', '🤠', '🚀', '🍄', '⭐', '🎈', '🤡'];
  EMOJI.forEach((ch, i) => L.push({ id: 'em' + i, human: false, svg: () => emojiAvatar(ch) }));

  window.MM_AVATARS = { skins: SKINS, list: L };
})();
