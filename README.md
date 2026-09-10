# Countdown

Aplicativo desktop minimalista de contagem regressiva, construído com Electron. A interface usa apenas CSS para manter o repositório leve e servir como base para personalização.

## Requisitos

- Node.js 18 ou superior
- npm

## Desenvolvimento

```bash
npm install
npm start
```

Pressione `Esc` para fechar a janela em tela cheia.

## Personalização

- Altere a data em `src/renderer/countdown.js`.
- Ajuste cores, tipografia e layout em `src/renderer/styles.css`.
- Para usar imagens próprias, coloque-as em `assets/` e referencie-as no HTML/CSS. As fotos de exemplo não fazem parte do projeto para manter o repositório público enxuto.
- O ícone do aplicativo fica em `assets/icon.png`.

## Build

```bash
npm run build
```

Os instaladores são gerados em `dist/`.
