import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Roomcard from './components/Roomcard/Roomcard'
import Calendar from './components/Calendar/Calendar'

function App() {
  return (
    <div className="App">
      <Menu></Menu>

      <div class="container">
        <div class="row">
          <Roomcard></Roomcard>
          <Roomcard></Roomcard>
          <Roomcard></Roomcard>

          <Roomcard></Roomcard>
          <Roomcard></Roomcard>
        </div>

        <Calendar></Calendar>
      </div>
      
    </div>
  );
}

export default App;
