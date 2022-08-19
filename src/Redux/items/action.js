import { ADD_TO_CART, DECREASE_FROM_CART } from "./actionTypes";

//function to add Item from shop for the first time
export const addItem = (id, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
        id,
        quantity,
    },
  };
}

//function to decrease quantity of Item in the shop when it is added to the cart
export const decreaseItem = (id, quantity) => {
  return {
    type: DECREASE_FROM_CART,
    payload: {
        id,
        quantity,
    },
  };
}
