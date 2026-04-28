const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: { nodeIntegration: true }
  });
  win.loadFile('index.html');
  // win.setFullScreen(true); // Раскомментируй для полного экрана
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });