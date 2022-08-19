import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import availablity from "./middlewares/availablity";
import rootReducer from "./rootReducer";



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(availablity, logger))
);

export default store;
