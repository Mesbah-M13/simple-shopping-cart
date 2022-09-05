import { ADD_TO_CART_FIRST, DECREASE_TO_CART } from "./actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      productName: "Asus Vivobook X515MA",
      productPrice: 35000,
      productQuantity: 12,
    },
    {
      id: 2,
      productName: "Dell E1916HV 18.5 Inch",
      productPrice: 9300,
      productQuantity: 18,
    },
    {
      id: 3,
      productName: "Canon Eos 4000D 18MP",
      productPrice: 69000,
      productQuantity: 32,
    },
    {
      id: 4,
      productName: "Asus VA229QSB 21.5 Inch Monitor",
      productPrice: 	17999,
      productQuantity: 16,
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_FIRST:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              productQuantity:
                product.productQuantity - action.payload.quantity,
            };
          } else {
            return product;
          }
        }),
      };
    case DECREASE_TO_CART:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              productQuantity:
                product.productQuantity + action.payload.quantity,
            };
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
