const fs = require ('fs')
const log = require ('electron-log')//log日志
const path =require ('path')

const GetConfig =require ('./config.js')
//TODO 数据库
let DataBase = {
   
}

let DataOperate = {
    set:Set,
    get:Get,
    delete:Delete,
    find:Find
}

function getJson(jsonPath){
    return JSON.parse(fs.readFileSync(path.join(jsonPath),'utf-8'));
}

function setJson(jsonPath,data){
    let time = fs.statSync(path.join(jsonPath)).ctime;
    fs.writeFileSync(path.join(jsonPath),data,'utf-8');
    if(fs.statSync(path.join(jsonPath)).ctime===time)
        return true
    else 
        return false    
}

function Set(key,value){

}
function Get(key){

}
function Delete(key){

}
function Find(key){

}

module.exports= {
    DataOperate
}
