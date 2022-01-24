import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
  forward = () => {
    this.props.history.goForward()
  }

  back = () => {
    this.props.history.goBack()
  }

  render() {
    return (
        <div className='page-header'>
            <h2>React Router Demo</h2>
            <button onClick={this.forward}>前进</button>&nbsp;
            <button onClick={this.back}>后退</button>
        </div> )
  }
}

export default withRouter(Header);

// withRouter 加工了一般组件，让其具备路由组件的 api
