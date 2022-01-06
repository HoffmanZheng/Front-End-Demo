import React, { Component } from 'react';
import Search from './component/search'
import Display from './component/display'

class App extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    updateState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div>
                {/* <h3>hello</h3>
                <button >点我获取数据</button>
                <button >点击获取汽车数据</button> */}
                <Search updateState={this.updateState}/>
                <Display {...this.state}/> 
            </div>
        );
    }
}

export default App;
