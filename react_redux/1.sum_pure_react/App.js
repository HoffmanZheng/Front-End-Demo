import React, { Component } from 'react';

class App extends Component {

    state = { sum: 0}

    add = () => {
        const {num} = this
        const {sum} = this.state
        const new_sum = sum + num.value * 1
        this.setState({sum: new_sum})
    }

    subtract = () => {
        const {num} = this
        const {sum} = this.state
        const new_sum = sum - num.value * 1
        this.setState({sum: new_sum})
    }

    addIfOdd = () => {
        const {num} = this
        const {sum} = this.state
        if (sum % 2 == 1) {
            const new_sum = sum + num.value * 1
            this.setState({sum: new_sum})
        }
    }

    ayncAdd = () => {
        setTimeout(()=>{
            const {num} = this
            const {sum} = this.state
            const new_sum = sum + num.value * 1
            this.setState({sum: new_sum})
        }, 500)
    }

    render() {
        return (
            <div>
                <div>
                    当前求和结果为：{this.state.sum}
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
