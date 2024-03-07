import { useState } from "react";
import api from "../../services/api";
import NavBar from "./components/NavBar";


export default function Add() {

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [sucess, setSucess] = useState(false);
  const [showError, setError] = useState(false);

  const handleSubmit = async () => {
    const number = Number(price);
    try {
      const form = await api.post('/create', {
        name,
        brand,
        model,
        price: number,
        color,
      });
      form.status === 201 ? setSucess(true) : setSucess(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div >
      <NavBar/>
      <h1 className="mt-10 text-center text-3xl font-semibold mb-4">Adicionar Novo Produto</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
              Marca
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={brand}
              onChange={({ target: { value } }) => setBrand(value)}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="model" className="block text-sm font-medium text-gray-700">
              Modelo
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={model}
              onChange={({ target: { value } }) => setModel(value)}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Preço
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={({ target: { value } }) => setPrice(value)}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-sm font-medium text-gray-700">
              Cor
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={color}
              onChange={({ target: { value } }) => setColor(value)}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Adicionar Produto
          </button>
        </form>
        { sucess && (<div id="alert-border-3" className="flex sm:mx-auto mt-5 sm:w-full sm:max-w-sm items-center p-2 mb-4 bg-green-200 text-green-800 border-t-4 border-green-300 bg-green-50" role="alert">
          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <div className="ms-3 text-sm font-medium">
            Produto adicionado com sucesso!
          </div>
          <button type="button" onClick={() => setSucess(false)} className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-800 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 "  data-dismiss-target="#alert-border-2" aria-label="Close">
            <span className="sr-only">Dismiss</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
      </div>)}
      {showError && (<div id="alert-border-2" className="flex sm:mx-auto sm:w-full sm:max-w-sm items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <div className="ms-3 text-sm font-medium">
            Falha ao adicionar produto, tente novamente!
          </div>
          <button type="button" onClick={() => setError(false)} className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
            <span className="sr-only">Dismiss</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
      </div>)}
      </div>
    </div>
  );
}

