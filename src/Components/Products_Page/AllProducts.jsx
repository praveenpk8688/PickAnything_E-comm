import React, { useState, useContext } from "react";
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
import { addToCart } from '../../Redux/productActions/productActions.js';
import { IoSearch } from "react-icons/io5";

import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from "react-router-dom";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Good+",
  4.6: "Excellent",
  4.7: "Excellent",
  4.8: "Excellent+",
  5: "Excellent+",
};

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  
  

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory.toLowerCase();
    const matchesSearch = product.productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-list">
      <Navbar />
      
      <div className="hero_img_main"></div>
      <h3 className="allpro_heading">All Products</h3>
      
      <div className="filter">
        <label htmlFor="category">Filter By Category |</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Sofa">Sofa</option>
          <option value="Chair">Chair</option>
          <option value="Watch">Watch</option>
          <option value="Mobile">Mobile</option>
          <option value="Wireless">Wireless</option>
        </select>
      </div>

      
      <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by product name"/>
          <a href="#" class="search_icon"><IoSearch className="search_icon1" />
          </a>
        </div>
      </div>
    </div>

      {filteredProducts.length > 0 ? (
        <Row xs={1} md={3} className="card-row g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} className="products-cold">
             
              <Product
                className="products-cards"
                product={product}
              
            
                
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

function Product({ product}) {
  const { imgUrl, productName, price, description, stock } = product;
  const dispatch = useDispatch();

  const notify = () => toast(product.productName+" "+ 'is sussesfully Added to Cart');
  const addmecart=() =>{dispatch(addToCart(product))}
  const handlwClicks = () => {
    notify();
    addmecart();
  };
  return (
    <>
   <ToastContainer/>

    <div className="products-cards">
      <Card className="dp-card" id="dpcard">
      <Link className="navigate" to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          src={product.imgUrl}
          alt={product.name}
          className="product-img"
          id="dpcard-img"
        />
        </Link>
        
        <Card.Body className="dpcard-body" id='card-body'>
          <div className="dpcard-item">
            <Link className="navigate" to={`/product/${product.id}`}>
            <h3 className="product-name">{product.productName}</h3>
            </Link>
            <Box
              className="rating-box"
              id="rating-box"
              sx={{ width: 200, display: "flex", alignItems: "center" }}
            >
              <Rating
                className="rating"
                name="text-feedback"
                value={product.reviews[0].rating}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon
                    className="empty-star"
                    style={{ opacity: 0.55 }}
                    fontSize="inherit"
                  />
                }
              />
              <Box className="rating-text" sx={{ ml: 2 }}>
                {labels[product.reviews[0].rating]}
              </Box>
            </Box>

            <h4 className="product-price">${product.price}</h4>

<div className="button" data-tooltip={product.price} 
onClick={(e)=>handlwClicks(e)} >
              <div className="button-wrapper">
                <div className="text">Add To Cart</div>
                <div className="button" >
                  
                </div>
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
          </div>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default ProductList;