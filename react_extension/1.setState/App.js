import React, {Component} from 'react'

export default class App extends Component {
    state = {count: 0}

    add = () => {
      // this.setState({count: this.state.count + 1})

      // 参数为返回修改对象的函数
      this.setState( state => ({count: state.count + 1}))
    }

    render() {
      return (
        <div className="App">
          <h2>当前求和为: {this.state.count}</h2>
          <button onClick={this.add}>加一</button>
        </div>
      )
    }
}
