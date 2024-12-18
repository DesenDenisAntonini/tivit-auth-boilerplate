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
   git clone https://github.com/DesenDenisAntonini/tivit-auth-boilerplate.git
   cd tivit-auth-boilerplate
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **NODE VERSÃO 18ˆ**:

4. **Execute o projeto em modo de desenvolvimento**:

   ```bash
   npm run dev
   ```

5. **Acesse o projeto no navegador**:

   - [http://localhost:3001](http://localhost:3001)

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

<img width="1795" alt="Captura de Tela 2024-12-18 às 00 49 59" src="https://github.com/user-attachments/assets/51cce6fb-2072-404c-8171-24249bec4070" />
<img width="1744" alt="Captura de Tela 2024-12-18 às 00 50 51" src="https://github.com/user-attachments/assets/8d88ff4a-b8e3-45fa-8ce6-c394d6d7f8ae" />
<img width="1795" alt="Captura de Tela 2024-12-18 às 00 52 22" src="https://github.com/user-attachments/assets/e567e346-065e-4f86-abeb-227bb68300e0" />
<img width="1793" alt="Captura de Tela 2024-12-18 às 00 52 36" src="https://github.com/user-attachments/assets/b27055ef-4634-42a7-b733-40615826a0de" />
<img width="1797" alt="Captura de Tela 2024-12-18 às 00 53 20" src="https://github.com/user-attachments/assets/b50ed385-3a07-469f-9db7-2433b9ae53d3" />

---

## Autor

Desenvolvido por [Denis Antonini](https://github.com/DesenDenisAntonini).

Se tiver dúvidas ou sugestões, entre em contato!
