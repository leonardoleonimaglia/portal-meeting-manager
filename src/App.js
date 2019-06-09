import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Roomcard from './components/Roomcard/Roomcard'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <br/>

      <div class="container">
        <div class="row">
          <Roomcard></Roomcard>
          <Roomcard></Roomcard>
          <Roomcard></Roomcard>
        </div>
      </div>
      
    </div>
  );
}

export default App;
