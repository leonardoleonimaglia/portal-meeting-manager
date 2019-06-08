import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
        <div class="center-screen">

        <form class="form-signin">
          <img src={ require('../../images/logo.png') } />
          <h1 class="h3 mb-3"><b>MEETING</b>MANAGER</h1>

          <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus/>
          <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required/>

          <button class="btn btn-lg btn-orange btn-block" type="submit">Entrar</button>
        </form>
        
      </div>
    )
  }
}

export default Login;