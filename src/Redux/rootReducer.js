import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import itemsReducer from "./items/itemsReducer";

// to combine all reducers
const rootReducer = combineReducers({
    items: itemsReducer,
  cart: cartReducer,
});

export default rootReducer;
