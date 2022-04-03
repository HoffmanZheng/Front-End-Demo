const fs = jest.createMockFromModule('fs')
const _fs = jest.requireActual('fs')
Object.assign(fs, _fs)

let mockFiles = {}
fs.__setMockFiles = (path, error, data) => {
    mockFiles[path] = [error, data]
}

fs.readFile = (path, options, callback) => {
    // in case user doesn't pass the callback function
    if (callback === undefined) {
        callback = options
    }

    if (path in mockFiles) {
        callback(...mockFiles[path])
    } else {
        _fs.readFile(path, options, callback)
    }
}

module.exports = fs