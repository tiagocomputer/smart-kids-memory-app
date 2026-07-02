# 📋 Plano de Monetização & Lançamento — Memória Mágica

> Jogo **infantil** (Brasil/pt como público principal → Android domina ~80%).
> Isso define toda a estratégia: regras de anúncio para crianças, portão dos
> pais e compliance vêm ANTES de qualquer receita.

## 0. Ponto de partida
- Jogo web pronto: multi-idioma, login (Firebase Auth), ranking na nuvem (RTDB),
  economia de moedas/figurinhas. Grátis na Vercel + Firebase (Spark).
- Falta: PWA instalável (Fase 0 ✅ em andamento), ganchos de monetização, e
  compliance de app infantil.

## 1. Compliance PRIMEIRO (obrigatório)
| Item | O que é |
|---|---|
| Política de Privacidade (URL) | Exigida pelas lojas e pelo Firebase (coleta e-mail/Google de menores) |
| Portão dos pais | Continha antes de comprar / ver anúncio / sair p/ link externo |
| Anúncios não-personalizados | Só contextual (AdMob TFCD/TFUA) para crianças |
| Google Play: público-alvo | Declarar "para crianças" → Families Policy |
| Apple: categoria Kids | ⚠️ proíbe quase todo anúncio de terceiros → no iOS monetize por compra |
| Data Safety / Privacy Labels | Declarar dados coletados |

## 2. Roadmap
- **Fase 0 — PWA instalável** · grátis · ~1-2h → manifest + ícone + offline + "instalar".
- **Fase 1 — Monetização** · grátis (código) · ~2-4 dias → compra "desbloquear tudo/sem anúncios" + anúncio recompensado (só Android) + portão dos pais.
- **Fase 2 — Google Play** · US$ 25 (uma vez) · ~1 semana → empacotar (TWA/Capacitor), review kids 1-7 dias.
- **Fase 3 — App Store** · US$ 99/ano · ~1-3 semanas → Capacitor, monetiza por IAP (sem ads).

## 3. Modelos de receita (números realistas BR)
| Modelo | Típico |
|---|---|
| Compra "desbloquear tudo" | 1–2% pagam, ~R$ 5–15 (melhor margem) |
| Anúncio recompensado | eCPM ~R$ 5–20 / 1.000 views (só Android, kid-safe) |
| Banner/interstitial | ❌ baixo + irrita |
| Cosméticos (skins/figurinhas) | complementar |
| B2B escolas | nicho lucrativo |

**Realidade:** receita segue downloads. 10 mil downloads → ~R$ 100–400/mês.
Sem downloads ≈ R$ 0. O difícil é distribuição/marketing, não monetização.

## 4. Custos
| Item | Custo |
|---|---|
| PWA | R$ 0 |
| Google Play | US$ 25 (uma vez) |
| Apple | US$ 99/ano |
| Firebase | R$ 0 até escalar |
| Política de privacidade | R$ 0 (gerador) |
| **Começar a faturar (Android)** | **~US$ 25** |

## 5. Ferramentas
- Empacotar: PWABuilder/Bubblewrap (Android), Capacitor (iOS+Android).
- Anúncios kid-safe: AdMob (child-directed) ou Kidoz/SuperAwesome.
- Pagamentos: Play Billing / Apple IAP.

## 6. Armadilhas
1. Anúncio personalizado → banido. 2. Sem portão dos pais → banido.
3. Sem política de privacidade → rejeitado. 4. Apostar tudo no iOS (minoria no BR).
5. "Publicar" ≠ "vender": sem ASO/marketing, fica invisível.

## 7. Recomendação (ordem)
1. **PWA agora** (grátis) → compartilhar por QR/link.
2. **Política de privacidade + portão dos pais** (já necessário pelo login).
3. **Google Play** com compra "desbloquear tudo" + anúncio recompensado.
4. Medir → se houver tração, App Store + marketing.
5. Explorar **B2B (escolas)** em paralelo.

> PWA pra viralizar de graça + Google Play pra faturar (Brasil-first) +
> compra única como carro-chefe. iOS e ads são secundários.
