# Countdown

Aplicativo desktop minimalista de contagem regressiva, construído com Electron. A interface usa apenas CSS para manter o projeto leve e facilitar a personalização.

## Recursos

- Contagem regressiva em tela cheia
- Interface leve baseada em HTML e CSS
- Personalização simples de data, cores e tipografia
- Build de instaladores para distribuição

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
- Para usar imagens próprias, coloque-as em `assets/` e referencie-as no HTML/CSS.
- O ícone do aplicativo fica em `assets/icon.png`.

## Build

```bash
npm run build
```

Os instaladores são gerados em `dist/`.

## Contribuindo

Sugestões e melhorias são bem-vindas. Abra uma Issue para relatar um problema ou propor uma ideia antes de enviar um Pull Request.
