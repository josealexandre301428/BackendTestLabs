import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/notFound/NotFound';
import LoginForm from './Pages/Login/LoginForm';
import RegisterForm from './Pages/Register/RegisterForm';
import Products from './Pages/products/Products';
import Add from './Pages/products/Add';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/registro" element={<RegisterForm />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/add" element={<Add />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
