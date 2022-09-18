var admZip = require('adm-zip')
var iconv  = require('iconv-lite')
/**
 * unzip
 *   zipFile，待解压缩的zip文件
 *   destFolder，解压缩后存放的文件夹
 */

let tar = {
    UnZip:unzip,
    ZipFile:zipFile,
    ZipFolder:zipFolder
}

function unzip(zipFile, destFolder){
    var zip = new admZip(zipFile);
    
    var zipEntries = zip.getEntries();
    for(var i=0; i<zipEntries.length; i++){
        var entry = zipEntries[i];
        entry.entryName = iconv.decode(entry.rawEntryName, 'gbk');
    }
    
    zip.extractAllTo(destFolder, true);
}

/**
 * zip file
 *   sourceFile，待压缩的文件
 *   destZip，压缩后的zip文件
 */
function zipFile(sourceFile, destZip){
    var zip = new admZip();
    
    zip.addLocalFile(sourceFile);
    zip.writeZip(destZip);
}


/**
* zip folder
*   sourceFolder，待压缩的文件夹
*   destZip，压缩后的zip文件
*/
function zipFolder(sourceFolder, destZip){
    var zip = new admZip();
    
    zip.addLocalFolder(sourceFolder);
    zip.writeZip(destZip);
}
module.exports = {
    tar
}