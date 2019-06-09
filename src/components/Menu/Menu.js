import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-orange">
        <a class="navbar-brand" href="#">
          <b>MEETING</b>MANAGER
        </a>

      <div class="mr-auto"></div>

        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Leonardo Maglia
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Sair</a>
            </div>
          </li>
        </ul>

      </nav>
    )
  }
}

export default Menu;