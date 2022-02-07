import React, { Component } from 'react';

class App extends Component {

    state = { sum: 0}

    add = () => {
        const {sum} = this.state
        const new_sum = sum + 1
        this.setState({sum: new_sum})
    }

    render() {
        return (
            <div>
                <div>
                    当前求和结果为：{this.state.sum}
                </div>
                <div>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> &nbsp;
                    <button onClick={this.add}>加</button> &nbsp;
                    <button>减</button> &nbsp;
                    <button>奇数加</button> &nbsp;
                    <button>异步加</button>
                </div>
            </div>
        );
    }
}

export default App;
