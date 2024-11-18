import React from 'react'
// import { discountProducts } from "../AllData";
import { randomproducts } from "../../AllData";
import "../Css/BigDiscounts.css";
import "../Css/NewArrivels.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

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

// const productIds = products.map(product => product.id);
// function RandomProduct(props) {
//   const shuffledProducts = [...productIds].sort(() => 0.5 - Math.random());
//   return shuffledProducts.slice(0, 8);
// }

function NewArrivels() {
  // const selectedProductIds = RandomProduct(productIds);

  return (
    <div className='new-arrivels'>
      {/* {selectedProductIds.map(id => <p >{id}</p>)} */}

        <h2 className="big-discount-title"> New Arrivals</h2>
      <Row xs={1} md={3} className="card-row g-5  mt-5">
        {randomproducts.map((product, index) => (
          <Col key={index} className="product-col">
            <Card className="dp-card" id="dpcard">
              <Card.Img
                variant="top"
                src={product.imgUrl}
                alt={product.name}
                className="product-img"
                id="dpcard-img"
              />
              <Card.Body className="dpcard-body">
                {/* <span className="discount-percentage">
                  {product.discount}% off
                </span> */}
                <div className="dpcard-item" key={index}>
                  <h3 className="product-name">{product.productName}</h3>
                  {/* /////////////////////////     STAR RATING     //////////////////// */}
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

                  {/* ///////////////////CART BUTTON//////////////////////// */}

                  <div class="button" data-tooltip={product.price}>
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
  )
}

export default NewArrivels
