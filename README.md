# Memória Mágica 🧠✨

Jogo da memória divertido e colorido, feito para crianças — direto no navegador, sem instalar nada.

## 🎮 Como jogar

Abra o arquivo `index.html` no navegador, ou rode um servidor local:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## ✨ O que tem no jogo

- **1 ou 2 jogadores** — no modo de 2, quem acerta um par continua jogando; quem erra passa a vez. No final, vence quem encontrou mais pares!
- **2 jogadores = 2 celulares via QR code** 📱 — escolha "2", toque em "Gerar QR Code", mostre o código (ou envie o link) para o amigo escanear e os dois jogam **a mesma partida ao mesmo tempo, cada um no seu aparelho** (conexão direta WebRTC). Quem vencer leva a figurinha; **cada jogador ganha moedas pelos pares que encontrou**, somadas à sua carteira. Ao fim, um **popup de revanche** pergunta "Continuar o duelo?" e começa outra partida na hora, sem precisar de novo QR.
- **Perfil do jogador** 🧑‍🎨 — a criança escreve o nome e escolhe um avatar **ilustrado, redondo e grande** (69 opções: crianças, princesas, dinossauros, bichinhos e robôs ilustrados + os antigos de emoji, todos em ícones redondos), com **seletor de tom de pele** (6 tons, estilo emoji do WhatsApp) para os avatares de pessoas
- **3 níveis com cronômetro** ⏱️ — Fácil (8 pares · 1:40), Médio (10 pares · 2:10) e Difícil (12 pares · 2:40). Terminar antes do tempo dá **bônus de moedas**; se o tempo acabar, é só tentar de novo! (com 2 jogadores, o tempo aumenta)
- **14 fases temáticas** — 4 abertas (Animais 🐶, Frutas 🍎, Espaço 🚀, Oceano 🐠) e 10 **trancadas com cadeado** 🔒 que se compram com a chave 🗝️: Dinossauros 🦖, Comida 🍕, Brinquedos 🧸, Heróis 🦸, Bandeiras 🚩, Fantasia 🐉, Mundo dos Brinquedos 🤠, Mundo do Mario 🍄, Monstrinhos ⚡ e Reino Encantado 🏰 (custos de 30 a 500 moedas)
- **16 fases temáticas** com arte própria — incluindo **Dinossauros** (14 espécies em cartoon fofo), **Mundo dos Cogumelos** (toadstools), **Mundo do Encanador** (plataforma, original), **Monstrinhos** e **Criaturinhas** (bichinhos elementais, original) — sem nenhuma marca registrada
- **Ilustrações detalhadas em SVG** 🎨 — 16 animais, 14 dinossauros (com olhos, garras e dentes), 16 cogumelos estilo toadstool e 14 monstrinhos de formas variadas (com braços, chifres e 1 a 3 olhos), além dos mundos dos Brinquedos e Reino Encantado; arte 100% original e sem marcas
- **Cartas variadas a cada rodada** — cada fase tem 16 figuras e sorteia um conjunto diferente toda partida
- **Música escolhível** 🎵 — botão de música no topo com 5 trilhas para o menu (Alegre, Aventura, Calminha, Espacial, Herói) e melodias próprias para cada nível durante a partida (tudo gerado por código)
- **3 idiomas** 🌐 — Português 🇧🇷, Inglês 🇺🇸 e Francês 🇫🇷 (troca na hora)
- **Tema claro ☀️ e escuro 🌙** — alterna com um toque
- **Recompensas no final de cada partida** 🎁
  - 🪙 **Moedas** — 2 por par + bônus do nível + bônus de tempo (ícone de moeda desenhado em CSS, nítido em qualquer aparelho)
  - ✨ **Pacotinho de figurinhas** — a criança **toca no pacotinho** e a figurinha surpresa é revelada com animação e confete
  - 🌟 **Figurinhas lendárias douradas** — raras, saem na sorte do pacotinho, com revelação dourada especial
  - ⭐ **Estrelas** no modo solo, conforme a eficiência
- **Álbum com 58 figurinhas** em 6 seções — Animais 🐾, Animais Marinhos 🌊, Comida 🍔, Fantasia 🦄, Diversão 🎉 e uma seção especial de **Lendárias Douradas ✨** — com barra de progresso. Complete o álbum e ganhe bônus!
- **Recordes e ranking** 🏆 — nível do jogador (Bronze → Mestre) que sobe conforme os pares encontrados, melhores tempos por nível, recorde de velocidade (pares por minuto) e total de vitórias; no modo de 2, ranking 🥇🥈 da partida
- **Coruja mascote em CSS** 🦉 — pisca, flutua, fala e comemora a vitória batendo as asas
- **Fundo animado**, cartas que entram em cascata, **figuras grandes e uniformes**, vibração no acerto (celular)
- **Tabuleiro que cabe na tela sem rolagem** 📐 — o tamanho das cartas e o número de colunas são calculados automaticamente para todas as cartas caberem na tela em qualquer aparelho/orientação
- **Botão de pausa** ⏸️ — no modo de 1 jogador, pausa o cronômetro e borra o tabuleiro (sem espiar), com Continuar / Recomeçar / Início
- **Totalmente responsivo** — celular, tablet e computador, retrato ou paisagem; o cronômetro **pausa sozinho** se a criança sair da aba
- Progresso (moedas, figurinhas, fases destrancadas, idioma e tema) salvo no dispositivo

## 🧒 Pensado para crianças

- Botões grandes, cores vivas e emojis em vez de texto sempre que possível
- Sem anúncios, sem compras reais, sem internet necessária depois de carregado
- Controles de som 🔊, tema 🌙/☀️ e idioma 🌐 sempre à mão no topo

## 🛠️ Tecnologia

HTML, CSS e JavaScript puros — sem dependências, sem build. Sons e músicas são gerados com Web Audio API, o confete com Canvas e a coruja é desenhada em CSS, então não há nenhum arquivo de mídia para baixar.

```
index.html         → estrutura das telas
css/style.css      → visual, temas, coruja e animações
js/app.js          → lógica do jogo, idiomas, cronômetro, músicas, multiplayer e recompensas
js/vendor/         → PeerJS (WebRTC) e gerador de QR code, embutidos no projeto
```

> O modo de 2 celulares usa WebRTC (PeerJS): os aparelhos se conectam diretamente um ao outro; o servidor público gratuito do PeerJS é usado apenas para o "aperto de mão" inicial.
