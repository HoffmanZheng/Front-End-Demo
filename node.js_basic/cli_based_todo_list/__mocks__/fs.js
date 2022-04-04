const fs = jest.createMockFromModule('fs')
const _fs = jest.requireActual('fs')
Object.assign(fs, _fs)

let mockReadFiles = {}
let mockWriteCallback = {}

fs.setMockReadFiles = (path, error, data) => {
    mockReadFiles[path] = [error, data]
    console.log("read mock: " + JSON.stringify(mockReadFiles))
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
    console.log("00")
    console.log("path: " + path + "callback: " + callback)
    mockWriteCallback[path] = callback
    console.log("setMock: " + JSON.stringify(mockWriteCallback))
}

// use the callback function defined in db.spec.js, mock the write disk process
fs.writeFile = (path, data, options, callback) => {
    if (callback === undefined) { callback = options }

    console.log("mock: " + JSON.stringify(mockWriteCallback))
    if (path in mockWriteCallback) {
        console.log(11)
        mockWriteCallback[path](data, options, callback)
    } else {
        _fs.writeFile(path, data, options, callback)
    }
}

module.exports = fs