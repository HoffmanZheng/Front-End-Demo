import React, { Component } from 'react';
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

class App extends Component {
    state = { todo_list:[
        {id: 1, name: "吃饭", done: true},
        {id: 2, name: "睡觉", done: false},
        {id: 3, name: "写代码", done: true}
    ]}

    addTodo = (new_todo) => {
        const {todo_list} = this.state
        const new_todo_list = [new_todo, ...todo_list]
        this.setState({todo_list: new_todo_list})
    }

    changeDone = (id, done) => {
        const {todo_list} = this.state
        const new_todo_list = todo_list.map((todo)=>{
            if (todo.id === id) return {...todo, done: done}
            else return todo
        })
        this.setState({todo_list: new_todo_list})
    }

    render() {
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    {/* 把函数传给 Header，用于向 App 中的状态添加成员 */}
                    <Header addTodo={this.addTodo} />
                    <List todo_list={this.state.todo_list} changeDone={this.changeDone}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
