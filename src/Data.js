// // export cont newArrivels=[

// // ]
// // const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// // // Function to randomly select 8 product IDs
// // function getRandomProductIds(productIds) {
// //   const shuffledProducts = [...productIds].sort(() => 0.5 - Math.random());
// //   return shuffledProducts.slice(0, 8);
// // }

// // // Get 8 random product IDs
// // const selectedProductIds = getRandomProductIds(productIds);

// // console.log(selectedProductIds);

// const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// // Function to randomly select 8 product IDs
// function getRandomProductIds(productIds) {
//   const shuffledProducts = [...productIds].sort(() => 0.5 - Math.random());
//   return shuffledProducts.slice(0, 8);
// }

// // Get 8 random product IDs
// const selectedProductIds = getRandomProductIds(productIds);

// console.log(selectedProductIds);



import React, { useState } from "react";
import "../Css/AllProducts.css";
import { products } from "../../AllData"; 
import Navbar from "../Header/Navbar.jsx";
import Footer from '../Footer/Footer.jsx';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

// ... (keep the labels object as is)

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory.toLowerCase();
    const matchesSearch = product.productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-list">
      <Navbar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      
      <div className="hero_img_main">
        
      </div>
      <h3 className="allpro_heading">All Products</h3>
      
      {/* ... (keep the filter and search components as they are) */}

      {filteredProducts.length > 0 ? (
        <Row xs={1} md={3} className="card-row g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} className="products-cold">
              <Product
                className="products-cards"
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                isInCart={cart.some((item) => item.id === product.id)}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="no-products-found">No products found</div>
      )}

      <Footer/>
    </div>
  );
}

function Product({ product, addToCart, removeFromCart, isInCart }) {
  const { imgUrl, productName, price, description, stock } = product;

  return (
    <div className="products-cards">
      <Card className="dp-card" id="dpcard">
        {/* ... (keep the Card.Img and other elements as they are) */}
        <Card.Body className="dpcard-body" id='card-body'>
          {/* ... (keep other elements as they are) */}
          <div className="button" onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}>
            <div className="button-wrapper">
              <div className="text">{isInCart ? "Remove from Cart" : "Add To Cart"}</div>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductList;





const notify = () => toast(myproduct.productName+" "+ 'is sussesfully Added to Cart');
const addmecart=() =>{dispatch(addToCart(myproduct))}

const handlwClicks =() => {
  notify();
  addmecart();
}

onClick={(e)=>handlwClicks(e)}