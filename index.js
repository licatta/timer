const { app, BrowserWindow, nativeImage } = require("electron")

// Habilita o live reload no Electron e no FrontEnd da aplicação com a lib electron-reload
// Assim que alguma alteração no código é feita
// require("electron-reload")(__dirname, {
//     electron: require(`${__dirname}/node_modules/electron`),

// });

//Função para criar uma janela Desktop
function createWindow() {

    //Const icon para crira um icone na barra de tarefas/dock
    const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`);

    //Aqui verifica se o app electron está sendo executado em um macOS, se sim ele vai definir o icone do aplicativo no dock
    if (app.dock) {
        app.dock.setIcon(icon);
    }

    //Criando a janela Desktop
    const win = new BrowserWindow({

        //Icon foi declarado para definir o icone do aplicativo, icon é a variável que carrega nossa imagem
        icon,

        //Aqui definimos que inicializara em tela cheia o nosso app
        fullscreen: true,

        //Usamos fram: false para remover as opções padrao do electron ao redor da janela do nosso app
        // frame: false,

        //Aqui definimos o tamanho da janela do nosso apicativo Desktop
        width: 1280,
        height: 720,

        //Habilita a integração do Node.js no FrontEnd
        webPreferences: {
            nodeIntegration: true
        },
    });

    //Carrega a janela com o conteúdo dentro de index.html
    win.loadFile("index.html");

    // Fecha a janela quando a tecla Esc é pressionada
    win.webContents.on('before-input-event', (event, input) => {
        if (input.key === 'Escape' && input.type === 'keyDown') {
            win.close();
        }
    });

}


//Esse método vai ser chamado assim que o Electron finalizar sua inicialização
//e estiver pronto para abrir e manipular o nosso código.
//Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(createWindow);


//Quando clicarmos no botão de fechar a janela no app desktop
//O evento vai ser ouvido aqui no arquivo index.js e algum procedimento pode ser realizado
//tipo fechar alguma conexão de banco de dados por exemplo.
app.on("window-all-closed", () => {
    // No MacOS quando fecha uma janela, na verdade ela é "minimizada"
    // e o processo executa em segundo-plano tipo um app do celular
    // Para fechar e encerrar o app tem que teclar Cmd+Q ou no dock (barra de tarefas)
    // clicar com botão direito e encerrar o app
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // Esse evento é disparado pelo MacOS quando clica no ícone do aplicativo no Dock.
    // Basicamente cria a janela se não foi criada.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });


