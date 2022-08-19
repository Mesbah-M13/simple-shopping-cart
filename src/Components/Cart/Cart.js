import React from "react";
import CartItem from "./CartItem";
import CartItemSummary from "./CartItemSummary";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cart.cart.map((item) => (
          <CartItem key={item.id} id={item.id} {...item} />
        ))}
        <CartItemSummary totalItems={cart.totalItems} />
      </div>
    </div>
  );
};

export default Cart;
