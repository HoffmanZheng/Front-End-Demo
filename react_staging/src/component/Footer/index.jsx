import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    static propTypes = {
        clearDone: PropTypes.func.isRequired,
        allDone: PropTypes.func.isRequired
    }

    handleClear = ( )=> {
        this.props.clearDone()
    }

    handleAllCheck = (event) => {
        this.props.allDone(event.target.checked)
    }

    render() {
        const { todo_list } = this.props
        const totalDone = todo_list.reduce((pre, current)=>pre+(current.done?1:0),0)

        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" checked={ todo_list.length === totalDone && totalDone > 0} onChange={this.handleAllCheck}/>
                </label>
                <span>
                    <span>已完成 {totalDone} </span> / 全部 {todo_list.length}
                </span>
                <button onClick={this.handleClear} className='btn btn-danger'>清除已完成任务</button>
            </div>
        )
    }
}
