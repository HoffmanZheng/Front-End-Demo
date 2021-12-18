import React from 'react';
import Hello from './component/hello/Hello'
import Welcome from './component/welcome';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello/>
        <Welcome /> 
      </div>
    );
  }
}

// 暴露之后才能在别的文件中被引入
export default App;
