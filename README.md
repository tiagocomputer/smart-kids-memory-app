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
- **3 níveis de dificuldade**
  - 🌱 Fácil — 6 pares (12 cartas)
  - 🌟 Médio — 8 pares (16 cartas)
  - 🔥 Difícil — 10 pares (20 cartas)
- **4 temas de cartas** — Animais 🐶, Frutas 🍎, Espaço 🚀 e Oceano 🐠
- **Recompensas no final de cada partida** 🎁
  - 🪙 **Moedas** — 2 por par encontrado + bônus do nível (quanto mais difícil, mais moedas)
  - 📒 **Figurinha surpresa** — uma figurinha nova para o álbum a cada partida concluída
  - ⭐ **Estrelas** no modo solo, conforme a eficiência (menos jogadas = mais estrelas)
- **Álbum de figurinhas** com 24 figurinhas colecionáveis — complete o álbum e ganhe bônus de moedas!
- **Sons e animações** — efeitos sonoros, cartas que viram em 3D, confete na vitória
- Progresso (moedas e figurinhas) salvo no dispositivo automaticamente

## 🧒 Pensado para crianças

- Botões grandes, cores vivas e emojis em vez de texto sempre que possível
- Sem anúncios, sem compras, sem internet necessária depois de carregado
- Botão de som 🔊/🔇 sempre visível

## 🛠️ Tecnologia

HTML, CSS e JavaScript puros — sem dependências, sem build. Os sons são gerados com Web Audio API e o confete com Canvas, então não há nenhum arquivo de mídia para baixar.

```
index.html      → estrutura das telas
css/style.css   → visual e animações
js/app.js       → lógica do jogo, sons, confete e recompensas
```
