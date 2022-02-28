import React, {Component, lazy, Suspense} from 'react'
import {NavLink, BrowserRouter, Route, Routes} from 'react-router-dom'
import Loading from './loading'
// import Home from './Home'
// import About from './about';
const Home = lazy(()=>import('./home'))
const About = lazy(()=>import('./about'))


export default class App extends Component {
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
                              <NavLink className={({isActive}) => 'list-group-item' + (isActive ?' importantat' : '')} to='/home'>home</NavLink>
                              <NavLink className={({isActive}) => 'list-group-item' + (isActive ?' importantat' : '')} to='/about'>about</NavLink>
                          </div>
                      </div>
                      <div className='col-xs-6'>
                          <div className='panel'>
                              <div className='panel-body'>
                                <Suspense fallback={<Loading/>}>
                                  <Routes>
                                    <Route path="/home" element={<Home/>} />
                                    <Route path="/about" element={<About/>} />
                                  </Routes>
                                </Suspense>
                              </div>
                          </div>
                      </div>
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}
