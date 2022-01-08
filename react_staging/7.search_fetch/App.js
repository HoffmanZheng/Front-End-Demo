import React, { Component } from 'react';
import Search from './component/search'
import Display from './component/display'

class App extends Component {

    render() {
        return (
            <div>
                <Search />
                <Display /> 
            </div>
        );
    }
}

export default App;
