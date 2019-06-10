import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Roomcard from './components/Roomcard/Roomcard'
import EventInfo from './components/EventInfo/EventInfo'

function App() {
  return (
    <div className="App">
      <Menu/>

      <div class="container">
        <div class="row">
          <Roomcard title="Bromélia"/>
          <Roomcard title="Begônia"/>
          <Roomcard title="Azaléia"/>

          <Roomcard title="Begônia"/>
          <Roomcard title="Camélia"/>
        </div>
      </div>

      <EventInfo title="Begônia"/>
      
    </div>
  );
}

export default App;
