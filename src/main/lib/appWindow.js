/**
 * @name appWindow
 * @author MateBook13
 * @description appWindow
 * @date 2022/11/9
 */
const {
    app,
    ipcMain
} = require('electron')
const log = require("electron-log");

/**
 * 程序控制函数
 * @type {AppControl}
 */
function AppControl() {

}

AppControl.prototype.closeApp = function () {
    app.quit();
}
AppControl.prototype.minApp = function (mainWindow) {
    mainWindow.minimize()
}
AppControl.prototype.maxApp = function (mainWindow) {
    mainWindow.maximize()
}
AppControl.prototype.hideApp = function () {
    app.hide()
}
AppControl.prototype.showApp = function () {
    app.show()
}

let appControl = new AppControl()
const appWindowControl = {
    closeApp: appControl.closeApp,
    minApp: appControl.minApp,
    maxApp: appControl.maxApp,
    hideApp: appControl.hideApp,
    showApp: appControl.showApp
}

/**
 * 窗口事件监听函数
 * @param mainWindow
 */
// 显示窗口触发
function showWindow(mainWindow) {
    mainWindow.on('show', () => {

    })
}

// 最大化窗口触发
function maxWindow(mainWindow) {
    mainWindow.on('maximize', () => {

    })
}

// 最小化窗口触发
function minWindow(mainWindow) {
    mainWindow.on('minimize', () => {
        mainWindow.webContents.send("change","HelloWorld")
    })
}

// 隐藏窗口触发
function hideWindow(mainWindow) {
    mainWindow.on('hide', () => {

    })
}

// 因为强制关机或机器重启或会话注销而导致窗口会话结束时触发
function sessionEnd(mainWindow) {
    mainWindow.on('session-end', () => {
        log.info("session")
    })
}

// 关闭窗口触发
function closeWindow(mainWindow) {
    mainWindow.on('closed', () => {
        mainWindow = null
        log.info("close")
    })
}

const appWindowEvent = {
    showWindow: showWindow,
    maxWindow: maxWindow,
    minWindow: minWindow,
    hideWindow: hideWindow,
    sessionEnd: sessionEnd,
    closeWindow: closeWindow
}

exports = module.exports = {
    appWindowEvent,
    appWindowControl
}