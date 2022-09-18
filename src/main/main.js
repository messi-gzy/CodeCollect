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
    desktopCapturer,
    clipboard,
    Tray,
    shell,
    globalShortcut,
    nativeImage,
    screen
} = require ('electron')//electron

const log = require ('electron-log')//log日志
const Store = require ('electron-store')//store配置文件
const path =require ('path')//路径设置

/**
 * 全局变量
 */
let store = new Store() //store

let screenSize={//窗口大小
    width:0,
    height:0
}


//TODO 启动页面
/**
 * 启动设置
 */
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth:1000,
        minHeight:700,
        frame: false,
        alwaysOnTop:false,//是否永远在其他窗口之上
        skipTaskbar:false,
        resizable:true,//窗口调节
        // opacity:1,//窗口透明度
        transparent:false,
        icon: path.join(__dirname,"../../static/images/app3.ico") ,
        webPreferences:{//nodejs使用
            nodeIntegration:true,
            contextIsolation:false,
            webviewTag:true
        },
    })
    mainWindow.loadFile(path.join(__dirname,'../renderer/app/app.html'))
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    //屏幕尺寸
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    screenSize.width=width;
    screenSize.height=height
});
