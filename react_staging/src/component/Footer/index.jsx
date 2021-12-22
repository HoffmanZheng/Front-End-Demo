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
        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" onChange={this.handleAllCheck}/>
                </label>
                <span>
                    <span>已完成0</span> / 全部2
                </span>
                <button onClick={this.handleClear} className='btn btn-danger'>清除已完成任务</button>
            </div>
        )
    }
}
