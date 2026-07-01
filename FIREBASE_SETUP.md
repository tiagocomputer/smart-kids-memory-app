# Ativar login + ranking mundial (Firebase)

O jogo funciona 100% offline sem nenhuma configuração. Estes passos são
**opcionais** e ativam: login com Google/e-mail, salvar o progresso em qualquer
aparelho e o **ranking mundial** com todos os jogadores.

> Enquanto `FIREBASE_CONFIG` (em `js/cloud.js`) estiver vazio, nada muda no jogo.

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
site (ex.: `memoria-magica.vercel.app`). O `localhost` já vem liberado para testes.

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
   por todos, mas cada jogador só escreve no próprio registro — e validam os
   pontos (anti-cheat básico). Clique em **Publicar**.

## 5. Pronto

Faça o deploy normalmente. Na tela **Recordes** vão aparecer o cartão de conta
("Entrar com Google / e-mail") e o **Ranking Mundial**. Ao entrar, o progresso do
convidado é fundido com a conta e passa a acompanhar o jogador em qualquer aparelho.

### Observações (jogo infantil — COPPA/LGPD)

- O login é **opcional**: a criança joga como convidado sem cadastro.
- Como envolve menores, o ideal é o cadastro ser feito/autorizado pelos pais.
  Deixe isso claro na sua política de privacidade antes de divulgar o ranking.
