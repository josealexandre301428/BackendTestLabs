import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/context';
import api from '../../services/api';
import { validateLogin } from '../../services/validateLogin';

export default function LoginForm() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const logo = (<svg className="mx-auto h-10 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"    strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>);

  const redirect = useNavigate();

  const handleSubmit = async () => {
    try {
      const login = await api.post('login/', { email, password });
      setUser(login);
      localStorage.setItem('user', JSON.stringify(login.data));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario) {
      redirect('/products');
    }
  });

  


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        { logo }
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Faça login para continuar!</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={ ({ target: { value } }) => setEmail(value) }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input
                required
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={ ({ target: { value } }) => setPassword(value) }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <button
              type="button"
              disabled={ validateLogin(email, password) }
              onClick={ handleSubmit }
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-25">Entre</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <a href="/registro" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Registre-se!</a>
        </p>
      </div>
      {showError && (<div id="alert-border-2" className="flex sm:mx-auto sm:w-full sm:max-w-sm items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <div className="ms-3 text-sm font-medium">
            Email ou Senha incorretos, tente novamente!
          </div>
          <button type="button" onClick={() => setError(false)} className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
            <span className="sr-only">Dismiss</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
      </div>)}
    </div>

  );
}


//trybe@trybe.com
//joseTrybe@123
