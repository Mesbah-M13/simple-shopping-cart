import { ADD_TO_CART_FIRST, DECREASE_TO_CART } from "./actionTypes";

//add product from shop for the first time
export const addProduct = (id, quantity) => {
  return {
    type: ADD_TO_CART_FIRST,
    payload: {
        id,
        quantity,
    },
  };
}

//decrease quantity of product in the shop when it's added to the cart
export const decreaseProduct = (id, quantity) => {
  return {
    type: DECREASE_TO_CART,
    payload: {
        id,
        quantity,
    },
  };
}
