const path  = require('path');
const fs = require("fs");
const marked = require("marked");
var template;
// 监听.md文件修改
fs.watchFile(
    "./Vue-Cli3基本配置.md", 
    {   persistent: true,  //是否持续监听
        interval: 200      //刷新间隔
    }, (current,previous) => {
    // 比较修改时间,判断保存后是否内容变化
    if(current.mtime == previous.mtime){
        return false;
    }
    // 读取md文件
    fs.readFile("./Vue-Cli3基本配置.md", 'utf8', (err, data) => {
        if(err) throw err;
        //将markdown文件内容转换为html
        var html = marked(data);
        // 创建html模板
        template = createTemplate();        
        // 模板内容替换
        template = template.replace("{{{content}}}", html);        
        
    })

    // 读取css文件
    fs.readFile("./github-markdown.css", 'utf8', (err, data) => {
        if (err) throw err;       
        // CSS内容替换
        template = template.replace("{{{style}}}", data);

        // 写入文件
        fs.writeFile('./index.html', template , 'utf8', (err, data) => {
            if(err) throw err;
            console.log('写入文件成功!');            
        })
    })

})

/**
 * 创建页面模板
 * @returns {string} 页面骨架字符串
 */
function createTemplate() {
    const template = `<!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8" >
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>md文件转html页面</title>
            <style>
                .markdown-body {
                    box-sizing: border-box;
                    min-width: 200px;
                    max-width: 980px;
                    margin: 0 auto;
                    padding: 45px;
                }
                @media (max-width: 767px) {
                    .markdown-body {
                        padding: 15px;
                    }
                }
                {{{style}}}
            </style>
            </head>
            <body>
                <article class="markdown-body">
                    {{{content}}}
                </article>  
            </body>
        </html>`;    
    return template;
}


