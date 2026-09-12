# Memória Mágica — economia, produto e versões gratuita/paga

Data da análise: 12/09/2026. Base: `js/app.js`, `js/cloud.js`, `database.rules.json`, `README.md` e `MONETIZACAO.md`. Este documento separa o diagnóstico do código recebido, as decisões desta revisão e as propostas futuras. As projeções abaixo são cálculos de balanceamento, não dados observados de jogadores nem previsões de receita.

## 1. Diagnóstico do jogo recebido

O produto já tem uma base valiosa: partidas curtas, arte variada, álbum sem figurinhas repetidas, idiomas, jogo local e duelo por convite. A distância entre uma partida e o próximo mundo cresce bastante nos mundos finais. Após experimentar uma curva mais curta, o responsável pelo produto preferiu restaurar os preços originais para prolongar o desafio; os bônus de primeira conclusão e as metas de estrelas complementam essa progressão.

| Sistema | Estado encontrado antes desta revisão | Consequência |
|---|---|---|
| Mundos | 21; Animais, Frutas e Espaço gratuitos; 18 desbloqueáveis com moedas | O README menciona 14/16 mundos e quatro gratuitos, informação desatualizada |
| Total de desbloqueios | 53.540 moedas | Progressão longa; observar se há repetição sem novidade nos mundos finais |
| Fácil | 8 pares; 100 s; `16 + 5 + floor(segundosRestantes / 5)` moedas | 21 moedas de base; terminar em 50 s rende 31 |
| Médio | 10 pares; 130 s; `20 + 10 + floor(segundosRestantes / 5)` | 30 de base; terminar em 65 s rende 43 |
| Difícil | 12 pares; 160 s; `24 + 20 + floor(segundosRestantes / 5)` | 44 de base; terminar em 80 s rende 60 |
| Duelo online | `max(2, paresDoJogador × 2 + bônusDoNívelSeVencerOuEmpatar)` | Quem perde ganha moedas, mas não figurinha |
| Tempo esgotado | Nenhuma recompensa; `CONSOLATION_COINS = 3` não utilizada | Crianças que mais precisam praticar avançam menos |
| Álbum | 168 figurinhas: 144 comuns e 24 lendárias | Há uma figurinha inédita por vitória elegível; o álbum termina após 168 dessas vitórias |
| Lendárias | Chance de categoria de 14% enquanto ambas têm itens faltantes; depois usa a categoria restante | Não há duplicatas nem obrigação de comprar pacotes |
| Álbum completo | +25 moedas em cada vitória elegível posterior ao álbum completo | Não é um bônus único de conclusão; muda muito a economia depois da 168ª vitória |
| Estrelas | 1–3 conforme jogadas/pares, exibidas no resultado | Não havia progressão persistente de estrelas por mundo/nível |
| Diamantes | Apenas nome/ícone do rank de 400 XP | Não existia carteira, ganho, gasto nem compra de diamantes |
| Compras reais/anúncios | Não implementados | `MONETIZACAO.md` é planejamento, não capacidade disponível |

O cenário de comparação usa vitórias solo fáceis com 50 segundos restantes, sempre 31 moedas, partindo de saldo e álbum vazios, sem derrotas. Para juntar 53.540 moedas seriam 1.728 vitórias se não houvesse o bônus do álbum. Incluindo corretamente as +25 moedas a partir da 169ª vitória, são **1.032 vitórias**: `168 × 31 + 864 × 56 = 53.592`. O primeiro mundo custa cinco vitórias; o Natal isolado custa 247 antes do álbum ou 137 depois dele. Esses números não estimam dias de uso: pausas, velocidade e taxa de conclusão reais ainda precisam ser medidos.

### Integridade da economia

O código inicial sincronizava o maior saldo entre dispositivo e nuvem e fazia a união dos mundos. Isso recuperava dinheiro já gasto: um dispositivo com 500 moedas compra um mundo por 140 e fica com 360; ao importar uma cópia antiga com 500, volta a 500 e mantém o mundo. A compra local também não acionava salvamento imediato na nuvem.

Nesta revisão, a estratégia definida é tratar saldo e desbloqueios como uma única fotografia, escolhida por `walletUpdatedAt`. Isso corrige a recomposição causada por combinar maior saldo com união de compras. **Não transforma o cliente em fonte confiável:** relógios adulterados, duas compras simultâneas offline e escrita direta do usuário continuam exigindo solução no servidor para uma economia comercial. Duas cópias concorrentes podem perder uma operação com a regra “vence a mais recente”.

