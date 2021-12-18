// 引入 react 核心库
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js';  // .js 后缀是可以省略的，.css 不能省略

ReactDOM.render(
  // 和 ES5 严格模式没有关系，只是检查 App 以及它的子组件是否合理
  // 比如字符串 ref 会检查并报警
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

