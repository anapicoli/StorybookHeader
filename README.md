# Header Component com React e Storybook

Este projeto foi desenvolvido como atividade prática com o objetivo de criar um componente **Header reutilizável em React** e documentá-lo utilizando o **Storybook**, demonstrando suas variações e propriedades.

---

## 📌 Objetivo

Criar um componente Header reutilizável que:

* Seja baseado em React
* Utilize props para customização
* Possua diferentes estados (logado e deslogado)
* Seja documentado com Storybook
* Seja publicado no GitHub

---

## 🧰 Tecnologias utilizadas

* React
* Vite
* Storybook
* JavaScript (JSX)
* CSS
* Git e GitHub

---

## 📁 Estrutura do projeto

```
header-storybook/
│
├── .storybook/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   └── Header.stories.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 🧩 Componente Header

O componente Header é reutilizável e personalizável através de props.

### Props disponíveis:

| Prop     | Tipo     | Descrição                              |
| -------- | -------- | -------------------------------------- |
| title    | string   | Título exibido no Header               |
| user     | string   | Nome do usuário logado                 |
| onLogin  | function | Função executada ao clicar em "Entrar" |
| onLogout | function | Função executada ao clicar em "Sair"   |

---

## 🎨 Estados do componente no Storybook

O Storybook demonstra diferentes variações do componente:

### LoggedOut

* Usuário não logado
* Mostra botão "Entrar"

### LoggedIn

* Usuário logado
* Mostra nome do usuário
* Mostra botão "Sair"

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/header-storybook.git
```

### 2. Entrar na pasta

```
cd header-storybook
```

### 3. Instalar dependências

```
npm install
```

### 4. Executar o Storybook

```
npm run storybook
```

O Storybook abrirá em:

```
http://localhost:6006
```

---

## ▶️ Executar o projeto React

```
npm run dev
```

Abrirá em:

```
http://localhost:5173
```

---

## 📖 Documentação no Storybook

O Storybook permite visualizar o componente em diferentes estados e testar suas propriedades de forma isolada, facilitando a reutilização e manutenção.

---

## ♻️ Reutilização

Este componente pode ser reutilizado em diferentes projetos, bastando importar:

```
import Header from "./components/Header";
```

---

## 👩‍💻 Autora

Desenvolvido por: **Ana Picoli**

---

## 📌 Status do projeto

✅ Componente criado
✅ Storybook configurado
✅ Documentação criada
✅ Projeto publicado no GitHub

---

## 📷 Preview

O Header exibe:

* Título personalizável
* Botão de login/logout
* Nome do usuário quando logado
