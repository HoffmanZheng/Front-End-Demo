import React, { Component } from 'react';

export default class News extends Component {
  componentDidMount() {
    setTimeout(()=>{
      this.props.history.push('/home/message')
    }, 2000)
  }

  render() {
    return (
      <div>
        <hr/>
        <ul>
          <li key='news1'>news001</li>
          <li key='news2'>news002</li>
          <li key='news3'>news003</li>
        </ul>
      </div>
    )
  }
}
