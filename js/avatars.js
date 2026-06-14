/* ============================================================
   Memória Mágica — avatares
   - 41 avatares em imagem (badges ilustrados + medalhas) fornecidos pelo usuário
   - + 15 avatares de pessoas desenhados (crianças, princesas, herói)
     que aceitam TOM DE PELE (seletor estilo emoji do WhatsApp)
   Expõe window.MM_AVATARS = { skins:[...], list:[{id, img}|{id, human, svg(skin)}] }
   ============================================================ */

(function () {
  'use strict';

  // tons de pele (claro -> escuro)
  const SKINS = ['#ffd9b3', '#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#5c3a21'];

  function svg(inner) { return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`; }
  function E(x, y, r) {
    r = r || 5;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="rgba(0,0,0,.25)" stroke-width="1"/>` +
      `<circle cx="${x}" cy="${(y + 0.6).toFixed(1)}" r="${(r * 0.55).toFixed(1)}" fill="#23170c"/>` +
      `<circle cx="${(x + r * 0.3).toFixed(1)}" cy="${(y - r * 0.3).toFixed(1)}" r="${(r * 0.22).toFixed(1)}" fill="#fff"/>`;
  }
  const MOUTH = `<path d="M42 65 Q50 72 58 65" fill="none" stroke="#9a5a3a" stroke-width="2.4" stroke-linecap="round"/>`;
  const BLUSH = `<circle cx="32" cy="62" r="4" fill="#ff8fb1" opacity=".45"/><circle cx="68" cy="62" r="4" fill="#ff8fb1" opacity=".45"/>`;
  const GLASSES = `<g fill="none" stroke="#3a3a3a" stroke-width="2.6"><circle cx="40" cy="54" r="9"/><circle cx="60" cy="54" r="9"/><path d="M49 53 H51 M31 51 L23 49 M69 51 L77 49"/></g>`;
  function face(skin) {
    return `<ellipse cx="18" cy="55" rx="6" ry="8" fill="${skin}" stroke="rgba(0,0,0,.14)" stroke-width="1.5"/>` +
      `<ellipse cx="82" cy="55" rx="6" ry="8" fill="${skin}" stroke="rgba(0,0,0,.14)" stroke-width="1.5"/>` +
      `<circle cx="50" cy="55" r="33" fill="${skin}" stroke="rgba(0,0,0,.18)" stroke-width="2"/>` +
      `<ellipse cx="50" cy="78" rx="22" ry="11" fill="rgba(0,0,0,.05)"/>`;
  }
  function kid(skin, back, front, extra) {
    return svg((back || '') + face(skin) + (front || '') + E(40, 55) + E(60, 55) + MOUTH + BLUSH + (extra || ''));
  }
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

  const list = [];
  // avatares em IMAGEM (badges ilustrados redondos) — fornecidos pelo usuário
  const imgSets = [
    ['b', 12],  // crianças, animais da terra e do mar
    ['c', 12],  // princesas, reis/príncipes e crianças
    ['e', 5],   // dinossauros
    ['a', 12],  // medalhas douradas (conjunto antigo)
  ];
  imgSets.forEach(([p, n]) => {
    for (let i = 1; i <= n; i++) list.push({ id: p + i, img: 'img/avatars/' + p + i + '.webp' });
  });
  // avatares de pessoas com TOM DE PELE ajustável
  const humans = [
    (s) => kid(s, null, fringe('#6b4423')),
    (s) => kid(s, afro('#2b2320'), null, GLASSES),
    (s) => kid(s, longBack('#6b4423'), ponytail('#6b4423')),
    (s) => kid(s, null, fringe('#e6c068')),
    (s) => kid(s, longBack('#2b2320'), fringe('#2b2320')),
    (s) => kid(s, null, fringe('#c4502a'), freckles),
    (s) => kid(s, bun('#6b4423')),
    (s) => kid(s, null, buzz('#3a2a1a'), GLASSES),
    (s) => kid(s, bobBack('#2b2320')),
    (s) => kid(s, null, afro('#3a2a1a')),
    (s) => kid(s, longBack('#e6c068'), fringe('#e6c068') + crown),
    (s) => kid(s, longBack('#2b2320'), tiara),
    (s) => kid(s, longBack('#6b4423'), fringe('#6b4423') + crown),
    (s) => kid(s, null, fringe('#3a2a1a') + crown),
    (s) => kid(s, null, `<path d="M16 46 Q50 36 84 46 Q84 58 68 58 L60 50 Q50 54 40 50 L32 58 Q16 58 16 46 Z" fill="#e23b3b" stroke="#a81f1f" stroke-width="1.6"/>`),
  ];
  humans.forEach((fn, i) => list.push({ id: 'k' + (i + 1), human: true, svg: fn }));

  window.MM_AVATARS = { skins: SKINS, list };
})();
