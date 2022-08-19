import React from 'react';

const CartItemSummary = ({totalItems}) => {
    return (
        <div>
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalItems}</p>
          </div>
        </div>
      </div>
    );
};

export default CartItemSummary;