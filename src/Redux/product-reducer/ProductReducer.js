import { ACTION_TYPE } from "../Types/ActionTypes";
const initialState = {
    cartData: [],
    productData: [],
  };
  
export const productReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            return{
                ...state, cartData: [...state.cartData, action.payload]
            };
        case ACTION_TYPE.REMOVE_FROM_CART:
            return{};
        default:
            return state;
    }
};