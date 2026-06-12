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

- **1 a 4 jogadores** — no modo multijogador, quem acerta um par continua jogando; quem erra passa a vez. No final, vence quem encontrou mais pares!
- **3 níveis de dificuldade** — 🌱 Fácil (6 pares), 🌟 Médio (8 pares) e 🔥 Difícil (10 pares)
- **4 temas de cartas** — Animais 🐶, Frutas 🍎, Espaço 🚀 e Oceano 🐠
- **3 idiomas** 🌐 — Português 🇧🇷, Inglês 🇺🇸 e Francês 🇫🇷 (troca na hora)
- **Tema claro ☀️ e escuro 🌙** — alterna com um toque
- **Recompensas no final de cada partida** 🎁
  - 🪙 **Moedas** — 2 por par + bônus do nível (quanto mais difícil, mais moedas)
  - 🎁 **Presente surpresa** — a criança **toca no presente** e a figurinha é revelada com animação e confete
  - ⭐ **Estrelas** no modo solo, conforme a eficiência (menos jogadas = mais estrelas)
- **Álbum com 40 figurinhas** organizadas por categorias — Animais 🐾, Animais Marinhos 🌊, Comida 🍔, Fantasia 🦄 e Diversão 🎉 — com barra de progresso. Complete o álbum e ganhe bônus de moedas!
- **Coruja mascote em CSS** 🦉 — pisca, flutua, fala e comemora a vitória jogando confete
- **Fundo animado** com bolhas e estrelinhas, **figuras grandes e de tamanho uniforme** nas cartas
- **Totalmente responsivo** — celular, tablet e computador, retrato ou paisagem
- Progresso (moedas, figurinhas, idioma e tema) salvo no dispositivo automaticamente

## 🧒 Pensado para crianças

- Botões grandes, cores vivas e emojis em vez de texto sempre que possível
- Sem anúncios, sem compras, sem internet necessária depois de carregado
- Controles de som 🔊, tema 🌙/☀️ e idioma 🌐 sempre à mão no topo

## 🛠️ Tecnologia

HTML, CSS e JavaScript puros — sem dependências, sem build. Os sons são gerados com Web Audio API, o confete com Canvas e a coruja é desenhada em CSS, então não há nenhum arquivo de mídia para baixar.

```
index.html      → estrutura das telas
css/style.css   → visual, temas, coruja e animações
js/app.js       → lógica do jogo, idiomas, sons, confete e recompensas
```
