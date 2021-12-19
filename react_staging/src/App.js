import React, { Component } from 'react';
import './App.css'
import Header from './component/Header'
import List from './component/List'
import Item from './component/Item'
import Footer from './component/Footer'

class App extends Component {
    render() {
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
