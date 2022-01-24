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

  pushShow = (id, title)=> {
    this.props.history.push('/home/message/detail', {id: id, title: title})
  }

  replaceShow = (id, title)=> {
    this.props.history.replace('/home/message/detail', {id: id, title: title})
  }

  render() {
    return (
      <div>
        <hr/>
        <ul>
          {this.state.data.map((obj)=>{
            return (
                <li key={obj.id}>
                  <Link to={{pathname:'/home/message/detail', state:{id: obj.id, title: obj.title}}}>{obj.title}</Link>
                  &nbsp;
                  <button onClick={() => {this.pushShow(obj.id, obj.title)}}>push 查看</button>
                  &nbsp;
                  <button onClick={() => {this.replaceShow(obj.id, obj.title)}}>replace 查看</button>
                </li> )
          })}
        </ul>
        <hr />
        <Route path='/home/message/detail' component={Detail}/>
      </div>
    )
  }
}
