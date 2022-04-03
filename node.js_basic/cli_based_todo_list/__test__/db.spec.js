const db = require("../db.js")
const fs = require('fs')
jest.mock('fs')

describe('db', () => { 
    it('can read from file', async () => {
        fs.__setMockFiles('/home/.todo', null, '[{"name":"hello", "done": false}]')
        const result = await db.read('/home/.todo');
        expect(result).toStrictEqual([{"name":"hello", "done": false}])
    });
});