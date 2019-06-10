import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import RoomCard from './components/RoomCard/RoomCard'
import RoomInfo from './components/RoomInfo/RoomInfo'

function App() {
  return (
    <div className="App">
      <Menu/>

      <div class="container">
        <div class="row">
          <RoomCard title="Bromélia"/>
          <RoomCard title="Begônia"/>
          <RoomCard title="Azaléia"/>

          <RoomCard title="Begônia"/>
          <RoomCard title="Camélia"/>
        </div>
      </div>

      <RoomInfo title="Begônia"/>
      
    </div>
  );
}

export default App;
