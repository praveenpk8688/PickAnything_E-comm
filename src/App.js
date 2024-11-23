import { Routes, Route } from "react-router-dom";

import ProductList from "./Components/Products_Page/AllProducts.jsx";
import SingleProduct from "./Components/Products_Page/single_product.jsx";
import Cart from "./Components/Cart_pages/Cart.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./Components/Header/Navbar.jsx";

function App() {
  return (
    <div className="App" id="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
