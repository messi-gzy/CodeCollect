const fs = require("fs");
const path = require("path");
const request = require("request");

let downloadFile = {
    requestFile:RequestFile,
    requestFile2:RequestFile2
}

function RequestFile(url,fileName,dirFile){
        let stream = fs.createWriteStream(path.join(dirFile, fileName));
        request(url).pipe(stream).on("close", function (err) {
            if(err){
                console.log(err)
                console.log("下载失败！！！")
            }
            else {
                console.log("文件" + fileName + "下载完毕");
            }
        });
}

function RequestFile2(url,filePath){
    let stream = fs.createWriteStream(path.join(filePath));
    request(url).pipe(stream).on("close", function (err) {
        if(err){
            console.log(err)
            console.log("下载失败！！！")
        }
        else {
            console.log("文件" + fileName + "下载完毕");
        }
    });
}

module.exports = downloadFile