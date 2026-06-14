/* ============================================================
   Memória Mágica — avatares (imagens fornecidas pelo usuário)
   36 avatares renderizados (princesas, reis, crianças, animais,
   bichos do mar e dinossauros), em img/avatars/aN.webp.
   Expõe window.MM_AVATARS = { skins:[], list:[{id, img}] }
   ============================================================ */

(function () {
  'use strict';
  const list = [];
  for (let i = 1; i <= 36; i++) list.push({ id: 'a' + i, img: 'img/avatars/a' + i + '.webp' });
  // sem tons de pele: os avatares já vêm renderizados com suas cores
  window.MM_AVATARS = { skins: [], list };
})();
