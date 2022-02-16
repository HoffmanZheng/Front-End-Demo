const db = require('./db')

const index = {
    add(taskName) {
        console.log("try to add task: " + {taskName})
        db.read()
    }
}

module.exports = index