Antes de vender qualquer direito, separar a carteira recreativa do direito de compra: recibo validado no servidor, transação idempotente, registro de concessão/revogação e restauração. Não aceitar `premium: true`, moedas, XP ou horário enviados pelo navegador como prova de pagamento ou de resultado competitivo. Para ranking público confiável, pontuar partidas validadas no servidor; limitar tipos e tamanhos nas regras do Firebase não prova que uma partida aconteceu.

## 2. Balanceamento vigente após o feedback

Manter os três mundos iniciais e **restaurar os preços originais, somando 53.540 moedas**. A redução para 5.700 foi considerada fácil demais pelo responsável pelo produto. A progressão volta a durar mais, mantendo bônus de primeira conclusão, estrelas persistentes e indicação do próximo desbloqueio. Mundos já abertos e saldos existentes são preservados, sem cobrança retroativa.

| Mundo / ID interno | Preço reduzido anterior | Preço vigente (original) |
|---|---:|---:|
| Animais, Frutas, Espaço | 0 | 0 |
| Oceano / `oceano` | 60 | 140 |
| Comida / `comida` | 90 | 260 |
| Brinquedos / `brinquedos` | 120 | 420 |
| Dinossauros / `dinos` | 150 | 620 |
| Emoções / `emocoes` | 180 | 860 |
| Flores / `flores` | 210 | 1.140 |
| Monstrinhos / `monstrinhos` | 240 | 1.460 |
| Heróis / `herois` | 270 | 1.820 |
| Mundo dos Cogumelos / `mario` | 300 | 2.220 |
| Encanadores / `encanadores` | 330 | 2.660 |
| Robôs / `robos` | 360 | 3.140 |
| Fantasia / `fantasia` | 390 | 3.660 |
| Aventureiros / `aventureiros` | 420 | 4.220 |
| Duendes / `duendes` | 450 | 4.820 |
| Gelo / `gelo` | 480 | 5.460 |
| Elementos / `elementos` | 510 | 6.140 |
| Circo / `circo` | 540 | 6.860 |
| Natal / `natal` | 600 | 7.640 |
| **Total** | **5.700** | **53.540** |

No cenário de referência de 31 moedas por vitória fácil, são 1.032 vitórias para acumular o total, considerando +25 por vitória após completar o álbum e sem descontar os novos bônus de primeira conclusão. É uma referência de esforço, não uma meta de tempo de tela. O bônus único incentiva variar mundos e dificuldades; os níveis mais difíceis também rendem mais moedas por conclusão. A criança pode poupar para qualquer mundo bloqueado, pois não há obrigação de desbloquear na ordem.

Outras decisões desta revisão:

- **Modo tranquilo solo:** concluir sem cronômetro, com a mesma recompensa-base do nível e o mesmo acesso a figurinhas. Não há bônus de tempo nem recorde de velocidade nesse modo. Fácil/médio/difícil rendem 21/30/44 moedas de base.
- **Primeira conclusão:** +15 moedas pela primeira conclusão solo de cada combinação mundo/nível, uma única vez mesmo alternando entre tranquilo e cronometrado. São no máximo 63 combinações e 945 moedas no catálogo atual. Parte delas só pode ser obtida depois de comprar os mundos; não se pode subtrair 945 do custo inicial como se fosse dinheiro disponível no começo.
- **Estrelas persistentes:** guardar o melhor resultado por mundo/nível, dando uma meta de domínio além do saldo.
- **Próximo mundo:** mostrar saldo, preço e quanto falta, com texto positivo e sem chamada para compra real.
- **Diamantes:** nenhuma carteira adicionada nesta revisão. A possibilidade futura está descrita abaixo.

No modo tranquilo fácil, repetir a mesma combinação rende 36 moedas na primeira conclusão e 21 nas seguintes: Oceano custa seis partidas (141 moedas). Experimentar os três mundos gratuitos primeiro e repetir dois deles permite abrir Oceano em cinco partidas (150 moedas). No Desafio fácil, supondo 50 segundos restantes por vitória, explorar os três mundos e repetir um rende 169 moedas em quatro partidas. Os exemplos partem de saldo zero, sem outras compras; variar dificuldade pode acelerar a progressão. Monitorar conclusão e compreensão, sem exigir sessões mais longas.

