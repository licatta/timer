const path = require("node:path");
const { app, BrowserWindow, nativeImage } = require("electron");

function createWindow() {
  const icon = nativeImage.createFromPath(path.join(__dirname, "..", "assets", "icon.png"));
  if (app.dock && !icon.isEmpty()) app.dock.setIcon(icon);

  const window = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: true,
    frame: false,
    icon,
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });

  window.loadFile(path.join(__dirname, "renderer", "index.html"));
  window.webContents.on("before-input-event", (event, input) => {
    if (input.key === "Escape" && input.type === "keyDown") window.close();
  });
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
