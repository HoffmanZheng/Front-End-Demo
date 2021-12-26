import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    getData = () => {
        axios.get('http://www.baidu.com').then(
            response => {
                console.log('successfully')
            },
            error => {
                console.log("error")
            }
        )
    }

    render() {
        return (
            <div>
                <h3>hello</h3>
                <button onClick={this.getData}>点我获取数据</button>
            </div>
            
        );
    }
}

export default App;
