import React, { Component } from 'react';
import store from './redux/store'
import CountContainer from './containers/count_container';

class App extends Component {
    
    // 可以写到 index.js 中，这样有多个组件时，
    componentDidMount() {
        store.subscribe( () => {
            this.setState({})
        })
    }

    render() {
        return (
            <div>
                <CountContainer store={store}/>
            </div>
        );
    }
}

export default App;
