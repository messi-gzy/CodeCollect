const MarkToHtml = require('./mdTohtml')
const readline = require('linebyline')
const fs = require('fs')
rl = readline('./somefile.md');
rl.on('line', function(line, lineCount, byteCount) {
    MarkToHtml.mdtohtml(line)
})
.on('error', function(e) {
    console.log(e);
})
.on('end',function(){
   //console.log(MarkToHtml.allHtml());
   //fs.writeFileSync('./hello.html',MarkToHtml.allHtml(),'utf-8')
})
.on('close',function(){

});


