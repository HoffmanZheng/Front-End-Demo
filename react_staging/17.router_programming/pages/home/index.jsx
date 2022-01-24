import React, { Component } from 'react'
import MyNavLink from '../../component/myNavLink'
import News from './news'
import Message from './message'
import {Route, Switch} from 'react-router-dom'

export default class Home extends Component {
    forward = () => {
        this.props.history.goForward()
    }

    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <h3>
                    home
                </h3>
                <ul className='nav nav-tabs'>
                    <li key='news'>
                        <MyNavLink to='/home/news'>News</MyNavLink>
                    </li>
                    <li key='message'>
                        <MyNavLink to='/home/message'>Message</MyNavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Message} />
                    </Switch>
                </div>
                <div>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.back}>后退</button>
                </div>
            </div>

        )
    }
}
