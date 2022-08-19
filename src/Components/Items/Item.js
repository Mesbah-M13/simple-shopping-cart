import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, increaseItemQuantity } from "../../Redux/cart/action";
import { addItem } from "../../Redux/items/action";

const Item = ({ id, itemName, itemPrice, itemQuantity }) => {
  const { cart } = useSelector((state) => state.cart);
  //selector to get the items from shop
  const items = useSelector((state) => state.items.items);
  //dispatch to dispatch the actions
  const dispatch = useDispatch();

  //function to add product to cart
  const addItemHandler = (id) => {
    if (cart.find((item) => item.id === id)) {
      dispatch(increaseItemQuantity(id));
      dispatch(addItem(id, 1));
    } else {
      dispatch(addItemToCart(id, itemName, itemPrice));
      dispatch(addItem(id, 1));
    }
  };
  return (
    <div className="bg-white md:py-4 md:px-4 py-2 px-0 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>
            {itemName} ({itemQuantity})
          </p>

          <p className="text-gray-400 text-base">
            Tk {itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <div className="text-lg font-semibold">
          {items.find((item) => item.id === id).itemQuantity > 0 ? (
            <button
              onClick={() => addItemHandler(id)}
              className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          ) : (
            <span
              className=" rounded-full
            text-xs
             bg-yellow-400 md:text-sm text-orange-900 px-2 py-1"
            >
              NOT AVAILABLE
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
