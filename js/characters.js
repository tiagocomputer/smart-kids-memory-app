/* ============================================================
   Memória Mágica — personagens originais (SVG)
   Mascotes "kawaii" desenhados em código. Nenhuma imagem de
   marca: tudo é arte original, segura para publicar.
   Expõe window.MM_CHARACTERS = { mario, toy, pokemon, disney }
   onde cada item é { id, svg }.
   ============================================================ */

(function () {
  'use strict';

  const STROKE = 'stroke="rgba(0,0,0,.16)" stroke-width="2"';

  // ---------- Olhos, bochechas, boca ----------
  function eyes(kind) {
    if (kind === 'frog') {
      return `<circle cx="38" cy="40" r="9" fill="#fff" stroke="rgba(0,0,0,.2)"/>` +
             `<circle cx="62" cy="40" r="9" fill="#fff" stroke="rgba(0,0,0,.2)"/>` +
             `<circle cx="38" cy="41" r="4.5" fill="#22324a"/><circle cx="62" cy="41" r="4.5" fill="#22324a"/>` +
             `<circle cx="39.5" cy="39.5" r="1.4" fill="#fff"/><circle cx="63.5" cy="39.5" r="1.4" fill="#fff"/>`;
    }
    if (kind === 'cat') {
      return `<path d="M35 56 Q40 50 45 56" stroke="#22324a" stroke-width="3" fill="none" stroke-linecap="round"/>` +
             `<path d="M55 56 Q60 50 65 56" stroke="#22324a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    }
    return `<ellipse cx="40" cy="54" rx="6.5" ry="8" fill="#fff" stroke="rgba(0,0,0,.18)"/>` +
           `<ellipse cx="60" cy="54" rx="6.5" ry="8" fill="#fff" stroke="rgba(0,0,0,.18)"/>` +
           `<circle cx="41" cy="55" r="4" fill="#22324a"/><circle cx="61" cy="55" r="4" fill="#22324a"/>` +
           `<circle cx="42.6" cy="53.3" r="1.5" fill="#fff"/><circle cx="62.6" cy="53.3" r="1.5" fill="#fff"/>`;
  }
  function mouth(kind) {
    if (kind === 'mustache') return `<path d="M39 65 Q50 73 61 65 Q55 69 50 67 Q45 69 39 65 Z" fill="#7c4a1e"/>`;
    if (kind === 'beak') return `<path d="M44 63 L56 63 L50 71 Z" fill="#f59e0b"/>`;
    if (kind === 'open') return `<ellipse cx="50" cy="66" rx="5" ry="6" fill="#9d2449"/>`;
    return `<path d="M44 64 Q50 70 56 64" stroke="#22324a" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  }
  const BLUSH = `<ellipse cx="32" cy="62" rx="5.5" ry="3.5" fill="#ff7eb0" opacity=".6"/>` +
                `<ellipse cx="68" cy="62" rx="5.5" ry="3.5" fill="#ff7eb0" opacity=".6"/>`;

  // ---------- Corpos ----------
  function starPath(cx, cy, outer, inner) {
    let p = '';
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? inner : outer;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      p += (i ? 'L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1) + ' ';
    }
    return p + 'Z';
  }

  const FACE_DY = { rocket: -4, car: 6, castle: 8, top: 2, rose: -8, mushroom: 2 };

  function body(kind, c, c2) {
    switch (kind) {
      case 'egg': return `<ellipse cx="50" cy="60" rx="30" ry="36" fill="${c}" ${STROKE}/>`;
      case 'square': return `<rect x="17" y="26" width="66" height="66" rx="16" fill="${c}" ${STROKE}/>`;
      case 'star': return `<path d="${starPath(50, 56, 42, 18)}" fill="${c}" ${STROKE} stroke-linejoin="round"/>`;
      case 'cloud':
        return `<path d="M28 76 Q12 74 16 60 Q10 48 26 48 Q28 34 46 38 Q54 28 64 40 Q84 36 80 54 Q92 60 80 74 Z" fill="${c}" ${STROKE}/>`;
      case 'mushroom':
        // cogumelo mais realista: caule sombreado + chapéu com borda escura,
        // centro claro e pintas brancas com leve sombra
        return `<ellipse cx="50" cy="90" rx="22" ry="4" fill="#000" opacity=".12"/>` +
               `<rect x="42" y="56" width="16" height="34" rx="8" fill="#f3e3c4" ${STROKE}/>` +
               `<ellipse cx="46" cy="73" rx="3" ry="14" fill="#e6d2ac" opacity=".7"/>` +
               `<path d="M16 56 Q24 70 50 70 Q76 70 84 56" fill="none" stroke="#caa987" stroke-width="2"/>` +
               `<path d="M50 18 Q90 24 84 56 Q50 66 16 56 Q10 24 50 18 Z" fill="${c}" ${STROKE}/>` +
               `<path d="M50 18 Q78 22 80 44 Q50 52 22 44 Q22 24 50 18 Z" fill="#fff" opacity=".18"/>` +
               `<g fill="#fff" stroke="rgba(0,0,0,.06)"><ellipse cx="34" cy="40" rx="6" ry="5"/><ellipse cx="64" cy="42" rx="7" ry="6"/><ellipse cx="50" cy="29" rx="5" ry="4.5"/><ellipse cx="74" cy="34" rx="4" ry="3.5"/></g>`;
      case 'ghost':
        return `<path d="M20 60 Q20 28 50 28 Q80 28 80 60 L80 86 Q73 79 66 86 Q59 92 52 86 L50 84 L48 86 Q41 92 34 86 Q27 79 20 86 Z" fill="${c}" ${STROKE}/>`;
      case 'top':
        return `<rect x="44" y="28" width="12" height="12" rx="3" fill="#94a3b8" ${STROKE}/>` +
               `<path d="M28 42 H72 L50 88 Z" fill="${c}" ${STROKE} stroke-linejoin="round"/>` +
               `<path d="M40 42 H60 L50 64 Z" fill="${c2 || 'rgba(255,255,255,.4)'}"/>`;
      case 'rocket':
        return `<path d="M38 70 L26 84 L40 80 Z" fill="${c2 || '#f59e0b'}"/>` +
               `<path d="M62 70 L74 84 L60 80 Z" fill="${c2 || '#f59e0b'}"/>` +
               `<path d="M50 14 Q66 32 66 74 H34 Q34 32 50 14 Z" fill="${c}" ${STROKE}/>`;
      case 'car':
        return `<circle cx="32" cy="80" r="9" fill="#374151"/><circle cx="68" cy="80" r="9" fill="#374151"/>` +
               `<path d="M30 52 Q40 34 60 40 L68 52 Z" fill="${c2 || '#bfdbfe'}" ${STROKE}/>` +
               `<rect x="14" y="52" width="72" height="26" rx="12" fill="${c}" ${STROKE}/>`;
      case 'castle':
        return `<rect x="20" y="40" width="14" height="50" fill="${c}" ${STROKE}/>` +
               `<rect x="66" y="40" width="14" height="50" fill="${c}" ${STROKE}/>` +
               `<rect x="34" y="50" width="32" height="40" fill="${c}" ${STROKE}/>` +
               `<path d="M20 40 L27 30 L34 40 Z" fill="${c2 || '#f472b6'}"/><path d="M66 40 L73 30 L80 40 Z" fill="${c2 || '#f472b6'}"/>` +
               `<rect x="45" y="70" width="10" height="20" rx="5" fill="#7c3aed"/>`;
      case 'rose':
        return `<rect x="47" y="58" width="6" height="32" rx="3" fill="#22c55e"/>` +
               `<path d="M50 74 Q34 70 36 82 Q48 84 50 74Z" fill="#16a34a"/>` +
               `<circle cx="50" cy="46" r="24" fill="${c}" ${STROKE}/>` +
               `<circle cx="50" cy="46" r="15" fill="rgba(0,0,0,.12)"/><circle cx="50" cy="46" r="7" fill="rgba(0,0,0,.12)"/>`;
      default: return `<circle cx="50" cy="58" r="34" fill="${c}" ${STROKE}/>`;
    }
  }

  // ---------- Acessórios desenhados ATRÁS do corpo ----------
  function back(spec) {
    let s = '';
    const t = spec.tcolor || '#ef4444';
    if (spec.wings) s += `<ellipse cx="20" cy="52" rx="13" ry="19" fill="#ffffff" opacity=".85" stroke="rgba(0,0,0,.12)"/>` +
                          `<ellipse cx="80" cy="52" rx="13" ry="19" fill="#ffffff" opacity=".85" stroke="rgba(0,0,0,.12)"/>`;
    if (spec.topper === 'princess' || spec.topper === 'prince' || spec.topper === 'hair')
      s += `<path d="M16 64 Q10 18 50 16 Q90 18 84 64 Q80 42 66 38 L34 38 Q20 42 16 64 Z" fill="${t}"/>`;
    if (spec.mane) {
      const cols = ['#ef4444', '#f59e0b', '#fde047', '#22c55e', '#3b82f6', '#a855f7'];
      s += cols.map((col, i) => `<path d="M${22 + i * 2} ${30 + i * 9} Q6 ${40 + i * 8} ${18 + i} ${64 + i * 4}" stroke="${col}" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('');
    }
    if (spec.topper === 'earsMouse')
      s += `<circle cx="26" cy="30" r="14" fill="${spec.color}" ${STROKE}/><circle cx="74" cy="30" r="14" fill="${spec.color}" ${STROKE}/>`;
    if (spec.petals) {
      const c2 = spec.tcolor || '#f9a8d4';
      s += [[50, 24], [76, 38], [76, 70], [50, 84], [24, 70], [24, 38]]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="${c2}"/>`).join('');
    }
    return s;
  }

  // ---------- Acessórios desenhados NA FRENTE ----------
  function topper(spec) {
    const t = spec.tcolor || '#ef4444';
    switch (spec.topper) {
      case 'cap':
        return `<path d="M24 40 Q50 14 76 40 Z" fill="${t}"/><rect x="22" y="38" width="40" height="7" rx="3" fill="${t}"/>` +
               `<rect x="44" y="30" width="12" height="6" rx="3" fill="rgba(255,255,255,.5)"/>`;
      case 'cowboyhat':
        return `<ellipse cx="50" cy="36" rx="40" ry="8" fill="${t}"/><path d="M34 36 Q36 14 50 14 Q64 14 66 36 Z" fill="${t}"/>` +
               `<rect x="34" y="30" width="32" height="5" fill="rgba(0,0,0,.18)"/>`;
      case 'helmet':
        return `<path d="M18 54 A32 32 0 0 1 82 54 Z" fill="#bae6fd" opacity=".45" stroke="#7dd3fc" stroke-width="2.5"/>` +
               `<circle cx="50" cy="22" r="5" fill="#fef08a"/>`;
      case 'antenna':
        return `<line x1="50" y1="26" x2="50" y2="10" stroke="#64748b" stroke-width="3"/><circle cx="50" cy="8" r="5" fill="${t}"/>`;
      case 'crown':
        return `<path d="M30 30 L37 16 L44 27 L50 12 L56 27 L63 16 L70 30 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" stroke-linejoin="round"/>` +
               `<circle cx="50" cy="20" r="2.4" fill="#ef4444"/>`;
      case 'princess':
        return `<path d="M34 26 L40 16 L50 24 L60 16 L66 26 Z" fill="#fde047" stroke="#eab308" stroke-width="1.5" stroke-linejoin="round"/>`;
      case 'prince':
        return `<path d="M36 26 L44 18 L50 24 L56 18 L64 26 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" stroke-linejoin="round"/>`;
      case 'earsRound':
        return `<circle cx="28" cy="30" r="11" fill="${t}" ${STROKE}/><circle cx="72" cy="30" r="11" fill="${t}" ${STROKE}/>`;
      case 'earsCat':
        return `<path d="M28 38 L24 18 L42 30 Z" fill="${t}" stroke-linejoin="round"/><path d="M72 38 L76 18 L58 30 Z" fill="${t}" stroke-linejoin="round"/>`;
      case 'horn':
        return `<path d="M50 12 L45 34 L55 34 Z" fill="${t}" stroke="rgba(0,0,0,.15)" stroke-linejoin="round"/>` +
               `<path d="M47 30 H53 M46 24 H54 M47.5 18 H52.5" stroke="rgba(0,0,0,.18)" stroke-width="1.4"/>`;
      case 'flame':
        return `<path d="M50 6 Q60 22 52 34 Q50 26 50 26 Q44 30 48 16 Q49 10 50 6Z" fill="#fb923c"/><path d="M50 14 Q55 22 50 30 Q46 24 50 14Z" fill="#fde047"/>`;
      case 'leaf':
        return `<path d="M50 34 Q40 14 50 4 Q60 14 50 34Z" fill="#22c55e" stroke="rgba(0,0,0,.12)"/><line x1="50" y1="10" x2="50" y2="30" stroke="rgba(0,0,0,.12)" stroke-width="1.4"/>`;
      case 'bolt':
        return `<path d="M54 6 L40 30 L49 30 L45 46 L62 22 L52 22 Z" fill="#facc15" stroke="#eab308" stroke-width="1.5" stroke-linejoin="round"/>`;
      case 'drop':
        return `<path d="M50 8 Q60 24 50 32 Q40 24 50 8Z" fill="#38bdf8" stroke="rgba(0,0,0,.12)"/>`;
      case 'starTop':
        return `<path d="${starPath(50, 20, 13, 5.5)}" fill="#fde047" stroke="#eab308" stroke-width="1.2" stroke-linejoin="round"/>`;
      case 'spikes':
        return `<path d="M30 32 L36 20 L42 32 M46 30 L52 16 L58 30 M62 32 L68 22 L74 34" fill="${t}" stroke="${t}" stroke-width="2" stroke-linejoin="round"/>`;
      case 'beak':
        return `<path d="M40 30 Q50 22 60 30 Q50 26 40 30Z" fill="${t}"/>`;
      case 'wizardhat':
        return `<path d="M50 4 L34 40 L66 40 Z" fill="${t}" stroke="rgba(0,0,0,.15)" stroke-linejoin="round"/><ellipse cx="50" cy="40" rx="22" ry="5" fill="${t}"/>` +
               `<path d="${starPath(50, 22, 5, 2.2)}" fill="#fde047"/>`;
      default: return '';
    }
  }

  // ---------- Detalhes sobre o corpo ----------
  function detail(spec) {
    let s = '';
    if (spec.spots) s += `<circle cx="34" cy="40" r="5" fill="#fff" opacity=".9"/><circle cx="66" cy="42" r="6" fill="#fff" opacity=".9"/><circle cx="52" cy="30" r="4" fill="#fff" opacity=".9"/>`;
    if (spec.ring) s += `<circle cx="50" cy="58" r="27" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="3"/>`;
    if (spec.stripe) s += `<path d="M16 58 H84" stroke="#fff" stroke-width="7" opacity=".85"/>`;
    if (spec.pokeball) s += `<path d="M16 58 H84" stroke="rgba(0,0,0,.35)" stroke-width="4"/><circle cx="50" cy="58" r="7" fill="#fff" stroke="rgba(0,0,0,.35)" stroke-width="3"/>`;
    if (spec.badge) s += `<circle cx="50" cy="56" r="14" fill="rgba(255,255,255,.85)"/><text x="50" y="63" font-size="20" font-family="Fredoka,sans-serif" font-weight="700" text-anchor="middle" fill="#b45309">${spec.badge}</text>`;
    if (spec.sparkle) s += `<path d="${starPath(74, 30, 6, 2.5)}" fill="#fff"/><path d="${starPath(26, 64, 4, 1.6)}" fill="#fff"/>`;
    return s;
  }

  // Sombreado suave (volume) + sombra no chão, sem usar gradientes com id
  // (evita conflito quando vários SVGs convivem na mesma página)
  const GROUND = `<ellipse cx="50" cy="93" rx="26" ry="5" fill="#000" opacity=".12"/>`;
  function shade(bodyKind) {
    if (['round', 'egg', 'square'].includes(bodyKind)) {
      return `<ellipse cx="42" cy="44" rx="20" ry="14" fill="#fff" opacity=".16"/>` +
             `<ellipse cx="50" cy="80" rx="26" ry="11" fill="#000" opacity=".10"/>`;
    }
    return '';
  }

  // ---------- Monta o personagem ----------
  function build(spec) {
    const dy = FACE_DY[spec.body] || 0;
    const faceG = `<g transform="translate(0,${dy})">${eyes(spec.eyes)}${BLUSH}${mouth(spec.mouth)}</g>`;
    const hasBadge = spec.badge; // crachá já tem "rosto" próprio (letra)
    const kind = spec.body || 'round';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img">` +
      GROUND +
      back(spec) +
      body(kind, spec.color, spec.color2) +
      shade(kind) +
      detail(spec) +
      (hasBadge ? '' : faceG) +
      topper(spec) +
      `</svg>`;
  }

  // ---------- Especificações dos personagens (12 por fase) ----------
  const SPECS = {
    // Mundo dos Cogumelos (inspirado em plataformas clássicas)
    mario: [
      { id: 'cogvermelho', body: 'mushroom', color: '#ef4444', spots: true },
      { id: 'cogverde', body: 'mushroom', color: '#22c55e', spots: true },
      { id: 'estrela', body: 'star', color: '#fbbf24', mouth: 'open' },
      { id: 'nuvem', body: 'cloud', color: '#ffffff' },
      { id: 'encanador', body: 'round', color: '#fcd9b6', topper: 'cap', tcolor: '#ef4444', mouth: 'mustache' },
      { id: 'sapo', body: 'round', color: '#4ade80', eyes: 'frog' },
      { id: 'moeda', body: 'round', color: '#fbbf24', ring: true },
      { id: 'flor', body: 'round', color: '#f472b6', petals: true, tcolor: '#f9a8d4' },
      { id: 'bloco', body: 'square', color: '#f59e0b', badge: '?' },
      { id: 'fogo', body: 'round', color: '#fb923c', topper: 'flame' },
      { id: 'fantasma', body: 'ghost', color: '#ffffff' },
      { id: 'rei', body: 'round', color: '#fde68a', topper: 'crown' },
    ],
    // Mundo dos Brinquedos
    toy: [
      { id: 'cauboi', body: 'round', color: '#fcd9b6', topper: 'cowboyhat', tcolor: '#b45309' },
      { id: 'astronauta', body: 'round', color: '#e5e7eb', topper: 'helmet' },
      { id: 'robo', body: 'square', color: '#94a3b8', topper: 'antenna', tcolor: '#ef4444' },
      { id: 'urso', body: 'round', color: '#b07a4f', topper: 'earsRound', tcolor: '#b07a4f' },
      { id: 'soldado', body: 'round', color: '#65a30d', topper: 'cap', tcolor: '#3f6212' },
      { id: 'bola', body: 'round', color: '#ef4444', stripe: true },
      { id: 'piao', body: 'top', color: '#06b6d4', color2: '#67e8f9' },
      { id: 'dino', body: 'round', color: '#22c55e', topper: 'spikes', tcolor: '#15803d' },
      { id: 'foguete', body: 'rocket', color: '#ef4444', color2: '#fbbf24' },
      { id: 'carrinho', body: 'car', color: '#3b82f6', color2: '#bfdbfe' },
      { id: 'pato', body: 'round', color: '#fde047', topper: 'beak', tcolor: '#f59e0b', mouth: 'beak' },
      { id: 'blocoabc', body: 'square', color: '#f59e0b', badge: 'A' },
    ],
    // Monstrinhos (criaturas por "elemento")
    pokemon: [
      { id: 'mfogo', body: 'round', color: '#f97316', topper: 'flame' },
      { id: 'magua', body: 'round', color: '#38bdf8', topper: 'drop' },
      { id: 'mfolha', body: 'round', color: '#4ade80', topper: 'leaf' },
      { id: 'mraio', body: 'round', color: '#facc15', topper: 'bolt', eyes: 'cat' },
      { id: 'mpedra', body: 'square', color: '#9ca3af' },
      { id: 'mgelo', body: 'round', color: '#a5f3fc', topper: 'starTop' },
      { id: 'mpsi', body: 'round', color: '#c084fc', topper: 'antenna', tcolor: '#a855f7' },
      { id: 'minse', body: 'round', color: '#a3e635', topper: 'earsCat', tcolor: '#84cc16' },
      { id: 'mfan', body: 'ghost', color: '#d8b4fe' },
      { id: 'mdrag', body: 'round', color: '#f87171', topper: 'horn', tcolor: '#fca5a5', wings: true },
      { id: 'mfada', body: 'round', color: '#f9a8d4', topper: 'starTop', wings: true },
      { id: 'mbola', body: 'round', color: '#ef4444', pokeball: true },
    ],
    // Reino Encantado
    disney: [
      { id: 'princesa', body: 'round', color: '#fcd9b6', topper: 'princess', tcolor: '#7c3aed' },
      { id: 'principe', body: 'round', color: '#fcd9b6', topper: 'prince', tcolor: '#92400e' },
      { id: 'fada', body: 'round', color: '#fbcfe8', topper: 'starTop', wings: true },
      { id: 'dragao', body: 'round', color: '#34d399', topper: 'horn', tcolor: '#10b981', wings: true },
      { id: 'unicornio', body: 'round', color: '#ffffff', topper: 'horn', tcolor: '#fde68a', mane: true },
      { id: 'sereia', body: 'round', color: '#fcd9b6', topper: 'hair', tcolor: '#14b8a6' },
      { id: 'castelo', body: 'castle', color: '#c4b5fd', color2: '#f472b6' },
      { id: 'coroa', body: 'round', color: '#fde68a', topper: 'crown' },
      { id: 'varinha', body: 'star', color: '#fde047', sparkle: true, mouth: 'open' },
      { id: 'saporei', body: 'round', color: '#4ade80', eyes: 'frog', topper: 'crown' },
      { id: 'rosa', body: 'rose', color: '#ef4444' },
      { id: 'mago', body: 'round', color: '#a78bfa', topper: 'wizardhat', tcolor: '#6d28d9' },
    ],
  };

  const out = {};
  for (const theme in SPECS) {
    out[theme] = SPECS[theme].map((spec) => ({ id: spec.id, svg: build(spec) }));
  }
  window.MM_CHARACTERS = out;
})();
