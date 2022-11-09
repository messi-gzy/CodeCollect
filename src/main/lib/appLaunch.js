/**
 * @name appLaunch
 * @author MateBook13
 * @date 2022/11/3
 * @description 软件启动后，页面加载前需要操作的内容
 */
const Store = require('electron-store')//store配置文件
const path = require('path')//路径设置

/**
 * 全局变量
 */
let store = new Store() //store

let AppLaunch = {
    checkData:checkData,
    copyData:copyData,
    checkStatus:checkStatus
}


// 开启软件前检查，检查产生资源文件和插件库的版本是否一致
function checkData(version){

}
// 复制产生资源和插件库
function copyData(target){

}

// 查看整个软件的运行状态
function checkStatus(){

}

exports = module.exports = {
    AppLaunch
}