import {connect} from 'react-redux'
import {createIncrementAction, createDecrementAction, createAynsIncrementAction} from '../../redux/actions/count'
import React, { Component } from 'react';

class Count extends Component {
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
                    <h3>
                        当前求和结果为：{this.props.sum}，当前有 {this.props.personList.length} 个人
                    </h3>
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


// mapStateToProps 函数就是把状态传递给 UI 组件
// mapDispatchToProps 函数用于传递操作状态的方法

const CountContainer = connect(
    state => ({sum: state.count, personList: state.person}), 
    // dispatch => ({
    //     add: num => dispatch(createIncrementAction(num)), 
    //     subtract: num => dispatch(createDecrementAction(num)),
    //     asyncAdd: (num, time) => dispatch(createAynsIncrementAction(num, time))})
    // )
    {
        add: createIncrementAction,
        subtract: createDecrementAction,
        asyncAdd: createAynsIncrementAction
    }
)(Count)
export default CountContainer