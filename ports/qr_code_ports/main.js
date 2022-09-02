const qr = require('qr-image'); 
const fs = require('fs'); 
const path = require('path');


let qr_code = {
    CreateQrImage:createQrImage
}


function createQrImage(data,type,size,pathImage){
    let code = qr.image(data, { type: type, size: size });
    // 生成本地文件
    if(pathImage===undefined||pathImage===null){
        let date=new Date()
        let pic = code.pipe(fs.createWriteStream(path.join(__filename,"../","lib/images",date.getHours()+""+date.getMinutes()+""+date.getSeconds()+"."+type),"utf-8"));
         // 监听错误事件
        pic.on('error', (err)=> {
            console.log(err);
        });
        // 监听完成事件
        pic.on('finish', ()=> {
            console.log('二维码生成完毕');
        });
    }
    else{
        let pic = code.pipe(fs.createWriteStream(pathImage));
         // 监听错误事件
        pic.on('error', (err)=> {
            console.log(err);
        });
        // 监听完成事件
        pic.on('finish', ()=> {
            console.log('二维码生成完毕');
        });
    }
}

module.exports = qr_code