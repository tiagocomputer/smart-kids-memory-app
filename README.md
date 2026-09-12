# Memória Mágica 🧠✨

Jogo de memória infantil em HTML, CSS e JavaScript, com arte ilustrada, álbum e duelo por convite.

## Executar

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Abra [o jogo local](http://127.0.0.1:8000). Use servidor HTTP no desenvolvimento; HTTPS é necessário em produção para instalação PWA e recursos do navegador. Não há build nem dependências npm para jogar.

## Jogabilidade atual

- **21 mundos:** Animais, Frutas e Espaço abertos; 18 mundos desbloqueáveis com moedas de jogo, entre 140 e 7.640 cada. Total: 53.540 moedas. Curva original restaurada para uma progressão mais longa.
- **3 dificuldades:** Fácil com 8 pares, Médio com 10 e Difícil com 12.
- **Solo Tranquilo:** sem limite de tempo, com moedas, figurinhas e estrelas. É a opção inicial.
- **Solo Desafio:** cronômetro de 100/130/160 segundos, bônus pelo tempo restante e recordes de velocidade.
- **Duelo em dois aparelhos:** WebRTC por QR/link. Quem acerta continua; quem erra passa a vez. Cada participante ganha moedas pelos próprios pares. O vencedor, ou ambos em empate, recebe figurinha. Inclui revanche e troca de fase.
- **Pausa solo:** cobre o tabuleiro e interrompe o tempo e a resolução das cartas. Ao sair da aba, pede Continuar na volta. O tempo pausado não entra no recorde.
- **Coleção:** 168 figurinhas, incluindo 24 lendárias; nenhuma duplicata. Após completar o álbum, cada vitória elegível rende mais 25 moedas.
- **Perfil:** apelido e avatar escolhidos no jogo. O nome/e-mail de autenticação não é usado automaticamente no ranking.
- **Acessibilidade:** foco visível, modais com navegação por teclado, zoom habilitado, controles maiores, feedback das cartas e preferência por movimento reduzido.
- **Idiomas:** português, inglês e francês; temas claro/escuro e áudio opcional.

## Recompensas

| Dificuldade | Moedas de base por vitória solo | Bônus de tempo no Desafio |
|---|---:|---|
| Fácil | 21 | `floor(segundosRestantes / 5)` |
| Médio | 30 | `floor(segundosRestantes / 5)` |
| Difícil | 44 | `floor(segundosRestantes / 5)` |

A primeira conclusão solo de cada combinação mundo/dificuldade dá **+15 moedas uma única vez**, compartilhada entre os dois ritmos. As melhores estrelas dessa combinação ficam salvas. Reiniciar ou trocar o ritmo não concede novamente o bônus. Partidas incompletas não dão recompensa.

No duelo: `max(2, paresDoJogador * 2 + bônusDoNívelSeVencerOuEmpatar)`. Bônus do nível: 5/10/20.

**Diamantes ainda não são moeda.** “Diamante” é um patamar do ranking. Compras reais, anúncios e direitos premium não estão implementados. A estratégia para essas versões está em [ESTRATEGIA_PRODUTO.md](docs/ESTRATEGIA_PRODUTO.md).

## Nova playlist

Seis composições originais substituem as sequências antigas: **Jardim de Nuvens**, **Passeio na Floresta**, **Estrelas de Papel**, **Órbita de Cristal**, **Pequena Expedição** e **Maré de Algodão**. Cada arranjo tem 16 compassos (aproximadamente 36–51 segundos), com melodia, acordes, baixo e acompanhamento. Os timbres são sintetizados com ataques suaves e harmônicos, sem arquivos ou serviços de áudio externos.

O botão de música permite escolher uma faixa ou a playlist automática, que percorre as seis. A escolha vale para o menu e para a partida. No modo Tranquilo, a trilha fica mais lenta e discreta. Volume de música independente (salvo no aparelho), opção **Sem música · manter efeitos** e encerramento das notas/eco ao pausar ou desligar.

Para comparar antes de jogar, abra [as amostras locais](http://127.0.0.1:8000/tests/music-preview.html) com o servidor em execução e clique em **Gerar amostras**. A página renderiza trechos WAV de 12 segundos no navegador e oferece reprodução/download; não envia áudio para terceiros.

## Salvamento, nuvem e offline

Progresso local usa o armazenamento do navegador. Se ele estiver bloqueado/cheio, a partida continua com memória temporária da sessão. A configuração Firebase deste repositório está preenchida; o login é opcional e protegido por portão dos responsáveis. Consultas de rede podem ocorrer antes de autenticar, conforme [Política de Privacidade](privacidade.html).

A sincronização escolhe uma cópia coerente da carteira (moedas, mundos e primeiras conclusões), pela data da última alteração. Não soma saldo antigo com compras novas. No primeiro upgrade de saves sem data, prioriza o progresso existente no aparelho. **Edições concorrentes/offline e relógios diferentes podem causar conflito; isso não é uma carteira comercial.**

O service worker mantém o código e a página disponíveis offline após uma carga online bem-sucedida. Imagens/áudios ficam disponíveis conforme forem visitados e armazenados; todos os mundos não são baixados antecipadamente. Login, ranking e duelo precisam de internet.

## Testes

Node.js é necessário apenas para executar a suíte:

```powershell
node tests/game.test.cjs
node tests/music.test.cjs
node tests/security.test.cjs
```

O teste de regras reais exige emulador Firebase local e uma variável de ambiente específica; sem ela, essa parte é explicitamente ignorada. Veja [SEGURANCA.md](docs/SEGURANCA.md) para reproduzir.

## Revisão e lançamento

- [Revisão dos seis pontos e validação](docs/REVISAO_JOGO.md)
- [Economia, versões gratuita/paga, diamantes e posicionamento](docs/ESTRATEGIA_PRODUTO.md)
- [Segurança, limites e testes do Firebase](docs/SEGURANCA.md)
- [Configuração e publicação das regras Firebase](FIREBASE_SETUP.md)

As regras presentes no repositório precisam ser publicadas no Firebase para proteger o banco em produção. Validação de formato no cliente/banco não autentica partidas: compras, moedas com valor real e competições com prêmios exigem recibos e resultados validados em servidor.
