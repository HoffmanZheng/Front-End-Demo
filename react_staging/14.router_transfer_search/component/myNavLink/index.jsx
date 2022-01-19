import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavLink className={({isActive}) => 'list-group-item' + (isActive ?' importantat' : '')} {...this.props} ></NavLink>
            </div>
        )
    }
}
