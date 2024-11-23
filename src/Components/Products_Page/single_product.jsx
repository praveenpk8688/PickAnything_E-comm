import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Header/Navbar";
import "../Css/single_product.css";

import { products } from "../../AllData.js";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import Footer from "../Footer/Footer.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/productActions/productActions.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handlwClicks = () => {
    notify();
    addmecart();
  };

  const myproduct = products.find((p) => p.id === id);

  const notify = () =>
    toast(myproduct.productName + " " + "is sussesfully Added to Cart");

  const sameCategoryProducts = products.filter(
    (p) => p.category === myproduct.category && p.id !== myproduct.id
  );

  const addmecart = () => {
    dispatch(addToCart(myproduct));
  };

  return (
    <>
      <ToastContainer />
      <div className="single_product">
        <Navbar />
        <div className="hero_img_main"></div>
        <h3 className="allpro_heading">{myproduct.productName}</h3>

        <div class="container1 text-center m-5">
          <div class="row ">
            <div class="col-sm-6 img_box ">
              <img
                className="product_img"
                src={myproduct.imgUrl}
                alt={myproduct.name}
              />
            </div>
            <div class="col-sm-5 text-md-start">
              <h1 className="product_name mt-3 ">{myproduct.productName}</h1>

              <Box
                className="rating-box mt-4"
                id="rating-box"
                sx={{ width: 200, display: "flex", alignItems: "center" }}
              >
                <Rating
                  className="rating"
                  id="rating"
                  name="text-feedback"
                  value={myproduct.reviews[0].rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon
                      className="empty-star"
                      style={{ opacity: 0.55 }}
                      fontSize="inherit"
                      id="empty-star"
                    />
                  }
                />
                <label className="ps-3 rating_label">
                  {myproduct.reviews[0].rating}
                </label>

                <Box className="rating-text " sx={{ ml: 2 }}>
                  {labels[myproduct.reviews[0].rating]}
                </Box>
              </Box>
              <h5 className="mt-3">Category : {myproduct.category}</h5>

              <h4 class="porduct_price mt-4">${myproduct.price} </h4>
              <p className="short_desc mt-3 ">{myproduct.shortDesc}</p>
              <input type="text" className="quntity_input" placeholder="1" />

              <div
                className="button pro_btn  "
                data-tooltip={myproduct.price}
                onClick={(e) => handlwClicks(e)}
              >
                <div className="button-wrapper ">
                  <div className="text btn_text " id="btn_text">
                    Add To Cart
                  </div>

                  <span className="icon  " id="btn_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bag-check"
                      // id='btn_icon'
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
          </div>
          <div class="row">
            <div class="col-sm text-md-start mt-5">
              <h3 className="mt-5 product_details">
                Product Details{" "}
                <span className="reviews_count">
                  Reviews ({myproduct.reviews.length})
                </span>{" "}
              </h3>

              <p className="mt-4 product_desc">{myproduct.description} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="you_like">
        <h2 className="m-5 like">You might also like</h2>
        <div className="liked" id="card-row">
          <Row xs={1} md={3} className="card-row1 g-5 " id="card-row">
            {sameCategoryProducts.map((product) => (
              <Col className="product-col">
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
                  <Card.Body className="dpcard-body" id="card-body">
                    <div className="dpcard-item">
                      <h3 className="product-name">{product.productName}</h3>
                      {/* /////////////////////////     STAR RATING     //////////////////// */}
                      <Box
                        className="rating-box"
                        id="rating-box"
                        sx={{
                          width: 200,
                          display: "flex",
                          alignItems: "center",
                        }}
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
                      <div
                        class="button"
                        data-tooltip={product.price}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        <div class="button-wrapper">
                          <div class="text">Add To Cart</div>
                          <span class="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-bag-check"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
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
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
