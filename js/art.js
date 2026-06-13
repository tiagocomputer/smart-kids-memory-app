/* ============================================================
   Memória Mágica — arte ilustrada (SVG)
   Animais, dinossauros, cogumelos e monstrinhos desenhados à
   mão em vetor, com sombreado. Tudo arte original.
   Expõe window.MM_ART = { animais, dinos, mario, pokemon }.
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
           `<circle cx="${x}" cy="${(y + r * 0.18).toFixed(1)}" r="${(r * 0.6).toFixed(1)}" fill="#23170c"/>` +
           `<circle cx="${(x + r * 0.28).toFixed(1)}" cy="${(y - r * 0.32).toFixed(1)}" r="${(r * 0.22).toFixed(1)}" fill="#fff"/>`;
  }
  // olho menor de réptil (com pálpebra) para os dinossauros
  function dEye(x, y) {
    return `<ellipse cx="${x}" cy="${y}" rx="4" ry="4.4" fill="#fff" stroke="rgba(0,0,0,.3)" stroke-width="1"/>` +
           `<circle cx="${x}" cy="${y + 0.4}" r="2.3" fill="#1b1208"/>` +
           `<circle cx="${x + 1.1}" cy="${y - 1}" r="0.9" fill="#fff"/>` +
           `<path d="M${x - 4.6} ${y - 2.6} Q${x} ${y - 6.5} ${x + 4.6} ${y - 2.6}" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.4"/>`;
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
  //  DINOSSAUROS — espécies reais (perfil), com olho,
  //  garras, dentes e sombreado de barriga
  // =====================================================
  const D = {};

  D.trex = svg(
    `<g stroke="#2f4a22" stroke-width="2.4" ${S}>
       <path d="M40 56 Q16 54 6 74 Q22 66 42 66 Z" fill="#5f8a43"/>
       <path d="M40 62 L38 84 L48 84 L50 64 Z" fill="#4f7637"/><path d="M38 84 L36 88 M42 84 L42 88 M46 84 L48 88" stroke="#e8dcc0" stroke-width="1.6"/>
       <path d="M34 50 Q28 80 52 82 Q76 82 74 52 Q72 38 52 38 Q40 40 34 50 Z" fill="#6a994e"/>
       <path d="M58 64 L56 84 L67 84 L68 64 Z" fill="#6a994e"/><path d="M56 84 L54 88 M60 84 L60 88 M64 84 L66 88" stroke="#e8dcc0" stroke-width="1.6"/>
       <path d="M66 50 Q66 28 84 26 L96 30 Q98 40 88 40 L88 44 L80 45 Q70 46 66 50 Z" fill="#6a994e"/>
       <path d="M84 41 L84 44 M88 40 L88 43 M92 39 L92 42" stroke="#fff" stroke-width="1.4"/>
       <path d="M62 54 q6 1 7 5" fill="none"/>
       <path d="M40 60 Q52 76 66 66" fill="none" stroke="#a7c957" stroke-width="3.5"/>
       <g fill="#557a3e"><circle cx="46" cy="50" r="1.6"/><circle cx="56" cy="48" r="1.6"/><circle cx="64" cy="50" r="1.6"/></g>
     </g>` + dEye(84, 33)
  );
  D.triceratops = svg(
    `<g stroke="#3a4a55" stroke-width="2.4" ${S}>
       <path d="M30 58 Q12 56 8 74 Q20 68 34 66 Z" fill="#6b8694"/>
       <path d="M34 64 L32 84 L43 84 L44 66 Z" fill="#5a7280"/><path d="M32 84 L30 88 M36 84 L36 88 M40 84 L42 88" stroke="#e6dcc0" stroke-width="1.6"/>
       <path d="M30 50 Q24 78 50 80 Q72 80 70 54 Q68 42 50 42 Q38 42 30 50 Z" fill="#7d9aa8"/>
       <path d="M56 66 L54 84 L65 84 L66 66 Z" fill="#7d9aa8"/>
       <path d="M64 56 Q60 30 86 32 Q92 48 84 60 Q76 64 64 56 Z" fill="#8fb0bf"/>
       <path d="M64 56 Q68 40 80 40 Q86 48 82 58 Z" fill="#7d9aa8"/>
       <path d="M82 56 Q92 56 96 62 L88 64 Z" fill="#e6dcc0"/>
       <path d="M72 44 L70 30 L78 40 Z" fill="#e6dcc0"/><path d="M82 46 L84 32 L88 44 Z" fill="#e6dcc0"/>
     </g>` + dEye(76, 52)
  );
  D.estegossauro = svg(
    `<g stroke="#5a4a2a" stroke-width="2.4" ${S}>
       <path d="M22 58 Q40 40 64 44 Q84 46 92 58 Q86 66 64 66 Q40 68 22 58 Z" fill="#8a7a44"/>
       <path d="M10 66 Q4 60 6 54 Q14 58 20 62 Z" fill="#8a7a44"/>
       <path d="M34 62 L32 82 L42 82 L44 62 Z" fill="#74672f"/><path d="M64 62 L62 82 L72 82 L74 62 Z" fill="#74672f"/>
       <path d="M84 50 Q94 46 96 52 Q92 58 84 56 Z" fill="#a89a5a"/>
       <g fill="#c6a83a" stroke="#7a6420"><path d="M30 44 L36 28 L42 44 Z"/><path d="M44 40 L50 22 L56 40 Z"/><path d="M58 42 L64 26 L70 42 Z"/></g>
       <path d="M10 64 L2 60 M12 67 L4 70" stroke="#7a6420" stroke-width="3"/>
     </g>` + dEye(90, 52)
  );
  D.braquiossauro = svg(
    `<g stroke="#5a4030" stroke-width="2.4" ${S}>
       <path d="M28 64 Q10 62 6 76 Q18 70 32 70 Z" fill="#8a6a4a"/>
       <ellipse cx="46" cy="64" rx="24" ry="16" fill="#9a7a56"/>
       <ellipse cx="46" cy="70" rx="20" ry="9" fill="#c2a37e" opacity=".5"/>
       <path d="M34 76 L32 90 L42 90 L43 76 Z" fill="#80623f"/><path d="M52 76 L52 90 L61 90 L60 76 Z" fill="#80623f"/>
       <path d="M58 58 Q60 24 74 14 Q82 16 78 28 Q72 40 70 60 Z" fill="#9a7a56"/>
       <path d="M74 14 Q84 10 86 16 Q84 22 76 22 Z" fill="#9a7a56"/>
     </g>` + dEye(80, 17)
  );
  D.pterodactilo = svg(
    `<g stroke="#7a3a1a" stroke-width="2.4" ${S}>
       <path d="M48 40 Q20 24 8 44 Q26 44 44 54 Z" fill="#d98a4a"/>
       <path d="M52 40 Q80 24 92 44 Q74 44 56 54 Z" fill="#d98a4a"/>
       <path d="M30 28 L8 44 M70 28 L92 44" stroke="#b3702f" stroke-width="2"/>
       <ellipse cx="50" cy="52" rx="10" ry="14" fill="#e89a55"/>
       <path d="M50 64 Q50 80 56 86 Q52 78 54 64 Z" fill="#e89a55"/>
       <path d="M44 40 Q40 28 52 26 Q64 26 60 38 L74 33 L58 44 Z" fill="#e89a55"/>
       <path d="M58 38 L74 33" />
     </g>` + dEye(54, 35)
  );
  D.velociraptor = svg(
    `<g stroke="#1f5a55" stroke-width="2.4" ${S}>
       <path d="M30 50 Q8 40 4 56 Q22 54 34 60 Z" fill="#2f8a82"/>
       <path d="M30 46 Q26 66 46 68 Q62 68 62 52 Q62 42 48 42 Q36 40 30 46 Z" fill="#37a79d"/>
       <path d="M48 66 L44 86 L52 86 L56 66 Z" fill="#2f8a82"/><path d="M44 86 L40 90 L48 88 Z" fill="#e6dcc0"/>
       <path d="M58 48 Q60 34 76 34 L90 38 Q92 46 84 46 L78 47 Q66 48 58 48 Z" fill="#37a79d"/>
       <path d="M82 42 L82 45 M86 41 L86 44 M90 40 L90 43" stroke="#fff" stroke-width="1.2"/>
       <path d="M40 58 Q50 66 58 60" fill="none" stroke="#7fd0c8" stroke-width="3"/>
       <g fill="#1f7a72"><circle cx="44" cy="50" r="1.4"/><circle cx="52" cy="48" r="1.4"/></g>
     </g>` + dEye(80, 40)
  );
  D.anquilossauro = svg(
    `<g stroke="#4a4a30" stroke-width="2.4" ${S}>
       <circle cx="14" cy="62" r="9" fill="#8a8a50"/>
       <path d="M22 62 Q20 56 26 58 Z M14 54 Q12 48 18 50 Z M14 70 Q12 76 18 74 Z" fill="#a6a060"/>
       <path d="M24 64 Q40 44 64 48 Q86 50 92 64 Q86 72 64 72 Q40 74 24 64 Z" fill="#8a8a50"/>
       <path d="M40 70 L38 84 L48 84 L49 70 Z" fill="#74743f"/><path d="M64 70 L63 84 L73 84 L73 70 Z" fill="#74743f"/>
       <path d="M86 58 Q96 56 96 64 Q90 68 84 64 Z" fill="#a6a060"/>
       <g fill="#bdb86a" stroke="#7a7438"><circle cx="40" cy="54" r="3"/><circle cx="52" cy="51" r="3.5"/><circle cx="64" cy="52" r="3.5"/><circle cx="76" cy="56" r="3"/></g>
     </g>` + dEye(90, 60)
  );
  D.parassaurolofo = svg(
    `<g stroke="#2a5a3a" stroke-width="2.4" ${S}>
       <path d="M30 56 Q10 52 6 70 Q20 64 34 64 Z" fill="#3f9a5a"/>
       <path d="M36 62 L34 84 L44 84 L45 64 Z" fill="#34804b"/>
       <path d="M32 48 Q26 78 52 80 Q74 80 72 52 Q70 40 52 40 Q40 40 32 48 Z" fill="#4cb06a"/>
       <path d="M58 64 L57 84 L67 84 L67 64 Z" fill="#4cb06a"/>
       <path d="M64 50 Q66 34 80 32 L92 22 Q96 28 88 34 L80 44 Q72 48 64 50 Z" fill="#4cb06a"/>
       <path d="M80 32 Q90 24 92 22" fill="none" stroke="#2a5a3a"/>
       <path d="M40 58 Q52 72 64 62" fill="none" stroke="#8fd9a2" stroke-width="3.5"/>
     </g>` + dEye(74, 46)
  );
  D.espinossauro = svg(
    `<g stroke="#6a2f2a" stroke-width="2.4" ${S}>
       <path d="M30 60 Q34 40 56 40 Q82 40 86 60 Q80 70 56 70 Q34 70 30 60 Z" fill="#b5544a"/>
       <path d="M30 60 Q12 58 6 74 Q20 68 34 66 Z" fill="#b5544a"/>
       <path d="M34 42 Q40 24 46 42 Z M48 40 Q56 20 62 40 Z M64 42 Q72 24 76 44 Z" fill="#d98a82" stroke="#6a2f2a"/>
       <path d="M40 66 L38 84 L48 84 L49 66 Z" fill="#9a473e"/><path d="M62 66 L61 84 L71 84 L71 66 Z" fill="#9a473e"/>
       <path d="M84 54 Q96 50 98 58 Q96 64 86 62 L82 58 Z" fill="#c56a60"/>
       <path d="M90 56 L90 59 M94 56 L94 59" stroke="#fff" stroke-width="1.2"/>
     </g>` + dEye(88, 55)
  );
  D.diplodoco = svg(
    `<g stroke="#3a4a3a" stroke-width="2.4" ${S}>
       <path d="M50 60 Q22 54 4 64 Q22 62 50 66 Z" fill="#6a8a6a"/>
       <ellipse cx="56" cy="62" rx="20" ry="12" fill="#7a9a7a"/>
       <path d="M46 70 L45 84 L54 84 L54 70 Z" fill="#5a7a5a"/><path d="M62 70 L62 84 L71 84 L70 70 Z" fill="#5a7a5a"/>
       <path d="M70 58 Q84 44 94 46 Q90 52 82 54 L74 62 Z" fill="#7a9a7a"/>
       <path d="M88 48 Q96 46 96 50 Q92 52 88 50 Z" fill="#7a9a7a"/>
       <path d="M40 64 Q54 72 66 64" fill="none" stroke="#a8c8a8" stroke-width="3"/>
     </g>` + dEye(90, 49)
  );
  D.dimetrodon = svg(
    `<g stroke="#6a5a2a" stroke-width="2.4" ${S}>
       <path d="M24 64 Q40 36 56 36 Q80 36 90 60 Q80 68 56 66 Q36 68 24 64 Z" fill="#b59a4a"/>
       <path d="M16 66 Q6 64 4 72 Q12 70 20 70 Z" fill="#b59a4a"/>
       <path d="M26 50 Q46 22 78 48 Q66 40 56 40 Q42 40 26 50 Z" fill="#cdb35e"/>
       <path d="M28 50 V36 M37 44 V26 M47 42 V22 M57 42 V24 M67 44 V28 M77 48 V34" stroke="#8a7430" stroke-width="3"/>
       <path d="M34 64 L33 80 L42 80 L42 64 Z" fill="#9a8238"/><path d="M64 64 L64 80 L73 80 L72 64 Z" fill="#9a8238"/>
       <path d="M84 58 Q94 56 94 64 Q88 66 82 62 Z" fill="#cdb35e"/>
       <path d="M88 60 L94 60" />
     </g>` + dEye(87, 60)
  );
  D.paquicefalo = svg(
    `<g stroke="#5a3a6a" stroke-width="2.4" ${S}>
       <path d="M34 56 Q12 52 6 70 Q20 64 36 64 Z" fill="#8a6aa0"/>
       <path d="M38 62 L37 84 L47 84 L47 64 Z" fill="#74578a"/>
       <path d="M34 48 Q28 78 54 80 Q76 80 74 52 Q72 40 54 40 Q42 40 34 48 Z" fill="#9a7ab0"/>
       <path d="M58 64 L57 84 L67 84 L67 64 Z" fill="#9a7ab0"/>
       <path d="M66 48 Q64 28 84 30 Q92 32 90 44 Q84 50 74 50 Q70 50 66 48 Z" fill="#9a7ab0"/>
       <path d="M70 30 Q78 26 86 32 Q80 36 72 34 Z" fill="#b89ad0"/>
       <g fill="#7a5a8a"><circle cx="69" cy="47" r="1.6"/><circle cx="75" cy="48" r="1.6"/><circle cx="81" cy="46" r="1.6"/></g>
       <path d="M40 60 Q52 74 64 64" fill="none" stroke="#c6abda" stroke-width="3.5"/>
     </g>` + dEye(80, 43)
  );
  D.iguanodonte = svg(
    `<g stroke="#3a5a3a" stroke-width="2.4" ${S}>
       <path d="M32 56 Q10 52 4 70 Q18 64 34 64 Z" fill="#6a9a6a"/>
       <path d="M36 62 L35 84 L45 84 L45 64 Z" fill="#558055"/>
       <path d="M32 48 Q26 80 54 82 Q78 82 76 52 Q74 40 54 40 Q42 40 32 48 Z" fill="#7caf7c"/>
       <path d="M58 64 L57 84 L67 84 L67 64 Z" fill="#7caf7c"/>
       <path d="M64 50 Q64 34 82 34 L92 38 Q94 46 86 46 Q72 48 64 50 Z" fill="#7caf7c"/>
       <path d="M60 54 L55 47" stroke="#3a5a3a" stroke-width="3"/>
       <path d="M40 60 Q52 74 64 64" fill="none" stroke="#b6d8b6" stroke-width="3.5"/>
     </g>` + dEye(80, 40)
  );
  D.carnotauro = svg(
    `<g stroke="#7a3a2a" stroke-width="2.4" ${S}>
       <path d="M34 56 Q12 52 6 72 Q20 66 36 66 Z" fill="#b56a4a"/>
       <path d="M38 64 L37 84 L47 84 L47 66 Z" fill="#9a523a"/>
       <path d="M34 48 Q28 78 54 80 Q76 80 74 52 Q72 40 54 40 Q42 40 34 48 Z" fill="#c97a55"/>
       <path d="M58 66 L57 84 L67 84 L67 66 Z" fill="#c97a55"/>
       <path d="M66 50 Q66 32 84 32 L94 36 Q96 44 88 44 L86 47 Q74 48 66 50 Z" fill="#c97a55"/>
       <path d="M72 34 L70 26 L76 33 Z" fill="#e0a080"/><path d="M80 34 L83 27 L85 34 Z" fill="#e0a080"/>
       <path d="M84 44 L94 42"/><path d="M40 60 Q52 74 64 64" fill="none" stroke="#e6a989" stroke-width="3.5"/>
     </g>` + dEye(82, 40)
  );

  // =====================================================
  //  MUNDO DOS COGUMELOS — toadstools realistas (sem rosto)
  // =====================================================
  function mush(o) {
    const cap = o.cap, cd = o.capDark, hi = o.capHi || '#ffffff';
    const stem = o.stem || '#efe6d2', sd = o.stemDark || '#cdbf9f';
    const shadow = `<ellipse cx="50" cy="93" rx="24" ry="4.5" fill="#000" opacity=".13"/>`;
    const grass = o.grass
      ? `<g stroke="${o.grass}" stroke-width="3.5" fill="none" ${S}><path d="M26 92 Q24 82 30 78"/><path d="M34 93 Q34 82 40 80"/><path d="M66 93 Q66 82 60 80"/><path d="M74 92 Q76 82 70 78"/></g>` +
        (o.flower ? `<g><circle cx="22" cy="80" r="3" fill="${o.flower}"/><circle cx="22" cy="80" r="1.2" fill="#fde047"/><circle cx="80" cy="82" r="3" fill="${o.flower}"/><circle cx="80" cy="82" r="1.2" fill="#fde047"/></g>` : '')
      : '';
    const stemTop = o.shape === 'cone' ? 54 : o.shape === 'flat' ? 48 : 50;
    const stemSvg = `<path d="M41 86 Q36 62 46 ${stemTop} L54 ${stemTop} Q64 62 59 86 Q50 90 41 86 Z" fill="${stem}" stroke="#b3a486" stroke-width="2" ${S}/>` +
      `<path d="M54 ${stemTop} Q64 62 59 86 Q55 88 53 86 Q58 64 52 ${stemTop} Z" fill="${sd}" opacity=".5"/>`;
    const ring = o.ring ? `<path d="M40 65 Q50 72 60 65 Q58 69 50 69 Q42 69 40 65 Z" fill="${sd}"/>` : '';
    let cap_, L, R, Y;
    if (o.shape === 'flat') { cap_ = `M13 47 Q12 33 50 31 Q88 33 87 47 Q50 58 13 47 Z`; L = 13; R = 87; Y = 47; }
    else if (o.shape === 'cone') { cap_ = `M28 54 Q31 16 50 14 Q69 16 72 54 Q50 62 28 54 Z`; L = 28; R = 72; Y = 54; }
    else if (o.shape === 'button') { cap_ = `M24 50 Q22 24 50 22 Q78 24 76 50 Q50 58 24 50 Z`; L = 24; R = 76; Y = 50; }
    else { cap_ = `M16 50 Q13 22 50 20 Q87 22 84 50 Q50 60 16 50 Z`; L = 16; R = 84; Y = 50; }
    const capSvg = `<path d="${cap_}" fill="${cap}" stroke="${cd}" stroke-width="2.2" ${S}/>`;
    const under = `<path d="M${L} ${Y} Q50 ${Y + 9} ${R} ${Y} Q50 ${Y + 4} ${L} ${Y} Z" fill="${cd}"/>`;
    const high = `<path d="M${L + 12} ${Y - 18} Q50 ${Y - 27} ${R - 12} ${Y - 18} Q50 ${Y - 22} ${L + 12} ${Y - 18} Z" fill="${hi}" opacity=".22"/>`;
    let spots = '';
    if (o.spots) {
      const sc = o.spotColor || '#fff7ea';
      const pts = o.shape === 'cone' ? [[42, 34, 4], [56, 30, 4], [50, 24, 3], [60, 42, 3], [40, 44, 3]]
        : [[34, 38, 5], [60, 34, 6], [48, 27, 4], [70, 42, 4], [28, 44, 4], [50, 44, 5]];
      spots = `<g fill="${sc}" stroke="rgba(0,0,0,.05)">` + pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('') + `</g>`;
    }
    return svg(shadow + grass + stemSvg + ring + capSvg + under + spots + high);
  }
  const M = {
    cogvermelho: mush({ shape: 'dome', cap: '#e23b2e', capDark: '#a82414', capHi: '#ff8a6a', spots: true, ring: true, grass: '#6cbf52', flower: '#fb7185' }),
    coglaranja: mush({ shape: 'dome', cap: '#f08023', capDark: '#b85410', capHi: '#ffd0a0', spots: true, grass: '#6cbf52' }),
    cogamarelo: mush({ shape: 'flat', cap: '#f4c430', capDark: '#bb8e10', capHi: '#fff0a0', spots: true, grass: '#6cbf52', flower: '#fbbf24' }),
    cogrosa: mush({ shape: 'dome', cap: '#ef5da8', capDark: '#bb2f78', capHi: '#ffb0d8', spots: true }),
    cogroxo: mush({ shape: 'button', cap: '#9b5de5', capDark: '#6d28d9', capHi: '#d8b8ff', spots: true, grass: '#6cbf52' }),
    cogmarrom: mush({ shape: 'dome', cap: '#9a6a3a', capDark: '#6e4a24', capHi: '#caa078', ring: true }),
    cogcone: mush({ shape: 'cone', cap: '#e2483b', capDark: '#a8281c', capHi: '#ff9a80', spots: true, grass: '#6cbf52' }),
    cogbotao: mush({ shape: 'button', cap: '#f06a48', capDark: '#b8401f', capHi: '#ffc0a0', spots: true }),
    cogazul: mush({ shape: 'flat', cap: '#3ba9d6', capDark: '#1f6f96', capHi: '#bfeaff', spots: true, grass: '#6cbf52' }),
    cogverde: mush({ shape: 'dome', cap: '#4caf50', capDark: '#2f7a32', capHi: '#bff0c0', spots: true }),
    cogamanita: mush({ shape: 'dome', cap: '#d42a3a', capDark: '#9a1420', capHi: '#ff7a86', spots: true, spotColor: '#fffdf5', ring: true, grass: '#6cbf52', flower: '#f472b6' }),
    cogcoral: mush({ shape: 'cone', cap: '#ff7a59', capDark: '#c44a2e', capHi: '#ffc8b0', grass: '#6cbf52' }),
    cogdourado: mush({ shape: 'flat', cap: '#e0a020', capDark: '#a87410', capHi: '#ffe0a0', spots: true, ring: true }),
    cogvinho: mush({ shape: 'button', cap: '#a83246', capDark: '#741f2e', capHi: '#d87888', spots: true, grass: '#6cbf52' }),
    cogturquesa: mush({ shape: 'dome', cap: '#2bb3a3', capDark: '#16786c', capHi: '#a8f0e6', spots: true }),
    cogbebe: mush({ shape: 'button', cap: '#f59ab0', capDark: '#c4607a', capHi: '#ffd0dc', spots: true, grass: '#6cbf52', flower: '#fb7185' }),
  };

  // =====================================================
  //  MONSTRINHOS — formas variadas, braços, chifres e olhos
  // =====================================================
  function monsterMouth(kind, d) {
    if (kind === 'teeth')
      return `<path d="M36 62 Q50 78 64 62 Q50 68 36 62 Z" fill="#7a1f3a"/>` +
             `<path d="M39 63 L42 70 L46 63 L50 71 L54 63 L58 70 L61 63" fill="#fff"/>` +
             `<path d="M40 64 L43 60 M50 65 L50 60 M60 64 L57 60" stroke="#7a1f3a" stroke-width="0"/>`;
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
  function toList(obj) { return Object.keys(obj).map((id) => ({ id, svg: obj[id] })); }
  window.MM_ART = { animais: toList(A), dinos: toList(D), mario: toList(M), pokemon: toList(MO) };
})();
