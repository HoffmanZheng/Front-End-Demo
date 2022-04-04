const fs = jest.genMockFromModule('fs')
const _fs = jest.requireActual('fs')
Object.assign(fs, _fs)

let mockReadFiles = {}
let mockWriteCallback = {}

fs.setMockReadFiles = (path, error, data) => {  
    mockReadFiles[path] = [error, data] 
}

// use the callback function defined in db.js, mock the read disk process
fs.readFile = (path, options, callback) => {
    // in case user doesn't pass the callback function
    if (callback === undefined) { callback = options }

    if (path in mockReadFiles) {
        callback(...mockReadFiles[path]) // mock the data source
    } else {
        _fs.readFile(path, options, callback)
    }
}

fs.setMockWriteCallback = (path, callback) => {
    mockWriteCallback[path] = callback
}

// use the callback function defined in db.spec.js, mock the write disk process
fs.writeFile = (path, data, options, callback) => {
    if (callback === undefined) { callback = options }

    if (path in mockWriteCallback) {
        mockWriteCallback[path](path, data, callback)
    } else {
        _fs.writeFile(path, data, options, callback)
    }
}

module.exports = fs