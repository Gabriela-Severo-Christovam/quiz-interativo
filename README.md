**Projeto Quiz**

**Objetivo do Projeto**

O objetivo principal deste projeto é criar uma interface de quiz onde o usuário pode responder perguntas e ver o seu desempenho com base nas respostas fornecidas. Cada pergunta possui múltiplas opções e o usuário recebe uma pontuação ao final, com a exibição de um placar de acertos.

**Estrutura dos Componentes**

A estrutura de pastas e arquivos do projeto é organizada da seguinte forma:

src/
├─ components/
│  ├─ Header/
│  │  ├─ index.jsx         # Componente que exibe o título do quiz e o cabeçalho
│  │  └─ Header.module.css # Estilos do componente Header
│  ├─ QuestionCard/
│  │  ├─ index.jsx         # Componente para exibir cada pergunta com opções
│  │  └─ QuestionCard.module.css # Estilos do componente QuestionCard
│  ├─ ScoreBoard/
│  │  ├─ index.jsx         # Componente que exibe a pontuação do usuário
│  │  └─ ScoreBoard.module.css # Estilos do componente ScoreBoard
├─ data/
│  └─ questions.js         # Arquivo contendo as perguntas e respostas do quiz
├─ App.jsx                 # Componente principal que integra todos os outros
├─ App.module.css          # Estilos globais da aplicação
├─ main.jsx                # Arquivo de entrada da aplicação

**Detalhes dos Componentes:**

Header: Exibe o título do quiz e informações básicas de introdução.

QuestionCard: Exibe cada pergunta do quiz, com as opções para o usuário escolher. Quando o usuário seleciona uma resposta, ele recebe feedback.

ScoreBoard: Mostra a pontuação final do usuário ao término do quiz.

Tecnologias Utilizadas

JavaScript (JS) e JSX: Para criar os componentes e a lógica da aplicação.

CSS Modules: Para estilização modularizada de cada componente, permitindo a criação de estilos específicos para cada um sem afetar outros componentes.
