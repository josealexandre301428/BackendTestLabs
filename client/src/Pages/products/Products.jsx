import { useState, useEffect } from "react";
import {sql} from "@vercel/postgres"
import NavBar from "./components/NavBar";
import api from "../../services/api";
import makeProducts from "../../services/handlerProduct";
import {
  filterByGreatPrice,
  filterByMinorPrice,
  filterByAlfabetic,
} from '../../services/handleFilters';


export default function Products() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handlerFilter = (e) => {
    const filterId = e.target.dataset.filter;
    switch (filterId) {
    case 'alfabetic':
      setProducts(filterByAlfabetic(products));
      break;
    case 'menor':
      setProducts(filterByMinorPrice(products));
      break;
    case 'maior':
      setProducts(filterByGreatPrice(products));
      break;
    case 'desfazer':
      handleFetch();
      break;
    default:
      break;
    }
  };

  const handleSearch = (value, product) => {
    setSearch(value);
    if (value.length === 0) handleFetch();
    const productsFilter = product.filter((item) => item.name.toLowerCase()
      .includes(value.toLowerCase()));
    setProducts(productsFilter);
  };

  const handleFetch = async () => {
    try {
      const product = await api.get('/products');
      setProducts(product.data);
    } catch (error) {
      throw new Error();
    }
  };


  useEffect(() => {
    handleFetch();
  }, []);


  return (
    <div>
        <NavBar />
      
        <div className="flex flex-col justify-center items-center">
          <form id="search-form" className="max-w-md mb-5 mt-5 mx-auto">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                onChange={ ({ target: { value } }) => handleSearch(value, products) }
                value={ search }
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-white focus:ring-purple-500 focus:border-purple-500 dark:bg-white dark:border-purple-500 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Pesquisar" required />
            </div>
          </form>
          <div>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" onClick={toggle} className="text-white bg-purple-900 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-400 font-medium rounded-lg text-sm px-14 py-2.5 text-center inline-flex items-center" type="button">
              Filtros
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>

            <div id="dropdown" className={`z-10 ${dropdownOpen ? "" : 'hidden'} text-center bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-purple-400`}>
              <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <button type="button"  data-filter="alfabetic" onClick={ handlerFilter } className="block px-4 py-2 hover:bg-purple-500 dark:hover:text-white">Ordem Alfabetica</button>
                </li>
                <li>
                  <button type="button" data-filter="menor" onClick={ handlerFilter } className="block px-4 py-2 hover:bg-purple-500  dark:hover:text-white">Menor Valor</button>
                </li>
                <li>
                  <button type="button" data-filter="maior" onClick={ handlerFilter } className="block px-4 py-2 hover:bg-purple-500  dark:hover:text-white">Maior Valor</button>
                </li>
                <li>
                  <button type="button" data-filter="desfazer" onClick={ handlerFilter } className="block px-4 py-2 hover:bg-purple-500  dark:hover:text-white">Remover Filtros</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

      <ul className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">Produtos</h2>
        { products.map((product, index) => makeProducts(product, index)) }
      </ul>
    </div>
  )
}