import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

const passwordHeight = {
  height: '46px'
}

class SignUp extends Component {
  render() {
    return (
      <div class="center-screen">
        <form class="form-signin form-group">

          <h3 class="h3"><b>CADASTRO</b></h3>
          <h5 class="h5 mb-3"><b>MEETING</b>MANAGER</h5>

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

          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" style={passwordHeight}><FontAwesomeIcon icon={faKey} /></span>
            </div>
            <input type="password" id="inputRepassword" class="form-control" placeholder="Digite a senha novamente" required/>
          </div>

          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
            </div>
            <input type="email" id="inpuBornDate" class="form-control" placeholder="Data de nascimento" required autofocus/>
          </div>

          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
            </div>
            <input type="email" id="inputEmail" class="form-control" placeholder="Sexo" required autofocus/>
          </div>

          <button class="btn btn-orange btn-block" type="submit">Cadastrar</button>

        </form>    
      </div>
    )
  }
}

export default SignUp;