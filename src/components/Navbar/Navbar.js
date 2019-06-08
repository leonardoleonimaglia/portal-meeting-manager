import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-orange">
        <a class="navbar-brand" href="#">
          <b>MEETING</b>MANAGER
        </a>

        <div class="dropdown">
          <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Item</a>
            <a class="dropdown-item" href="#">Another item</a>
            <a class="dropdown-item" href="#">One more item</a>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar;