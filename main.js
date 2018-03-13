const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu

let mainWindow = null;

app.on('ready', () => {
  // mainWindowを作成（windowの大きさや、Kioskモードにするかどうかなどもここで定義できる）
  mainWindow = new BrowserWindow({width: 400, height: 160});
  // Electronに表示するhtmlを絶対パスで指定（相対パスだと動かない）
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  initWindowMenu();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

function initWindowMenu(){
    const template = [
        {
            label: 'リンク',
            submenu: [
                {
                    label: 'Electron',
                    click () { mainWindow.loadURL('https://www.kabanoki.net/category/electron'); }
                }
            ]
        },
        {
            label: '外部リンク',
            submenu: [
                {
                    label: 'Google',
                    click () { mainWindow.loadURL('https://www.google.co.jp/'); }
                }
            ]
        }
    ]
 
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}