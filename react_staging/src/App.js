import React, { Component } from 'react';
import axios from 'axios'
import Search from './component/search'
import Display from './component/display'

class App extends Component {
    render() {
        return (
            <div>
                {/* <h3>hello</h3>
                <button >点我获取数据</button>
                <button >点击获取汽车数据</button> */}
                <Search />
                <Display /> 
            </div>
        );
    }
}

export default App;