Não converter retroativamente moedas em dinheiro ou benefícios pagos. Se forem feitos futuros ajustes de compensação de preços, registrar uma migração única e idempotente; o desbloqueio que já existe precisa continuar existindo.

## 3. Moedas, diamantes e figurinhas: proposta futura

**Recomendação para a primeira versão comercial: manter somente moedas ganhas jogando.** O título Diamante já funciona como conquista, e uma segunda moeda acrescenta complexidade para a criança e para os responsáveis. Não vender progresso ou vincular a economia a anúncios. A versão paga pode vender um conjunto de conteúdo claro diretamente ao adulto.

Se os testes mostrarem que uma segunda conquista é compreendida e desejada, experimentar diamantes como recurso obtido por marcos persistentes, com estas regras propostas, ainda não implementadas:

| Regra futura | Proposta inicial para protótipo |
|---|---|
| Como ganhar | 1 diamante a cada dez partidas concluídas; contagem acumulada, sem prazo e sem sequência diária |
| Como abrir um mundo | Preço em moedas **ou** diamantes; nunca exigir ambos |
| Referência de preço | Conversão a recalibrar e simular sobre a curva restaurada de 53.540 moedas antes de implementar |
| Como explicar | Mostrar preço em moedas ou diamantes, os dois saldos e confirmar qual recurso será usado; valores ainda não definidos |
| Restrições de produto | Não comprável com dinheiro, não transferível, não aleatório e sem valor fora do jogo |
| Proteção de justiça | Não altera cartas, tempo, chances de figurinhas, pontuação, XP ou posição no ranking |

Uma segunda fonte de desbloqueios aceleraria a curva restaurada; sua conversão exige nova simulação, não apenas incluir um ícone de diamante na tela. Introduzir moedas e diamantes simultaneamente como duas barreiras para a mesma fase não é recomendado.

Manter o álbum gratuito, sem repetidas e sem compra de pacotes. Melhorias seguintes: permitir escolher uma entre três figurinhas novas; mostrar a coleção de origem; trocar a ideia de “raridade comprável” por uma coleção especial que se completa por objetivos claros. A mensagem de +25 moedas depois de completar o álbum deve dizer que é uma recompensa de coleção completa, sem aparentar que uma nova conclusão do álbum ocorreu a cada partida.

Para partidas cronometradas não concluídas, testar futuramente `min(10, paresEncontrados)` moedas de prática, somente quando houver pelo menos um par e duração mínima válida; nunca pagar por simplesmente abrir/reiniciar uma partida. Essa é uma proposta, não uma recompensa já adicionada. O modo tranquilo oferece a alternativa imediata para concluir a partida e receber a recompensa normal.

## 4. Versão gratuita e versão paga

| Experiência | Gratuita proposta | Compra única proposta |
|---|---|---|
| Jogo essencial | Todos os 21 mundos atuais obtidos pelo jogo, três abertos inicialmente | Todos os 21 mundos atuais abertos imediatamente |
| Regras competitivas | Completas | Iguais; nenhuma vantagem de pontuação ou informação |
| Tranquilo, idiomas e acessibilidade | Incluídos | Incluídos |
| Jogo local e álbum | Incluídos | Incluídos, preservando as conquistas |
| Anúncios | Sem anúncios | Sem anúncios |
| Extras para a família | Perfil atual | Proposta futura de vários perfis locais, atividades imprimíveis e resumo privado para o adulto |
| Conteúdo novo | Amostra claramente identificada, se houver novos pacotes | Pacotes opcionais com conteúdo e preço claros; preservar o que já foi adquirido |

**Hipótese de preço a testar com responsáveis:** compra única de R$ 14,90 ou R$ 24,90, com o mesmo escopo. São propostas comerciais, não preços pesquisados de concorrentes, não uma oferta publicada e não estimativas de disposição real a pagar. Começar pelas entrevistas e por um piloto pequeno; não mostrar preços diferentes a crianças nem usar ofertas com contagem regressiva.

