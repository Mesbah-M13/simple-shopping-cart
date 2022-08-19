import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../cart/actionTypes";
import { DECREASE_FROM_CART } from "../items/actionTypes";

const availablity = (store) => (next) => (action) => {
//
  const prevState = store.getState();

  const totalItemQuantity = prevState.items.items.find(
    (item) => item.id === action.payload.id
  ).itemQuantity;

  if (
    (action.type === ADD_TO_CART ||
      action.type === INCREASE_QUANTITY ||
      action.type === ADD_TO_CART) &&
    totalItemQuantity > 0
  ) {
    return next(action);
  } else if (
    (action.type === DECREASE_QUANTITY ||
      action.type === DECREASE_FROM_CART ||
      action.type === REMOVE_FROM_CART) &&
    (totalItemQuantity === 0 || totalItemQuantity > 0)
  ) {
    return next(action);
  }
};

export default availablity;
