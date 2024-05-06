const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    // Create the browser window
    const mainWindow = new BrowserWindow({
        width: 1440,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load your HTML file
    mainWindow.loadURL('http://localhost:3001');

    // Open the DevTools (optional)
    mainWindow.webContents.openDevTools();

    // Event when the window is closed
    mainWindow.on('closed', function () {
        // Dereference the window object
        mainWindow = null;
    });
}

// Event when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function () {
    // On macOS, quit the app when the window is closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On macOS, re-create a window when the dock icon is clicked and no other windows are open
    if (mainWindow === null) {
        createWindow();
    }
});