/**
 * 模块引入
 */
const {
    app,
    BrowserWindow,
    BrowserView,
    ipcMain,
    dialog,
    Notification,
    clipboard,
    Tray,
    shell,
    globalShortcut,
    nativeImage,
    desktopCapturer,
    Menu,
    screen
} = require('electron');//electron

const log = require('electron-log');//log日志
const Store = require('electron-store');//store配置文件
const path = require('path');
//路径设置

const {
    appWindowEvent,
    appWindowControl
} = require('./lib/appWindow');

/**
 * 全局变量
 */
let store = new Store(); //store
let mainWindow = null;
//窗口大小
let screenSize = {
    width: 0,
    height: 0
};
let processArgv = [];

/**
 * 启动设置
 */
app.on('ready', () => {
    // 创建窗口
    createWindow();
    processArgv = process.argv;
})
app.whenReady().then(() => {
    const ret = globalShortcut.register('Ctrl+X', () => {
        appWindowControl.minApp(mainWindow);
    })
    if (!ret) {
        console.log('registration failed');
    }
    console.log(globalShortcut.isRegistered('Ctrl+X'));
})
/**
 * 将要退出时
 */
app.on('will-quit', () => {
    globalShortcut.unregister('Ctrl+X');
    globalShortcut.unregisterAll();
})
/**
 * 软件退出设置
 */
app.on("quit", () => {

})

/***
 * 创造主窗口，监听窗口变化事件并返回需要值
 * 详细规划
 */
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 500,
        minHeight: 400,
        frame: true,
        alwaysOnTop: false,//是否永远在其他窗口之上
        skipTaskbar: false,
        resizable: true,//窗口调节
        opacity: 1,//窗口透明度
        transparent: false,
        icon: path.join(__dirname, "../../static/images/app4.ico"),
        webPreferences: {
            nodeIntegration: true,// nodejs使用
            contextIsolation: false,
            webviewTag: true// webview的使用
        },
    })
    Menu.setApplicationMenu(null)// 取消菜单栏
    mainWindow.loadFile(path.join(__dirname, '../renderer/app/app.html'))
        .then(r => function () {
            log.info(r)
        })
    appWindowEvent.closeWindow(mainWindow) // 关闭窗口
    appWindowEvent.sessionEnd(mainWindow) // 因为强制关机或机器重启或会话注销而导致窗口会话结束时触发
    appWindowEvent.hideWindow(mainWindow) // 窗口隐藏触发
    appWindowEvent.showWindow(mainWindow) // 窗口显示触发
    appWindowEvent.minWindow(mainWindow) // 最小化触发
    appWindowEvent.maxWindow(mainWindow) // 最大化触发
    //屏幕尺寸
    const primaryDisplay = screen.getPrimaryDisplay()
    const {width, height} = primaryDisplay.workAreaSize
    screenSize.width = width;
    screenSize.height = height;
}

ipcMain.on('windows', (event, args) => {
    // return ipcRenderer.sendSync("syncIpc",sendSyncMessage);
    //  event.sender.send("keyReplyShortcuts",args)
    let arg = args[0];
    switch (arg) {
        case 'close':
            appWindowControl.closeApp();
            break;
        case 'minimize':
            appWindowControl.minApp(mainWindow);
            break;
        case 'maximize':
            appWindowControl.maxApp(mainWindow);
            break;
        case 'show':
            appWindowControl.showApp();
            break;
        case 'hide':
            appWindowControl.hideApp();
            break;
        default:
            log.info("warning")
            break;
    }
})

