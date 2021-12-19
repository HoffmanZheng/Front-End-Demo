import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" id='cbox1' />
                    <span>xxxxxx</span>
                </label>
                {/* 这边要注意 style 要双层的大括号，none 要用引号 */}
                <button className='btn btn-danger' style={{display:'none'}}></button>

            </li>
        )
    }
}
