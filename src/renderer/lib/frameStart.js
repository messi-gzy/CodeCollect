/**
 * @name frameStart
 * @author MateBook13
 * @description 页面渲染前加载的数据
 * ①、加载主体框架，渲染框架
 * ②、加载插件，渲染主题
 * ③、加载部分插件，渲染UI
 * ④、加载注册表，更新UI
 * ⑤、加载插件，插入第三方脚本
 * ⑥、加载插件，插入第三方页面框架
 * @date 2022/11/3
 */
const fs = require('fs')
const path = require('path')
const request = require('request')
const {
    ipcRenderer
} = require('electron')
const Store = require('electron-store')//store配置文件
let store = new Store() //store
const log = require('electron-log')

log.info("start")