import React, { Component } from 'react';
import Detail from './detail'
import {Route, Link} from 'react-router-dom'

export default class Message extends Component {
  state = {
    "data" : [
      {id: 1, title: "message1"},
      {id: 2, title: "message2"},
      {id: 3, title: "message3"}
    ]
  }

  render() {
    return (
      <div>
        <hr/>
        <ul>
          {this.state.data.map((obj)=>{
            return <li key={obj.id}>
                      <Link to={`/home/message/detail?id=${obj.id}&title=${obj.title}`}>{obj.title}</Link>
                   </li>
          })}
        </ul>
        <hr />
        <Route path='/home/message/detail' component={Detail}/>
      </div>
    )
  }
}
