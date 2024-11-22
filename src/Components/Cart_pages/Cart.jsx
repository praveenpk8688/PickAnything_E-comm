import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import '../Css/Cart.css'
import { LuPlus,
  LuMinus,
   } from "react-icons/lu";
   import { removeFromCart } from '../../Redux/productActions/productActions'; 



function Cart() {
  const cartData = useSelector((state) => state.productData.cartData);
  console.log(cartData);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
  
    const newTotalPrice = cartData.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cartData]);


  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };


  const handleQuantityChange = (product, change) => {
   
    const updatedCart = cartData.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: Math.max(1, item.quantity + change) };
      }
      return item;
    });

    
  };
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
                    {/* // Remove icon code comes from here */}
                    {/* <button className="remove-btn" onClick={() => removeFromCart(product)}>Remove</button> */}
                    {/* /* From Uiverse.io by javierBarroso */ }
                    <button class="button cross-btn" onClick={() => handleRemove(product)}>
                      <span class="X"></span>
                      <span class="Y"></span>
                      <div class="close">Remove</div>
                    </button>
                    
                    <LuPlus className="plus-icon" onClick={() => handleQuantityChange(product, 1 ) }/>
                    <LuMinus className="minus-icon" onClick={() => handleQuantityChange(product, -1)} />

                    <Card.Text className="cart-Price">Price: $ {product.price}</Card.Text>
                    <Card.Body>
                      <Card.Text className="cart-quantity">Quantity: {product.quantity}</Card.Text>
                      <Card.Text className="cart-subtotal">Subtotal: ${product.price * product.quantity} </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                {/* <div className="col-md-9">
                <h3>Total Price: {cartData.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</h3>
              </div> */}
              </div>
            </div>
            <div className="total-price container">
              <h2 className="cart-summary">Cart Summary</h2>
            <h4 className="total-price1">Total Price:</h4> 
            <h3 className="total-price2">$ {totalPrice}.00</h3>
           
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
