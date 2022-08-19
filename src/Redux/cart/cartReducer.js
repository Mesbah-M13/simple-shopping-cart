import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "./actionTypes";

//Initial State
const initialState = {
  totalItems: 0,
  cart: [],
};
//Reducer Function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItems: state?.totalItems ? state.totalItems + 1 : 1,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              addedQuantity: item?.addedQuantity ? item?.addedQuantity + 1 : 1,
            };
          } else {
            return item;
          }
        }),
        totalItems: state?.totalItems ? state.totalItems + 1 : 1,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              addedQuantity: item.addedQuantity - 1,
            };
          } else {
            return item;
          }
        }),
        totalItems: state.totalItems - 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalItems: state.totalItems - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
