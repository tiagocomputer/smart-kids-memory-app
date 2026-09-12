# Revisão de segurança — Memória Mágica

Revisão local em **12/09/2026**. O código e as regras do repositório foram
inspecionados; as regras foram executadas em um emulador local. **Nenhum teste
acessou contas, dados ou regras de produção, e nenhuma regra foi publicada.**

O jogo continua sendo um cliente HTML/JavaScript com progresso offline. As
correções abaixo reduzem exposição de dados, entradas malformadas e falhas de
sincronização. **Elas não transformam o cliente em uma autoridade confiável para
moedas pagas, compras ou ranking competitivo.**

## Correções entregues

| Problema encontrado | Correção |
| --- | --- |
| `users/$uid` permitia qualquer estrutura de dados ao dono da conta | Regras agora validam os campos conhecidos, números finitos/limitados, inteiros, coleções e identificadores; campos como `premium` são rejeitados. |
| Rankings permitiam leitura de todo o placar | Consultas públicas exigem ordenação por `xp` e limite de 1 a 50 registros. Leituras privadas continuam restritas ao dono. |
| Nomes de campos e valores vindos da nuvem eram usados sem uma fronteira uniforme de validação | `cloud.js` sanitiza snapshots, publica apenas os campos previstos e aceita apenas caminhos de placar. O identificador da linha vem da chave do banco. |
| `avatarId` aceitava valores como `__proto__`, capazes de quebrar a renderização baseada em um objeto comum | Nuvem e regras aceitam apenas avatares do catálogo atual: a/b/c 1–12, e 1–5 e k 1–15. |
| Um erro de leitura de progresso virava `null`, permitindo tratá-lo como conta nova | Erros de leitura e escrita são propagados. Trocar de conta durante a leitura invalida a resposta. |
| Saves antigos não possuíam a versão da carteira | `walletUpdatedAt` usa `updatedAt` do save legado quando o novo campo está ausente; um zero explícito é preservado. |
| Service worker guardava outros GETs da origem, inclusive possíveis APIs futuras | Cache restrito a páginas e arquivos públicos conhecidos; Authorization, Range, outras origens e endpoints desconhecidos não são interceptados. |
| Navegar para a política de privacidade podia substituir o HTML do jogo no cache | Cada página possui uma chave própria; parâmetros de convites não entram nessas chaves. |
| Scripts/CSS antigos podiam permanecer indefinidamente em cache | Código usa rede primeiro e cópia offline como reserva. Respostas privadas ou `no-store` não são salvas; erros do servidor não substituem a cópia válida. |
| Ativação do service worker removia caches de outras aplicações na mesma origem | Limpeza limitada ao prefixo `mm-cache-`. |
| Política dizia que nenhum dado de convidado saía do aparelho | Texto PT/EN/FR passou a descrever hospedagem, Google Fonts, inicialização Firebase e tráfego de PeerJS/STUN/TURN, além do perfil compartilhado no duelo. |

O módulo de nuvem não recebe e-mail nem nome Google como fallback de apelido
público. Essa separação também depende de `rankingName()` e do fluxo de login em
`js/app.js`. O ranking ainda é público e contém um identificador estável por conta.

## O que as regras garantem e o que continua em aberto

- O dono autenticado pode gravar seu progresso dentro do schema. Outra conta e
  usuários anônimos não podem gravar esse registro. Isso **não prova que ele jogou**:
  um cliente modificado ainda pode inventar XP e saldo dentro dos limites.
- `updatedAt` deve ser o timestamp do servidor. `walletUpdatedAt` é um relógio de
  alteração do cliente para resolver conflitos offline; pode ser adulterado e
  não é uma prova de gasto, posse ou compra.
- O saldo e os desbloqueios precisam ser tratados como um snapshot único na
  sincronização. Mesclar o maior saldo com a união de fases devolve moedas já
  gastas. Mesmo um snapshot por data não resolve gastos simultâneos entre
  aparelhos desconectados: dinheiro real exige transações no servidor.
- Limitar uma consulta a 50 linhas reduz uma resposta, mas não impede consultas
  repetidas, criação abusiva de contas ou escrita em muitas semanas. Ainda são
  necessários monitoramento de quota, controles de abuso e limites no backend.
- Um duelo WebRTC transmite o baralho aos clientes. Um cliente modificado pode
  inspecionar cartas escondidas. Validação de mensagens evita corrupção e
  travamentos; uma competição com prêmios precisa de desenho autoritativo no
  servidor, limites de ações e verificação de resultados.
- O link da sala funciona como convite. Deve ser compartilhado com pessoas
  conhecidas. WebRTC/STUN/TURN pode expor informações de rede a provedores e ao
  outro participante. TURN público não oferece garantia de disponibilidade.
