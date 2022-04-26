/**
 * @jest-environment jsdom
 */
import {
  register, login, printPost, observatorIt,
} from '../../src/lib/controllers.js';

import { loginUser, registerUser } from '../../src/lib/libraries-Firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../src/lib/Firebase-Import.js';

jest.mock('../../src/lib/Firebase-Import.js');

// REGISTER: Testeando register y sus funciones implicadas.
describe('register', () => {
  beforeEach(() => createUserWithEmailAndPassword.mockClear());
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });

  it('debería recibir email & password', () => {
    document.body.innerHTML = '';
    register();
    expect(createUserWithEmailAndPassword.mock.calls[0]).toEqual([{ languageCode: 'es' }, 'front@end.la', '123456']);
  });

  // RegisterUser
  it.only('Debería devolder el correo de registro', () => registerUser('front@end.la', '123456', 'fullname')
    .then((userCredential) => {
      expect('front@end.la').toBe(userCredential.user.email);
      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
      expect(createUserWithEmailAndPassword.mock.calls[0]).toEqual([{ languageCode: 'es' }, 'front@end.la', '123456']);
    }));
});

// iniciar sesión
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it.only('Debería poder iniciar sesion', () => loginUser('login@end.la', '123456')
    .then((userCredential) => {
      expect('login@end.la').toBe(userCredential.user.email);
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
      console.log(signInWithEmailAndPassword.mock.calls);
      expect(signInWithEmailAndPassword.mock.calls[0]).toEqual([{ languageCode: 'es' }, 'login@end.la', '123456']);
    }));
  // it('Debería devolver las llamadas de la función', () => {
  //   console.log(signInWithEmailAndPassword.mock.calls[0][1]);
  //   expect(signInWithEmailAndPassword.mock.calls[0][1]).toEqual('front@end.la');
  // });
  // it('Debería llamar correctamente a signInWithEmailAndPassword', () => {
  //   expect(signInWithEmailAndPassword).toHaveBeenCalled();
  // });
  // llama a la función loginUser que contiene el metodo de firebase
  // it('debería llamar a loginUser', () => {
  //   expect(loginUser()).toHaveBeenCalled();
  // });
  // recibe los valores de email y password y los convierte en parámetros de loginUser
  // it('debería recibir email & password', () => {
  //   document.body.innerHTML = `<p id="e-mailLogin" value="example@example.com">example@example.com</p>
  //   <p id="passwordLogin" value="example123">example123</p>`;
  //   expect().toEqual(expect.stringContaining());
  // });
  // login si es true retorna userCredential

  // login si es false retorna error.
});

// imprimir post
describe('printPost', () => {
  it('debería ser una función', () => {
    expect(typeof printPost).toBe('function');
  });
});

describe('observatorIt', () => {
  it('debería ser una función', () => {
    expect(typeof observatorIt).toBe('function');
  });
});
