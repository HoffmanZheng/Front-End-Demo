import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    static propTypes = {
        changeDone: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = { mouse: false }
    handleMouse = (flag) => {
        return ()=> {
            this.setState({ mouse: flag} )
        }
    }

    handleCheck = (id) => {
        return (event)=> {
            this.props.changeDone(id, event.target.checked)
        }
    }

    handleDelete = (id)=> {
         return ()=> {
            this.props.deleteTodo(id)
         }
    }

    render() {
        const {id, name, done} = this.props
        return (
            <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" id='cbox1' checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                {/* 这边要注意 style 要双层的大括号，none 要用引号 */}
                <button onClick={this.handleDelete(id)} className='btn btn-danger' style={{display:this.state.mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
