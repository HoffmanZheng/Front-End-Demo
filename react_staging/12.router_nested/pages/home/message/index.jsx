import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        <hr/>
        <ul>
          <li>
            <a href="/home/message/1">message001</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/home/message/2">message002</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/home/message/3">message003</a>&nbsp;&nbsp;
          </li>
        </ul>
      </div>
    )
  }
}
