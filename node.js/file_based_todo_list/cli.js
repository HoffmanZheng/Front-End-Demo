const { Command } = require('commander');
const program = new Command();
const index = require('./index')

program
  .name('file-based-todo-list')
  .description('A CLi todo list management program by node.js')
  .version('0.0.1 Milestone');

program.command('add')
  .description('Add a new task to the todo list')
  .argument('<taskName>', 'task to add')
  .action((taskName) => {
    index.add(taskName)
  });

program.parse();