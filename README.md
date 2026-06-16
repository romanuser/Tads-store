# 🛒 Aqui Tem — Supermercado Online

Projeto desenvolvido para a disciplina **Desenvolvimento Front-End II** do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)** — **IFES**.

---

## 📋 Sobre o Projeto

O **Aqui Tem** é uma aplicação web desenvolvida em React que simula um supermercado dew itens gerais online moderno.

O projeto foi construído utilizando o conceito de **SPA (Single Page Application)** e consome dados da API pública **DummyJSON** para exibição, busca e detalhamento de produtos.

Além da navegação entre páginas, a aplicação implementa autenticação simulada, rotas protegidas e gerenciamento de estado com React Hooks.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia       | Finalidade                    |
| ---------------- | ----------------------------- |
| React 19         | Construção da interface       |
| Vite             | Ambiente de desenvolvimento   |
| React Router DOM | Navegação SPA                 |
| Tailwind CSS     | Estilização                   |
| Context API      | Gerenciamento de autenticação |
| Fetch API        | Consumo da API                |
| Lucide React     | Ícones                        |

---

## 📦 Funcionalidades Implementadas

### ✅ Etapa 1 — Componentização

* Componentes reutilizáveis
* Uso de Props
* Composição com Children
* Renderização condicional
* Listagem utilizando `.map()`

#### Componentes Criados

* Cabecalho
* Rodape
* Layout
* ProdutoCard
* Vitrine
* Botao
* Selo
* Carregando
* Erro

---

### ✅ Etapa 2 — Estado, Hooks e API

* Consumo da API DummyJSON
* Gerenciamento de estado com `useState`
* Requisições com `useEffect`
* Hook customizado `useProdutos`
* Busca por produtos
* Filtro por categorias
* Tratamento de carregamento
* Tratamento de erros
* Retry de requisições
* Cancelamento de requisições com AbortController

---

### ✅ Etapa 3 — Navegação SPA

* React Router configurado
* Página inicial (`/`)
* Página de detalhes (`/produto/:id`)
* Página 404 personalizada (`*`)
* Navegação sem recarregamento da página

---

### ✅ Etapa 4 — Autenticação

* Login simulado
* Context API
* Persistência de sessão com LocalStorage
* Logout
* Controle de acesso
* Rota protegida (`/minha-conta`)
* Redirecionamento automático para login

---

## 🔐 Credenciais para Teste

| Usuário                                       | Senha  |
| --------------------------------------------- | ------ |
| [usuario@email.com](mailto:usuario@email.com) | 123456 |
| [maria@email.com](mailto:maria@email.com)     | 123456 |

---

## 🖥️ Como Executar o Projeto
ABRA O CMD, COM O COMANDO CD, NAVEGUE ATE A PASTA DO PROJETO, ENTAO: 

### 1. Instalar as dependências

```bash
npm install
```

### 2. Executar em ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em:

```txt
http://localhost:5173
```

---

## 🏗️ Build de Produção

Gerar versão otimizada:

```bash
npm run build
```

Visualizar a build:

```bash
npm run preview
```

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── layout/Cabecalho.jsx
│              Layout.jsx
│              Rodape.jsx
│              Rotaprotegida.jsx
│   ├── produto/Buscador.jsx
│              ProdutoCard.jsx
│              Vitrine.jsx
│   └── ui/Botao.jsx
│          Carregando.jsx
│          Erro.jsx
│          Selo.jsx
├── contexts/AuthContext.jsx
├── hooks/useProdutos.js
├── pages/PaginaInicial.jsx
│         PaginaLogin.jsx
│         PaginaMinhaConta.jsx
│         PaginaNaoEncontrada.jsx
│         PaginaProduto.jsx
│   └── data/produtos.js
└── App.jsx
└── Index.jsx
└── App.css
└── Index.css
```

---

## 🌐 API Utilizada

DummyJSON

### Endpoints Utilizados

```http
GET /products
```

```http
GET /products/search?q={termo}
```

```http
GET /products/categories
```

```http
GET /products/{id}
```

---

## 📸 Telas do Sistema

* Catálogo de Produtos
* Página de Detalhes
* Login
* Área Protegida (Minha Conta)

---

## 👨‍💻 Autor

**Rafael Roman**

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-End II.

**Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) — IFES**

---

⭐ Aplicação desenvolvida utilizando React, React Router, Context API e integração com API REST.
