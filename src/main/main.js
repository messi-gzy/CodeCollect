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
} = require('electron')//electron

const log = require('electron-log')//log日志
const Store = require('electron-store')//store配置文件
const path = require('path')
//路径设置

const {
    appWindow,
    appWindowControl
} = require('./lib/appWindow')

/**
 * 全局变量
 */
let store = new Store() //store
let mainWindow = null;
//窗口大小
let screenSize = {
    width: 0,
    height: 0
}

/**
 * 启动设置
 */
app.on('ready', () => {
   createWindow()
});
app.whenReady().then(() => {
    // 注册一个'CommandOrControl+X' 快捷键监听器
    const ret = globalShortcut.register('Ctrl+X', () => {
        appWindowControl.minApp(mainWindow);
    })

    if (!ret) {
        console.log('registration failed')
    }

    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('CommandOrControl+X'))
})

app.on('will-quit', () => {
    // 注销快捷键
    globalShortcut.unregister('Ctrl+X')

    // 注销所有快捷键
    globalShortcut.unregisterAll()
})
/**
 * 软件退出设置
 */
app.on("quit", () => {

})

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 1000,
        minHeight: 700,
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
    appWindow.closeWindow(mainWindow) // 关闭窗口
    appWindow.sessionEnd(mainWindow) // 因为强制关机或机器重启或会话注销而导致窗口会话结束时触发
    appWindow.hideWindow(mainWindow) // 窗口隐藏触发
    appWindow.showWindow(mainWindow) // 窗口显示触发
    appWindow.minWindow(mainWindow) // 最小化触发
    appWindow.maxWindow(mainWindow) // 最大化触发
    //屏幕尺寸
    const primaryDisplay = screen.getPrimaryDisplay()
    const {width, height} = primaryDisplay.workAreaSize
    screenSize.width = width;
    screenSize.height = height;
}

