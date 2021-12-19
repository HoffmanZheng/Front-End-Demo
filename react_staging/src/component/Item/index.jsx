import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const {name, done} = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" id='cbox1' defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                {/* 这边要注意 style 要双层的大括号，none 要用引号 */}
                <button className='btn btn-danger' style={{display:'none'}}></button>
            </li>
        )
    }
}
