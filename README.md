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
- **2 jogadores = 2 celulares via QR code** 📱 — escolha "2", toque em "Gerar QR Code", mostre o código (ou envie o link) para o amigo escanear e os dois jogam **a mesma partida ao mesmo tempo, cada um no seu aparelho** (conexão direta WebRTC). Quem vencer leva as moedas e a figurinha!
- **Perfil do jogador** 🧑‍🎨 — antes de jogar, a criança escreve seu nome e escolhe um avatar (8 opções), que aparecem no placar e na tela de vitória; dá para editar depois tocando no chip de perfil
- **3 níveis com cronômetro** ⏱️ — Fácil (8 pares · 1:40), Médio (10 pares · 2:10) e Difícil (12 pares · 2:40). Terminar antes do tempo dá **bônus de moedas**; se o tempo acabar, é só tentar de novo! (com 2 jogadores, o tempo aumenta)
- **8 fases temáticas** — 4 abertas (Animais 🐶, Frutas 🍎, Espaço 🚀, Oceano 🐠) e 4 **trancadas com cadeado** 🔒: Dinossauros 🦖 (30 🪙), Comida 🍕 (50 🪙), Brinquedos 🧸 (80 🪙) e Heróis 🦸 (120 🪙). Jogue, junte moedas e **compre a chave** 🗝️ para destrancar!
- **Música de fundo diferente em cada nível** 🎵 — calminha no fácil, animada no médio e acelerada no difícil, e uma **melodia empolgante na tela principal** (tudo gerado por código, sem arquivos de áudio)
- **3 idiomas** 🌐 — Português 🇧🇷, Inglês 🇺🇸 e Francês 🇫🇷 (troca na hora)
- **Tema claro ☀️ e escuro 🌙** — alterna com um toque
- **Recompensas no final de cada partida** 🎁
  - 🪙 **Moedas** — 2 por par + bônus do nível + bônus de tempo
  - ✨ **Pacotinho de figurinhas** — a criança **toca no pacotinho** e a figurinha surpresa é revelada com animação e confete
  - ⭐ **Estrelas** no modo solo, conforme a eficiência
- **Álbum com 40 figurinhas** em 5 categorias — Animais 🐾, Animais Marinhos 🌊, Comida 🍔, Fantasia 🦄 e Diversão 🎉 — com barra de progresso. Complete o álbum e ganhe bônus!
- **Coruja mascote em CSS** 🦉 — pisca, flutua, fala e comemora a vitória batendo as asas
- **Fundo animado**, cartas que entram em cascata, **figuras grandes e uniformes**, vibração no acerto (celular)
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
