const db = require("../db.js")
const fs = require('fs')
jest.mock('fs')

describe('db', () => { 
    it('can read from file', async () => {
        fs.setMockReadFiles('/home/.todo', null, '[{"name":"hello", "done": false}]')
        const result = await db.read('/home/.todo');
        expect(result).toStrictEqual([{"name":"hello", "done": false}])
    });

    it('raise error during reading from file', () => {
        
    });
    

    it('can write into file', async() => {
        let file
        fs.setMockWriteCallback('/home.todo', (data, options, callback) => {
            console.log(22)
            file = data
            callback(null)
        })
        const list = [{"name": "sleep", "done": false}, {"name": "lunch", "done": true}]
        await db.write(list, '/home.todo')
        expect(file).toBe(JSON.stringify(list))
    });

    it('raise error during writing into file', () => {
        
    });
    
    
});