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
        result = list.filter(task => task.done === false)
        await db.write(result)
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
            const index = parseInt(answer.index)
            if (index >= 0) {
                inquirer.prompt([
                    {
                    type: 'list',
                    name: 'operation',
                    message: 'Select a operation',
                    choices: [
                        {name: 'done', value: 'done'},
                        {name: 'not finish', value: 'unfinished'},
                        {name: 'change name', value: 'changeName'},
                        new inquirer.Separator(),
                        {name: 'Exit', value: -2},
                    ],
                    },
                ])
                .then(answer => {
                    console.log(answer.operation)
                    switch(answer.operation) {
                        case 'done' :
                            this.done(index, true);
                            break;
                        case 'unfinished' :
                            this.done(index, false);
                            break;
                        case 'changeName' :
                            inquirer.prompt([
                                {
                                    type: 'input',
                                    name: 'taskName',
                                    message: 'Please enter new task name'
                                }
                            ])
                            .then(answer => {
                                this.changeName(index, answer.taskName)
                            }) 
                            break;
                    }
                })
            } else if (index === -1) {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'taskName',
                        message: 'Please enter task name to create'
                    }
                ])
                .then(answer => {
                    this.add(answer.taskName)
                }) 
            } else if (index === -2) {
                console.log('Exit')
            }
        });        
    },

    async done(taskIndex, isDone) {
        const list = await db.read()
        list.map((task, index) => {
            if (index === taskIndex) {
                task.done = isDone
            }
        })
        db.write(list)
    },

    async changeName(taskIndex, taskName) {
        const list = await db.read()
        list.map((task, index) => {
            if (index === taskIndex) {
                task.name = taskName
            }
        })
        db.write(list)
    },
}

module.exports = index