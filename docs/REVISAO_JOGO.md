# Revisão do Memória Mágica

Revisão técnica e de produto realizada em 12/09/2026. Alterações estão no código local; não houve publicação do site nem das regras Firebase nesta revisão.

## 1. Segurança

Foram corrigidos entradas de rede permissivas, fila sem limite, identificação pública derivada do login, falhas de sincronização tratadas como sucesso, corrupção de saves, renderização de avatar com IDs de protótipo e cache excessivamente amplo. Regras Firebase agora validam propriedade do registro, campos, tipos, limites e consultas públicas.

O duelo agora exige um baralho com a quantidade exata de pares e exatamente duas cópias de cada figura. Pacotes não podem iniciar uma partida no papel errado ou virar cartas na vez do adversário. A fila preserva a ordem de eventos atrasados e encerra a conexão explicitamente se exceder 128 entradas. Uma nova rodada pode chegar enquanto o convidado termina a animação anterior, sem perder sua recompensa.

**Risco residual relevante:** todo baralho e a pontuação estão no cliente; um cliente modificado ainda pode trapacear. As regras limitam dados, mas não comprovam resultados. O ranking permanece recreativo. Servidor autoritativo, validação de recibos e concessões idempotentes são requisitos para pagamentos e competições com prêmios. Ver [SEGURANCA.md](SEGURANCA.md).

## 2. Melhorias gerais

A documentação foi atualizada para 21 mundos, três gratuitos e 168 figurinhas, corrigindo descrições incompatíveis com o código. O botão Jogar entra diretamente no perfil; salvar na nuvem continua disponível de forma opcional. O jogo continua utilizável quando o armazenamento do navegador falha.

Próximas prioridades: separar módulos do arquivo principal, instrumentar falhas sem coletar dados desnecessários, criar um fluxo de responsáveis com exclusão/gestão de dados, e realizar testes de usabilidade com famílias antes de prometer resultados educacionais.

## 3. Jogabilidade

Implementado **Tranquilo**, sem tempo, com moedas, figurinhas e estrelas. O **Desafio** mantém cronômetro, bônus de tempo e melhores tempos. A criança pode praticar no próprio ritmo e experimentar desafio quando quiser.

Corrigidos callbacks de uma partida anterior que afetavam a próxima, avanço da resolução durante pausa, tempo pausado entrando em recordes e reinício durante animação. A volta à aba exige continuar a partida solo. As melhores estrelas são salvas por mundo/dificuldade.

Próximo ciclo: tutorial curto de pares e turnos, ajuda visual opcional, opção introdutória com menos pares e testes da curva de dificuldade. Partidas incompletas ainda não dão moedas; o modo Tranquilo oferece uma alternativa sem derrota por tempo.

## 4. Versões gratuita e paga

Recomendação: versão gratuita completa na mecânica, com todos os mundos alcançáveis jogando; compra única feita por responsáveis para um pacote claramente descrito de conteúdo e conveniência familiar. Não vender vantagem em duelo/ranking. Uma assinatura só faz sentido com conteúdo novo recorrente comprovado.

Não foram implementados pagamentos ou anúncios. Preços monetários no documento de estratégia são hipóteses para testar, não pesquisa de disposição a pagar. Ver [estratégia completa e fontes oficiais](ESTRATEGIA_PRODUTO.md).

## 5. Moedas, diamantes e desbloqueios

| Item | Antes | Agora |
|---|---|---|
| Custo total dos 18 mundos | 53.540 moedas | 5.700 moedas |
| Primeiro desbloqueio | 140 | 60 |
| Mundo mais caro | 7.640 | 600 |
| Primeira conclusão solo de mundo/dificuldade | Sem bônus próprio | +15 moedas uma vez, compartilhado entre ritmos |
| Próximo desbloqueio | Preço no cadeado | Painel com saldo, custo, falta e barra de progresso |
| Estrelas | Apenas resultado | Melhor resultado salvo por mundo/dificuldade |
| Diamantes como moeda | Ausentes | Continuam como proposta futura |

A carteira agora escolhe um snapshot coerente de saldo, mundos e primeiras conclusões; não recupera moedas gastas combinando saldo antigo e desbloqueios novos. No upgrade, saves locais existentes sem data são preservados. Relógios diferentes e alterações simultâneas/offline ainda podem causar perda de uma operação; a sincronização não é transacional. Recomenda-se jogar em um aparelho de cada vez até existir um serviço de progresso robusto.

A proposta para diamantes é uma recompensa de conquistas, não vendida e nunca obrigatória junto de moedas para abrir o mesmo mundo. Não conectar dinheiro real a recompensas aleatórias. O sistema atual de figurinhas garante uma inédita por vitória elegível.

## 6. Design e competitividade

Mantida a identidade de coruja, cores e ilustrações. Implementados foco de teclado, melhor contraste, respeito a `[hidden]`, modais roláveis, controles de toque maiores e zoom. O tabuleiro adapta colunas: em paisagem pode usar oito, mantendo cartas de pelo menos 44px. Em telas muito baixas, rolagem é preferível a cartas minúsculas.

A navegação de modais contém o foco, permite Escape onde há cancelamento/continuação e devolve o foco ao controle de origem. Cartas agora informam posição e estado, com anúncio de acerto. Movimento reduzido evita confete e reduz animações CSS; imagens WebP animadas continuam uma limitação.

Para competir com produtos infantis consolidados: priorizar entrada simples, consistência visual, ausência de pressão comercial, conteúdo próprio, boa experiência offline e ferramentas para responsáveis. Os próximos investimentos visuais devem ser textos reais nos botões ilustrados, mapa de mundos e tutorial. Essas hipóteses precisam de sessões observadas com crianças e responsáveis, não apenas avaliação técnica.

## Validação realizada

- `node tests/game.test.cjs`: 13 testes passaram (economia, bônus único, save inválido/bloqueado, migração, sincronização, pausa/reinício, baralhos, turnos, fila, rodada antecipada e avatar hostil).
- Testes de cloud/service worker e regras reais no emulador Firebase: resultados e reprodução em [SEGURANCA.md](SEGURANCA.md).
- Verificação de sintaxe dos scripts e revisão do diff.
- Navegador: partida solo completa com 36 moedas, três estrelas e figurinha; tela de progresso; modal de desbloqueio; foco/Shift+Tab/Escape; pausa; tradução das novas opções para inglês.
- Layout observado em 390×844, 844×390 e 320×568; o difícil em paisagem usou oito colunas com cartas de aproximadamente 53px. Sem erro de console nas interações observadas.

Não foram executados compra real, autenticação em produção, duelo entre dois aparelhos físicos, teste com crianças ou auditoria jurídica integral. Nada nesta revisão equivale à publicação das regras no banco ativo.
