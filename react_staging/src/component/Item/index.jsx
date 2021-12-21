import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
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

    render() {
        const {id, name, done} = this.props
        return (
            <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" id='cbox1' defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                {/* 这边要注意 style 要双层的大括号，none 要用引号 */}
                <button className='btn btn-danger' style={{display:this.state.mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
