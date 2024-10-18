const { app, BrowserWindow } = require('electron')
const serve = require('./serve');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

  })

  // win.loadFile('index.html')
  win.loadURL(`http://localhost:${serve.port}`)
}

app.whenReady().then(() => {
  createWindow()
})