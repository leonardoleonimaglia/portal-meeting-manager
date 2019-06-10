import React, {Component} from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

const passwordHeight = {
  height: '46px'
}

class Login extends Component {
  render() {
    return (
      <div class="center-screen">
        <form class="form-signin form-group">

          <h1 class="h3 mb-3"><b>MEETING</b>MANAGER</h1>

          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
            </div>
            <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus/>
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" style={passwordHeight}><FontAwesomeIcon icon={faKey} /></span>
            </div>
            <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required/>
          </div>

          <div class="row">
            <div class="col">
              <button class="btn btn-secondary btn-block" type="submit">Registrar</button>
            </div>
            <div class="col">
              <button class="btn btn-orange btn-block" type="submit">Entrar</button>
            </div>
          </div>

        </form>    
      </div>
    )
  }
}

export default Login;