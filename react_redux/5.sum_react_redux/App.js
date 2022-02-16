import React, { Component } from 'react';
import store from './redux/store'
import CountContainer from './containers/count_container';

class App extends Component {
    
    render() {
        return (
            <div>
                <CountContainer store={store}/>
            </div>
        );
    }
}

export default App;
