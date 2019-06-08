import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

        <div class="center-screen">
          <form class="form-signin">
            <img src={ require('./images/logo.png') } />
            <h1 class="h3 mb-3 font-weight-normal">MEETING MANAGER</h1>

            <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus/>
            <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required/>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Lembrar-me
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
          </form>
        </div>

    </div>
  );
}

export default App;
