// node引入
const {
    app,
    BrowserWindow,
    BrowserView,
    ipcMain,
    dialog,
    Notification
} = require ('electron')//electron
const log = require ('electron-log')//log日志
const Store = require ('electron-store')//store配置文件
let store = new Store() //store

//TODO 启动页面

