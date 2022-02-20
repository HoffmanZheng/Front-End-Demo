const db = require('./db')
const inquirer = require('inquirer');

const index = {
    async add(list, taskName) {
        const todoList = list || await db.read()
        const newTask = {name: taskName, done: false}
        todoList.push(newTask)
        await db.write(todoList)
        todoList.map((task, index) => {
            console.log(`${task.done? '[x]':'[ ]'} ${index + 1} - ${task.name}`)
        })
    },

    async clearAll() {
        await db.write([])
        console.log('All tasks in the list have been cleared.')
    },

    async clearDone() {
        const list = await db.read()
        result = list.filter(task => task.done === false)
        result.map((task, index) => {
            console.log(`${task.done? '[x]':'[ ]'} ${index + 1} - ${task.name}`)
        })
        await db.write(result)
    },

    async done(list, taskIndex, isDone) {
        list.map((task, index) => {
            if (index === taskIndex) {
                task.done = isDone
                console.log(`${task.done? '[x]':'[ ]'} ${index + 1} - ${task.name}`)
            }
        })
        await db.write(list)
    },

    async changeName(list, taskIndex, taskName) {
        list.map((task, index) => {
            if (index === taskIndex) {
                task.name = taskName
                console.log(`${task.done? '[x]':'[ ]'} ${index + 1} - ${task.name}`)
            }
        })
        db.write(list)
    },

    async showAll() {
        const list = await db.read()
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
                this.askAndPerformOperation(list, index)
            } else if (index === -1) {
                this.askAndAddTask(list)
            } else if (index === -2) {
                console.log('Exit')
            }
        });        
    },

    askAndAddTask(list) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'taskName',
                message: 'Please enter task name to create'
            }
        ])
        .then(answer => {
            this.add(list, answer.taskName)
        }) 
    },

    async deleteTask(list, index) {
        list.splice(index, 1)
        list.map((task, index) => {
            console.log(`${task.done? '[x]':'[ ]'} ${index + 1} - ${task.name}`)
        })
        await db.write(list)
    },

    askAndPerformOperation(list, index) {
        inquirer.prompt([
            {
            type: 'list',
            name: 'operation',
            message: 'Select a operation',
            choices: [
                {name: 'done', value: 'done'},
                {name: 'not finish', value: 'unfinished'},
                {name: 'change name', value: 'changeName'},
                {name: 'delete task', value: 'delete'},
                new inquirer.Separator(),
                {name: 'Exit', value: -2},
            ],
            },
        ])
        .then(answer => {
            switch(answer.operation) {
                case 'done' :
                    this.done(list, index, true);
                    break;
                case 'unfinished' :
                    this.done(list, index, false);
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
                        this.changeName(list, index, answer.taskName)
                    }) 
                    break;
                case 'delete' :
                    this.deleteTask(list, index)
                    break;
            }
        })
    }
}

module.exports = index