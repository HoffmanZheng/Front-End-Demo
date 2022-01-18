import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyNavLink from './component/myNavLink'
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
                                {/* Link 换成 NavLink，点击自动追加 active 高亮 */}
                                {/* 点谁就给谁加上这个类名的样式 */}
                                {/* 新版本的 react-router-dom 已经不使用 activeClassName 了 */}
                                {/* <NavLink className={({isActive}) => 'list-group-item' + (isActive ?' importantat' : '')} to="/home">home</NavLink> */}
                                {/* <NavLink className={({isActive}) => 'list-group-item' + (isActive ?' importantat' : '')} to="/about">about</NavLink> */}
                                <MyNavLink to='/home'>home</MyNavLink>
                                <MyNavLink to='/about'>about</MyNavLink>
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
