import React, { Component } from 'react';
import store from './redux/store'
import {createIncrementAction, createDecrementAction} from './redux/action_creator'

class App extends Component {
    // 可以写到 index.js 中，这样有多个组件时，
    componentDidMount() {
        store.subscribe( () => {
            this.setState({})
        })
    }

    add = () => {
        const {num} = this
        store.dispatch(createIncrementAction(num.value * 1))
    }

    subtract = () => {
        const {num} = this
        store.dispatch(createDecrementAction(num.value * 1))
    }

    addIfOdd = () => {
        const {num} = this
        const sum = store.getState()
        if (sum % 2 == 1) {
            store.dispatch(createIncrementAction(num.value * 1))
        }
    }

    ayncAdd = () => {
        setTimeout(()=>{
            const {num} = this
            store.dispatch(createIncrementAction(num.value * 1))
        }, 500)
    }

    render() {
        return (
            <div>
                <div>
                    当前求和结果为：{store.getState()}
                </div>
                <div>
                    <select ref={c => this.num = c}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> &nbsp;
                    <button onClick={this.add}>加</button> &nbsp;
                    <button onClick={this.subtract}>减</button> &nbsp;
                    <button onClick={this.addIfOdd}>奇数加</button> &nbsp;
                    <button onClick={this.ayncAdd}>异步加</button>
                </div>
            </div>
        );
    }
}

export default App;
