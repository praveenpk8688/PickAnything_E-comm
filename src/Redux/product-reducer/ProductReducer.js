import { ACTION_TYPE } from "../Types/ActionTypes";
const initialState = {
    cartData: [],
    productData: [],
  };
  
export const productReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            // return{
            //     ...state, cartData: [...state.cartData, action.payload]
            // };
            const productExists = state.cartData.find(item => item.id === action.payload.id);
      if (productExists) {
        return {
          ...state,
          cartData: state.cartData.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
        };
      }
        case ACTION_TYPE.REMOVE_FROM_CART:
            return{
                ...state,
                cartData: state.cartData.filter(item => item.id !== action.payload),
            };
            case ACTION_TYPE.INCREASE_QUANTITY:
      return {
        ...state,
        cartData: state.cartData.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case ACTION_TYPE.DECREASE_QUANTITY:
      return {
        ...state,
        cartData: state.cartData.map(item =>
          item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ),
      };
        default:
            return state;
    }
};