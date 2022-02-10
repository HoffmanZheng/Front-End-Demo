import React, { Component } from 'react';

export default class index extends Component {
    add = () => {
        const {num} = this
        this.props.add(num.value * 1)
    }

    subtract = () => {
        const {num} = this
        this.props.subtract(num.value * 1)
    }

    addIfOdd = () => {
        const {num} = this
        const sum = this.props.sum
        if (sum % 2 === 1) {
            this.props.add(num.value * 1)
        }
    }

    ayncAdd = () => {
        const {num} = this
        this.props.asyncAdd(num.value * 1, 500)
    }

  render() {
    return <div>
                <div>
                    当前求和结果为：{this.props.sum}
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
            </div>;
  }
}
