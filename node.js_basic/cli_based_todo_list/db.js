const { readFile, writeFile } = require('fs');
const p = require('path');
const homedir = require('os').homedir();
const home = process.env.HOME || homedir
const dbPath = p.join(home, '.todo')

const db = {
    // 读取文件并返回列表
    read(path = dbPath) {
        return new Promise((resolve, reject) => {
            let list = []
            readFile(path, {flag: 'a+'}, (err, data) => {
                if (err) reject(err);
                try {
                    list = JSON.parse(data.toString())
                } catch( error) {
                    list = []
                }
                resolve(list)
            }) 
        })
    },

    // 将列表参数写入文件
    write(list) {
        return new Promise((resolve, reject) => {
            writeFile(dbPath, JSON.stringify(list) + '\n', (err) => {
                if (err) reject(err);
                resolve();
            })
        })
    }
}

module.exports = db