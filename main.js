const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const preference = require('electron-preference');

let mainWindow = null;

app.on('ready', () => {
  // mainWindowを作成（windowの大きさや、Kioskモードにするかどうかなどもここで定義できる）
  mainWindow = new BrowserWindow({width: 400, height: 160});
  // Electronに表示するhtmlを絶対パスで指定（相対パスだと動かない）
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  initWindowMenu();
  preference.load(__dirname + '/preference.json');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});


function initWindowMenu(){
    const template = [
        {
            label: '環境設定',
            submenu: [
                {
                    label: '環境設定',
                    click () { preference.show(); }
                }
            ]
        },
        {
            label: '操作',
            submenu: [
				{ 
					label: "ペースト", accelerator: "CmdOrCtrl+V", selector: "paste:" 
				}
            ]
        }
    ]
 
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}