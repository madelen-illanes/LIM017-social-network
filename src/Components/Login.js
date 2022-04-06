/* eslint-disable import/named */
// eslint-disable-next-line import/no-cycle
import { Register } from './Register.js';
import { Home } from './Home.js';
import { startGoogle } from '../lib/libraries-Firebase.js';
import { loginUser } from '../lib/libraries-Firebase.js';

export const Login = () => {
  document.getElementById('root').innerHTML = `
  <div id="divIngresar">
    <div id="divLogo">
    <img src="images/logo-fit-women.png" class="logo"/>
    </div>
    <div class="ingresarE-mail">
      <br>
      <i class="fa-solid fa-envelope e-mailIcon"></i>
      <input type="email" class="input__Login" id="e-mailLogin" placeholder="Correo electrónico"></input><br><br>
    </div>
    <div class="writePassword">
      <i class="fa-solid fa-lock passwordIcon"></i>
      <input type=password class="input__Login" id="passwordLogin" placeholder="Contraseña"></input><br><br>
    </div>
    <button id="iniciar">Iniciar sesión</button>
    <button id="google"><img src="images/google-img.png" class="imageGoogle"/><p>Continuar con Google</p></button>
    <p id="oLogin">ó</p><br>
    <p id="registro">Registrate en FitWoman</p><br><br>
  </div>
  <div class="div__imageLogin">
  <img src="images/fondoInicio5.png" class="imageLogin"/>
  </div>`;

  // Función para carga de registro
  const getRegister = document.querySelector('#registro');
  const starting = document.querySelector('#iniciar');
  getRegister.addEventListener('click', () => {
    window.location.hash = '#/register';
  });
  //  Iniciar sesiión//

  starting.addEventListener('click', () => {
    loginUser();
  });
  const loginGoogle = document.getElementById('google');
  loginGoogle.addEventListener('click', () => {
    startGoogle();
  });
};