/* ============================================================
   Memória Mágica — avatares (imagens fornecidas pelo usuário)
   12 avatares renderizados (príncipe, princesa, rei, sereia,
   tubarão, polvo, sapo, axolote, peixe, narval, gata, marinheiro),
   em img/avatars/aN.webp.
   Expõe window.MM_AVATARS = { skins:[], list:[{id, img}] }
   ============================================================ */

(function () {
  'use strict';
  const list = [];
  for (let i = 1; i <= 12; i++) list.push({ id: 'a' + i, img: 'img/avatars/a' + i + '.webp' });
  window.MM_AVATARS = { skins: [], list };
})();
