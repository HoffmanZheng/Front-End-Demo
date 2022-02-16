const homedir = require('os').homedir();
const home = process.env.HOME || homedir
const p = require('path')
const dbPath = p.join(home, '.todo')


const db = {

    // 读取文件并返回列表
    read() {
        console.log(home)
        console.log("dbPath: " + dbPath)
    },

    // 写入 / 更新 todo
    write() {

    }
}

module.exports = db