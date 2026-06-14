/* ============================================================
   Memória Mágica — arte ilustrada (SVG)
   Animais, dinossauros (estilo cartoon fofo), cogumelos,
   monstrinhos e criaturinhas. Tudo arte original.
   Expõe window.MM_ART = { animais, dinos, mario, pokemon, criaturas }.
   ============================================================ */

(function () {
  'use strict';

  const S = 'stroke-linejoin="round" stroke-linecap="round"';
  const OUT = '#2b2b2b'; // contorno preto e marcado, estilo cartoon
  function svg(inner) {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`;
  }
  function eye(x, y, r) {
    r = r || 5.5;
    return `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${(r * 1.12).toFixed(1)}" fill="#fff" stroke="rgba(0,0,0,.25)" stroke-width="1"/>` +
           `<circle cx="${x}" cy="${(y + r * 0.18).toFixed(1)}" r="${(r * 0.6).toFixed(1)}" fill="#23170c"/>` +
           `<circle cx="${(x + r * 0.28).toFixed(1)}" cy="${(y - r * 0.32).toFixed(1)}" r="${(r * 0.22).toFixed(1)}" fill="#fff"/>`;
  }
  const O = '#27201c'; // contorno dos dinossauros
  // olho grande e fofo (cartoon) para os dinossauros
  function bigEye(x, y, r) {
    r = r || 8;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${O}" stroke-width="2"/>` +
           `<circle cx="${x + 1}" cy="${y + 1}" r="${(r * 0.5).toFixed(1)}" fill="${O}"/>` +
           `<circle cx="${(x + 1 + r * 0.2).toFixed(1)}" cy="${(y + 1 - r * 0.25).toFixed(1)}" r="${(r * 0.18).toFixed(1)}" fill="#fff"/>`;
  }
  function smile(x, y, w) {
    w = w || 8;
    return `<path d="M${x - w} ${y} Q${x} ${y + w} ${x + w} ${y}" fill="none" stroke="${O}" stroke-width="2.4" ${S}/>`;
  }

  // =====================================================
  //  ANIMAIS — rostos ilustrados (vista de frente)
  // =====================================================
  const A = {};
  A.cachorro = svg(
    `<g stroke="#6b4f2a" stroke-width="2.4" ${S}>
       <path d="M18 38 Q10 66 30 76 L36 54 Z" fill="#b9863f"/>
       <path d="M82 38 Q90 66 70 76 L64 54 Z" fill="#b9863f"/>
       <path d="M50 20 Q79 22 79 50 Q79 78 50 82 Q21 78 21 50 Q21 22 50 20 Z" fill="#e3b96a"/>
       <ellipse cx="50" cy="64" rx="19" ry="15" fill="#f3dca0"/>
     </g>` + eye(40, 47) + eye(60, 47) +
    `<ellipse cx="50" cy="59" rx="6.5" ry="4.8" fill="#33240f"/>` +
    `<path d="M50 63 V71 M50 69 Q43 73 39 70 M50 69 Q57 73 61 70" stroke="#6b4f2a" stroke-width="2.2" fill="none" ${S}/>`
  );
  A.gato = svg(
    `<g stroke="#7a6a52" stroke-width="2.4" ${S}>
       <path d="M24 40 L20 16 L42 32 Z" fill="#f0a04b"/><path d="M76 40 L80 16 L58 32 Z" fill="#f0a04b"/>
       <path d="M27 22 L24 32 L34 28 Z" fill="#ffc9a0"/><path d="M73 22 L76 32 L66 28 Z" fill="#ffc9a0"/>
       <path d="M50 24 Q78 26 78 52 Q78 78 50 82 Q22 78 22 52 Q22 26 50 24 Z" fill="#f4b46a"/>
       <path d="M40 26 L44 40 M50 25 V40 M60 26 L56 40" stroke="#cf8334" stroke-width="3"/>
       <ellipse cx="50" cy="62" rx="15" ry="11" fill="#fde6c8"/>
     </g>` + eye(39, 50, 6) + eye(61, 50, 6) +
    `<path d="M46 60 L54 60 L50 65 Z" fill="#e07a7a"/>` +
    `<path d="M50 65 V70 M50 68 Q44 71 40 69 M50 68 Q56 71 60 69" stroke="#7a6a52" stroke-width="1.8" fill="none" ${S}/>` +
    `<path d="M30 60 H14 M30 65 H15 M70 60 H86 M70 65 H85" stroke="#caa06a" stroke-width="1.6"/>`
  );
  A.leao = svg(
    `<g stroke="#7a4a1e" stroke-width="2.2" ${S}>
       <circle cx="50" cy="52" r="38" fill="#9c6b34"/>
       <g fill="#7a4f22"><circle cx="50" cy="14" r="7"/><circle cx="78" cy="24" r="7"/><circle cx="90" cy="50" r="7"/><circle cx="78" cy="78" r="7"/><circle cx="50" cy="90" r="7"/><circle cx="22" cy="78" r="7"/><circle cx="10" cy="50" r="7"/><circle cx="22" cy="24" r="7"/></g>
       <circle cx="50" cy="52" r="30" fill="#e9a94e"/>
       <ellipse cx="50" cy="62" rx="17" ry="13" fill="#f6d79a"/>
     </g>` + eye(41, 50) + eye(59, 50) +
    `<path d="M44 58 L56 58 L50 64 Z" fill="#5a3a1a"/>` +
    `<path d="M50 64 V70 M50 67 Q43 71 39 68 M50 67 Q57 71 61 68" stroke="#7a4a1e" stroke-width="2" fill="none" ${S}/>`
  );
  A.panda = svg(
    `<g stroke="#2b2b2b" stroke-width="2.2" ${S}>
       <circle cx="28" cy="26" r="12" fill="#2b2b2b"/><circle cx="72" cy="26" r="12" fill="#2b2b2b"/>
       <path d="M50 20 Q80 22 80 52 Q80 80 50 84 Q20 80 20 52 Q20 22 50 20 Z" fill="#fff"/>
       <ellipse cx="37" cy="50" rx="9" ry="12" fill="#2b2b2b" transform="rotate(-18 37 50)"/>
       <ellipse cx="63" cy="50" rx="9" ry="12" fill="#2b2b2b" transform="rotate(18 63 50)"/>
     </g>` + eye(37, 50, 4.5) + eye(63, 50, 4.5) +
    `<path d="M44 64 L56 64 L50 70 Z" fill="#2b2b2b"/>`
  );
  A.raposa = svg(
    `<g stroke="#9a3d12" stroke-width="2.2" ${S}>
       <path d="M22 44 L14 14 L40 34 Z" fill="#e0682a"/><path d="M78 44 L86 14 L60 34 Z" fill="#e0682a"/>
       <path d="M26 20 L22 32 L33 30 Z" fill="#3a2a1a"/><path d="M74 20 L78 32 L67 30 Z" fill="#3a2a1a"/>
       <path d="M50 30 Q74 32 72 54 L50 86 L28 54 Q26 32 50 30 Z" fill="#ef7a36"/>
       <path d="M50 52 L72 54 L50 86 L28 54 Z" fill="#fbe9d2"/>
     </g>` + eye(40, 48, 5) + eye(60, 48, 5) +
    `<path d="M44 66 L56 66 L50 74 Z" fill="#2a1c12"/>`
  );
  A.sapo = svg(
    `<g stroke="#2f6b2a" stroke-width="2.4" ${S}>
       <circle cx="34" cy="34" r="14" fill="#6cbb4a"/><circle cx="66" cy="34" r="14" fill="#6cbb4a"/>
       <path d="M16 50 Q16 78 50 80 Q84 78 84 50 Q84 40 50 40 Q16 40 16 50 Z" fill="#7ec85a"/>
       <ellipse cx="50" cy="58" rx="30" ry="20" fill="#a6da7e"/>
     </g>` +
    `<circle cx="34" cy="34" r="6.5" fill="#fff" stroke="rgba(0,0,0,.25)"/><circle cx="34" cy="35" r="3.4" fill="#1c2a14"/>` +
    `<circle cx="66" cy="34" r="6.5" fill="#fff" stroke="rgba(0,0,0,.25)"/><circle cx="66" cy="35" r="3.4" fill="#1c2a14"/>` +
    `<path d="M30 62 Q50 76 70 62" stroke="#2f6b2a" stroke-width="3" fill="none" ${S}/>`
  );
  A.macaco = svg(
    `<g stroke="#5a3a20" stroke-width="2.2" ${S}>
       <circle cx="20" cy="48" r="12" fill="#7a4f2c"/><circle cx="80" cy="48" r="12" fill="#7a4f2c"/>
       <circle cx="20" cy="48" r="6" fill="#caa17a"/><circle cx="80" cy="48" r="6" fill="#caa17a"/>
       <path d="M50 20 Q78 22 78 48 Q78 76 50 80 Q22 76 22 48 Q22 22 50 20 Z" fill="#7a4f2c"/>
       <path d="M50 36 Q70 38 70 56 Q70 76 50 80 Q30 76 30 56 Q30 38 50 36 Z" fill="#d8b48c"/>
     </g>` + eye(42, 48, 5) + eye(58, 48, 5) +
    `<ellipse cx="44" cy="64" rx="2" ry="3" fill="#4a3020"/><ellipse cx="56" cy="64" rx="2" ry="3" fill="#4a3020"/>` +
    `<path d="M42 70 Q50 74 58 70" stroke="#5a3a20" stroke-width="2" fill="none" ${S}/>`
  );
  A.coelho = svg(
    `<g stroke="#9a8a78" stroke-width="2.2" ${S}>
       <ellipse cx="38" cy="22" rx="8" ry="20" fill="#f2ece4"/><ellipse cx="62" cy="22" rx="8" ry="20" fill="#f2ece4"/>
       <ellipse cx="38" cy="22" rx="4" ry="14" fill="#f6c9d4"/><ellipse cx="62" cy="22" rx="4" ry="14" fill="#f6c9d4"/>
       <path d="M50 38 Q76 40 76 58 Q76 80 50 84 Q24 80 24 58 Q24 40 50 38 Z" fill="#f7f2ec"/>
     </g>` + eye(40, 56, 5) + eye(60, 56, 5) +
    `<path d="M47 66 L53 66 L50 70 Z" fill="#e58aa0"/>` +
    `<path d="M50 70 V74 M50 73 Q45 76 42 73 M50 73 Q55 76 58 73" stroke="#9a8a78" stroke-width="1.8" fill="none" ${S}/>`
  );
  A.tigre = svg(
    `<g stroke="#8a4a14" stroke-width="2.2" ${S}>
       <path d="M26 40 L22 18 L42 32 Z" fill="#f0902f"/><path d="M74 40 L78 18 L58 32 Z" fill="#f0902f"/>
       <path d="M50 22 Q78 24 78 52 Q78 78 50 82 Q22 78 22 52 Q22 24 50 22 Z" fill="#f59b34"/>
       <ellipse cx="50" cy="62" rx="16" ry="12" fill="#fde9cf"/>
       <g stroke="#3a2410" stroke-width="3"><path d="M50 22 V34"/><path d="M36 26 L40 38"/><path d="M64 26 L60 38"/><path d="M24 46 L34 50"/><path d="M76 46 L66 50"/><path d="M26 60 L34 60"/><path d="M74 60 L66 60"/></g>
     </g>` + eye(40, 50, 5.5) + eye(60, 50, 5.5) +
    `<path d="M45 60 L55 60 L50 65 Z" fill="#b15a2a"/>` +
    `<path d="M50 65 V70 M50 68 Q44 71 40 69 M50 68 Q56 71 60 69" stroke="#8a4a14" stroke-width="1.8" fill="none" ${S}/>`
  );
  A.girafa = svg(
    `<g stroke="#9a7a2a" stroke-width="2.2" ${S}>
       <rect x="44" y="6" width="4" height="14" fill="#caa24a"/><circle cx="46" cy="6" r="4" fill="#6a4a1a"/>
       <rect x="52" y="6" width="4" height="14" fill="#caa24a"/><circle cx="54" cy="6" r="4" fill="#6a4a1a"/>
       <path d="M40 26 H60 Q70 26 70 46 L66 70 Q66 82 50 84 Q34 82 34 70 L30 46 Q30 26 40 26 Z" fill="#f3cf6e"/>
       <ellipse cx="50" cy="72" rx="14" ry="11" fill="#fbe6b8"/>
       <g fill="#c98a2e"><circle cx="42" cy="40" r="4"/><circle cx="58" cy="40" r="4"/><circle cx="36" cy="54" r="4"/><circle cx="64" cy="54" r="4"/><circle cx="50" cy="48" r="4"/></g>
     </g>` + eye(41, 44, 5) + eye(59, 44, 5) +
    `<ellipse cx="44" cy="70" rx="2.2" ry="3" fill="#5a3a14"/><ellipse cx="56" cy="70" rx="2.2" ry="3" fill="#5a3a14"/>`
  );
  A.elefante = svg(
    `<g stroke="#6a6a78" stroke-width="2.2" ${S}>
       <path d="M16 38 Q2 44 12 60 Q22 56 28 50 Z" fill="#9aa0b0"/><path d="M84 38 Q98 44 88 60 Q78 56 72 50 Z" fill="#9aa0b0"/>
       <path d="M50 22 Q78 24 78 50 Q78 72 60 78 L60 92 Q50 96 40 92 L40 78 Q22 72 22 50 Q22 24 50 22 Z" fill="#aab0c0"/>
       <path d="M44 88 Q42 96 38 92 M56 88 Q58 96 62 92" fill="#fff" stroke="#cfcfd8"/>
     </g>` + eye(40, 46, 4.5) + eye(60, 46, 4.5) +
    `<path d="M50 56 L50 88" stroke="#8a8a98" stroke-width="2" fill="none"/>`
  );
  A.porco = svg(
    `<g stroke="#c06a8a" stroke-width="2.2" ${S}>
       <path d="M30 28 L24 18 L40 26 Z" fill="#f3a8c0"/><path d="M70 28 L76 18 L60 26 Z" fill="#f3a8c0"/>
       <path d="M50 24 Q80 26 80 52 Q80 80 50 84 Q20 80 20 52 Q20 26 50 24 Z" fill="#f7b9cd"/>
       <ellipse cx="50" cy="62" rx="15" ry="12" fill="#f49bb6"/>
     </g>` + eye(40, 48, 4.5) + eye(60, 48, 4.5) +
    `<ellipse cx="44" cy="62" rx="3" ry="4" fill="#c06a8a"/><ellipse cx="56" cy="62" rx="3" ry="4" fill="#c06a8a"/>` +
    `<path d="M40 74 Q50 78 60 74" stroke="#c06a8a" stroke-width="2" fill="none" ${S}/>`
  );
  A.vaca = svg(
    `<g stroke="#6b5a44" stroke-width="2.2" ${S}>
       <path d="M22 36 Q14 30 18 24 Q26 26 30 34 Z" fill="#c9b79a"/><path d="M78 36 Q86 30 82 24 Q74 26 70 34 Z" fill="#c9b79a"/>
       <path d="M50 22 Q78 24 78 50 Q78 78 50 82 Q22 78 22 50 Q22 24 50 22 Z" fill="#fbfbfb"/>
       <path d="M28 32 Q42 30 40 46 Q30 50 26 42 Z" fill="#3a3330"/><path d="M70 70 Q60 78 52 72 Q56 62 68 64 Z" fill="#3a3330"/>
       <ellipse cx="50" cy="66" rx="17" ry="13" fill="#f6c9d4"/>
     </g>` + eye(40, 48, 5) + eye(60, 48, 5) +
    `<ellipse cx="44" cy="66" rx="2.4" ry="3.4" fill="#b06a7a"/><ellipse cx="56" cy="66" rx="2.4" ry="3.4" fill="#b06a7a"/>`
  );
  A.galinha = svg(
    `<g stroke="#b06a14" stroke-width="2.2" ${S}>
       <path d="M40 18 Q44 8 50 16 Q56 8 60 18 Q66 12 64 22 L40 22 Q38 14 40 18 Z" fill="#e23b3b"/>
       <path d="M50 22 Q76 24 76 50 Q76 78 50 82 Q24 78 24 50 Q24 24 50 22 Z" fill="#fbfbfb"/>
       <path d="M50 58 L66 52 L66 64 Z" fill="#f5a623"/>
       <path d="M46 70 Q50 80 54 70 Z" fill="#e23b3b"/>
     </g>` + eye(42, 46, 5) + eye(60, 46, 5) +
    `<ellipse cx="34" cy="54" rx="6" ry="9" fill="#f6c9b0" opacity=".7"/>`
  );
  A.coala = svg(
    `<g stroke="#6a6a72" stroke-width="2.2" ${S}>
       <circle cx="24" cy="34" r="15" fill="#b7bcc4"/><circle cx="76" cy="34" r="15" fill="#b7bcc4"/>
       <circle cx="24" cy="34" r="8" fill="#e6e0ea"/><circle cx="76" cy="34" r="8" fill="#e6e0ea"/>
       <path d="M50 24 Q76 26 76 52 Q76 78 50 82 Q24 78 24 52 Q24 26 50 24 Z" fill="#c2c7cf"/>
     </g>` + eye(40, 50, 5) + eye(60, 50, 5) +
    `<path d="M50 58 Q40 60 44 70 Q50 74 56 70 Q60 60 50 58 Z" fill="#3a3330"/>`
  );
  A.pinguim = svg(
    `<g stroke="#1f2a38" stroke-width="2.2" ${S}>
       <path d="M50 18 Q78 20 78 54 Q78 82 50 86 Q22 82 22 54 Q22 20 50 18 Z" fill="#2b3442"/>
       <path d="M50 30 Q68 32 68 58 Q68 80 50 84 Q32 80 32 58 Q32 32 50 30 Z" fill="#fbfbfb"/>
       <path d="M44 56 L56 56 L50 64 Z" fill="#f5a623"/>
     </g>` + eye(41, 46, 5) + eye(59, 46, 5) +
    `<ellipse cx="30" cy="74" rx="7" ry="4" fill="#f5a623"/><ellipse cx="70" cy="74" rx="7" ry="4" fill="#f5a623"/>`
  );

  // =====================================================
  //  DINOSSAUROS — cartoon fofo (contorno preto, cores vivas)
  // =====================================================
  const D = {};
  const sh = `<ellipse cx="50" cy="94" rx="30" ry="4" fill="#000" opacity=".12"/>`;
  function eyeBig(x, y, r) {
    r = r || 8.5;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${O}" stroke-width="2.4"/>` +
      `<circle cx="${x + 1.5}" cy="${y + 1.5}" r="${(r * 0.54).toFixed(1)}" fill="${O}"/>` +
      `<circle cx="${x + 3}" cy="${y - 0.5}" r="${(r * 0.19).toFixed(1)}" fill="#fff"/>`;
  }
  // bípede carnívoro (boca aberta com dentes)
  function bipedCarn(col, dark, belly, head, eyex, eyey) {
    eyex = eyex || 72; eyey = eyey || 30;
    return sh + `<g stroke="${O}" stroke-width="3.2" ${S}>` +
      `<path d="M34 66 C18 62 6 64 2 76 C14 72 26 70 38 70 Z" fill="${col}"/>` +
      `<path d="M40 64 C36 76 36 84 40 88 C44 90 50 90 52 86 C54 80 54 70 52 64 Z" fill="${dark}"/>` +
      `<path d="M38 88 l-3 3 m9 -3 l0 4 m6 -4 l4 3" stroke-width="2.4"/>` +
      `<path d="M30 70 C20 58 24 42 40 36 C46 22 62 16 74 24 C84 22 93 27 97 34 C98 37 95 41 87 41 L66 41 C60 42 58 52 58 60 C58 70 52 76 44 76 C36 76 30 73 30 70 Z" fill="${col}"/>` +
      `<path d="M66 42 C70 52 84 55 95 47 C90 52 76 53 69 47 C67 45 66 43 66 42 Z" fill="${col}"/>` +
      `<path d="M67 42 L92 42 C90 47 78 49 70 46 Z" fill="#8a2840"/>` +
      `<path d="M70 42 l2 4 l2 -4 M76 42 l2 4 l2 -4 M82 42 l2 4 l2 -4 M88 42 l1.5 3 l1.5 -3" fill="#fff"/>` +
      `<path d="M58 66 C54 78 54 86 58 90 C62 92 68 92 70 88 C72 82 72 72 70 66 Z" fill="${col}"/>` +
      `<path d="M56 90 l-3 3 m9 -3 l0 4 m6 -4 l4 3" stroke-width="2.4"/>` +
      `<path d="M40 56 C40 70 48 74 54 70 C58 66 58 58 56 52 C50 48 42 50 40 56 Z" fill="${belly}"/>` +
      `<path d="M60 50 c5 1 7 4 7 8" fill="none" stroke-width="2.8"/>` +
      (head || '') +
      `</g>` + eyeBig(eyex, eyey) + `<circle cx="92" cy="34" r="1.5" fill="${O}"/>`;
  }
  // bípede herbívoro (focinho fechado, sorriso)
  function bipedHerb(col, dark, belly, head, eyex, eyey) {
    eyex = eyex || 71; eyey = eyey || 31;
    return sh + `<g stroke="${O}" stroke-width="3.2" ${S}>` +
      `<path d="M34 66 C18 62 6 64 2 76 C14 72 26 70 38 70 Z" fill="${col}"/>` +
      `<path d="M40 64 C36 76 36 84 40 88 C44 90 50 90 52 86 C54 80 54 70 52 64 Z" fill="${dark}"/>` +
      `<path d="M38 88 l-3 3 m9 -3 l0 4 m6 -4 l4 3" stroke-width="2.4"/>` +
      `<path d="M30 70 C20 58 24 42 40 36 C46 22 62 16 74 24 C85 22 94 28 97 35 C99 40 95 47 85 47 C76 48 68 47 62 49 C60 53 58 56 58 60 C58 70 52 76 44 76 C36 76 30 73 30 70 Z" fill="${col}"/>` +
      `<path d="M58 66 C54 78 54 86 58 90 C62 92 68 92 70 88 C72 82 72 72 70 66 Z" fill="${col}"/>` +
      `<path d="M56 90 l-3 3 m9 -3 l0 4 m6 -4 l4 3" stroke-width="2.4"/>` +
      `<path d="M40 56 C40 70 48 74 54 70 C58 66 58 58 56 52 C50 48 42 50 40 56 Z" fill="${belly}"/>` +
      `<path d="M60 50 c5 1 7 4 7 8" fill="none" stroke-width="2.8"/>` +
      `<path d="M78 44 C84 47 90 46 94 42" fill="none" stroke-width="2.6"/>` +
      (head || '') +
      `</g>` + eyeBig(eyex, eyey) + `<circle cx="91" cy="38" r="1.5" fill="${O}"/>`;
  }
  // quadrúpede (4 patas, cabeça à direita)
  function quad(col, dark, belly, head, eyex, eyey) {
    eyex = eyex || 80; eyey = eyey || 44;
    return sh + `<g stroke="${O}" stroke-width="3.2" ${S}>` +
      `<path d="M28 60 C25 74 25 82 29 86 C33 88 38 88 40 84 C42 78 42 66 40 60 Z" fill="${dark}"/>` +
      `<path d="M58 60 C55 74 55 82 59 86 C63 88 68 88 70 84 C72 78 72 66 70 60 Z" fill="${dark}"/>` +
      `<path d="M24 56 C10 52 2 56 0 66 C10 64 18 64 28 66 Z" fill="${col}"/>` +
      `<path d="M16 56 C16 38 34 32 50 34 C68 32 84 40 84 54 C84 66 66 70 50 70 C30 70 16 66 16 56 Z" fill="${col}"/>` +
      `<path d="M72 48 C74 38 86 36 92 42 C97 46 96 56 88 58 C80 60 72 56 72 48 Z" fill="${col}"/>` +
      `<path d="M90 46 C98 46 99 54 92 56 C88 57 85 54 86 50 Z" fill="${col}"/>` +
      `<path d="M34 62 C31 76 31 84 35 88 C39 90 44 90 46 86 C48 80 48 68 46 62 Z" fill="${col}"/>` +
      `<path d="M64 62 C61 76 61 84 65 88 C69 90 74 90 76 86 C78 80 78 68 76 62 Z" fill="${col}"/>` +
      `<ellipse cx="48" cy="62" rx="24" ry="8" fill="${belly}"/>` +
      (head || '') +
      `</g>` + eyeBig(eyex, eyey, 5.5) + `<path d="M90 52 C93 54 96 53 97 50" fill="none" stroke="${O}" stroke-width="2"/>`;
  }

  D.trex = svg(bipedCarn('#cf4ec9', '#b23bad', '#f2c4ef'));
  D.velociraptor = svg(bipedCarn('#9b6ad0', '#7e4fb0', '#dcc6f0',
    `<path d="M58 22 C62 16 70 16 72 20" fill="none" stroke-width="2.6"/>`));
  D.carnotauro = svg(bipedHerb('#e0594a', '#c4493a', '#f6c0b6',
    `<path d="M62 24 L59 14 L68 22 Z" fill="#fff"/><path d="M78 22 L82 13 L85 22 Z" fill="#fff"/>`));
  D.paquicefalo = svg(bipedHerb('#a06ad0', '#8453b0', '#ddc6f0',
    `<path d="M44 30 C40 16 64 12 78 22 C70 26 78 30 70 32 C60 34 50 34 44 30 Z" fill="#b88ae0"/><g fill="#7a5a8a"><circle cx="50" cy="22" r="1.6"/><circle cx="58" cy="19" r="1.6"/><circle cx="66" cy="20" r="1.6"/></g>`));
  D.iguanodonte = svg(bipedHerb('#69bf6a', '#52a052', '#cdeeb6',
    `<path d="M58 56 L52 49" stroke="${O}" stroke-width="3"/>`));
  D.parassaurolofo = svg(bipedHerb('#7ac74f', '#62a83c', '#cdeeb6',
    `<path d="M56 24 C66 14 80 10 88 14 C90 20 80 24 72 28 C66 31 60 30 56 28 Z" fill="#7ac74f"/>`));
  D.estegossauro = svg(quad('#36b6b0', '#2a928d', '#bfeeeb',
    `<g fill="#f5a623" stroke="${O}" stroke-width="2.6"><path d="M28 36 l7 -16 l8 16 z"/><path d="M44 32 l8 -18 l8 18 z"/><path d="M60 36 l7 -16 l7 16 z"/></g><path d="M2 58 l-5 -4 M1 62 l-6 1" stroke="${O}" stroke-width="2.6"/>`, 82, 46));
  D.triceratops = svg(quad('#f0863c', '#cf6f28', '#fcdcc0',
    `<path d="M70 50 C64 24 100 26 98 50 C96 64 80 66 70 58 Z" fill="#f6a868"/><circle cx="82" cy="48" r="13" fill="#f0863c"/><g fill="#fff" stroke="${O}" stroke-width="2.4"><path d="M76 38 L72 22 L86 34 Z"/><path d="M90 38 L96 22 L98 38 Z"/><path d="M92 48 L98 43 L99 50 Z"/></g>`, 80, 47));
  D.anquilossauro = svg(quad('#8aa84a', '#6f8a3a', '#d4e89a',
    `<circle cx="4" cy="56" r="9" fill="#8aa84a"/><g fill="#c6dd7a" stroke="${O}" stroke-width="2"><path d="M30 44 l5 -7 l5 7 z"/><path d="M46 41 l5.5 -8 l5.5 8 z"/><path d="M62 44 l5 -7 l5 7 z"/></g>`, 82, 46));
  D.dimetrodon = svg(sh +
    `<path d="M20 58 C30 16 70 16 80 56 Z" fill="#e0b878" stroke="${O}" stroke-width="3" ${S}/>` +
    `<path d="M26 50 V32 M36 44 V22 M46 42 V18 M56 42 V20 M66 46 V26" stroke="${O}" stroke-width="2.4"/>` +
    quad('#e8a050', '#c9924a', '#f5d49a', '', 82, 52).replace(sh, ''));
  D.braquiossauro = svg(sh + `<g stroke="${O}" stroke-width="3.2" ${S}>` +
    `<path d="M26 64 C8 60 0 64 -1 76 C12 72 20 72 30 74 Z" fill="#67c06a"/>` +
    `<path d="M30 70 C27 82 27 88 31 90 C36 92 41 92 43 88 C45 82 44 72 42 70 Z" fill="#4ea659"/>` +
    `<path d="M48 70 C45 82 45 88 49 90 C54 92 59 92 61 88 C63 82 62 72 60 70 Z" fill="#4ea659"/>` +
    `<ellipse cx="40" cy="62" rx="26" ry="19" fill="#67c06a"/>` +
    `<path d="M34 66 C32 78 32 86 36 90 C40 92 46 92 48 88 C50 82 49 70 47 66 Z" fill="#67c06a"/>` +
    `<path d="M54 56 C56 28 64 12 76 8 C87 8 85 22 78 28 C70 36 66 50 66 62 Z" fill="#67c06a"/>` +
    `<path d="M70 8 C82 4 88 10 86 18 C84 24 74 24 70 18 Z" fill="#67c06a"/>` +
    `<ellipse cx="40" cy="68" rx="18" ry="11" fill="#c4eec8"/>` +
    `</g>` + eyeBig(80, 13, 6) + `<path d="M82 19 C85 21 89 20 90 17" fill="none" stroke="${O}" stroke-width="2"/>`);
  D.diplodoco = svg(sh + `<g stroke="${O}" stroke-width="3.2" ${S}>` +
    `<path d="M40 60 C20 54 4 56 0 66 C16 64 30 64 44 66 Z" fill="#5bbf9a"/>` +
    `<ellipse cx="48" cy="60" rx="24" ry="16" fill="#5bbf9a"/>` +
    `<path d="M36 70 C33 82 33 88 37 90 C41 92 46 92 48 88 C50 82 49 72 47 70 Z" fill="#4aa686"/>` +
    `<path d="M60 70 C57 82 57 88 61 90 C65 92 70 92 72 88 C74 82 73 72 71 70 Z" fill="#4aa686"/>` +
    `<path d="M64 56 C78 34 92 32 99 42 C92 48 82 50 74 60 Z" fill="#5bbf9a"/>` +
    `<circle cx="95" cy="40" r="9" fill="#5bbf9a"/>` +
    `<ellipse cx="48" cy="64" rx="18" ry="9" fill="#c2eedd"/>` +
    `</g>` + eyeBig(96, 38, 5.5) + `<path d="M98 44 C100 45 102 44 102 42" fill="none" stroke="${O}" stroke-width="2"/>`);
  D.espinossauro = svg(sh +
    `<path d="M26 56 C36 18 64 18 76 54 Z" fill="#9b6ad0" stroke="${O}" stroke-width="3.2" ${S}/>` +
    `<path d="M32 40 C38 20 44 40 44 40 M48 36 C54 16 60 38 60 38 M64 40 C70 22 74 44 74 44" fill="#7e4fb0" stroke="${O}" stroke-width="2.4" ${S}/>` +
    bipedCarn('#4a90d9', '#3a78b8', '#bcd9f4', '').replace(sh, ''));
  D.pterodactilo = svg(sh + `<g stroke="${O}" stroke-width="3.2" ${S}>` +
    `<path d="M48 42 C24 22 6 28 2 48 C24 44 42 52 52 60 Z" fill="#f5c542"/>` +
    `<path d="M52 42 C76 22 94 28 98 48 C76 44 58 52 48 60 Z" fill="#f5c542"/>` +
    `<ellipse cx="50" cy="48" rx="12" ry="15" fill="#f5c542"/>` +
    `<path d="M50 62 C50 78 56 86 60 90 C54 80 56 64 56 62 Z" fill="#f5c542"/>` +
    `<path d="M40 40 C36 26 50 22 60 28 L78 22 L58 44 Z" fill="#f5c542"/>` +
    `</g>` + eyeBig(44, 46, 6) + eyeBig(58, 45, 5) + `<path d="M62 56 C66 58 70 57 72 54" fill="none" stroke="${O}" stroke-width="2"/>`);

  // =====================================================
  //  MUNDO DOS COGUMELOS — toadstools fofos (estilo storybook)
  // =====================================================
  function mush(o) {
    const cap = o.cap, cd = o.capDark, hi = o.capHi || '#ffffff';
    const stem = o.stem || '#fbf3e0', sd = o.stemDark || '#e6d8bd';
    const shadow = `<ellipse cx="50" cy="93" rx="24" ry="4.5" fill="#000" opacity=".12"/>`;
    const grass = o.grass !== false
      ? `<g stroke="#7cc85a" stroke-width="3.5" fill="none" ${S}><path d="M26 92 Q24 82 30 78"/><path d="M34 93 Q34 82 40 80"/><path d="M66 93 Q66 82 60 80"/><path d="M74 92 Q76 82 70 78"/></g>`
      : '';
    // caule bulboso e fofo
    const stemSvg = `<path d="M40 88 Q33 64 47 56 L53 56 Q67 64 60 88 Q50 93 40 88 Z" fill="${stem}" stroke="#cbb892" stroke-width="2.2" ${S}/>` +
      `<ellipse cx="44" cy="74" rx="3.5" ry="11" fill="${sd}" opacity=".5"/>`;
    // chapéu bem arredondado e fofo
    let cap_, L, R, Y;
    if (o.shape === 'tall') { cap_ = `M22 52 Q20 22 50 20 Q80 22 78 52 Q50 62 22 52 Z`; L = 22; R = 78; Y = 52; }
    else { cap_ = `M14 52 Q12 20 50 18 Q88 20 86 52 Q50 64 14 52 Z`; L = 14; R = 86; Y = 52; }
    const capSvg = `<path d="${cap_}" fill="${cap}" stroke="${cd}" stroke-width="2.4" ${S}/>`;
    const under = `<path d="M${L} ${Y} Q50 ${Y + 10} ${R} ${Y} Q50 ${Y + 4} ${L} ${Y} Z" fill="${cd}" opacity=".85"/>`;
    const high = `<ellipse cx="40" cy="34" rx="16" ry="9" fill="${hi}" opacity=".3"/>`;
    const sc = o.spotColor || '#fffaf0';
    const pts = o.shape === 'tall'
      ? [[38, 36, 6], [60, 34, 6], [50, 28, 4.5], [30, 46, 4], [68, 46, 4]]
      : [[32, 38, 7], [62, 34, 7], [48, 28, 5], [74, 44, 5], [26, 46, 5], [50, 46, 6]];
    const spots = o.spots === false ? '' : `<g fill="${sc}" stroke="rgba(0,0,0,.04)">` + pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('') + `</g>`;
    return svg(shadow + grass + stemSvg + capSvg + under + spots + high);
  }
  const M = {
    cogvermelho: mush({ cap: '#e8463a', capDark: '#b52a1f', capHi: '#ff9a86' }),
    coglaranja: mush({ cap: '#f3852a', capDark: '#bf5d12', capHi: '#ffce9e' }),
    cogamarelo: mush({ shape: 'tall', cap: '#f5c531', capDark: '#bd9210', capHi: '#fff2a6' }),
    cogrosa: mush({ cap: '#f06bb0', capDark: '#bf3d82', capHi: '#ffc0e0' }),
    cogroxo: mush({ shape: 'tall', cap: '#a06ad8', capDark: '#6d28d9', capHi: '#dcc0ff' }),
    cogazul: mush({ cap: '#46abd6', capDark: '#1f7096', capHi: '#bfeaff' }),
    cogverde: mush({ cap: '#54b85a', capDark: '#317a36', capHi: '#c2eec4' }),
    cogvermelho2: mush({ shape: 'tall', cap: '#df2f3a', capDark: '#9a141f', capHi: '#ff8088', spotColor: '#fffdf5' }),
    cogcoral: mush({ cap: '#fb7a59', capDark: '#c4492e', capHi: '#ffcab8' }),
    cogturquesa: mush({ cap: '#2bbbac', capDark: '#16786c', capHi: '#a8f0e8' }),
    cogvinho: mush({ shape: 'tall', cap: '#b03250', capDark: '#741f32', capHi: '#e08098' }),
    cogdourado: mush({ cap: '#e6a824', capDark: '#aa7610', capHi: '#ffe2a0' }),
    coglilas: mush({ cap: '#c79ae8', capDark: '#9466c4', capHi: '#ecd8ff' }),
    cogbebe: mush({ shape: 'tall', cap: '#f7a6bd', capDark: '#c4607a', capHi: '#ffd6e2' }),
    cogmenta: mush({ cap: '#7ad0a8', capDark: '#3f9a72', capHi: '#c8f2dd' }),
    cogfogo: mush({ cap: '#f0542a', capDark: '#b53314', capHi: '#ffb090' }),
  };

  // =====================================================
  //  MONSTRINHOS — formas variadas, braços, chifres e olhos
  // =====================================================
  function monsterMouth(kind, d) {
    if (kind === 'teeth')
      return `<path d="M36 62 Q50 78 64 62 Q50 68 36 62 Z" fill="#7a1f3a"/>` +
             `<path d="M39 63 L42 70 L46 63 L50 71 L54 63 L58 70 L61 63" fill="#fff"/>`;
    if (kind === 'oo') return `<ellipse cx="50" cy="66" rx="6.5" ry="8" fill="#7a1f3a"/><ellipse cx="50" cy="70" rx="4" ry="3" fill="#e06a8a"/>`;
    if (kind === 'fangs') return `<path d="M38 62 Q50 70 62 62" fill="none" stroke="${d}" stroke-width="3" ${S}/><path d="M44 64 L46 70 L48 64 Z" fill="#fff"/><path d="M52 64 L54 70 L56 64 Z" fill="#fff"/>`;
    return `<path d="M40 64 Q50 73 60 64" fill="none" stroke="${d}" stroke-width="3" ${S}/>`;
  }
  function monsterEyes(n, d) {
    if (n === 1) return `<circle cx="50" cy="46" r="13" fill="#fff" stroke="${d}" stroke-width="2"/><circle cx="50" cy="48" r="6.5" fill="#23170c"/><circle cx="53" cy="44" r="2.4" fill="#fff"/>`;
    if (n === 3) return eye(38, 44, 5) + eye(62, 44, 5) + eye(50, 34, 5);
    return eye(40, 45, 6.5) + eye(60, 45, 6.5);
  }
  function monster(o) {
    const c = o.color, d = o.dark, acc = o.accent || '#fde047';
    const shadow = `<ellipse cx="50" cy="93" rx="22" ry="4.5" fill="#000" opacity=".15"/>`;
    const arms = o.arms
      ? `<path d="M28 56 Q10 50 12 36" fill="none" stroke="${c}" stroke-width="9" ${S}/><path d="M12 36 l-4 -4 m4 4 l-5 0 m5 0 l0 -5" stroke="${c}" stroke-width="4" ${S}/>` +
        `<path d="M72 56 Q90 50 88 36" fill="none" stroke="${c}" stroke-width="9" ${S}/><path d="M88 36 l4 -4 m-4 4 l5 0 m-5 0 l0 -5" stroke="${c}" stroke-width="4" ${S}/>`
      : '';
    const legs = o.legs
      ? `<rect x="35" y="76" width="11" height="16" rx="5" fill="${c}" stroke="${d}" stroke-width="2"/><rect x="54" y="76" width="11" height="16" rx="5" fill="${c}" stroke="${d}" stroke-width="2"/>` +
        `<ellipse cx="40" cy="92" rx="7" ry="3" fill="${d}"/><ellipse cx="60" cy="92" rx="7" ry="3" fill="${d}"/>`
      : '';
    let body;
    if (o.shape === 'tall') body = `<path d="M32 38 Q32 16 50 16 Q68 16 68 38 L66 78 Q50 86 34 78 Z" fill="${c}" stroke="${d}" stroke-width="2.5" ${S}/>`;
    else if (o.shape === 'wide') body = `<path d="M14 56 Q14 32 50 32 Q86 32 86 56 Q86 80 50 82 Q14 80 14 56 Z" fill="${c}" stroke="${d}" stroke-width="2.5" ${S}/>`;
    else if (o.shape === 'drop') body = `<path d="M50 14 Q76 36 74 60 Q72 84 50 84 Q28 84 26 60 Q24 36 50 14 Z" fill="${c}" stroke="${d}" stroke-width="2.5" ${S}/>`;
    else if (o.shape === 'lumpy') body = `<path d="M26 52 Q22 30 40 30 Q44 18 54 28 Q72 24 72 44 Q88 50 78 64 Q82 84 58 80 Q50 88 42 80 Q18 84 22 64 Q14 56 26 52 Z" fill="${c}" stroke="${d}" stroke-width="2.5" ${S}/>`;
    else if (o.shape === 'furry') body = `<path d="M22 56 L16 46 L24 48 L20 38 L30 44 L30 32 L40 40 Q50 28 60 40 L70 32 L70 44 L80 38 L76 48 L84 46 L78 56 Q82 80 50 82 Q18 80 22 56 Z" fill="${c}" stroke="${d}" stroke-width="2.5" ${S}/>`;
    else body = `<ellipse cx="50" cy="56" rx="30" ry="28" fill="${c}" stroke="${d}" stroke-width="2.5"/>`;
    const belly = `<ellipse cx="50" cy="64" rx="15" ry="12" fill="#fff" opacity=".16"/>`;
    let horns = '';
    if (o.horns === 'two') horns = `<path d="M34 32 L29 16 L42 28 Z" fill="${d}"/><path d="M66 32 L71 16 L58 28 Z" fill="${d}"/>`;
    else if (o.horns === 'one') horns = `<path d="M50 28 L45 12 L57 22 Z" fill="${d}"/>`;
    else if (o.horns === 'antenna') horns = `<line x1="40" y1="26" x2="33" y2="10" stroke="${d}" stroke-width="3"/><circle cx="33" cy="9" r="4" fill="${acc}"/><line x1="60" y1="26" x2="67" y2="10" stroke="${d}" stroke-width="3"/><circle cx="67" cy="9" r="4" fill="${acc}"/>`;
    const spots = o.spots ? `<g fill="${d}" opacity=".5"><circle cx="34" cy="56" r="3.5"/><circle cx="66" cy="54" r="3"/><circle cx="50" cy="70" r="3"/></g>` : '';
    return svg(shadow + arms + legs + horns + body + belly + spots + monsterEyes(o.eyes || 2, d) + monsterMouth(o.mouth, d));
  }
  const MO = {
    mlaranja: monster({ color: '#f97316', dark: '#c2410c', shape: 'tall', eyes: 1, horns: 'two', mouth: 'teeth', arms: 1, legs: 1 }),
    mverde: monster({ color: '#22c55e', dark: '#15803d', shape: 'blob', eyes: 2, horns: 'antenna', mouth: 'grin', arms: 1, spots: 1 }),
    mroxo: monster({ color: '#a855f7', dark: '#7e22ce', shape: 'drop', eyes: 3, horns: 'none', mouth: 'oo', arms: 1, legs: 1 }),
    mrosa: monster({ color: '#ec4899', dark: '#be185d', shape: 'wide', eyes: 2, horns: 'one', mouth: 'teeth', arms: 1, legs: 1 }),
    mazul: monster({ color: '#3b82f6', dark: '#1d4ed8', shape: 'tall', eyes: 2, horns: 'two', mouth: 'fangs', arms: 1, legs: 1 }),
    mamarelo: monster({ color: '#eab308', dark: '#a16207', shape: 'furry', eyes: 2, horns: 'antenna', mouth: 'teeth', arms: 1 }),
    mciano: monster({ color: '#14b8a6', dark: '#0f766e', shape: 'blob', eyes: 1, horns: 'none', mouth: 'grin', arms: 1, legs: 1 }),
    mvermelho: monster({ color: '#ef4444', dark: '#b91c1c', shape: 'drop', eyes: 2, horns: 'two', mouth: 'oo', arms: 1, legs: 1, spots: 1 }),
    mlima: monster({ color: '#84cc16', dark: '#4d7c0f', shape: 'tall', eyes: 3, horns: 'antenna', mouth: 'teeth', arms: 1, legs: 1 }),
    mturq: monster({ color: '#06b6d4', dark: '#0e7490', shape: 'wide', eyes: 2, horns: 'one', mouth: 'fangs', arms: 1, legs: 1, spots: 1 }),
    mcoral: monster({ color: '#fb7185', dark: '#be123c', shape: 'furry', eyes: 1, horns: 'two', mouth: 'teeth', arms: 1 }),
    mviol: monster({ color: '#8b5cf6', dark: '#6d28d9', shape: 'lumpy', eyes: 2, horns: 'antenna', mouth: 'grin', arms: 1, legs: 1 }),
    mambar: monster({ color: '#f59e0b', dark: '#b45309', shape: 'wide', eyes: 3, horns: 'none', mouth: 'grin', arms: 1, legs: 1 }),
    mesmer: monster({ color: '#10b981', dark: '#047857', shape: 'drop', eyes: 2, horns: 'two', mouth: 'teeth', arms: 1, legs: 1, spots: 1 }),
  };

  // =====================================================
  //  CRIATURINHAS — bichinhos elementais (estilo "pocket pet"
  //  ORIGINAL, sem copiar nenhum personagem de marca)
  // =====================================================
  function creature(o) {
    const c = o.color, d = o.dark, b = o.belly || '#ffffff';
    const shadow = `<ellipse cx="50" cy="93" rx="20" ry="4.5" fill="#000" opacity=".14"/>`;
    // pés
    const feet = `<ellipse cx="40" cy="86" rx="8" ry="5" fill="${d}"/><ellipse cx="60" cy="86" rx="8" ry="5" fill="${d}"/>`;
    // cauda
    let tail = '';
    if (o.tail === 'flame') tail = `<path d="M74 70 Q90 64 86 50 Q84 60 78 60 Q82 50 74 56 Q72 64 74 70 Z" fill="#fb923c" stroke="${d}" stroke-width="1.6" ${S}/>`;
    else if (o.tail === 'leaf') tail = `<path d="M74 68 Q92 64 92 50 Q82 54 76 62 Z" fill="#5fbf5a" stroke="${d}" stroke-width="1.6" ${S}/>`;
    else if (o.tail === 'curl') tail = `<path d="M74 72 Q90 72 88 60 Q86 68 80 66" fill="none" stroke="${d}" stroke-width="4" ${S}/>`;
    else if (o.tail === 'fin') tail = `<path d="M74 64 L92 54 L90 70 Z" fill="${c}" stroke="${d}" stroke-width="1.6" ${S}/>`;
    // corpo (ovo/pera) + barriga
    const body = `<path d="M50 26 Q74 30 74 58 Q74 84 50 84 Q26 84 26 58 Q26 30 50 26 Z" fill="${c}" stroke="${d}" stroke-width="2.6" ${S}/>` +
      `<ellipse cx="50" cy="66" rx="15" ry="14" fill="${b}"/>`;
    // bracinhos
    const arms = `<path d="M28 60 Q20 62 18 70" fill="none" stroke="${c}" stroke-width="7" ${S}/><path d="M72 60 Q80 62 82 70" fill="none" stroke="${c}" stroke-width="7" ${S}/>`;
    // orelhas/topo por elemento
    let ears = '';
    if (o.ears === 'mouse') ears = `<circle cx="34" cy="26" r="11" fill="${c}" stroke="${d}" stroke-width="2.4"/><circle cx="66" cy="26" r="11" fill="${c}" stroke="${d}" stroke-width="2.4"/><circle cx="34" cy="26" r="5" fill="${d}"/><circle cx="66" cy="26" r="5" fill="${d}"/>`;
    else if (o.ears === 'long') ears = `<path d="M36 30 L30 8 L44 26 Z" fill="${c}" stroke="${d}" stroke-width="2.4" ${S}/><path d="M64 30 L70 8 L56 26 Z" fill="${c}" stroke="${d}" stroke-width="2.4" ${S}/>`;
    else if (o.ears === 'fin') ears = `<path d="M50 24 Q44 6 56 8 Q62 16 58 26 Z" fill="${o.accent || '#67e8f9'}" stroke="${d}" stroke-width="2" ${S}/>`;
    else if (o.ears === 'leaf') ears = `<path d="M50 26 Q44 6 50 4 Q56 6 50 26 Z" fill="#5fbf5a" stroke="${d}" stroke-width="2" ${S}/><path d="M40 28 Q34 14 42 14 Z M60 28 Q66 14 58 14 Z" fill="#5fbf5a" stroke="${d}" stroke-width="1.6"/>`;
    else if (o.ears === 'horn') ears = `<path d="M40 28 L36 12 L46 24 Z" fill="${o.accent || '#fde047'}" stroke="${d}" stroke-width="2"/><path d="M60 28 L64 12 L54 24 Z" fill="${o.accent || '#fde047'}" stroke="${d}" stroke-width="2"/>`;
    else if (o.ears === 'shell') ears = `<path d="M30 58 Q30 40 50 40 Q70 40 70 58" fill="none" stroke="${d}" stroke-width="2"/>`;
    // cheek / blush
    const blush = `<circle cx="33" cy="60" r="3.5" fill="#ff8fb1" opacity=".6"/><circle cx="67" cy="60" r="3.5" fill="#ff8fb1" opacity=".6"/>`;
    // bochecha elétrica
    const cheeks = o.cheeks ? `<circle cx="32" cy="58" r="4" fill="#f43f5e"/><circle cx="68" cy="58" r="4" fill="#f43f5e"/>` : blush;
    return svg(shadow + tail + feet + arms + ears + body + cheeks + eye(42, 50, 6) + eye(58, 50, 6) +
      `<path d="M46 60 Q50 65 54 60" fill="none" stroke="${d}" stroke-width="2.2" ${S}/>`);
  }
  const CR = {
    crfogo: creature({ color: '#f4623a', dark: '#b53314', tail: 'flame', ears: 'horn', accent: '#ffd24a' }),
    cragua: creature({ color: '#3aa6e0', dark: '#1f6f96', tail: 'fin', ears: 'fin', belly: '#dff3ff' }),
    crfolha: creature({ color: '#5fbf5a', dark: '#2f7a36', tail: 'leaf', ears: 'leaf', belly: '#e6f7df' }),
    crraio: creature({ color: '#f5c531', dark: '#b88a10', tail: 'curl', ears: 'mouse', cheeks: true }),
    crgelo: creature({ color: '#9fe0ec', dark: '#3f9aa8', tail: 'fin', ears: 'horn', accent: '#bff0ff', belly: '#f0fbff' }),
    crpedra: creature({ color: '#b0a48a', dark: '#7a6e54', tail: 'curl', ears: 'shell', belly: '#e8e0cf' }),
    crmato: creature({ color: '#86c84a', dark: '#4f7a1f', tail: 'leaf', ears: 'long', belly: '#eef7d8' }),
    crflor: creature({ color: '#f48ab4', dark: '#bf4f78', tail: 'leaf', ears: 'leaf', belly: '#ffe6f0' }),
    crsombra: creature({ color: '#8b6ad0', dark: '#5b3a9a', tail: 'curl', ears: 'horn', accent: '#c0a0ff', belly: '#e6dcff' }),
    crmar: creature({ color: '#2bbbac', dark: '#16786c', tail: 'fin', ears: 'fin', belly: '#d8f5ef' }),
    crsol: creature({ color: '#f6a623', dark: '#b8730f', tail: 'flame', ears: 'horn', accent: '#ffe08a' }),
    crlua: creature({ color: '#7aa6e0', dark: '#3f6aa8', tail: 'curl', ears: 'long', belly: '#e6eeff' }),
    crrosa: creature({ color: '#f06bb0', dark: '#bf3d82', tail: 'curl', ears: 'mouse', belly: '#ffe0f0' }),
    crtrovao: creature({ color: '#c084fc', dark: '#7e22ce', tail: 'curl', ears: 'horn', accent: '#fde047', cheeks: true }),
  };

  // =====================================================
  function toList(obj) { return Object.keys(obj).map((id) => ({ id, svg: obj[id] })); }
  window.MM_ART = {
    animais: toList(A), dinos: toList(D), mario: toList(M),
    pokemon: toList(MO), criaturas: toList(CR),
  };
})();
