const { tar }=require('./lib/zlib')
const path=require('path')
let zlib = {
    UnZip:unzip,
    ZipFile:zipFile,
    ZipFolder:zipFolder
}

function unzip(zipFile, destFolder){
    if(destFolder===undefined||destFolder===null){
        destFolder=path.join(zipFile,"../",path.basename(zipFile,'.zip'))
        tar.UnZip(zipFile, destFolder)
    }
    else{
        tar.UnZip(zipFile, destFolder)
    }
}

function zipFile(sourceFile, destZip){
    if(destZip===undefined||destZip===null){
        destZip=path.join(sourceFile,"../",path.basename(sourceFile)+".zip")
        tar.ZipFile(sourceFile,destZip)
    }
    else{
        tar.ZipFile(sourceFile,destZip)
    }
    
}

function zipFolder(sourceFolder, destZip){
    if(destZip===undefined||destZip===null){
        destZip=path.join(sourceFolder,"../",path.basename(sourceFolder)+".zip")
        console.log(destZip)
        tar.ZipFolder(sourceFolder,destZip)
    }
    else{
        tar.ZipFolder(sourceFolder,destZip)
    }
}

module.exports = zlib