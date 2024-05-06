const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
let pathToLoad;
const prodPath = 'aictron-app/build/index.html';
const devURL = 'http://localhost:3005';
const gotTheLock = app.requestSingleInstanceLock();

function createMainWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Loading the index.html of the app or the dev server URL
    pathToLoad = app.isPackaged ? prodPath : devURL;
    mainWindow.loadURL(pathToLoad);

    // Event when the window is closed
    mainWindow.on('closed', function () {
        // Dereference the window object
        mainWindow = null;
    });
}

app
  .whenReady()
  .then(() => {
    if (!gotTheLock) {
      app.quit();
      throw new Error('Another instance of the app is already running');
    }
  })
  .then(createMainWindow)
  .then(() => {
    if (!app.isPackaged) {
      windowManager.mainWindow?.webContents.openDevTools();
    }
  })
  .then(() => {
    app.on('activate', () => {
        // On macOS, re-create a window when the dock icon is clicked and no other windows are open
        if (mainWindow === null) {
            createMainWindow();
        }
    })
})


// Quit when all windows are closed
app.on('window-all-closed', function () {
    // On macOS, quit the app when the window is closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});