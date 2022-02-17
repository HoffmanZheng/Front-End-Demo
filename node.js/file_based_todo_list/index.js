const db = require('./db')
const inquirer = require('inquirer');

const index = {
    async add(taskName) {
        const list = await db.read()
        const newTask = {name: taskName, done: false}
        list.push(newTask)
        await db.write(list)
        console.log("list after add: ", list)
    },

    async clearAll() {
        await db.write([])
    },

    async clearDone() {
        const list = await db.read()
        list.filter(task => task.dome === true)
        await db.write(list)
    },

    async showAll() {
        const list = await db.read()
        console.log("Current todo tasks: ", list)

        inquirer.prompt([
            {
            type: 'list',
            name: 'index',
            message: 'Select a task to operate',
            choices: [
                ...list.map((task, index) => {
                    return {name: `${task.done? '[x]':'[ ]'} ${index + 1} - ${task.name}`, value: index.toString()}
                }),
                new inquirer.Separator(),
                {name: 'Create a new task', value: -1},
                {name: 'Exit', value: -2},
            ],
            },
        ])
        .then(answer => {
            console.log(answer.index)
            const index = parseInt(answer.index)
            if (index >= 0) {
                inquirer.prompt([
                    {
                    type: 'list',
                    name: 'index',
                    message: 'Select a task to operate',
                    choices: [
                        ...list.map((task, index) => {
                            return {name: `${task.done? '[x]':'[ ]'} ${index + 1} - ${task.name}`, value: index.toString()}
                        }),
                        new inquirer.Separator(),
                        {name: 'Create a new task', value: -1},
                        {name: 'Exit', value: -2},
                    ],
                    },
                ])
            } else if (index === -1) {

            }
        });        
    },

    async done(isDone) {

    },

    async changeName() {

    },
}

module.exports = index