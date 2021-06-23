#!/usr/bin/env node
'use strict'
// 引入模块
const fs = require('fs');
const path = require('path')
// 获取控制台参数
let argv = process.argv;
// 控制台颜色 https://bj.96weixin.com/emoji/
var styles = { 
    'bold': '\x1B[1m%s\x1B[22m',
    'italic': '\x1B[3m%s\x1B[23m',
    'underline': '\x1B[4m%s\x1B[24m',
    'inverse': '\x1B[7m%s\x1B[27m',
    'strikethrough': '\x1B[9m%s\x1B[29m',
    'white': '\x1B[37m%s\x1B[39m',
    'grey': '\x1B[90m%s\x1B[39m',
    'black': '\x1B[30m%s\x1B[39m',
    'blue': '\x1B[34m%s\x1B[39m',
    'cyan': '\x1B[36m%s\x1B[39m',
    'green': '\x1B[32m%s\x1B[39m',
    'magenta': '\x1B[35m%s\x1B[39m',
    'red': '\x1B[31m%s\x1B[39m',
    'yellow': '\x1B[33m%s\x1B[39m',
    'whiteBG': '\x1B[47m%s\x1B[49m',
    'greyBG': '\x1B[49;5;8m%s\x1B[49m',
    'blackBG': '\x1B[40m%s\x1B[49m',
    'blueBG': '\x1B[44m%s\x1B[49m',
    'cyanBG': '\x1B[46m%s\x1B[49m',
    'greenBG': '\x1B[42m%s\x1B[49m',
    'magentaBG': '\x1B[45m%s\x1B[49m',
    'redBG': '\x1B[41m%s\x1B[49m',
    'yellowBG': '\x1B[43m%s\x1B[49m',
};

// 控制器 console.log(argv)
switch (argv[2])
{
    case '--help':
        console.log(styles['yellow'], "\n🍌🍆   utils --date  ")
        console.log(styles['yellow'],   "🍌🍆   utils --date delimiter \n ")
        console.log(styles['yellow'],   "🍌🍆   utils --file  ")
        console.log(styles['yellow'],   "🍌🍆   utils --file filename  \n ")
        break;
    case '--date':
        let d = new Date
        let y = d.getFullYear(), m = d.getMonth()+1, r = d.getDate()
        let delimiter = argv[3] ? argv[3]: '-'
        console.log(styles['green'], `\n 😘    ${y}${delimiter}${m}${delimiter}${r} \n `)
        break;
    case '--file':
        // 准备
        let fileName = argv[3] ? argv[3]: 'webopen-littlesister'
        let htmlData = fs.readFileSync(path.resolve(__dirname, "../example/tpl.html"),'utf8')
        htmlData = htmlData.replace('--title--', fileName)
        // 检测
        let currentPath = process.cwd()
        let filePath = path.resolve(currentPath, fileName+'.html')
        if (fs.existsSync(filePath)) {
            console.log(styles['red'], '\n  🤣  file exists \n  ')
            return
        }
        // 创建
        fs.writeFile(filePath, htmlData, function (err) {
            if (err) throw err
            console.log(styles['green'], '\n  😎  file create success! \n  ')
        })
        break;
    default:
        console.log(styles['red'], "\n ✨  客观需要啥服务呢？ --help \n ")
}