O produto ainda é essencialmente um jogo de memória com variações de conteúdo. Uma assinatura só se justifica com entrega contínua concreta e capacidade operacional para cumpri-la. Adiar mensalidade até demonstrar essa entrega; não prometer atualizações permanentes de frequência indefinida numa compra única. A Apple exige valor contínuo para assinaturas, além de outras condições. [App Review Guidelines, 3.1.2](https://developer.apple.com/app-store/review/guidelines/)

O conteúdo pago e a restauração de compras devem ficar na área dos responsáveis, com descrição exata do que é desbloqueado. A compra deve ser validada pela infraestrutura de pagamentos aplicável à loja e ao país. Não usar a carteira local como comprovante de compra. A comercialização é etapa futura: não foi integrada nem ativada por esta análise.

O arquivo `MONETIZACAO.md` contém percentuais de conversão, eCPM, participação Android e estimativas de receita sem fontes ou medições. Não usar esses números como plano financeiro. Modelo útil: `receita líquida = compradores × preço efetivo − comissão aplicável − impostos − reembolsos − infraestrutura − suporte`. Preencher cada variável com dados do piloto e do contrato efetivamente aplicável. Downloads, isoladamente, não são receita recorrente.

## 5. Referências de mercado e regras de produto infantil

As fontes foram consultadas em 12/09/2026. As recomendações abaixo são decisões de produto baseadas nessas referências; não constituem uma certificação de aprovação em lojas ou de conformidade integral.

**Khan Academy Kids** oferece o aplicativo gratuito às famílias, sem anúncios e sem compras internas. Isso estabelece uma referência forte de confiança para pais. Oportunidade para Memória Mágica: explicar a experiência familiar de memória, o jogo compartilhado e a identidade própria, em vez de competir apenas pelo número de figuras. [Página oficial de preços](https://www.khanacademy.org/kids/pricing)

**Sago Mini World** apresenta jogos para crianças pequenas, uso offline de conteúdo baixado e assinatura sem compras adicionais dentro da experiência do assinante. A existência desse catálogo sustenta a comparação com uma oferta contínua; não demonstra que um jogo de memória isolado deva cobrar mensalidade. O modo sem pressão de tempo e a clareza para adultos são referências úteis. [Página oficial do produto](https://store.sagomini.com/world)

**Apple Kids:** compras, links externos e distrações comerciais devem ficar numa área protegida por portão dos responsáveis. Analytics e publicidade de terceiros são restringidos, com exceções limitadas. O portão não equivale ao consentimento para tratamento de dados. Nossa decisão recomendada é manter a experiência infantil sem anúncios e publicar apenas os dados estritamente necessários. [App Review Guidelines, 1.3 e 5.1.4](https://developer.apple.com/app-store/review/guidelines/)

**Google Play Families:** proíbe práticas comerciais emocionalmente manipulativas e exige distinção entre moeda virtual e dinheiro real. Quando houver anúncios para crianças, há requisitos de SDKs autocertificados, ausência de segmentação por interesse e formatos adequados; anúncios que interrompem a experiência, inclusive recompensados, precisam poder ser fechados após cinco segundos. Nossa recomendação de produto é não adicionar anúncios recompensados ao lançamento. [Política oficial Families](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en)

**Brasil:** o ECA Digital está em vigor desde março de 2026. A Lei 15.211/2025 define caixa de recompensa no contexto de aquisição mediante pagamento e proíbe sua oferta em jogos direcionados a menores ou de acesso provável por eles. Os pacotinhos gratuitos encontrados no código não devem ser automaticamente confundidos com uma caixa paga; ligar dinheiro/diamantes comprados a itens aleatórios mudaria o desenho e o risco. Decisão: não comercializar recompensas aleatórias. [Lei 15.211/2025, arts. 2º IV e 20](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm), [ANPD: ECA Digital](https://www.gov.br/anpd/pt-br/assuntos/eca-digital)

O melhor interesse da criança precisa ser avaliado no tratamento de seus dados. Resolver uma multiplicação não comprova sozinho quem é o responsável nem documenta uma base legal de tratamento. Usar apelido sugerido, perfis locais por padrão, controles sociais para o adulto, exclusão e política compatível com o comportamento real. [Enunciado da ANPD sobre dados de crianças e adolescentes](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-divulga-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes)

## 6. Jogabilidade e apresentação para competir

1. **Entrada em uma partida:** apresentar “Jogar” como principal ação, preservar última escolha, organizar mundos em abertos e novos a explorar. Mostrar um objetivo alcançável, sem encher a primeira tela de cadeados.
2. **Primeiro contato:** testar tabuleiro inicial de 4–6 pares, demonstração de dois pares e escolha clara entre tranquilo e desafio. São sugestões para testes seguintes; não presumir que oito pares servem igualmente para todas as faixas.
3. **Identidade:** usar a coruja como personagem recorrente e manter ilustração, enquadramento, fundo e tamanho consistentes. Diferenciar famílias de cartas por silhueta além de cor. Auditar nomes, semelhanças visuais e direitos dos assets antes de publicidade paga; a existência do ID interno `mario` não prova infração, mas o README antigo também não serve como comprovação de direitos.
4. **Clareza e acesso:** rótulos curtos para ícones, foco visível, navegação por teclado, contraste, redução de movimento, som desligável e cartas legíveis em telas pequenas. Não colocar controles essenciais atrás do plano pago.
5. **Competição justa:** separar comparação de velocidade do modo tranquilo; exibir progresso pessoal antes do ranking mundial. Propor duelos com conhecidos, opção cooperativa e intervalos para alternar turnos. Nunca vender uma carta revelada, tempo extra competitivo ou multiplicador de XP.
6. **Encerramento satisfatório:** resultado com recompensa entendível e ações “Jogar novamente” e “Voltar” equivalentes. Evitar perda de sequência, contagem regressiva comercial, insistência para assistir vídeo, energia/vidas que impedem jogar ou mensagens que culpem a criança por sair.

O posicionamento proposto é “memória para brincar junto, com mundos colecionáveis e no ritmo da criança”. Não prometer aumento de QI, benefício terapêutico ou ganho cognitivo comprovado sem estudos adequados do próprio produto.

## 7. Métricas e sequência de validação

Começar com sessões acompanhadas de 8–12 famílias voluntárias, cobrindo tamanhos de tela e faixas de experiência. Esse grupo encontra problemas de usabilidade; não estima conversão de mercado com precisão. Explicar a observação ao responsável e minimizar dados, sem gravação, nomes completos, identificadores publicitários ou envio de eventos infantis a terceiros por padrão.

| Métrica | Como observar | Critério inicial proposto, a validar |
|---|---|---|
| Começar sem ajuda | Da tela inicial à primeira carta | Pelo menos 80% no piloto, após tutorial inicial |
| Entender o objetivo | Criança demonstra um par e o adulto relata clareza | Registrar problemas; nenhum bloqueio de entendimento recorrente |
| Primeiro desbloqueio | Partidas concluídas até ter moedas para o primeiro mundo | 4–6 vitórias fáceis nos percursos exemplificados acima, variando ritmo e repetição; validar no piloto |
| Conclusão por modo/nível | Conclusões/inícios, separando desistência de erro técnico | Detectar níveis com frustração repetida; não misturar tranquilo com cronômetro |
| Justiça das recompensas | Recompensa recebida e explicação correta | Nenhuma duplicação/perda nos casos de teste de reabertura/sincronização |
| Clareza da compra | Adulto descreve preço, duração e conteúdo antes de confirmar | 100% de entendimento no piloto; é critério de clareza, não taxa de vendas |
| Integridade comercial | Compra, restauração, estorno, rede interrompida e repetição da chamada | Nenhum direito duplicado, perdido ou concedido só por alteração local |
| Preferência e retorno | Pergunta ao adulto após o piloto, retorno voluntário | Aprender o motivo do retorno; não maximizar minutos de tela |

**P0 — esta revisão:** curva de preços, tranquilo, primeira conclusão, estrelas persistentes, progresso de desbloqueio, correções de saldo e segurança verificadas pela implementação. Validar que não há perda dos mundos já possuídos. A confirmação do que foi concluído deve vir dos testes e do diff final.

**P1 — antes da primeira venda:** revisar referências desatualizadas no README e em `MONETIZACAO.md`; validar experiência com famílias; revisar fluxos de conta, dados e links; criar área do responsável adequada; implementar compra única/restauração com direitos confiáveis no servidor e documentação real de privacidade. Conferir requisitos vigentes de cada loja e território no momento da submissão.

**P2 — após aprender com uso real:** modo inicial de menos pares, cooperação, personalização sem vantagem competitiva, atividades para adultos e crianças e eventual pacote temático novo. Só desenvolver diamantes se houver evidência de benefício de compreensão/diversão; adiar assinatura até haver valor contínuo demonstrável.

Esta revisão não publica uma loja, cria produtos de pagamento, implanta regras no Firebase nem resolve todas as exigências legais da distribuição. Ela torna a economia e a próxima decisão comercial verificáveis, preservando a diversão gratuita e a escolha dos responsáveis.
