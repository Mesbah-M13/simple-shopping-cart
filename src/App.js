import './App.css';
import Items from './Components/Items/Items';
import CartTotalPrice from './Components/Cart/CartTotalPrice';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
      <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/*  List of  Shop Items */}
          <Items />

          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            {/* Cart products*/}
            <Cart/>

            {/* Total Price of All  Products in the cart*/}
            <CartTotalPrice/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
