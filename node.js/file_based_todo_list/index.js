const db = require('./db')

const index = {
    async add(taskName) {
        const list = await db.read()
        const newTask = {name: taskName, done: false}
        list.push(newTask)
        await db.write(list)
        console.log("list after add: ", list)
    },

    async clearAll() {

    },

    async clearDone() {

    },

    async showAll() {

    },

    async done(isDone) {

    },

    async changeName() {

    },
}

module.exports = index