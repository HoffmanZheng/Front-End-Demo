import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        const {todo_list} = this.props
        return (
            <ul className='todo-list'>
                {
                    todo_list.map( todo => {
                        return <Item key={todo.id} {...todo} changeDone={this.props.changeDone}/>})
                }
            </ul>
        )
    }
}
