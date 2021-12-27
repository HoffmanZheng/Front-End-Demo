import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    getData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {
                console.log('successfully')
                console.log(response.data)
            },
            error => {
                console.log("error")
            }
        )
    }

    getCar = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {
                console.log('successfully')
                console.log(response.data)
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
                <button onClick={this.getCar}>点击获取汽车数据</button>
            </div>
        );
    }
}

export default App;
