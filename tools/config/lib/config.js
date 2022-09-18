const fs = require ('fs')
const path =require ('path')

//TODO 配置文件操作

let GetConfig = {
    getPath:GetPath,
    setPath:SetPath
}

function GetPath(){
    let data=fs.readFileSync(path.join(__dirname,"config.json"),'utf-8');
    let dataJson=JSON.parse(data);
    return dataJson['data'];
}

function SetPath(newPath){
    let data=JSON.parse(fs.readFileSync(path.join(__dirname,"config.json"),'utf-8'));
    data['data']=newPath;
    fs.writeFileSync(path.join(__dirname,'config.json'),JSON.stringify(data,"","\t"))
}
 
module.exports = GetConfig