- A conta matemática para acessar opções de responsável é uma barreira de
  interface. Ela não autentica a identidade de um adulto. Antes de ampliar o
  cadastro infantil ou lançar compras, revisar o fluxo de responsáveis,
  consentimento, retenção e exclusão com os responsáveis pelo produto.
- Saves/coleções locais permanecem editáveis e dependem do armazenamento do
  navegador. Não armazenar neles autorização de compra, recibos secretos,
  credenciais de servidor ou saldo monetário como fonte de verdade.
- Abas da mesma origem compartilham o `localStorage`, inclusive se ocorrerem
  trocas de conta. A carteira atual não fornece isolamento transacional entre
  abas ou perfis autenticados diferentes no mesmo navegador. Antes de uma
  versão comercial, separar o estado por usuário e controlar concorrência no
  servidor; um timestamp local não elimina esse conflito.

## Antes de habilitar pagamentos ou prêmios

1. Criar um backend de concessões e gastos com saldo calculado por transações,
   histórico de operações e identificador único para impedir repetição de uma
   mesma recompensa ou compra.
2. Verificar recibos/eventos de pagamento no servidor e tratar restaurações,
   cancelamentos e reembolsos. Um campo `premium` escrito pelo navegador não
   pode liberar uma licença paga.
3. Separar pontuação casual informada pelo cliente de resultados competitivos
   verificados. Não vincular prêmios de valor real ao ranking atual.
4. Configurar proteção de abuso e observabilidade: regras publicadas, domínios
   de autenticação corretos, limites de quota, alertas e avaliação de App Check.
   App Check é uma camada adicional, não prova de resultado de partida.
5. Definir processo operacional de exclusão que inclua Authentication, progresso,
   ranking geral, semanas e mundos. Sair da conta não exclui dados.

Os identificadores da configuração web Firebase são públicos por projeto; a
proteção depende de autorização e regras. A API key deve ficar restrita às APIs
necessárias. **Não foi auditada a configuração efetiva do console.** Consulte a
[documentação oficial de API keys](https://firebase.google.com/docs/projects/api-keys)
e o [checklist de segurança do Firebase](https://firebase.google.com/support/guides/security-checklist).

## Validação executada

`tests/security.test.cjs` usa `node:test`, sem dependências npm. A parte de
cliente executa o módulo real em um contexto isolado com SDK falso, cobrindo
dados malformados, limites, erros, troca de conta, migração e política de cache.

```powershell
node tests/security.test.cjs
```

Sem a variável do emulador, a integração Firebase fica explicitamente ignorada.
Para executá-la, inicie o **Realtime Database Emulator 4.11.2** com Java 21:

```powershell
java '-Duser.language=en' -jar '<caminho>/firebase-database-emulator-v4.11.2.jar' --host 127.0.0.1 --port 9009
```

Em outro terminal:

```powershell
$env:FIREBASE_DATABASE_EMULATOR_HOST = '127.0.0.1:9009'
node tests/security.test.cjs
```

O teste exige endereço loopback `127.0.0.1`, usa apenas o namespace
`demo-memory-security-tests` e carrega `database.rules.json` nesse banco local.
O token administrativo de teste é usado apenas para instalar regras/limpar esse
namespace. As operações de jogadores usam tokens de usuário falsos do emulador,
com verificações positivas **e negativas** de autorização.

**Resultado executado: 16 testes passaram, 0 falhas, 0 ignorados**, incluindo as
quatro verificações de integração agrupadas no teste Firebase. Foram confirmados
o bloqueio de escrita alheia/anônima, dados malformados, campos extras, avatares
inválidos, timestamps forjados, caminhos inválidos e consultas sem limites.
`node --check js/cloud.js` e `node --check sw.js` também passaram.

O JAR veio do [distribuidor oficial Firebase](https://storage.googleapis.com/firebase-preview-drop/emulator/firebase-database-emulator-v4.11.2.jar),
com SHA-256 `b70d99344caf17c98b6f910fa8f6edf32a7c016cb1035e8915f70d38901eb97f`,
conferido contra o [manifesto oficial do Firebase Tools](https://github.com/firebase/firebase-tools/blob/master/src/emulator/downloadableEmulatorInfo.json).

## Publicação pendente

As regras novas só protegem a instalação pública depois de serem aplicadas ao
Realtime Database correspondente. Publicar `database.rules.json` deve acompanhar
a atualização de `js/cloud.js`/`js/app.js`, que contém os novos campos
`walletUpdatedAt` e `mastery`. Validar login, gravação e leitura no ambiente de
homologação antes da publicação. Manter o catálogo de mundos/avatares alinhado
entre o jogo, o módulo de nuvem e as regras quando houver novos conteúdos.

A expressão “anti-cheat básico” no guia antigo `FIREBASE_SETUP.md` deve ser lida
como validação de schema/limites, **não como detecção de trapaça**. A semântica das
regras está na [referência oficial do Realtime Database](https://firebase.google.com/docs/reference/security/database).
