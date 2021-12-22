import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        changeDone: PropTypes.func.isRequired,
        todo_list: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todo_list} = this.props
        return (
            <ul className='todo-list'>
                {
                    todo_list.map( todo => {
                        return <Item key={todo.id} {...todo} changeDone={this.props.changeDone} deleteTodo={this.props.deleteTodo}/>})
                }
            </ul>
        )
    }
}
