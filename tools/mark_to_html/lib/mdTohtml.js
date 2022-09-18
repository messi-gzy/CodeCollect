const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);

let MarkToHtml = {
    mdtohtml:mdtohtml,
    allHtml:allHtml
}

function mdtohtml(line){
    let lineArray = line.split('')
    switch(lineArray[0])
    {
        case '#': //标题
            let count=1;
            for(let i=1;i<lineArray.length;i++){
                if(lineArray[i]==='#')
                    ++count;
                else
                    break;
            }
            let line = ""
            for(let i=count+1;i<lineArray.length;i++){
                line+=lineArray[i]
            }
            $(`<h`+count+`>`+line+`</h`+count+`>`).appendTo('body')
            break;
        case '*':
            //TODO 字体
            break;
        case '-':
            break;    
    }
}
function allHtml(){
    return $(`body`).html()
}


module.exports = MarkToHtml