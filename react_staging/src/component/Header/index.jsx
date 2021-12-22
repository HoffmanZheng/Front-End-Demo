import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            if (event.target.value === '') {
                alert("输入不能为空")
                return
            }
            const name = event.target.value
            const new_todo = {id: nanoid(), name: name, done:false }
            this.props.addTodo(new_todo)
            event.target.value = ""  // 清空输入栏
        } else {
            return
        }
    }

    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='please input your task:' />
            </div>
        )
    }
}
