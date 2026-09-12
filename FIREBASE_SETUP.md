# Ativar login + ranking mundial (Firebase)

O modo solo pode funcionar offline após carregar os recursos. Estes passos são
**opcionais** e ativam: login com Google/e-mail, salvar o progresso em qualquer
aparelho e o **ranking mundial** com todos os jogadores.

> Enquanto `FIREBASE_CONFIG` (em `js/cloud.js`) estiver vazio, nada muda no jogo.

> A cópia atual do repositório já tem uma configuração preenchida. Alterar
> `database.rules.json` localmente não publica as regras no projeto Firebase.

## 1. Criar o projeto

1. Acesse <https://console.firebase.google.com> e clique em **Adicionar projeto**.
2. Dê um nome (ex.: `memoria-magica`) e conclua. O plano gratuito (**Spark**) já basta.

## 2. Registrar o app web

1. No projeto, clique no ícone **`</>`** (Adicionar app da Web).
2. Dê um apelido e registre. O Firebase mostra um objeto `firebaseConfig` assim:

   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "memoria-magica.firebaseapp.com",
     projectId: "memoria-magica",
     storageBucket: "memoria-magica.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234:web:abcd..."
   };
   ```

3. Copie esses valores para o `FIREBASE_CONFIG` no topo de **`js/cloud.js`**.
   (Esses valores são públicos por natureza — a segurança fica nas regras abaixo.)

## 3. Ativar os métodos de login

Em **Authentication → Sign-in method**, ative:

- **Google** (é só clicar em ativar e escolher um e-mail de suporte).
- **E-mail/senha**.

Em **Authentication → Settings → Authorized domains**, adicione o domínio do seu
site (ex.: `memoria-magica.vercel.app`). Confira e adicione `localhost` para testes
se necessário; não presuma que esteja autorizado no projeto.

## 4. Criar o banco (Realtime Database) e aplicar as regras

Usamos o **Realtime Database** (e não o Firestore), porque ele funciona no plano
gratuito **Spark sem precisar cadastrar cartão de crédito**.

1. Em **Criação → Realtime Database → Criar banco de dados**.
2. Escolha a localização e comece em **modo bloqueado** (locked).
3. Copie a **URL do banco** que aparece no topo (ex.:
   `https://memoria-magica-b8ce2-default-rtdb.firebaseio.com`) e cole em
   `FIREBASE_CONFIG.databaseURL` no topo de **`js/cloud.js`**.
4. Vá na aba **Regras**, apague tudo e cole o conteúdo de
   **`database.rules.json`** (neste repositório). Elas deixam o ranking ser lido
   por consultas ordenadas por XP e limitadas a até 50 resultados. Cada jogador
   autenticado escreve apenas no próprio registro; campos, tipos, limites e
   timestamp do servidor são validados. Essas regras **não provam que uma
   partida aconteceu**. Clique em **Publicar** após testar no emulador.

## 5. Pronto

Faça o deploy normalmente. Na tela **Recordes** vão aparecer o cartão de conta
("Entrar com Google / e-mail") e o **Ranking Mundial**. Ao entrar, o progresso do
local e remoto são sincronizados. Coleções são combinadas e recordes preservam
o melhor resultado; a carteira mantém saldo, mundos e primeiras conclusões
da mesma cópia, escolhida por `walletUpdatedAt`. Saves locais legados sem data
recebem prioridade na primeira migração. A regra não resolve alterações
offline concorrentes entre aparelhos. Consulte [a revisão de segurança](docs/SEGURANCA.md).

### Observações (jogo infantil — COPPA/LGPD)

- O login é **opcional**: a criança joga como convidado sem cadastro.
- Cadastro e links externos passam por portão dos responsáveis. Esse controle
  de interface não substitui consentimento verificável quando exigido.
- O ranking usa o apelido escolhido no jogo. Nome/e-mail de autenticação não
  são copiados automaticamente, mas apelidos ainda precisam de moderação
  antes de um lançamento amplo. Veja [estratégia e fontes oficiais](docs/ESTRATEGIA_PRODUTO.md).
