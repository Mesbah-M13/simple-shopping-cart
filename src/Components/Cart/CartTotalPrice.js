import React from "react";
import { useSelector } from "react-redux";

const CartTotalPrice = () => {
  const cart = useSelector((state) => state.cart);

  // total price of the addedd cart items
  const totalPrice = cart.cart.reduce((total, item) => {
    return total + item.itemPrice * item.addedQuantity;
  }, 0);
  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-center items-center text-center">
        <div className="text-xl font-semibold">
          <p>Total Price</p>
          <p className="text-5xl">
            TK. {totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPrice;
