import { Register } from '../../src/Components/Register.js';
import { createUserWithEmailAndPassword } from '../../src/lib/Firebase-Import.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('Register', () => {
  beforeEach(() => createUserWithEmailAndPassword.mockClear());
  it('si es false devolverá la contraseña no coincide', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Register();
    document.getElementById('name').value = 'Lady Gaga';
    document.getElementById('e-mail').value = 'gaga@gmail.com';
    document.getElementById('password').value = 'gaga123';
    document.getElementById('confirmPassword').value = 'gaga123456';
    const botonRegister = document.getElementById('register');
    botonRegister.dispatchEvent(new Event('click'));
    expect(document.getElementById('alertErrorPassword-Register').innerHTML).toEqual('<i class="fa-solid fa-triangle-exclamation"></i> La contraseña no coincide');
    expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
  });
  it('devuelve login', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Register();
    const botonLogin = document.getElementById('Register__iconBack');
    botonLogin.dispatchEvent(new Event('click'));
    expect(window.location.hash).toEqual('#/login');
  });
  it('', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Register();
    document.getElementById('name').value = 'Lady Gaga';
    document.getElementById('e-mail').value = 'gaga@gmail.com';
    document.getElementById('password').value = 'gaga123';
    document.getElementById('confirmPassword').value = 'gaga123';
    const botonRegister = document.getElementById('register');
    botonRegister.dispatchEvent(new Event('click'));
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('devuelve un error de firebase', (done) => {
    createUserWithEmailAndPassword.mockRejectedValue({ code: 'auth/weak-password' });
    document.body.innerHTML = '<div id="root"></div>';
    Register();
    document.getElementById('name').value = 'Lady Gaga';
    document.getElementById('e-mail').value = 'gaga@gmail.com';
    document.getElementById('password').value = 'gaga';
    document.getElementById('confirmPassword').value = 'gaga';
    const botonRegister = document.getElementById('register');
    botonRegister.dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.getElementById('alertErrorPassword-Register').textContent).toEqual(' La contraseña debe tener mínimo 6 caracteres');
      done();
    });
  });
});
