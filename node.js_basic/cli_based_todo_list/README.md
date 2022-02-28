# CLI based todo list

## Function overview

![](https://github.com/HoffmanZheng/Front-End-Demo/blob/main/images/node.js-todo-list-1.png)

![](https://github.com/HoffmanZheng/Front-End-Demo/blob/main/images/node.js-todo-list-2.png)

## How to start with source code

```powershell
# clone and get the source code
git clone https://github.com/HoffmanZheng/Front-End-Demo.git && cd node.js/file_based_todo_list    
node -v                     # node version >= 14, nvm recommended
yarn                        # install all the dependencies
node cli.js -h    
node cli.js add <taskName>  # add a task to the todo list
node cli.js                 # get the todo list for further operation
```

## Start with npm

```powershell
yarn global add cli_based_todo_list
todo --version
todo -h
todo add <taskName>    # add a task to the todo list
todo                   # get the todo list for further operation
```

