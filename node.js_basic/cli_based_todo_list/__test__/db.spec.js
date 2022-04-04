const db = require("../db.js")
const fs = require('fs')
jest.mock('fs')

describe('db', () => { 
    it('can read from file', async () => {
        fs.setMockReadFiles('/home/.todo', null, '[{"name":"hello", "done": false}]')
        const result = await db.read('/home/.todo')
        expect(result).toStrictEqual([{"name":"hello", "done": false}])
    });

    it('raise error during reading from file', () => {
        fs.setMockReadFiles('/error', 'File not found', null)
        return expect (db.read('/error')).rejects.toEqual('File not found')
    });

    it('can write into file', async() => { 
        let file
        fs.setMockWriteCallback('/home/.todo', (path, data, callback) => {
            file = data
            callback(null)
        })
        const list = [{"name": "sleep", "done": false}, {"name": "lunch", "done": true}]
        await db.write(list, '/home/.todo')
        expect(file).toBe(JSON.stringify(list) + '\n')
    });

    it('raise error during writing into file', () => {
        fs.setMockWriteCallback('/error', (path, data, callback) => {
            callback(new Error('Error during openning file'))
        })
        return expect(db.write([], '/error')).rejects.toEqual('Error during openning file')
    });
});