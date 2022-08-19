import { ADD_TO_CART, DECREASE_FROM_CART } from "./actionTypes";

//Initializing States:
const initialState = {
  items: [
    {
      id: 1,
      itemName: "Asus Vivobook X515MA",
      itemPrice: 35000,
      itemQuantity: 20,
    },
    {
      id: 2,
      itemName: "Dell E1916HV 18.5 Inch",
      itemPrice: 9300,
      itemQuantity: 35,
    },
    {
      id: 3,
      itemName: "Canon Eos 4000D 18MP",
      itemPrice: 36500,
      itemQuantity: 72,
    },
  ],
};

//Reducer Function:
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              itemQuantity: item.itemQuantity - action.payload.quantity,
            };
          } else {
            return item;
          }
        }),
      };
    case DECREASE_FROM_CART:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              itemQuantity: item.itemQuantity + action.payload.quantity,
            };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default itemsReducer;
