import React, { Component } from 'react';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about';

class App extends Component {

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-offset-2 col-xs-8'>
                        <div className='page-header'>
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <BrowserRouter>
                    <div className='row'>
                        <div className='col-xs-2 col-xs-offset-2'>
                            <div className='list-group'>
                                <Link className='list-group-item' to="/home">home</Link>
                                <Link className='list-group-item' to="/about">about</Link>
                            </div>
                        </div>
                        <div className='col-xs-6'>
                            <div className='panel'>
                                <div className='panel-body'>
                                    <Routes>
                                        <Route path="/home" element={<Home/>} />
                                        <Route path="/about" element={<About/>} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
