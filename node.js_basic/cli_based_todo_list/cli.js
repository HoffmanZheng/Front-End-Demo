#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const index = require('./index')
const packgeFile = require('./package.json')

program
  .name('file-based-todo-list')
  .description('A CLI todo list management program by node.js')
  .version(`${packgeFile.version}`)
  .action(() => {
    index.showAll();
  });

program.command('add')
  .description('Add a new task to the todo list')
  .argument('<taskName>', 'task to add')
  .action((taskName) => {
    index.add(null, taskName)
  });

program.command('clearAll')
  .description('Clear all items in the list')
  .action(() => {
    index.clearAll();
  });

program.command('clearDone')
  .description('Clear finished tasks in the list')
  .action(() => {
    index.clearDone();
  });
  
program.parse();