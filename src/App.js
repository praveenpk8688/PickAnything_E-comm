// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from "./Components/Cart_pages/CartContext.js";
import ProductList from './Components/Products_Page/AllProducts.jsx';
import SingleProduct from './Components/Products_Page/single_product.jsx';
import Home from './Pages/Home.jsx';

function App() {
  return (
    <CartProvider>
      <div className="App" id='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;