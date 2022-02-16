import React, { Component } from 'react';
import CountContainer from './containers/count';
import PersonContainer from './containers/person'

class App extends Component {

    render() {
        return (
            <div>
                <CountContainer/>
                <hr />
                <PersonContainer />
            </div>
        );
    }
}

export default App;
