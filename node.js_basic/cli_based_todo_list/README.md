# CLI based todo list

## Function overview

![](https://github.com/HoffmanZheng/Front-End-Demo/blob/main/images/cli_based_todo_list.gif)

## Start with npm

```powershell
yarn global add cli_based_todo_list   # npm install -g cli_based_todo_list
todo --version
todo -h
todo add <taskName>    # add a task to the todo list
todo                   # get the todo list for further operation
todo clearDone         # clear all the finished task
todo clearAll          # clear all tasks
```

## Start with source code

```powershell
# clone and get the source code
git clone https://github.com/HoffmanZheng/Front-End-Demo.git && cd node.js_basic/file_based_todo_list    
node -v                     # node version >= 14, nvm recommended
yarn                        # install all the dependencies
yarn test                   # run the spec test
node cli.js -h    
node cli.js add <taskName>  # add a task to the todo list
node cli.js                 # get the todo list for further operation
node cli.js clearDone       # clear all the finished task
node cli.js clearAll        # clear all tasks
```
