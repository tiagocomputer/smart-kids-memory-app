/* ============================================================
   Memória Mágica — arte ilustrada (SVG)
   Animais e dinossauros desenhados à mão em vetor, com cores
   naturais e sombreado — estilo "ilustração de livro infantil".
   Tudo arte original. Expõe window.MM_ART = { animais, dinos }.
   ============================================================ */

(function () {
  'use strict';

  const S = 'stroke-linejoin="round" stroke-linecap="round"';
  function svg(inner) {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`;
  }
  function eye(x, y, r) {
    r = r || 5.5;
    return `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${(r * 1.12).toFixed(1)}" fill="#fff" stroke="rgba(0,0,0,.25)" stroke-width="1"/>` +
           `<circle cx="${x}" cy="${(y + r * 0.18).toFixed(1)}" r="${(r * 0.62).toFixed(1)}" fill="#23170c"/>` +
           `<circle cx="${(x + r * 0.28).toFixed(1)}" cy="${(y - r * 0.32).toFixed(1)}" r="${(r * 0.22).toFixed(1)}" fill="#fff"/>`;
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
     </g>` +
    eye(40, 47) + eye(60, 47) +
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
     </g>` +
    eye(39, 50, 6) + eye(61, 50, 6) +
    `<path d="M46 60 L54 60 L50 65 Z" fill="#e07a7a"/>` +
    `<path d="M50 65 V70 M50 68 Q44 71 40 69 M50 68 Q56 71 60 69" stroke="#7a6a52" stroke-width="1.8" fill="none" ${S}/>` +
    `<path d="M30 60 H14 M30 65 H15 M70 60 H86 M70 65 H85" stroke="#caa06a" stroke-width="1.6"/>`
  );

  A.leao = svg(
    `<g stroke="#7a4a1e" stroke-width="2.2" ${S}>
       <circle cx="50" cy="52" r="38" fill="#9c6b34"/>
       <g fill="#7a4f22"><circle cx="50" cy="14" r="7"/><circle cx="78" cy="24" r="7"/><circle cx="90" cy="50" r="7"/><circle cx="78" cy="78" r="7"/><circle cx="50" cy="90" r="7"/><circle cx="22" cy="78" r="7"/><circle cx="10" cy="50" r="7"/><circle cx="22" cy="24" r="7"/></g>
       <circle cx="50" cy="52" r="30" fill="#e9a94e"/>
       <path d="M30 36 Q26 26 36 26 Q40 28 40 34 Z" fill="#e9a94e"/><path d="M70 36 Q74 26 64 26 Q60 28 60 34 Z" fill="#e9a94e"/>
       <ellipse cx="50" cy="62" rx="17" ry="13" fill="#f6d79a"/>
     </g>` +
    eye(41, 50) + eye(59, 50) +
    `<path d="M44 58 L56 58 L50 64 Z" fill="#5a3a1a"/>` +
    `<path d="M50 64 V70 M50 67 Q43 71 39 68 M50 67 Q57 71 61 68" stroke="#7a4a1e" stroke-width="2" fill="none" ${S}/>`
  );

  A.panda = svg(
    `<g stroke="#2b2b2b" stroke-width="2.2" ${S}>
       <circle cx="28" cy="26" r="12" fill="#2b2b2b"/><circle cx="72" cy="26" r="12" fill="#2b2b2b"/>
       <path d="M50 20 Q80 22 80 52 Q80 80 50 84 Q20 80 20 52 Q20 22 50 20 Z" fill="#fff"/>
       <ellipse cx="37" cy="50" rx="9" ry="12" fill="#2b2b2b" transform="rotate(-18 37 50)"/>
       <ellipse cx="63" cy="50" rx="9" ry="12" fill="#2b2b2b" transform="rotate(18 63 50)"/>
     </g>` +
    eye(37, 50, 4.5) + eye(63, 50, 4.5) +
    `<path d="M44 64 L56 64 L50 70 Z" fill="#2b2b2b"/>` +
    `<path d="M50 70 Q45 74 41 71 M50 70 Q55 74 59 71" stroke="#2b2b2b" stroke-width="2" fill="none" ${S}/>`
  );

  A.raposa = svg(
    `<g stroke="#9a3d12" stroke-width="2.2" ${S}>
       <path d="M22 44 L14 14 L40 34 Z" fill="#e0682a"/><path d="M78 44 L86 14 L60 34 Z" fill="#e0682a"/>
       <path d="M26 20 L22 32 L33 30 Z" fill="#3a2a1a"/><path d="M74 20 L78 32 L67 30 Z" fill="#3a2a1a"/>
       <path d="M50 30 Q74 32 72 54 L50 86 L28 54 Q26 32 50 30 Z" fill="#ef7a36"/>
       <path d="M50 52 L72 54 L50 86 L28 54 Z" fill="#fbe9d2"/>
     </g>` +
    eye(40, 48, 5) + eye(60, 48, 5) +
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
    `<path d="M30 62 Q50 76 70 62" stroke="#2f6b2a" stroke-width="3" fill="none" ${S}/>` +
    `<circle cx="40" cy="60" r="2.4" fill="#ff8fb1" opacity=".6"/><circle cx="60" cy="60" r="2.4" fill="#ff8fb1" opacity=".6"/>`
  );

  A.macaco = svg(
    `<g stroke="#5a3a20" stroke-width="2.2" ${S}>
       <circle cx="20" cy="48" r="12" fill="#7a4f2c"/><circle cx="80" cy="48" r="12" fill="#7a4f2c"/>
       <circle cx="20" cy="48" r="6" fill="#caa17a"/><circle cx="80" cy="48" r="6" fill="#caa17a"/>
       <path d="M50 20 Q78 22 78 48 Q78 76 50 80 Q22 76 22 48 Q22 22 50 20 Z" fill="#7a4f2c"/>
       <path d="M50 36 Q70 38 70 56 Q70 76 50 80 Q30 76 30 56 Q30 38 50 36 Z" fill="#d8b48c"/>
     </g>` +
    eye(42, 48, 5) + eye(58, 48, 5) +
    `<ellipse cx="44" cy="64" rx="2" ry="3" fill="#4a3020"/><ellipse cx="56" cy="64" rx="2" ry="3" fill="#4a3020"/>` +
    `<path d="M42 70 Q50 74 58 70" stroke="#5a3a20" stroke-width="2" fill="none" ${S}/>`
  );

  A.coelho = svg(
    `<g stroke="#9a8a78" stroke-width="2.2" ${S}>
       <ellipse cx="38" cy="22" rx="8" ry="20" fill="#f2ece4"/><ellipse cx="62" cy="22" rx="8" ry="20" fill="#f2ece4"/>
       <ellipse cx="38" cy="22" rx="4" ry="14" fill="#f6c9d4"/><ellipse cx="62" cy="22" rx="4" ry="14" fill="#f6c9d4"/>
       <path d="M50 38 Q76 40 76 58 Q76 80 50 84 Q24 80 24 58 Q24 40 50 38 Z" fill="#f7f2ec"/>
     </g>` +
    eye(40, 56, 5) + eye(60, 56, 5) +
    `<path d="M47 66 L53 66 L50 70 Z" fill="#e58aa0"/>` +
    `<path d="M50 70 V74 M50 73 Q45 76 42 73 M50 73 Q55 76 58 73" stroke="#9a8a78" stroke-width="1.8" fill="none" ${S}/>` +
    `<path d="M44 74 H44.1 M56 74 H56.1" stroke="#fff" stroke-width="3"/>`
  );

  A.tigre = svg(
    `<g stroke="#8a4a14" stroke-width="2.2" ${S}>
       <path d="M26 40 L22 18 L42 32 Z" fill="#f0902f"/><path d="M74 40 L78 18 L58 32 Z" fill="#f0902f"/>
       <path d="M50 22 Q78 24 78 52 Q78 78 50 82 Q22 78 22 52 Q22 24 50 22 Z" fill="#f59b34"/>
       <ellipse cx="50" cy="62" rx="16" ry="12" fill="#fde9cf"/>
       <g stroke="#3a2410" stroke-width="3"><path d="M50 22 V34"/><path d="M36 26 L40 38"/><path d="M64 26 L60 38"/><path d="M24 46 L34 50"/><path d="M76 46 L66 50"/><path d="M26 60 L34 60"/><path d="M74 60 L66 60"/></g>
     </g>` +
    eye(40, 50, 5.5) + eye(60, 50, 5.5) +
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
     </g>` +
    eye(41, 44, 5) + eye(59, 44, 5) +
    `<ellipse cx="44" cy="70" rx="2.2" ry="3" fill="#5a3a14"/><ellipse cx="56" cy="70" rx="2.2" ry="3" fill="#5a3a14"/>` +
    `<path d="M44 78 Q50 81 56 78" stroke="#9a7a2a" stroke-width="2" fill="none" ${S}/>`
  );

  A.elefante = svg(
    `<g stroke="#6a6a78" stroke-width="2.2" ${S}>
       <path d="M16 38 Q2 44 12 60 Q22 56 28 50 Z" fill="#9aa0b0"/><path d="M84 38 Q98 44 88 60 Q78 56 72 50 Z" fill="#9aa0b0"/>
       <path d="M50 22 Q78 24 78 50 Q78 72 60 78 L60 92 Q50 96 40 92 L40 78 Q22 72 22 50 Q22 24 50 22 Z" fill="#aab0c0"/>
       <path d="M40 78 Q36 92 46 96 M60 78 Q64 92 54 96" fill="#aab0c0"/>
       <path d="M44 88 Q42 96 38 92 M56 88 Q58 96 62 92" fill="#fff" stroke="#cfcfd8"/>
     </g>` +
    eye(40, 46, 4.5) + eye(60, 46, 4.5) +
    `<path d="M50 56 L50 88" stroke="#8a8a98" stroke-width="2" fill="none"/>` +
    `<path d="M44 60 H56 M44 66 H56 M46 72 H54" stroke="#8a8a98" stroke-width="1.4"/>`
  );

  A.porco = svg(
    `<g stroke="#c06a8a" stroke-width="2.2" ${S}>
       <path d="M30 28 L24 18 L40 26 Z" fill="#f3a8c0"/><path d="M70 28 L76 18 L60 26 Z" fill="#f3a8c0"/>
       <path d="M50 24 Q80 26 80 52 Q80 80 50 84 Q20 80 20 52 Q20 26 50 24 Z" fill="#f7b9cd"/>
       <ellipse cx="50" cy="62" rx="15" ry="12" fill="#f49bb6"/>
     </g>` +
    eye(40, 48, 4.5) + eye(60, 48, 4.5) +
    `<ellipse cx="44" cy="62" rx="3" ry="4" fill="#c06a8a"/><ellipse cx="56" cy="62" rx="3" ry="4" fill="#c06a8a"/>` +
    `<path d="M40 74 Q50 78 60 74" stroke="#c06a8a" stroke-width="2" fill="none" ${S}/>`
  );

  A.vaca = svg(
    `<g stroke="#6b5a44" stroke-width="2.2" ${S}>
       <path d="M22 36 Q14 30 18 24 Q26 26 30 34 Z" fill="#c9b79a"/><path d="M78 36 Q86 30 82 24 Q74 26 70 34 Z" fill="#c9b79a"/>
       <path d="M50 22 Q78 24 78 50 Q78 78 50 82 Q22 78 22 50 Q22 24 50 22 Z" fill="#fbfbfb"/>
       <path d="M28 32 Q42 30 40 46 Q30 50 26 42 Z" fill="#3a3330"/><path d="M70 70 Q60 78 52 72 Q56 62 68 64 Z" fill="#3a3330"/>
       <ellipse cx="50" cy="66" rx="17" ry="13" fill="#f6c9d4"/>
     </g>` +
    eye(40, 48, 5) + eye(60, 48, 5) +
    `<ellipse cx="44" cy="66" rx="2.4" ry="3.4" fill="#b06a7a"/><ellipse cx="56" cy="66" rx="2.4" ry="3.4" fill="#b06a7a"/>`
  );

  A.galinha = svg(
    `<g stroke="#b06a14" stroke-width="2.2" ${S}>
       <path d="M40 18 Q44 8 50 16 Q56 8 60 18 Q66 12 64 22 L40 22 Q38 14 40 18 Z" fill="#e23b3b"/>
       <path d="M50 22 Q76 24 76 50 Q76 78 50 82 Q24 78 24 50 Q24 24 50 22 Z" fill="#fbfbfb"/>
       <path d="M50 58 L66 52 L66 64 Z" fill="#f5a623"/>
       <path d="M46 70 Q50 80 54 70 Z" fill="#e23b3b"/>
     </g>` +
    eye(42, 46, 5) + eye(60, 46, 5) +
    `<ellipse cx="34" cy="54" rx="6" ry="9" fill="#f6c9b0" opacity=".7"/>`
  );

  A.coala = svg(
    `<g stroke="#6a6a72" stroke-width="2.2" ${S}>
       <circle cx="24" cy="34" r="15" fill="#b7bcc4"/><circle cx="76" cy="34" r="15" fill="#b7bcc4"/>
       <circle cx="24" cy="34" r="8" fill="#e6e0ea"/><circle cx="76" cy="34" r="8" fill="#e6e0ea"/>
       <path d="M50 24 Q76 26 76 52 Q76 78 50 82 Q24 78 24 52 Q24 26 50 24 Z" fill="#c2c7cf"/>
     </g>` +
    eye(40, 50, 5) + eye(60, 50, 5) +
    `<path d="M50 58 Q40 60 44 70 Q50 74 56 70 Q60 60 50 58 Z" fill="#3a3330"/>`
  );

  A.pinguim = svg(
    `<g stroke="#1f2a38" stroke-width="2.2" ${S}>
       <path d="M50 18 Q78 20 78 54 Q78 82 50 86 Q22 82 22 54 Q22 20 50 18 Z" fill="#2b3442"/>
       <path d="M50 30 Q68 32 68 58 Q68 80 50 84 Q32 80 32 58 Q32 32 50 30 Z" fill="#fbfbfb"/>
       <path d="M44 56 L56 56 L50 64 Z" fill="#f5a623"/>
     </g>` +
    eye(41, 46, 5) + eye(59, 46, 5) +
    `<ellipse cx="30" cy="74" rx="7" ry="4" fill="#f5a623"/><ellipse cx="70" cy="74" rx="7" ry="4" fill="#f5a623"/>`
  );

  // =====================================================
  //  DINOSSAUROS — espécies reais (vista de perfil)
  // =====================================================
  function legs(color) { return ''; } // pernas vão em cada espécie

  const D = {};

  // T-Rex
  D.trex = svg(
    `<g stroke="#2f4a22" stroke-width="2.4" ${S}>
       <path d="M40 56 Q16 54 6 74 Q22 66 42 66 Z" fill="#5f8a43"/>
       <rect x="40" y="62" width="8" height="22" rx="3" fill="#4f7637"/>
       <path d="M34 50 Q28 80 52 82 Q76 82 74 52 Q72 38 52 38 Q40 40 34 50 Z" fill="#6a994e"/>
       <rect x="60" y="64" width="9" height="22" rx="3" fill="#6a994e"/>
       <path d="M66 50 Q66 28 84 26 L96 30 Q98 40 88 40 L88 44 L80 45 Q70 46 66 50 Z" fill="#6a994e"/>
       <path d="M84 40 L96 38" /><path d="M86 41 L86 44 M90 40 L90 43" stroke="#fff" stroke-width="1.4"/>
       <path d="M62 54 q6 1 7 5" fill="none"/>
       <path d="M40 60 Q52 76 66 66" fill="none" stroke="#a7c957" stroke-width="3.5"/>
     </g>` + `<circle cx="86" cy="33" r="2.6" fill="#1b2a14"/>`
  );

  // Triceratops
  D.triceratops = svg(
    `<g stroke="#3a4a55" stroke-width="2.4" ${S}>
       <path d="M30 58 Q12 56 8 74 Q20 68 34 66 Z" fill="#6b8694"/>
       <rect x="34" y="64" width="9" height="20" rx="3" fill="#5a7280"/>
       <path d="M30 50 Q24 78 50 80 Q72 80 70 54 Q68 42 50 42 Q38 42 30 50 Z" fill="#7d9aa8"/>
       <rect x="56" y="66" width="9" height="18" rx="3" fill="#7d9aa8"/>
       <path d="M64 56 Q60 30 86 32 Q92 48 84 60 Q76 64 64 56 Z" fill="#8fb0bf"/>
       <path d="M64 56 Q68 40 80 40 Q86 48 82 58 Z" fill="#7d9aa8"/>
       <path d="M82 56 Q92 56 96 62 L88 64 Z" fill="#e6dcc0"/>
       <path d="M72 44 L70 32 L78 40 Z" fill="#e6dcc0"/><path d="M82 46 L84 34 L88 44 Z" fill="#e6dcc0"/>
     </g>` + `<circle cx="76" cy="52" r="2.4" fill="#1b2a14"/>`
  );

  // Stegosaurus
  D.stegosaurus = svg(
    `<g stroke="#5a4a2a" stroke-width="2.4" ${S}>
       <path d="M22 58 Q40 40 64 44 Q84 46 92 58 Q86 66 64 66 Q40 68 22 58 Z" fill="#8a7a44"/>
       <path d="M10 66 Q4 60 6 54 Q14 58 20 62 Z" fill="#8a7a44"/>
       <rect x="34" y="62" width="8" height="20" rx="3" fill="#74672f"/><rect x="64" y="62" width="8" height="20" rx="3" fill="#74672f"/>
       <path d="M84 50 Q94 46 96 52 Q92 58 84 56 Z" fill="#a89a5a"/>
       <g fill="#c6a83a" stroke="#7a6420"><path d="M30 44 L36 30 L42 44 Z"/><path d="M44 40 L50 24 L56 40 Z"/><path d="M58 42 L64 28 L70 42 Z"/></g>
       <path d="M10 64 L2 62 M12 66 L4 68" stroke="#7a6420" stroke-width="3"/>
     </g>` + `<circle cx="90" cy="52" r="2.2" fill="#1b2a14"/>`
  );

  // Braquiossauro (pescoço longo pra cima)
  D.braquiossauro = svg(
    `<g stroke="#5a4030" stroke-width="2.4" ${S}>
       <path d="M28 64 Q10 62 6 76 Q18 70 32 70 Z" fill="#8a6a4a"/>
       <ellipse cx="46" cy="64" rx="24" ry="16" fill="#9a7a56"/>
       <rect x="34" y="74" width="9" height="14" rx="3" fill="#80623f"/><rect x="52" y="74" width="9" height="14" rx="3" fill="#80623f"/>
       <path d="M58 58 Q60 24 74 14 Q82 16 78 28 Q72 40 70 60 Z" fill="#9a7a56"/>
       <path d="M74 14 Q84 10 86 16 Q84 22 76 22 Z" fill="#9a7a56"/>
       <path d="M40 60 Q50 74 64 66" fill="none" stroke="#c2a37e" stroke-width="3.5"/>
     </g>` + `<circle cx="80" cy="17" r="2.2" fill="#1b2a14"/>`
  );

  // Pterodáctilo (asas abertas)
  D.pterodactilo = svg(
    `<g stroke="#7a3a1a" stroke-width="2.4" ${S}>
       <path d="M48 40 Q20 24 8 44 Q26 44 44 54 Z" fill="#d98a4a"/>
       <path d="M52 40 Q80 24 92 44 Q74 44 56 54 Z" fill="#d98a4a"/>
       <ellipse cx="50" cy="52" rx="10" ry="14" fill="#e89a55"/>
       <path d="M50 64 Q50 80 56 86 Q52 78 54 64 Z" fill="#e89a55"/>
       <path d="M44 40 Q40 28 52 26 Q64 26 60 38 L72 34 L58 44 Z" fill="#e89a55"/>
       <path d="M58 38 L72 34" />
     </g>` + `<circle cx="54" cy="36" r="2.2" fill="#1b2a14"/>`
  );

  // Velociraptor
  D.velociraptor = svg(
    `<g stroke="#1f5a55" stroke-width="2.4" ${S}>
       <path d="M30 50 Q8 40 4 56 Q22 54 34 60 Z" fill="#2f8a82"/>
       <path d="M30 46 Q26 66 46 68 Q62 68 62 52 Q62 42 48 42 Q36 40 30 46 Z" fill="#37a79d"/>
       <path d="M50 66 L46 86 L54 86 L58 66 Z" fill="#2f8a82"/>
       <path d="M52 86 L60 90 L58 84 Z" fill="#e6dcc0"/>
       <path d="M58 48 Q60 34 76 34 L90 38 Q92 46 84 46 L78 47 Q66 48 58 48 Z" fill="#37a79d"/>
       <path d="M82 42 L90 40" /><path d="M84 43 L84 46" stroke="#fff" stroke-width="1.2"/>
       <path d="M40 58 Q50 66 58 60" fill="none" stroke="#7fd0c8" stroke-width="3"/>
     </g>` + `<circle cx="80" cy="40" r="2.2" fill="#0e2a26"/>`
  );

  // Anquilossauro (couraça + clava na cauda)
  D.anquilossauro = svg(
    `<g stroke="#4a4a30" stroke-width="2.4" ${S}>
       <circle cx="14" cy="62" r="9" fill="#8a8a50"/>
       <path d="M22 62 Q20 56 26 58 Z M14 54 Q12 48 18 50 Z M14 70 Q12 76 18 74 Z" fill="#a6a060"/>
       <path d="M24 64 Q40 44 64 48 Q86 50 92 64 Q86 72 64 72 Q40 74 24 64 Z" fill="#8a8a50"/>
       <rect x="40" y="68" width="9" height="16" rx="3" fill="#74743f"/><rect x="64" y="68" width="9" height="16" rx="3" fill="#74743f"/>
       <path d="M86 58 Q96 56 96 64 Q90 68 84 64 Z" fill="#a6a060"/>
       <g fill="#bdb86a"><circle cx="40" cy="54" r="3"/><circle cx="52" cy="51" r="3.5"/><circle cx="64" cy="52" r="3.5"/><circle cx="76" cy="56" r="3"/></g>
     </g>` + `<circle cx="90" cy="60" r="2.2" fill="#1b2a14"/>`
  );

  // Parassaurolofo (crista pra trás)
  D.parassaurolofo = svg(
    `<g stroke="#2a5a3a" stroke-width="2.4" ${S}>
       <path d="M30 56 Q10 52 6 70 Q20 64 34 64 Z" fill="#3f9a5a"/>
       <rect x="36" y="62" width="9" height="22" rx="3" fill="#34804b"/>
       <path d="M32 48 Q26 78 52 80 Q74 80 72 52 Q70 40 52 40 Q40 40 32 48 Z" fill="#4cb06a"/>
       <rect x="58" y="64" width="9" height="20" rx="3" fill="#4cb06a"/>
       <path d="M64 50 Q66 34 80 32 L92 22 Q96 28 88 34 L80 44 Q72 48 64 50 Z" fill="#4cb06a"/>
       <path d="M80 32 Q90 24 92 22" fill="none" stroke="#2a5a3a"/>
       <path d="M40 58 Q52 72 64 62" fill="none" stroke="#8fd9a2" stroke-width="3.5"/>
     </g>` + `<circle cx="74" cy="46" r="2.4" fill="#143020"/>`
  );

  // Espinossauro (vela nas costas)
  D.espinossauro = svg(
    `<g stroke="#6a2f2a" stroke-width="2.4" ${S}>
       <path d="M30 60 Q34 40 56 40 Q82 40 86 60 Q80 70 56 70 Q34 70 30 60 Z" fill="#b5544a"/>
       <path d="M30 60 Q12 58 6 74 Q20 68 34 66 Z" fill="#b5544a"/>
       <path d="M34 42 Q40 24 46 42 Z M48 40 Q56 20 62 40 Z M64 42 Q72 24 76 44 Z" fill="#d98a82" stroke="#6a2f2a"/>
       <rect x="40" y="66" width="9" height="18" rx="3" fill="#9a473e"/><rect x="62" y="66" width="9" height="18" rx="3" fill="#9a473e"/>
       <path d="M84 54 Q96 50 98 58 Q96 64 86 62 L82 58 Z" fill="#c56a60"/>
       <path d="M90 58 L98 56" />
     </g>` + `<circle cx="88" cy="56" r="2.2" fill="#2a1410"/>`
  );

  // Diplodoco (corpo longo horizontal)
  D.diplodoco = svg(
    `<g stroke="#3a4a3a" stroke-width="2.4" ${S}>
       <path d="M50 60 Q22 54 4 64 Q22 62 50 66 Z" fill="#6a8a6a"/>
       <ellipse cx="56" cy="62" rx="20" ry="12" fill="#7a9a7a"/>
       <rect x="46" y="70" width="8" height="14" rx="3" fill="#5a7a5a"/><rect x="62" y="70" width="8" height="14" rx="3" fill="#5a7a5a"/>
       <path d="M70 58 Q84 44 94 46 Q90 52 82 54 L74 62 Z" fill="#7a9a7a"/>
       <path d="M88 48 Q96 46 96 50 Q92 52 88 50 Z" fill="#7a9a7a"/>
       <path d="M40 64 Q54 72 66 64" fill="none" stroke="#a8c8a8" stroke-width="3"/>
     </g>` + `<circle cx="90" cy="49" r="2" fill="#16261a"/>`
  );

  // Dimetrodon (vela grande, postura baixa)
  D.dimetrodon = svg(
    `<g stroke="#6a5a2a" stroke-width="2.4" ${S}>
       <path d="M24 64 Q40 36 56 36 Q80 36 90 60 Q80 68 56 66 Q36 68 24 64 Z" fill="#b59a4a"/>
       <path d="M16 66 Q6 64 4 72 Q12 70 20 70 Z" fill="#b59a4a"/>
       <path d="M28 50 V36 M36 44 V28 M46 42 V24 M56 42 V26 M66 44 V30 M76 48 V36" stroke="#8a7430" stroke-width="3"/>
       <path d="M26 50 Q46 24 76 46" fill="#cdb35e" opacity=".55" stroke="none"/>
       <rect x="34" y="64" width="8" height="14" rx="3" fill="#9a8238"/><rect x="64" y="64" width="8" height="14" rx="3" fill="#9a8238"/>
       <path d="M84 58 Q94 56 94 64 Q88 66 82 62 Z" fill="#cdb35e"/>
       <path d="M88 60 L94 60" />
     </g>` + `<circle cx="87" cy="60" r="2" fill="#241c0a"/>`
  );

  // Paquicefalossauro (cabeça em cúpula)
  D.paquicefalo = svg(
    `<g stroke="#5a3a6a" stroke-width="2.4" ${S}>
       <path d="M34 56 Q12 52 6 70 Q20 64 36 64 Z" fill="#8a6aa0"/>
       <rect x="38" y="62" width="9" height="22" rx="3" fill="#74578a"/>
       <path d="M34 48 Q28 78 54 80 Q76 80 74 52 Q72 40 54 40 Q42 40 34 48 Z" fill="#9a7ab0"/>
       <rect x="58" y="64" width="9" height="20" rx="3" fill="#9a7ab0"/>
       <path d="M66 48 Q64 28 84 30 Q92 32 90 44 Q84 50 74 50 Q70 50 66 48 Z" fill="#9a7ab0"/>
       <path d="M70 32 Q78 28 86 34" fill="none" stroke="#b89ad0" stroke-width="3"/>
       <g fill="#7a5a8a"><circle cx="70" cy="47" r="1.6"/><circle cx="76" cy="48" r="1.6"/><circle cx="82" cy="46" r="1.6"/></g>
       <path d="M40 60 Q52 74 64 64" fill="none" stroke="#c6abda" stroke-width="3.5"/>
     </g>` + `<circle cx="80" cy="43" r="2.4" fill="#2a1a34"/>`
  );

  // Iguanodonte (espinho no polegar)
  D.iguanodonte = svg(
    `<g stroke="#3a5a3a" stroke-width="2.4" ${S}>
       <path d="M32 56 Q10 52 4 70 Q18 64 34 64 Z" fill="#6a9a6a"/>
       <rect x="36" y="62" width="9" height="22" rx="3" fill="#558055"/>
       <path d="M32 48 Q26 80 54 82 Q78 82 76 52 Q74 40 54 40 Q42 40 32 48 Z" fill="#7caf7c"/>
       <rect x="58" y="64" width="9" height="20" rx="3" fill="#7caf7c"/>
       <path d="M64 50 Q64 34 82 34 L92 38 Q94 46 86 46 Q72 48 64 50 Z" fill="#7caf7c"/>
       <path d="M60 54 L55 47" stroke="#3a5a3a" stroke-width="3"/>
       <path d="M40 60 Q52 74 64 64" fill="none" stroke="#b6d8b6" stroke-width="3.5"/>
     </g>` + `<circle cx="80" cy="40" r="2.2" fill="#16261a"/>`
  );

  // Carnotauro (chifres sobre os olhos)
  D.carnotauro = svg(
    `<g stroke="#7a3a2a" stroke-width="2.4" ${S}>
       <path d="M34 56 Q12 52 6 72 Q20 66 36 66 Z" fill="#b56a4a"/>
       <rect x="38" y="64" width="9" height="20" rx="3" fill="#9a523a"/>
       <path d="M34 48 Q28 78 54 80 Q76 80 74 52 Q72 40 54 40 Q42 40 34 48 Z" fill="#c97a55"/>
       <rect x="58" y="66" width="9" height="18" rx="3" fill="#c97a55"/>
       <path d="M66 50 Q66 32 84 32 L94 36 Q96 44 88 44 L86 47 Q74 48 66 50 Z" fill="#c97a55"/>
       <path d="M72 34 L70 26 L76 33 Z" fill="#e0a080"/><path d="M80 34 L83 27 L85 34 Z" fill="#e0a080"/>
       <path d="M84 44 L94 42"/><path d="M40 60 Q52 74 64 64" fill="none" stroke="#e6a989" stroke-width="3.5"/>
     </g>` + `<circle cx="82" cy="40" r="2.2" fill="#2a140e"/>`
  );

  // =====================================================
  //  Exporta (mantém a ORDEM estável — vira o id da face)
  // =====================================================
  function toList(obj) { return Object.keys(obj).map((id) => ({ id, svg: obj[id] })); }
  window.MM_ART = { animais: toList(A), dinos: toList(D) };
})();
