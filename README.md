# TIVIT Auth Boilerplate

## Introdução

Este projeto é um boilerplate de autenticação criado com **React**, **Redux Toolkit**, **React Router DOM** e **TypeScript**. Ele fornece uma interface robusta para autenticação de usuários com controle de acesso baseado em roles (usuário e administrador) e rotas protegidas.

As funcionalidades incluem:
- **Login JWT** com serviço simulado.
- **Rotas protegidas** baseadas no papel do usuário.
- **Gerenciamento de estado** com Redux Toolkit.
- **Interceptação de requisições HTTP** com Axios.
- **Sistema de notificação** com `react-toastify`.
- **Componente de carregamento** centralizado.
- **Estrutura modular e escalável**.

---

## Estrutura do Projeto

A organização do projeto segue as boas práticas de desenvolvimento frontend:

```
📁 tivit-auth-boilerplate/
├── 📁 public/
│   ├── mockServiceWorker.js
│   ├── vite.svg
├── 📁 src/
│   ├── 📁 components/          # Componentes reutilizáveis
│   │   ├── Button
│   │   ├── Loading
│   │   ├── Logo
│   │   ├── Notification
│   │   ├── TextInput
│   ├── 📁 pages/               # Páginas
│   │   ├── SignIn/SignIn.tsx
│   │   ├── Profile/Profile.tsx
│   ├── 📁 redux/               # Estado global com Redux Toolkit
│   │   ├── slices/
│   │   ├── thunks/
│   │   ├── store.ts
│   ├── 📁 service/             # Serviços de API
│   │   └── apiService.ts
│   ├── 📁 styles/              # Estilização global (Tailwind)
│   │   └── global.css
│   ├── 📁 utils/               # Utilitários
│   │   └── tokenUtils.ts
│   ├── App.tsx                 # Estrutura principal
│   ├── Router.tsx              # Gerenciamento de rotas
│   ├── main.tsx                # Ponto de entrada
│   ├── vite-env.d.ts
│   ├── .env                    # Variáveis de ambiente
├── package.json
├── tailwind.config.cjs         # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
└── vite.config.ts              # Configuração do Vite
```

---

## Tecnologias Utilizadas

- **React**: Biblioteca principal para criação de componentes.
- **TypeScript**: Garantia de tipos e segurança durante o desenvolvimento.
- **Redux Toolkit**: Gerenciamento eficiente de estado global.
- **Axios**: Requisições HTTP com interceptadores.
- **React Router DOM**: Gerenciamento de rotas protegidas.
- **Tailwind CSS**: Estilização simples e responsiva.
- **React Toastify**: Sistema de notificação em tempo real.
- **MSW (Mock Service Worker)**: Mock de serviços para testes locais.
- **Storybook**: Documentação visual dos componentes.

---

## Instalação e Configuração

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/tivit-auth-boilerplate.git
   cd tivit-auth-boilerplate
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env` com o seguinte conteúdo:

   ```plaintext
   VITE_API_BASE_URL=https://api-onecloud.multicloud.tivit.com/fake
   ```

4. **Execute o projeto em modo de desenvolvimento**:

   ```bash
   npm run dev
   ```

5. **Acesse o projeto no navegador**:

   - [http://localhost:5173](http://localhost:5173)

---

## Scripts Disponíveis

- **`npm run dev`**: Executa o projeto em ambiente de desenvolvimento.
- **`npm run build`**: Gera os arquivos otimizados para produção.
- **`npm run preview`**: Executa uma prévia da aplicação em produção.
- **`npm run storybook`**: Inicia o Storybook para documentação visual dos componentes.
- **`npm run test-storybook`**: Testa os componentes no Storybook.

---

## Testes

O projeto utiliza o **MSW** (Mock Service Worker) para simular a API, permitindo testes locais sem dependência de servidores externos.

**Comandos**:
- Para executar a API fake em modo local:
  ```bash
  npm run dev
  ```

- Para testar os componentes visuais no Storybook:
  ```bash
  npm run storybook
  ```

---

## Funcionalidades

1. **Autenticação JWT**
   - Realiza login com usuário e senha.
   - Armazena o token JWT no `localStorage`.

2. **Rotas protegidas**
   - Acesso à página `/profile` para qualquer usuário autenticado.
   - Acesso à página `/admin` exclusivo para administradores.
   - Redirecionamento automático para a tela de login caso o token seja inválido ou expirado.

3. **Notificações com Toastify**
   - Sucesso na autenticação.
   - Erro na autenticação.
   - Feedback em operações realizadas.

4. **Gerenciamento de estado global**
   - Uso do Redux Toolkit com `slices` e `thunks`.

5. **Interceptador de Requisições Axios**
   - Adiciona automaticamente o token JWT nos cabeçalhos `Authorization`.

6. **Componente de carregamento**
   - Exibido durante a comunicação com a API.

---

## Considerações de Segurança

- Tokens JWT são armazenados de forma segura no `localStorage`.
- Funções auxiliares para remoção de tokens após logout.
- **Proteção de rotas**: Acesso limitado com base no papel do usuário.
- **Validação e tratamento de erros** em todas as chamadas de API.

---

## Demonstração Visual

- **Tela de Login**:
  - Autenticação com feedback visual de erros.
- **Página de Perfil**:
  - Dados protegidos com logout funcional.
- **Notificações**:
  - Alertas visuais com `react-toastify`.

---

## Autor

Desenvolvido por [Seu Nome Aqui](https://github.com/seu-usuario).

Se tiver dúvidas ou sugestões, entre em contato!
