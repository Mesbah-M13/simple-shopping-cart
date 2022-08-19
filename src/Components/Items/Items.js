import React from 'react';
import Item from './Item';
import { useSelector } from "react-redux";


const Items = () => {
    const items = useSelector((state) => state.items);

    return (
      <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
        {items.items.map((item) => (
          <Item key={item.id} id={item.id} {...item} />
        ))}
      </div>
    );
};

export default Items;