import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import '../Css/Cart.css'
import { LuPlus,LuMinus} from "react-icons/lu";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../Redux/productActions/productActions'; 



function Cart() {
  const cartData = useSelector((state) => state.productData.cartData || [] );
  const dispatch = useDispatch();
  const cartTotal = cartData.reduce((prevsValue, currentValue) => {
    return prevsValue + currentValue.price * (currentValue.quantity || 1);
  }, 0);
  


  return (
    <div>
      {cartData.length > 0 ? (
        cartData.map((product) => (
          <>
            <div className="container atc_container" key={product.id}>
              
              <div className="row">
                <div className="col-md-3">
                  <Card className="cart-card" style={{ width: "44rem", height: "14rem" }}>
                    <Card.Img
                      style={{
                        width: "16rem",
                        height: "13.5rem",
                        objectFit: "contain",
                      }}
                      className="cart-img"
                      variant="top"
                      src={product.imgUrl}
                    />
                    <Card.Title className="cart-title text-center">
                      {product.productName}
                    </Card.Title>
                   
                    <button class="button cross-btn" onClick={() => dispatch(removeFromCart(product.id))}>
                      <span class="X"></span>
                      <span class="Y"></span>
                      <div class="close">Remove</div>
                    </button>
                    
                    <LuPlus className="plus-icon" onClick={() => dispatch(increaseQuantity(product.id))} />
                   
                    <LuMinus className="minus-icon" onClick={() => dispatch(decreaseQuantity(product.id))}/>
            

                    <Card.Text className="cart-Price  ">Price: $ {product.price}.00</Card.Text>
                    <Card.Body>
                      <Card.Text className="cart-quantity ms-4">Quantity: {product.quantity}</Card.Text>
                      <Card.Text className="cart-subtotal">Subtotal: $ {product.price * (product.quantity|| 1)}.00 </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
               
              </div>
            </div>
            <div className="total-price container">
              <h2 className="cart-summary">Cart Summary</h2>
            <h4 className="total-price1">Total Price:</h4> 
            <h3 className="total-price2">$ {cartTotal}.00</h3>
           
          </div>
          </>
        ))
      ) : (
        <>
          <br />
          <br />
          <br />
          <h2 className="empty-cart" style={{ textAlign: "center" }}>Cart is empty</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
