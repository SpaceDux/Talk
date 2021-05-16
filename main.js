const { app, BrowserWindow, dialog, ipcMain } = require('electron');

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    width: 1200,
    height: 700,
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  win.center();
  win.setMinimumSize(1200, 700);

  win.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.setName("Talk")


app.on('ready', createWindow)

// Remove listeners
app.on('before-quit', () => {
  win.removeAllListeners('close');
  win.close();
});
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
