import { ACTION_TYPE } from "../Types/ActionTypes";


export const addToCart = (product) => {
  return {
    type: ACTION_TYPE.ADD_TO_CART,
    payload: {...product,quantity: product.quantity || 1 }
  };
};

export const removeFromCart = (id) => {
  return {
    type: ACTION_TYPE.REMOVE_FROM_CART,
    payload: id
  };
};

export const increaseQuantity = (id) => {
  return {
    type: ACTION_TYPE.INCREASE_QUANTITY,
    payload: id
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: ACTION_TYPE.DECREASE_QUANTITY,
    payload: id
  };
};