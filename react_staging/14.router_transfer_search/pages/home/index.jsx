import React, { Component } from 'react'
import MyNavLink from '../../component/myNavLink'
import News from './news'
import Message from './message'
import {Route, Switch} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>
                    home
                </h3>
                <div>
                    <MyNavLink to='/home/news'>News</MyNavLink>
                </div>
                <div>
                    <MyNavLink to='/home/message'>Message</MyNavLink>
                </div>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Message} />
                    </Switch>
                </div>
            </div>
        )
    }
}
