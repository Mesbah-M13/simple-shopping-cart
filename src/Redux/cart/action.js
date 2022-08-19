import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART} from "./actionTypes";

//increase quantity of the product added to cart
export const increaseItemQuantity= (id, quantity) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

//function to decrease quantity of product added in cart
export const decreaseItemQuantity= (id, quantity) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

// add new product to cart
export const addItemToCart = (
  id,
  itemName,
  itemPrice
) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      itemName,
      itemPrice,
      addedQuantity: 1,
    },
  };
};

// remove product from cart
export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
}

