# React Alura — Blog de Tecnologia

Projeto de estudos desenvolvido com React durante o curso da Alura, onde construo um blog de tecnologia. A aplicação explora conceitos fundamentais do React como componentes, props, estado e roteamento, aplicando-os na prática através de uma interface moderna para publicação e leitura de artigos tech.

---

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- CSS Modules

---

## Funcionalidades

- Criação de eventos via formulário com nome, data, tema, descrição e imagem
- Organização dos eventos em seções por tema
- Modal de detalhes ao clicar em um card
- Fontes customizadas: **Orbitron** (títulos) e **Work Sans** (corpo)
- Design tokens globais para cores, espaçamentos e bordas

---

## Estrutura de Componentes

```
src/
├── components/
│   ├── Header/       # Barra superior com logo
│   ├── Hero/         # Banner principal com degradê
│   ├── Formulario/   # Formulário de criação de eventos
│   ├── Temas/        # Seções de eventos organizadas por tema
│   ├── Card/         # Card individual de evento
│   └── Modal/        # Popup de detalhes do evento
├── types/
│   └── Evento.ts     # Interface TypeScript do evento
└── temas.ts          # Array central de temas disponíveis
```

---

## Como rodar

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`
