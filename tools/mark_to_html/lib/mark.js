const readline = require('linebyline')
rl = readline('./somefile.md');
rl.on('line', function(line, lineCount, byteCount) {
console.log(line);
console.log(byteCount);
})


.on('error', function(e) {
    console.log(e);
});
console.log(rl.input);
/**
 * 1、标题
    # 一级
    ## 二级
    ### 三级
    #### 四级
    ##### 五级
    ###### 六级
    | 空格隔开

    一级标题
    ==========

    二级标题
    ----------
   2、字形
    1.*斜体*
    _斜体_
    2.**粗体**
    __粗体__
    3.***粗斜体***
    ___粗斜体___
    4.~~删除线~~
    5.<u>下划线</u>

    3、分割线
    ***
    * * *
    ---
    - - -
    ___
    _ _ _

    4、
 */