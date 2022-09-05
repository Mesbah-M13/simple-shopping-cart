import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../cart/actionTypes";
import { ADD_TO_CART_FIRST, DECREASE_TO_CART } from "../products/actionTypes";
// import rootReducer from "../rootReducer";
// import toast from "react-hot-toast";

// Middleware for validation of stock out OF PRODUCTS

const stockOut = (store) => (next) => (action) => {

  //previous state
  const prevState = store.getState();

  // Get the amount of a particular product what is remaining in the stock
  const totalProductQuantity = prevState.products.products.find(
    (product) => product.id === action.payload.id
  ).productQuantity;

  
  if (
    (action.type === ADD_TO_CART_FIRST ||
      action.type === INCREASE_QUANTITY ||
      action.type === ADD_TO_CART) &&
    totalProductQuantity > 0
  ) {
    return next(action);
  } else if (
    (action.type === DECREASE_QUANTITY ||
      action.type === DECREASE_TO_CART ||
      action.type === REMOVE_FROM_CART) &&
    (totalProductQuantity === 0 || totalProductQuantity > 0)
  ) {
    return next(action);
  }
};

export default stockOut;
